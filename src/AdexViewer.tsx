"use client"
import { useEffect, useState, useRef, useCallback, useMemo } from "react"
import type React from "react"

import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/TextLayer.css" // Import text layer styles
import "react-pdf/dist/esm/Page/AnnotationLayer.css" // Import annotation layer styles
import "./index.css"

// Set worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// Update the PDFViewerProps interface to include bookmarks option
interface PDFViewerProps {
  data: { url: string }
  credits?: boolean | null
  showSidebar?: boolean | null
  showToolbar?: boolean | null
  showControls?: {
    navigation?: boolean
    zoom?: boolean
    fullscreen?: boolean
    download?: boolean
    info?: boolean
    sidebarButton?: boolean
    rotation?: boolean // New option for page rotation
    print?: boolean // New option for print button
    search?: boolean // New option for search functionality
    bookmarks?: boolean // New option for bookmarks functionality
  }
  defaultValues?: {
    zoom?: number
    page?: number
    fullscreen?: boolean
  }
  responsive?: {
    mobileBreakpoint?: number
    hideSidebarOnMobile?: boolean
    reduceToolbarOnMobile?: boolean
  }
  textOptions?: {
    enableSelection?: boolean
    enableCopy?: boolean
  }
  printOptions?: {
    printBackground?: boolean
    pageRangeEnabled?: boolean
  }
}

// Define a type for search results
interface SearchResult {
  pageIndex: number
  matchIndex: number
  text: string
  context: string // Added context field for displaying text around the match
  position: {
    left: number
    top: number
    right: number
    bottom: number
  }
}

// Add these new interfaces for outline and bookmarks
interface OutlineItem {
  title: string
  dest?: any
  items?: OutlineItem[]
  pageNumber?: number
  expanded?: boolean
  id: string
}

interface Bookmark {
  id: string
  title: string
  pageNumber: number
  createdAt: number
}

// Update the default props to include bookmarks
const AdexViewer: React.FC<PDFViewerProps> = ({
  data,
  credits,
  showSidebar,
  showToolbar = true,
  showControls = {
    navigation: true,
    zoom: true,
    fullscreen: true,
    download: true,
    info: true,
    sidebarButton: true,
    rotation: true, // Default to showing rotation controls
    print: true, // Default to showing print button
    search: true, // Default to showing search functionality
    bookmarks: true, // Default to showing bookmarks functionality
  },
  defaultValues = {
    zoom: 1.25,
    page: 1,
    fullscreen: false,
  },
  responsive = {
    mobileBreakpoint: 768,
    hideSidebarOnMobile: true,
    reduceToolbarOnMobile: true,
  },
  textOptions = {
    enableSelection: true,
    enableCopy: true,
  },
  printOptions = {
    printBackground: true,
    pageRangeEnabled: true,
  },
}) => {
  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3]
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(defaultValues.page || 1)
  const [scale, setScale] = useState<number>(defaultValues.zoom || 1.25)
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null)
  const [fullScreenView, setFullScreenView] = useState<boolean>(defaultValues.fullscreen || false)
  const [sidebar, setSidebar] = useState<boolean>(showSidebar || false)
  const [previewNumber, setPreviewNumber] = useState<number>(defaultValues.page || 1)
  const [retryCount, setRetryCount] = useState<number>(0)
  const [retryTimeoutDelay, setRetryTimeoutDelay] = useState<number>(5)
  const viewerRef = useRef<HTMLDivElement>(null)
  const pageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const previewRef = useRef<HTMLDivElement>(null)
  const printIframeRef = useRef<HTMLIFrameElement | null>(null)
  const showCredits = credits ?? true
  const [metadata, setMetadata] = useState<any>(null)
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [isPrinting, setIsPrinting] = useState<boolean>(false)
  const maxRetries = 5
  const [isMobile, setIsMobile] = useState<boolean>(false)
  // Add a pageRotations state to track rotation for each page
  const [pageRotations, setPageRotations] = useState<{ [key: number]: number }>({})
  // Add a state to track if text layer should be enabled
  const [isTextLayerEnabled, setIsTextLayerEnabled] = useState<boolean>(
    Boolean(textOptions?.enableSelection) || Boolean(textOptions?.enableCopy),
  )
  // Add a variable to store the original zoom level
  const [originalZoom, setOriginalZoom] = useState<number | null>(null)

  // Search functionality states
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [currentSearchResult, setCurrentSearchResult] = useState<number>(-1)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [pdfDocument, setPdfDocument] = useState<any>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Search sidebar state
  const [showSearchSidebar, setShowSearchSidebar] = useState<boolean>(false)
  const searchResultsRef = useRef<HTMLDivElement>(null)

  // Add these new state variables after the search sidebar state
  const [documentOutline, setDocumentOutline] = useState<OutlineItem[]>([])
  const [expandedOutlineItems, setExpandedOutlineItems] = useState<{ [key: string]: boolean }>({})
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [activeTab, setActiveTab] = useState<"outline" | "bookmarks">("outline")
  const [showBookmarksSidebar, setShowBookmarksSidebar] = useState<boolean>(false)
  const [isAddingBookmark, setIsAddingBookmark] = useState<boolean>(false)
  const [newBookmarkTitle, setNewBookmarkTitle] = useState<string>("")
  const bookmarksRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile based on the responsive settings
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < (responsive?.mobileBreakpoint || 768))
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [responsive?.mobileBreakpoint])

  // Set initial sidebar state based on props and responsive settings
  useEffect(() => {
    if (isMobile && responsive?.hideSidebarOnMobile) {
      setSidebar(false)
      setShowSearchSidebar(false)
      setShowBookmarksSidebar(false)
    } else {
      setSidebar(showSidebar || false)
    }
  }, [isMobile, responsive?.hideSidebarOnMobile, showSidebar])

  // Apply fullscreen if set in defaultValues
  useEffect(() => {
    if (defaultValues.fullscreen && viewerRef.current && document.fullscreenElement === null) {
      // Use a small delay to ensure the component is fully mounted
      const timer = setTimeout(() => {
        viewerRef.current?.requestFullscreen().catch((err) => {
          console.warn("Couldn't enter fullscreen mode:", err)
        })
        setFullScreenView(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [defaultValues.fullscreen])

  useEffect(() => {
    let retryTimer: ReturnType<typeof setTimeout> | null = null

    const fetchPdfBlob = async () => {
      try {
        const response = await fetch(data?.url)
        if (!response.ok) throw new Error("Failed to fetch PDF")

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setPdfBlobUrl(url)
        setRetryCount(0) // Reset retry count on success

        //remove if existing timeout exist
        if (retryTimer) {
          clearTimeout(retryTimer) // Clear any pending retry
          retryTimer = null
        }
      } catch (error) {
        console.error(`Failed to load PDF (Attempt ${retryCount + 1}):`, error)
        if (retryCount < maxRetries) {
          retryTimer = setTimeout(() => {
            setRetryCount(retryCount + 1)
          }, retryTimeoutDelay) //retry every 30 seconds
          setRetryTimeoutDelay(retryTimeoutDelay * 2)
        }
      }
    }

    if (data?.url) fetchPdfBlob()

    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl)
      if (retryTimer) clearTimeout(retryTimer)
    }
  }, [data?.url, retryCount])

  const goToPage = useCallback((pageNum: number) => {
    setPreviewNumber(pageNum)
    setPageNumber(pageNum)
    const pageEl = pageRefs.current[pageNum]
    if (pageEl) {
      pageEl.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  // Add this function to extract the outline from the PDF document
  // Add this after the onDocumentLoadSuccess function
  const extractOutline = useCallback(async (pdf: any) => {
    try {
      const outline = await pdf.getOutline()
      if (outline && outline.length > 0) {
        // Process the outline to add unique IDs and page numbers
        const processedOutline = await processOutlineItems(outline, pdf)
        setDocumentOutline(processedOutline)
      } else {
        setDocumentOutline([])
      }
    } catch (error) {
      console.error("Error extracting outline:", error)
      setDocumentOutline([])
    }
  }, [])

  // Add this function to process outline items and get their page numbers
  const processOutlineItems = useCallback(async (items: any[], pdf: any, level = 0): Promise<OutlineItem[]> => {
    const processedItems: OutlineItem[] = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const id = `outline-${level}-${i}-${Date.now()}`

      let pageNumber: number | undefined = undefined

      if (item.dest) {
        try {
          // Try to resolve the destination to get the page number
          if (typeof item.dest === "string") {
            const dest = await pdf.getDestination(item.dest)
            if (dest) {
              const ref = await pdf.getPageRef(dest[0])
              const pageIndex = await pdf.getPageIndex(ref)
              pageNumber = pageIndex + 1
            }
          } else if (Array.isArray(item.dest)) {
            // Handle direct destination arrays
            const ref = item.dest[0]
            if (ref) {
              try {
                const pageIndex = await pdf.getPageIndex(ref)
                pageNumber = pageIndex + 1
              } catch (error) {
                console.error("Error getting page index from ref:", error)
              }
            }
          }
        } catch (error) {
          console.error("Error resolving destination:", error)
        }
      }

      const processedItem: OutlineItem = {
        title: item.title,
        dest: item.dest,
        pageNumber,
        id,
        expanded: level < 1, // Expand only the first level by default
      }

      if (item.items && item.items.length > 0) {
        processedItem.items = await processOutlineItems(item.items, pdf, level + 1)
      }

      processedItems.push(processedItem)
    }

    return processedItems
  }, [])

  async function onDocumentLoadSuccess(pdf: any) {
    setNumPages(pdf.numPages)
    setPdfDocument(pdf)
    const meta = await pdf.getMetadata()
    setMetadata(meta.info)

    // Extract the document outline
    await extractOutline(pdf)

    // If default page is set and it's valid, navigate to it
    if (defaultValues.page && defaultValues.page > 1 && defaultValues.page <= pdf.numPages) {
      goToPage(defaultValues.page)
    }
  }

  // Add this function to toggle the expansion state of an outline item
  const toggleOutlineItem = useCallback((itemId: string) => {
    setExpandedOutlineItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }, [])

  // Add this function to navigate to an outline item's page
  const navigateToOutlineItem = useCallback(
    async (item: OutlineItem) => {
      if (item.pageNumber) {
        goToPage(item.pageNumber)
      } else if (item.dest && pdfDocument) {
        try {
          // Try to resolve the destination if pageNumber is not available
          let pageNumber: number | undefined = undefined

          if (typeof item.dest === "string") {
            const dest = await pdfDocument.getDestination(item.dest)
            if (dest) {
              const ref = await pdfDocument.getPageRef(dest[0])
              const pageIndex = await pdfDocument.getPageIndex(ref)
              pageNumber = pageIndex + 1
            }
          } else if (Array.isArray(item.dest)) {
            // Handle direct destination arrays
            const ref = item.dest[0]
            if (ref) {
              try {
                const pageIndex = await pdfDocument.getPageIndex(ref)
                pageNumber = pageIndex + 1
              } catch (error) {
                console.error("Error getting page index from ref:", error)
              }
            }
          }

          if (pageNumber) {
            goToPage(pageNumber)
          }
        } catch (error) {
          console.error("Error navigating to outline item:", error)
        }
      }
    },
    [goToPage, pdfDocument],
  )

  // Add these functions to manage bookmarks
  const addBookmark = useCallback(() => {
    if (!newBookmarkTitle.trim()) return

    const newBookmark: Bookmark = {
      id: `bookmark-${Date.now()}`,
      title: newBookmarkTitle.trim(),
      pageNumber: pageNumber,
      createdAt: Date.now(),
    }

    setBookmarks((prev) => [...prev, newBookmark])
    setNewBookmarkTitle("")
    setIsAddingBookmark(false)

    // Save bookmarks to localStorage
    localStorage.setItem(`pdf-bookmarks-${data?.url}`, JSON.stringify([...bookmarks, newBookmark]))
  }, [newBookmarkTitle, pageNumber, bookmarks, data?.url])

  const deleteBookmark = useCallback(
    (id: string) => {
      setBookmarks((prev) => {
        const updatedBookmarks = prev.filter((bookmark) => bookmark.id !== id)
        // Save updated bookmarks to localStorage
        localStorage.setItem(`pdf-bookmarks-${data?.url}`, JSON.stringify(updatedBookmarks))
        return updatedBookmarks
      })
    },
    [data?.url],
  )

  const navigateToBookmark = useCallback(
    (bookmark: Bookmark) => {
      goToPage(bookmark.pageNumber)
    },
    [goToPage],
  )

  // Add this effect to load bookmarks from localStorage
  useEffect(() => {
    if (data?.url) {
      const savedBookmarks = localStorage.getItem(`pdf-bookmarks-${data?.url}`)
      if (savedBookmarks) {
        try {
          setBookmarks(JSON.parse(savedBookmarks))
        } catch (error) {
          console.error("Error parsing saved bookmarks:", error)
        }
      }
    }
  }, [data?.url])

  // Add this function to toggle the bookmarks sidebar
  const toggleBookmarksSidebar = useCallback(() => {
    setShowBookmarksSidebar((prev) => !prev)
    if (!showBookmarksSidebar) {
      setActiveTab("outline")
    }
  }, [showBookmarksSidebar])

  function updatePage(__page: number) {
    if (__page > 0 && numPages !== null && __page <= numPages) {
      goToPage(__page)
    } else {
      setPreviewNumber(pageNumber)
    }
  }

  function updatePDFPage(e: any) {
    const __page = Number(e.target.value)
    setPreviewNumber(__page)
    debounce(() => updatePage(__page), 500)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      setFullScreenView(true)
      viewerRef.current?.requestFullscreen().catch((err) => {
        console.warn("Couldn't enter fullscreen mode:", err)
      })
    } else {
      setFullScreenView(false)
      document.exitFullscreen().catch((err) => {
        console.warn("Couldn't exit fullscreen mode:", err)
      })
    }
  }

  const debounce = (func: any, delay: any) => {
    let timeoutId: any
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!previewRef.current) return

      let closestPage: number = pageNumber

      //@ts-ignore
      Object.entries(pageRefs.current).forEach(([pageNum, pageEl]) => {
        if (pageEl instanceof HTMLElement) {
          const { top, bottom } = pageEl.getBoundingClientRect()
          // Only check pages that are close to the viewport (adjust threshold as needed)
          if (top <= window.innerHeight / 2 && bottom >= 0) {
            closestPage = Number(pageNum)
          }
        }
      })
      setPreviewNumber(closestPage)
      setPageNumber(closestPage)
    }

    const debouncedHandleScroll = debounce(handleScroll, 500) // Debouncing with a delay of 100ms

    const scrollContainer = previewRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", debouncedHandleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", debouncedHandleScroll)
      }
    }
  }, [pageNumber, numPages])

  // Handle fullscreen change events from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && fullScreenView) {
        setFullScreenView(false)
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [fullScreenView])

  // Add a function to rotate a specific page
  const rotatePage = (pageNum: number, clockwise = true) => {
    setPageRotations((prev) => {
      const currentRotation = prev[pageNum] || 0
      const newRotation = (currentRotation + (clockwise ? 90 : -90)) % 360
      return { ...prev, [pageNum]: newRotation < 0 ? newRotation + 360 : newRotation }
    })
  }

  // Update the useEffect that runs on component mount to set text layer state
  useEffect(() => {
    setIsTextLayerEnabled(Boolean(textOptions?.enableSelection) || Boolean(textOptions?.enableCopy))
  }, [textOptions?.enableSelection, textOptions?.enableCopy])

  // Memoize Document options to prevent unnecessary re-renders
  const documentOptions = useMemo(
    () => ({
      cMapUrl: "https://unpkg.com/pdfjs-dist@3.4.120/cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/",
    }),
    [],
  )

  // Handle document load error
  const onDocumentLoadError = useCallback(() => {
    console.error(`Failed to load PDF (Attempt ${retryCount + 1})`)
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1)
    }
  }, [retryCount, maxRetries])

  // Replace the handlePrint function with a direct call to printPdf
  const handlePrint = useCallback(() => {
    printPdf()
  }, [])

  // Update the printPdf function to remove dialog handling
  const printPdf = useCallback(() => {
    try {
      console.log("Printing PDF directly from the viewer")

      // Store the current zoom level
      setOriginalZoom(scale)

      // Set a print-friendly zoom level (1 = 100%)
      setScale(1)

      // Set printing mode to apply print-specific styles
      setIsPrinting(true)

      // Use setTimeout to ensure the print styles are applied and zoom is updated
      setTimeout(() => {
        // Trigger browser print dialog
        window.print()

        // Reset printing mode and restore zoom after a delay
        setTimeout(() => {
          setIsPrinting(false)
          // Restore the original zoom level
          if (originalZoom !== null) {
            setScale(originalZoom)
            setOriginalZoom(null)
          }
        }, 1000)
      }, 300) // Increased timeout to ensure zoom change is applied
    } catch (error) {
      console.error("Error in print function:", error)
      setIsPrinting(false)
      // Restore zoom if there's an error
      if (originalZoom !== null) {
        setScale(originalZoom)
        setOriginalZoom(null)
      }
      alert("An error occurred while trying to print. Please try again.")
    }
  }, [originalZoom, scale])

  // Update the useEffect for print styles to include better page sizing
  useEffect(() => {
    if (isPrinting) {
      // Create a style element for print styles
      const style = document.createElement("style")
      style.id = "adex-print-styles"
      style.innerHTML = `
        @media print {
          body * {
            visibility: hidden;
          }
          .adex-viewer, .adex-viewer * {
            visibility: visible;
          }
          .adex-viewer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
          }
          .adex-topbar, .adex-power-row, .adex-preview-thumbs, .adex-preview-search, .adex-preview-bookmarks, .adex-pdf-meta-info {
            display: none !important;
          }
          .adex-preview-panel {
            display: block !important;
            grid-template-columns: auto !important;
          }
          .adex-preview {
            max-height: none !important;
            overflow: visible !important;
            padding: 0 !important;
          }
          .adex-page {
            page-break-after: always;
            margin: 0 !important;
            box-shadow: none !important;
            width: 100% !important;
            height: auto !important;
          }
          .adex-page canvas {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        // Clean up the style when done printing
        const styleElement = document.getElementById("adex-print-styles")
        if (styleElement) {
          document.head.removeChild(styleElement)
        }
      }
    }
  }, [isPrinting])

  // Toggle search bar visibility
  const toggleSearch = useCallback(() => {
    setShowSearch((prev) => {
      const newState = !prev
      if (newState && searchInputRef.current) {
        // Focus the search input when opening
        setTimeout(() => {
          searchInputRef.current?.focus()
        }, 100)
      }
      return newState
    })
    // Clear search results when closing
    if (showSearch) {
      setSearchQuery("")
      setSearchResults([])
      setCurrentSearchResult(-1)
      setShowSearchSidebar(false)
    }
  }, [showSearch])

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  // Perform search when Enter key is pressed
  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        performSearch()
      }
    },
    [searchQuery, pdfDocument],
  )

  // Helper function to get context around a match
  const getContextAroundMatch = (text: string, matchIndex: number, matchLength: number, contextLength = 30) => {
    const startIndex = Math.max(0, matchIndex - contextLength)
    const endIndex = Math.min(text.length, matchIndex + matchLength + contextLength)

    let context = text.substring(startIndex, endIndex)

    // Add ellipsis if we're not at the beginning or end
    if (startIndex > 0) context = "..." + context
    if (endIndex < text.length) context = context + "..."

    return context
  }

  // Search functionality
  const performSearch = useCallback(async () => {
    if (!searchQuery.trim() || !pdfDocument) return

    setIsSearching(true)
    setSearchResults([])
    setCurrentSearchResult(-1)

    try {
      const results: SearchResult[] = []

      // Search through each page
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i)
        const textContent = await page.getTextContent()
        const viewport = page.getViewport({ scale: 1.0 }) // Use scale 1.0 for base coordinates

        // Extract full page text for context
        const pageText = textContent.items.map((item: any) => item.str).join(" ")

        // Search for matches in the text
        const searchRegex = new RegExp(searchQuery, "gi")
        let match

        while ((match = searchRegex.exec(pageText)) !== null) {
          // Get context around the match
          const context = getContextAroundMatch(pageText, match.index, searchQuery.length)

          // Store the match information
          results.push({
            pageIndex: i - 1,
            matchIndex: results.length,
            text: match[0],
            context: context,
            position: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            },
          })
        }
      }

      setSearchResults(results)
      if (results.length > 0) {
        setCurrentSearchResult(0)
        navigateToSearchResult(results[0])
        // Show search sidebar if we have results
        setShowSearchSidebar(true)
      }
    } catch (error) {
      console.error("Error searching PDF:", error)
    } finally {
      setIsSearching(false)
    }
  }, [searchQuery, pdfDocument])

  // Navigate to a specific search result
  const navigateToSearchResult = useCallback(
    (result: SearchResult) => {
      if (!result) return

      // Navigate to the page containing the result
      goToPage(result.pageIndex + 1)

      // Scroll to the result position
      setTimeout(() => {
        const pageElement = pageRefs.current[result.pageIndex + 1]
        if (!pageElement) return

        // Get the text layer
        const textLayer = pageElement.querySelector(".react-pdf__Page__textContent")
        if (!textLayer) return

        // Clear all existing highlights first
        document.querySelectorAll(".adex-search-highlight").forEach((el) => {
          el.remove()
        })

        // Find all text spans in the text layer
        const textSpans = textLayer.querySelectorAll("span")
        if (!textSpans || textSpans.length === 0) return

        // Convert search query to lowercase for case-insensitive comparison
        const searchLower = searchQuery.toLowerCase()

        // Track if we've found the current result
        let foundCurrentResult = false
        let highlightElement = null

        // Loop through all text spans to find matches
        for (let i = 0; i < textSpans.length; i++) {
          const span = textSpans[i]
          const text = span.textContent || ""
          const textLower = text.toLowerCase()

          let startIndex = 0
          let index

          // Find all instances of the search query in this span
          while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
            // Create a highlight element
            const highlight = document.createElement("div")
            highlight.className = "adex-search-highlight"

            // Get the position of the span
            const rect = span.getBoundingClientRect()
            const textLayerRect = textLayer.getBoundingClientRect()

            // Calculate the relative position within the text layer
            const left = rect.left - textLayerRect.left
            const top = rect.top - textLayerRect.top

            // Set the position and size
            highlight.style.left = `${left}px`
            highlight.style.top = `${top}px`
            highlight.style.width = `${rect.width}px`
            highlight.style.height = `${rect.height}px`

            // Add a unique ID for the current result
            const resultId = `search-highlight-${result.matchIndex}-${i}-${index}`
            highlight.id = resultId

            // Check if this is the current result
            if (!foundCurrentResult && result.text.toLowerCase() === searchLower) {
              highlight.classList.add("current")
              highlightElement = highlight
              foundCurrentResult = true
            }

            // Add the highlight to the text layer
            textLayer.appendChild(highlight)

            // Move to the next potential match in this span
            startIndex = index + searchLower.length
          }
        }

        // If we found the current result, scroll to it
        if (highlightElement) {
          highlightElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }

        // Highlight the corresponding result in the sidebar
        if (searchResultsRef.current) {
          const resultElement = searchResultsRef.current.querySelector(`#search-result-${result.matchIndex}`)
          if (resultElement) {
            // Remove active class from all results
            searchResultsRef.current.querySelectorAll(".adex-search-result-item").forEach((el) => {
              el.classList.remove("active")
            })
            // Add active class to current result
            resultElement.classList.add("active")
            // Scroll the result into view in the sidebar
            resultElement.scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
        }
      }, 300) // Increased timeout to ensure the page is fully rendered
    },
    [goToPage, searchQuery],
  )

  // Navigate to the next search result
  const nextSearchResult = useCallback(() => {
    if (searchResults.length === 0) return

    const nextIndex = (currentSearchResult + 1) % searchResults.length
    setCurrentSearchResult(nextIndex)
    navigateToSearchResult(searchResults[nextIndex])
  }, [currentSearchResult, searchResults, navigateToSearchResult])

  // Navigate to the previous search result
  const prevSearchResult = useCallback(() => {
    if (searchResults.length === 0) return

    const prevIndex = (currentSearchResult - 1 + searchResults.length) % searchResults.length
    setCurrentSearchResult(prevIndex)
    navigateToSearchResult(searchResults[prevIndex])
  }, [currentSearchResult, searchResults, navigateToSearchResult])

  // Toggle search sidebar
  const toggleSearchSidebar = useCallback(() => {
    if (searchResults.length > 0) {
      setShowSearchSidebar((prev) => !prev)
    }
  }, [searchResults.length])

  // Clear search highlights when search is closed
  useEffect(() => {
    if (!showSearch) {
      document.querySelectorAll(".adex-search-highlight").forEach((el) => {
        el.remove()
      })
    }
  }, [showSearch])

  // Highlight all search results on the current page
  const highlightAllResultsOnPage = useCallback(
    (pageIndex: number) => {
      const pageElement = pageRefs.current[pageIndex + 1]
      if (!pageElement) return

      const textLayer = pageElement.querySelector(".react-pdf__Page__textContent")
      if (!textLayer) return

      // Clear existing highlights on this page
      pageElement.querySelectorAll(".adex-search-highlight").forEach((el) => el.remove())

      // If no search query or results, exit
      if (!searchQuery || searchResults.length === 0) return

      // Find all text spans in the text layer
      const textSpans = textLayer.querySelectorAll("span")
      if (!textSpans || textSpans.length === 0) return

      // Convert search query to lowercase for case-insensitive comparison
      const searchLower = searchQuery.toLowerCase()

      // Loop through all text spans to find matches
      for (let i = 0; i < textSpans.length; i++) {
        const span = textSpans[i]
        const text = span.textContent || ""
        const textLower = text.toLowerCase()

        let startIndex = 0
        let index: any

        // Find all instances of the search query in this span
        while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
          // Create a highlight element
          const highlight = document.createElement("div")
          highlight.className = "adex-search-highlight"

          // Get the position of the span
          const rect = span.getBoundingClientRect()
          const textLayerRect = textLayer.getBoundingClientRect()

          // Calculate the relative position within the text layer
          const left = rect.left - textLayerRect.left
          const top = rect.top - textLayerRect.top

          // Set the position and size
          highlight.style.left = `${left}px`
          highlight.style.top = `${top}px`
          highlight.style.width = `${rect.width}px`
          highlight.style.height = `${rect.height}px`

          // Check if this is the current result
          const isCurrentResult = searchResults.some(
            (result) =>
              result.pageIndex === pageIndex &&
              result.matchIndex === currentSearchResult &&
              result.text.toLowerCase() === text.substring(index, index + searchLower.length).toLowerCase(),
          )

          if (isCurrentResult) {
            highlight.classList.add("current")
          }

          // Add the highlight to the text layer
          textLayer.appendChild(highlight)

          // Move to the next potential match in this span
          startIndex = index + searchLower.length
        }
      }
    },
    [searchQuery, searchResults, currentSearchResult],
  )

  // Highlight results when page changes
  useEffect(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      highlightAllResultsOnPage(pageNumber - 1)
    }
  }, [pageNumber, searchResults, highlightAllResultsOnPage])

  // Add this new function to update highlights when scale changes
  useEffect(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      // Use a timeout to ensure the page has been re-rendered with the new scale
      const timer = setTimeout(() => {
        highlightAllResultsOnPage(pageNumber - 1)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [scale, pageNumber, searchResults, highlightAllResultsOnPage])

  // Add this CSS class to the style element
  const searchHighlightStyles = `
.adex-search-highlight {
  position: absolute;
  background-color: rgba(255, 255, 0, 0.4);
  border-radius: 2px;
  z-index: 10;
  pointer-events: none;
}

.adex-search-highlight.current {
  background-color: rgba(255, 165, 0, 0.6);
  box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.8);
  z-index: 11;
}
`

  // Add this useEffect inside the component, before the return statement
  // Add this right before the renderOutlineItems function

  // Initialize expanded state for outline items
  useEffect(() => {
    if (documentOutline.length > 0) {
      // Initialize expanded state for all outline items
      const initialExpandedState: { [key: string]: boolean } = {}

      const initializeExpandedState = (items: OutlineItem[], level: number) => {
        items.forEach((item) => {
          // Expand only the first level by default
          initialExpandedState[item.id] = level === 0

          if (item.items && item.items.length > 0) {
            initializeExpandedState(item.items, level + 1)
          }
        })
      }

      initializeExpandedState(documentOutline, 0)
      setExpandedOutlineItems(initialExpandedState)
    }
  }, [documentOutline])

  // Add this function to render outline items recursively
  // Add this function before the return statement
  const renderOutlineItems = (items: OutlineItem[]) => {
    return items.map((item) => (
      <div key={item.id} className="adex-outline-item">
        <div className="adex-outline-item-content">
          {item.items && item.items.length > 0 ? (
            <button
              className="adex-outline-toggle"
              onClick={() => toggleOutlineItem(item.id)}
              aria-label={expandedOutlineItems[item.id] ? "Collapse" : "Expand"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{
                  transform: expandedOutlineItems[item.id] ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          ) : (
            <span className="adex-outline-toggle" style={{ width: "20px" }}></span>
          )}
          <button
            className="adex-outline-link"
            onClick={() => navigateToOutlineItem(item)}
            disabled={!item.pageNumber && !item.dest}
          >
            {item.title}
            {item.pageNumber && <span className="adex-outline-page">p. {item.pageNumber}</span>}
          </button>
        </div>

        {item.items && item.items.length > 0 && expandedOutlineItems[item.id] && (
          <div className="adex-outline-children" style={{ marginLeft: "20px" }}>
            {renderOutlineItems(item.items)}
          </div>
        )}
      </div>
    ))
  }

  // Add a class to the main viewer div based on text selection state
  // Update the className in the main div to include the bookmarks sidebar state
  return (
    <div
      ref={viewerRef}
      className={`PDFViewer adex-viewer ${
        fullScreenView ? "fullScreenView" : ""
      } ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} ${showSearchSidebar ? "search-slide-in" : "search-slide-out"} ${showBookmarksSidebar ? "bookmarks-slide-in" : "bookmarks-slide-out"} dev-abhishekbagul ${isMobile ? "adex-mobile" : ""} ${!textOptions.enableSelection ? "disable-text-selection" : ""} ${isPrinting ? "adex-printing" : ""}`}
    >
      {showToolbar && (
        <div className="adex-topbar">
          {showControls?.navigation && (
            <div className="adex-control-page">
              {showControls?.sidebarButton ? (
                <button onClick={() => setSidebar(!sidebar)} aria-label="Toggle sidebar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-layout-text-sidebar-reverse"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z" />
                  </svg>
                </button>
              ) : (
                <div></div>
              )}
              <button disabled={pageNumber <= 1} onClick={() => goToPage(pageNumber - 1)} aria-label="Previous page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  />
                </svg>
              </button>
              <p>
                <input
                  className="page-number"
                  type="number"
                  onChange={updatePDFPage}
                  value={previewNumber}
                  aria-label="Page number"
                />{" "}
                / {numPages || "?"}
              </p>
              <button
                disabled={numPages === null || pageNumber >= numPages}
                onClick={() => goToPage(pageNumber + 1)}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          )}

          {showControls?.zoom && (
            <div className="adex-control-zoom">
              <select onChange={(e) => setScale(+e.target.value)} value={scale} aria-label="Zoom level">
                {scaleSets.map((scaleLevel) => (
                  <option key={scaleLevel} value={scaleLevel}>
                    {(scaleLevel * 100).toFixed(0)}%
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="adex-control-options">
            {showControls?.rotation && (
              <>
                <button
                  onClick={() => rotatePage(pageNumber, false)}
                  aria-label="Rotate counterclockwise"
                  title="Rotate counterclockwise"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                  </svg>
                </button>
                <button
                  onClick={() => rotatePage(pageNumber, true)}
                  aria-label="Rotate clockwise"
                  title="Rotate clockwise"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                </button>
              </>
            )}
            {showControls?.search && (
              <button
                onClick={toggleSearch}
                aria-label="Search document"
                title="Search document"
                className={showSearch ? "active" : ""}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            )}
            {showControls?.print && (
              <button onClick={handlePrint} aria-label="Print document" title="Print document">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                </svg>
              </button>
            )}
            {showControls?.fullscreen && (
              <button onClick={toggleFullscreen} aria-label={fullScreenView ? "Exit fullscreen" : "Enter fullscreen"}>
                {!fullScreenView ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrows-fullscreen"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-fullscreen-exit"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
                  </svg>
                )}
              </button>
            )}

            {showControls?.download && (
              <a
                href={data?.url}
                download="document.pdf"
                className="open-link-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Download PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                  />
                </svg>
              </a>
            )}
            {showControls?.bookmarks !== false && (
              <button
                onClick={toggleBookmarksSidebar}
                aria-label="Bookmarks and outline"
                title="Bookmarks and outline"
                className={showBookmarksSidebar ? "active" : ""}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 2 0 0 0-2 2z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Search bar */}
      {showSearch && (
        <div className="adex-search-bar">
          <div className="adex-search-input-container">
            <input
              ref={searchInputRef}
              type="text"
              className="adex-search-input"
              placeholder="Search in document..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              aria-label="Search in document"
            />
            <button
              className="adex-search-button"
              onClick={performSearch}
              disabled={isSearching || !searchQuery.trim()}
              aria-label="Search"
            >
              {isSearching ? (
                <span className="adex-search-loading"></span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              )}
            </button>
          </div>
          {searchResults.length > 0 && (
            <div className="adex-search-results">
              <span className="adex-search-count">
                {currentSearchResult + 1} of {searchResults.length} results
              </span>
              <div className="adex-search-navigation">
                <button
                  className="adex-search-prev"
                  onClick={prevSearchResult}
                  disabled={searchResults.length <= 1}
                  aria-label="Previous result"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </button>
                <button
                  className="adex-search-next"
                  onClick={nextSearchResult}
                  disabled={searchResults.length <= 1}
                  aria-label="Next result"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="adex-search-sidebar-toggle"
                onClick={toggleSearchSidebar}
                aria-label={showSearchSidebar ? "Hide search results" : "Show search results"}
                title={showSearchSidebar ? "Hide search results" : "Show search results"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2v12h12V2H2zm6.5 1h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-5 1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM8.5 6h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-5 1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM8.5 9h3a.5.5.0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-5 1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </button>
              <button className="adex-search-close" onClick={toggleSearch} aria-label="Close search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      <div className="adex-preview-panel">
        {/* Thumbnail Sidebar */}
        <div className="adex-preview-thumbs">
          {pdfBlobUrl && (
            <Document
              file={pdfBlobUrl}
              loading={
                <div className="adex-thumb-loader">
                  <span className="thumb-loader"></span>
                  <span className="thumb-loader"></span>
                  <span className="thumb-loader"></span>
                </div>
              }
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              {!pdfBlobUrl && (
                <div className="adex-thumb-loader">
                  <span className="thumb-loader"></span>
                  <span className="thumb-loader"></span>
                  <span className="thumb-loader"></span>
                </div>
              )}
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <button
                    key={`thumb-${index}`}
                    className={`adex-page-thumb ${pageNumber === index + 1 ? "active" : ""}`}
                    onClick={() => goToPage(index + 1)}
                    aria-label={`Page ${index + 1}`}
                    aria-current={pageNumber === index + 1 ? "page" : undefined}
                  >
                    <Page
                      scale={0.2}
                      loading={
                        <div className="adex-thumb-loader">
                          <span className="thumb-loader"></span>
                        </div>
                      }
                      pageNumber={index + 1}
                      width={600}
                      rotate={pageRotations[index + 1] || 0} // Apply rotation to thumbnails
                    />
                  </button>
                ))}
            </Document>
          )}
        </div>

        {/* Search Results Sidebar */}
        <div className="adex-preview-search" ref={searchResultsRef}>
          <div className="adex-search-results-header">
            <h3>Search Results</h3>
            <span className="adex-search-results-count">{searchResults.length} matches</span>
          </div>
          <div className="adex-search-results-list">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div
                  key={`search-result-${index}`}
                  id={`search-result-${result.matchIndex}`}
                  className={`adex-search-result-item ${currentSearchResult === result.matchIndex ? "active" : ""}`}
                  onClick={() => {
                    setCurrentSearchResult(result.matchIndex)
                    navigateToSearchResult(result)
                  }}
                >
                  <div className="adex-search-result-page">Page {result.pageIndex + 1}</div>
                  <div className="adex-search-result-context">
                    {result.context.split(new RegExp(`(${searchQuery})`, "i")).map((part, i) =>
                      part.toLowerCase() === searchQuery.toLowerCase() ? (
                        <span key={i} className="adex-search-result-highlight">
                          {part}
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="adex-search-no-results">{isSearching ? "Searching..." : "No results found"}</div>
            )}
          </div>
        </div>

        {/* Bookmarks and Outline Sidebar */}
        <div className="adex-preview-bookmarks" ref={bookmarksRef}>
          <div className="adex-bookmarks-header">
            <div className="adex-bookmarks-tabs">
              <button
                className={`adex-bookmarks-tab ${activeTab === "outline" ? "active" : ""}`}
                onClick={() => setActiveTab("outline")}
              >
                Outline
              </button>
              <button
                className={`adex-bookmarks-tab ${activeTab === "bookmarks" ? "active" : ""}`}
                onClick={() => setActiveTab("bookmarks")}
              >
                Bookmarks
              </button>
            </div>
          </div>

          <div className="adex-bookmarks-content">
            {activeTab === "outline" ? (
              <div className="adex-outline-container">
                {documentOutline.length > 0 ? (
                  <div className="adex-outline-list">{renderOutlineItems(documentOutline)}</div>
                ) : (
                  <div className="adex-no-outline">No outline available in this document</div>
                )}
              </div>
            ) : (
              <div className="adex-bookmarks-container">
                <div className="adex-bookmarks-actions">
                  {isAddingBookmark ? (
                    <div className="adex-add-bookmark-form">
                      <input
                        type="text"
                        className="adex-bookmark-title-input"
                        placeholder="Bookmark title"
                        value={newBookmarkTitle}
                        onChange={(e) => setNewBookmarkTitle(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") addBookmark()
                          if (e.key === "Escape") setIsAddingBookmark(false)
                        }}
                      />
                      <div className="adex-bookmark-form-actions">
                        <button
                          className="adex-bookmark-save"
                          onClick={addBookmark}
                          disabled={!newBookmarkTitle.trim()}
                        >
                          Save
                        </button>
                        <button className="adex-bookmark-cancel" onClick={() => setIsAddingBookmark(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button className="adex-add-bookmark-btn" onClick={() => setIsAddingBookmark(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                      Add Bookmark
                    </button>
                  )}
                </div>

                <div className="adex-bookmarks-list">
                  {bookmarks.length > 0 ? (
                    bookmarks
                      .sort((a, b) => a.pageNumber - b.pageNumber)
                      .map((bookmark) => (
                        <div key={bookmark.id} className="adex-bookmark-item">
                          <button className="adex-bookmark-link" onClick={() => navigateToBookmark(bookmark)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 2 0 0 0-2 2z" />
                            </svg>
                            <span className="adex-bookmark-title">{bookmark.title}</span>
                            <span className="adex-bookmark-page">p. {bookmark.pageNumber}</span>
                          </button>
                          <button
                            className="adex-bookmark-delete"
                            onClick={() => deleteBookmark(bookmark.id)}
                            aria-label={`Delete bookmark: ${bookmark.title}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
                          </button>
                        </div>
                      ))
                  ) : (
                    <div className="adex-no-bookmarks">No bookmarks added yet</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PDF Pages */}
        <div ref={previewRef} className="adex-preview">
          {pdfBlobUrl && (
            <Document
              file={pdfBlobUrl}
              loading={
                <div className="adex-preview-loader">
                  <span className="page-loader"></span>
                  <span className="page-loader"></span>
                </div>
              }
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              options={documentOptions}
            >
              {!pdfBlobUrl && (
                <div className="adex-preview-loader">
                  <span className="page-loader"></span>
                  <span className="page-loader"></span>
                </div>
              )}
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={`page-${index}`}
                    ref={(el) => (pageRefs.current[index + 1] = el)}
                    className="adex-page"
                    aria-label={`Page ${index + 1} content`}
                  >
                    <Page
                      loading={
                        <div className="adex-preview-loader">
                          <span className="page-loader"></span>
                        </div>
                      }
                      scale={scale}
                      pageNumber={index + 1}
                      width={600}
                      rotate={pageRotations[index + 1] || 0} // Apply rotation
                      renderTextLayer={isTextLayerEnabled}
                      renderAnnotationLayer={isTextLayerEnabled}
                      canvasBackground="white"
                    />
                  </div>
                ))}
            </Document>
          )}
        </div>

        {showInfo && (
          <div className="adex-pdf-meta-info">
            <div className="adex-meta-panel">
              <div className="adex-pdf-meta-info-header">
                <strong>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>{" "}
                  Info: {metadata?.Title || "N/A"}
                </strong>
                <button
                  onClick={() => {
                    setShowInfo(false)
                  }}
                  aria-label="Close info panel"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
              <div className="adex-pdf-meta-info-content">
                <ul className="adex-pdf-meta-info-list">
                  {/* @ts-ignore */}
                  {Object?.entries(metadata || {})?.map(([key, value]: [string, any]) => (
                    <li key={key} className="adex-pdf-meta-info-item">
                      <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="adex-power-row">
        <div className="adex-left-option">
          {showControls?.info && (
            <button
              onClick={() => {
                setShowInfo(true)
              }}
              aria-label="Show document information"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </button>
          )}
        </div>
        {showCredits && (
          <p>
            Created with <span>♥</span> by{" "}
            <a href="https://github.com/abhibagul/" target="_blank" rel="noreferrer">
              Abhishek
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default AdexViewer
