"use client"
import { useEffect, useState, useRef, useCallback, useMemo } from "react"
import type React from "react"

import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/TextLayer.css" // Import text layer styles
import "react-pdf/dist/esm/Page/AnnotationLayer.css" // Import annotation layer styles
import "./index.css"

// Set worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface Annotation {
  id: string
  pageNumber: number
  type: "highlight" | "note" | "drawing"
  content?: string
  color: string
  position: {
    x: number
    y: number
    width?: number
    height?: number
  }
  points?: { x: number; y: number }[] // For drawing annotations
  createdAt: number
}

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
    annotations?: boolean // New option for annotations functionality
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
    rotation: true,
    print: true,
    search: true,
    bookmarks: true,
    annotations: true,
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
  const [leftPanel, setLeftPanel] = useState<number>(0)

  // Add these state variables after the bookmarksRef declaration
  const [leftPanelWidth, setLeftPanelWidth] = useState<number>(220)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const resizeDividerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef<number>(0)
  const startWidthRef = useRef<number>(0)
  // Add these new state variables after the existing state declarations
  const [annotations, setAnnotations] = useState<Annotation[]>([])
  const [isAddingAnnotation, setIsAddingAnnotation] = useState<boolean>(false)
  const [annotationType, setAnnotationType] = useState<"highlight" | "note" | "drawing">("note")
  const [annotationColor, setAnnotationColor] = useState<string>("#ffeb3b")
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null)
  const [newAnnotationContent, setNewAnnotationContent] = useState<string>("")
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [currentDrawingPoints, setCurrentDrawingPoints] = useState<{ x: number; y: number }[]>([])
  const [showAnnotationsSidebar, setShowAnnotationsSidebar] = useState<boolean>(false)

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

    // Add event listeners for resize functionality
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaX = e.clientX - startXRef.current
      let newWidth = startWidthRef.current + deltaX

      // Enforce min and max width constraints
      newWidth = Math.max(100, Math.min(400, newWidth))

      setLeftPanelWidth(newWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.body.style.cursor = "default"
      document.body.style.userSelect = "auto"
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isMobile, responsive?.hideSidebarOnMobile, showSidebar, isDragging, showAnnotationsSidebar])

  // Function to start resizing
  const startResize = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    startXRef.current = e.clientX
    startWidthRef.current = leftPanelWidth
    document.body.style.cursor = "col-resize"
    document.body.style.userSelect = "none"
  }

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
    setLeftPanel(2)
    setSidebar(true)
    setShowBookmarksSidebar((prev) => !prev)
    if (!showBookmarksSidebar) {
      setActiveTab("outline")
    }
  }, [showBookmarksSidebar])

  // Add a function to toggle the annotations sidebar after the toggleBookmarksSidebar function
  const toggleAnnotationsSidebar = useCallback(() => {
    setLeftPanel(3) // Use a new panel index for annotations
    setSidebar(true)
    setShowAnnotationsSidebar((prev) => !prev)
  }, [showAnnotationsSidebar])

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
          .adex-topbar, .adex-power-row, .adex-preview-thumbs, .adex-preview-search, .adex-preview-bookmarks, .adex-pdf-meta-info,.adex-left-col {
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
    setLeftPanel(1)
    setSidebar(true)
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

  // Move the getContextAroundMatch function before performSearch
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

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  // Update the navigateToSearchResult function to add null checks
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

  // Add a check in the handleSearchKeyDown function to prevent searching when document isn't ready
  // Move the handleSearchKeyDown function after performSearch
  // First, remove the current handleSearchKeyDown function
  // Now define performSearch first
  const performSearch = useCallback(async () => {
    if (!searchQuery.trim() || !pdfDocument) {
      // Exit early if there's no search query or no PDF document
      return
    }

    setIsSearching(true)
    setSearchResults([])
    setCurrentSearchResult(-1)

    try {
      const results: SearchResult[] = []

      // Check if the PDF document is still valid
      if (!pdfDocument || !pdfDocument.numPages) {
        throw new Error("PDF document is not available or fully loaded")
      }

      // Search through each page
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        try {
          // Add null check before getting the page
          const page = await pdfDocument.getPage(i)

          if (!page) {
            console.warn(`Page ${i} could not be loaded, skipping`)
            continue
          }

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
        } catch (pageError) {
          console.warn(`Error processing page ${i} during search:`, pageError)
          // Continue with the next page instead of failing the entire search
          continue
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
      // Show a user-friendly error message
      alert("There was an error while searching. Please try again after the document is fully loaded.")
    } finally {
      setIsSearching(false)
    }
  }, [searchQuery, pdfDocument, navigateToSearchResult])

  // Then define handleSearchKeyDown after performSearch
  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        if (!pdfDocument || !pdfDocument.numPages) {
          alert("Please wait for the document to fully load before searching.")
          return
        }
        performSearch()
      }
    },
    [pdfDocument, performSearch],
  )

  // Add these navigation functions that are referenced but missing:
  const nextSearchResult = useCallback(() => {
    if (searchResults.length === 0) return

    const nextIndex = (currentSearchResult + 1) % searchResults.length
    setCurrentSearchResult(nextIndex)
    navigateToSearchResult(searchResults[nextIndex])
  }, [currentSearchResult, searchResults, navigateToSearchResult])

  const prevSearchResult = useCallback(() => {
    if (searchResults.length === 0) return

    const prevIndex = (currentSearchResult - 1 + searchResults.length) % searchResults.length
    setCurrentSearchResult(prevIndex)
    navigateToSearchResult(searchResults[prevIndex])
  }, [currentSearchResult, searchResults, navigateToSearchResult])

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

  // Add a function to start adding an annotation
  const startAddingAnnotation = useCallback((type: "highlight" | "note" | "drawing") => {
    setIsAddingAnnotation(true)
    setAnnotationType(type)
    setNewAnnotationContent("")
  }, [])

  const cancelAddingAnnotation = useCallback(() => {
    setIsAddingAnnotation(false)
    setCurrentDrawingPoints([])
  }, [])

  const addAnnotation = useCallback(
    (pageNumber: number, position: { x: number; y: number; width?: number; height?: number }) => {
      if (annotationType === "drawing" && currentDrawingPoints.length < 2) {
        return // Need at least 2 points for a drawing
      }

      const newAnnotation: Annotation = {
        id: `annotation-${Date.now()}`,
        pageNumber,
        type: annotationType,
        content: newAnnotationContent,
        color: annotationColor,
        position,
        points: annotationType === "drawing" ? currentDrawingPoints : undefined,
        createdAt: Date.now(),
      }

      setAnnotations((prev) => {
        const updatedAnnotations = [...prev, newAnnotation]
        // Save annotations to localStorage
        localStorage.setItem(`pdf-annotations-${data?.url}`, JSON.stringify(updatedAnnotations))
        return updatedAnnotations
      })

      setIsAddingAnnotation(false)
      setCurrentDrawingPoints([])
      setNewAnnotationContent("")
    },
    [annotationType, newAnnotationContent, annotationColor, currentDrawingPoints, data?.url],
  )

  const deleteAnnotation = useCallback(
    (id: string) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.filter((annotation) => annotation.id !== id)
        // Save updated annotations to localStorage
        localStorage.setItem(`pdf-annotations-${data?.url}`, JSON.stringify(updatedAnnotations))
        return updatedAnnotations
      })

      if (selectedAnnotation?.id === id) {
        setSelectedAnnotation(null)
      }
    },
    [selectedAnnotation, data?.url],
  )

  const updateAnnotation = useCallback(
    (id: string, updates: Partial<Annotation>) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.map((annotation) =>
          annotation.id === id ? { ...annotation, ...updates } : annotation,
        )
        // Save updated annotations to localStorage
        localStorage.setItem(`pdf-annotations-${data?.url}`, JSON.stringify(updatedAnnotations))
        return updatedAnnotations
      })

      if (selectedAnnotation?.id === id) {
        setSelectedAnnotation((prev) => (prev ? { ...prev, ...updates } : null))
      }
    },
    [selectedAnnotation, data?.url],
  )

  const handleDrawingMouseDown = useCallback(
    (e: React.MouseEvent, pageNumber: number) => {
      if (isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(true)
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = (e.clientX - rect.left) / scale
        const y = (e.clientY - rect.top) / scale
        setCurrentDrawingPoints([{ x, y }])
      }
    },
    [isAddingAnnotation, annotationType, scale],
  )

  const handleDrawingMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = (e.clientX - rect.left) / scale
        const y = (e.clientY - rect.top) / scale
        setCurrentDrawingPoints((prev) => [...prev, { x, y }])
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, scale],
  )

  // Now let's improve the handleDrawingMouseUp function to ensure proper dimensions
  // Find the handleDrawingMouseUp function and replace it with:

  const handleDrawingMouseUp = useCallback(
    (e: React.MouseEvent, pageNumber: number) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(false)

        // Need at least 2 points for a drawing
        if (currentDrawingPoints.length < 2) {
          return
        }

        // Calculate bounding box for the drawing
        const minX = Math.min(...currentDrawingPoints.map((p) => p.x))
        const minY = Math.min(...currentDrawingPoints.map((p) => p.y))
        const maxX = Math.max(...currentDrawingPoints.map((p) => p.x))
        const maxY = Math.max(...currentDrawingPoints.map((p) => p.y))

        // Ensure we have some minimum dimensions
        const width = Math.max(maxX - minX, 1)
        const height = Math.max(maxY - minY, 1)

        // Create a deep copy of the points array and adjust coordinates relative to the bounding box
        const adjustedPoints = currentDrawingPoints.map((point) => ({
          x: point.x - minX,
          y: point.y - minY,
        }))

        const newAnnotation: Annotation = {
          id: `annotation-${Date.now()}`,
          pageNumber,
          type: "drawing",
          content: "",
          color: annotationColor,
          position: {
            x: minX,
            y: minY,
            width: width,
            height: height,
          },
          points: adjustedPoints,
          createdAt: Date.now(),
        }

        setAnnotations((prev) => {
          const updatedAnnotations = [...prev, newAnnotation]
          // Save annotations to localStorage
          localStorage.setItem(`pdf-annotations-${data?.url}`, JSON.stringify(updatedAnnotations))
          return updatedAnnotations
        })

        setIsAddingAnnotation(false)
        setCurrentDrawingPoints([])
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, currentDrawingPoints, annotationColor, data?.url],
  )

  const handlePageClick = useCallback(
    (e: React.MouseEvent, pageNumber: number) => {
      if (isAddingAnnotation && annotationType === "note") {
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = (e.clientX - rect.left) / scale
        const y = (e.clientY - rect.top) / scale

        addAnnotation(pageNumber, { x, y })
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation],
  )

  const handleTextSelection = useCallback(
    (pageNumber: number) => {
      if (isAddingAnnotation && annotationType === "highlight") {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        const range = selection.getRangeAt(0)
        const rects = range.getClientRects() // Call getClientRects() on the range, not the selection
        if (rects.length === 0) return

        // Get the page element
        const pageElement = pageRefs.current[pageNumber]
        if (!pageElement) return

        const pageRect = pageElement.getBoundingClientRect()

        // Calculate the position relative to the page
        const firstRect = rects[0]
        const lastRect = rects[rects.length - 1]

        const x = (firstRect.left - pageRect.left) / scale
        const y = (firstRect.top - pageRect.top) / scale
        const width = (lastRect.right - firstRect.left) / scale
        const height = Math.max(...Array.from(rects).map((r) => r.height)) / scale

        addAnnotation(pageNumber, { x, y, width, height })

        // Clear the selection
        selection.removeAllRanges()
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation],
  )

  // Add an effect to load annotations from localStorage
  useEffect(() => {
    if (data?.url) {
      const savedAnnotations = localStorage.getItem(`pdf-annotations-${data?.url}`)
      if (savedAnnotations) {
        try {
          setAnnotations(JSON.parse(savedAnnotations))
        } catch (error) {
          console.error("Error parsing saved annotations:", error)
        }
      }
    }
  }, [data?.url])

  const renderAnnotations = useCallback(
    (pageNumber: number) => {
      const pageAnnotations = annotations.filter((a) => a.pageNumber === pageNumber)

      return pageAnnotations.map((annotation) => {
        const { id, type, position, color, content, points } = annotation

        if (type === "note") {
          return (
            <div
              key={id}
              data-id={id}
              className="adex-annotation adex-note-annotation"
              style={{
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                zIndex: 100,
                cursor: "pointer",
              }}
              onClick={() => setSelectedAnnotation(annotation)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={color}
                stroke="#000"
                strokeWidth="1"
              >
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
              </svg>
            </div>
          )
        }

        if (type === "highlight") {
          return (
            <div
              key={id}
              data-id={id}
              className="adex-annotation adex-highlight-annotation"
              style={{
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                backgroundColor: color,
                opacity: 0.3,
                zIndex: 50,
                pointerEvents: "none",
              }}
              onClick={() => setSelectedAnnotation(annotation)}
            />
          )
        }

        if (type === "drawing" && points && points.length > 1) {
          // Create SVG path from points
          const pathData = points.reduce((path, point, index) => {
            return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
          }, "")

          return (
            <svg
              key={id}
              data-id={id}
              className="adex-annotation adex-drawing-annotation"
              style={{
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                zIndex: 75,
                pointerEvents: "auto", // Change from "none" to "auto" to make it clickable
                cursor: "pointer",
              }}
              onClick={() => setSelectedAnnotation(annotation)}
            >
              <path
                d={pathData}
                stroke={color}
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
                transform={`scale(${scale})`}
              />
            </svg>
          )
        }

        return null
      })
    },
    [annotations, scale],
  )

  // Let's also update the renderCurrentDrawing function to make it more visible
  // Find the renderCurrentDrawing function and replace it with:

  const renderCurrentDrawing = useCallback(() => {
    if (!isDrawing || currentDrawingPoints.length < 2) return null

    // Create SVG path from points
    const pathData = currentDrawingPoints.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
    }, "")

    return (
      <svg
        className="adex-current-drawing"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 75,
          pointerEvents: "none",
        }}
      >
        <path
          d={pathData}
          stroke={annotationColor}
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }, [isDrawing, currentDrawingPoints, annotationColor])

  const renderAnnotationDetail = useCallback(
    (annotation: Annotation) => {
      return (
        <div className="adex-annotation-detail">
          <div className="adex-annotation-detail-header">
            <div className="adex-annotation-detail-actions">
              <button
                className="adex-annotation-delete"
                onClick={(e) => {
                  e.stopPropagation()
                  deleteAnnotation(annotation.id)
                }}
                aria-label="Delete annotation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
              <button
                className="adex-annotation-close"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedAnnotation(null)
                }}
                aria-label="Close annotation detail"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="adex-annotation-detail-content">
            <div className="adex-annotation-page">Page {annotation.pageNumber}</div>
            <div className="adex-annotation-date">{new Date(annotation.createdAt).toLocaleString()}</div>
            <div className="adex-annotation-color-picker">
              <label>Color:</label>
              <div className="adex-color-options">
                {["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => (
                  <button
                    key={color}
                    className={`adex-color-option ${annotation.color === color ? "active" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => {
                      e.stopPropagation()
                      updateAnnotation(annotation.id, { color })
                    }}
                    aria-label={`Set color to ${color}`}
                  />
                ))}
              </div>
            </div>
            {(annotation.type === "note" || annotation.type === "highlight") && (
              <div className="adex-annotation-content-editor">
                <label>Note:</label>
                <textarea
                  value={annotation.content || ""}
                  onChange={(e) => updateAnnotation(annotation.id, { content: e.target.value })}
                  placeholder="Add a note..."
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </div>
      )
    },
    [deleteAnnotation, updateAnnotation],
  )

  // Add a class to the main viewer div based on text selection state
  // Update the className in the main div to include the bookmarks sidebar state
  return (
    <div
      ref={viewerRef}
      className={`PDFViewer adex-viewer ${
        fullScreenView ? "fullScreenView" : ""
      } ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} dev-abhishekbagul ${isMobile ? "adex-mobile" : ""} ${!textOptions.enableSelection ? "disable-text-selection" : ""} ${isPrinting ? "adex-printing" : ""}`}
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
              {showControls?.rotation && (
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
              )}
              <select onChange={(e) => setScale(+e.target.value)} value={scale} aria-label="Zoom level">
                {scaleSets.map((scaleLevel) => (
                  <option key={scaleLevel} value={scaleLevel}>
                    {(scaleLevel * 100).toFixed(0)}%
                  </option>
                ))}
              </select>
              {showControls?.rotation && (
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
              )}
            </div>
          )}

          <div className="adex-control-options">
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
          </div>
        </div>
      )}

      <div className="adex-preview-panel" style={{ display: "flex" }}>
        <div className="adex-left-col" style={{ flexShrink: 0 }}>
          <button
            onClick={() => {
              setLeftPanel(0), setSidebar(true)
            }}
            aria-label="Pages Previews"
            title="Pages Previews"
            className={showBookmarksSidebar ? "active" : ""}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
              <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
            </svg>
          </button>

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

          {showControls?.bookmarks && (
            <button
              onClick={toggleBookmarksSidebar}
              aria-label="Bookmarks and outline"
              title="Bookmarks and outline"
              className={showBookmarksSidebar ? "active" : ""}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
              </svg>
            </button>
          )}
          {showControls?.annotations && (
            <button
              onClick={() => toggleAnnotationsSidebar()}
              aria-label="Annotations"
              title="Annotations"
              className={showAnnotationsSidebar ? "active" : ""}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          )}
        </div>
        <div
          className="adex-left-panel"
          style={{
            width: sidebar ? `${leftPanelWidth}px` : "0px",
            flexShrink: 0,
            transition: isDragging ? "none" : "0.2s width ease",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Thumbnail Sidebar */}
          {leftPanel == 0 && (
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
          )}

          {/* Search Results Sidebar */}
          {leftPanel == 1 && (
            <div className="adex-preview-search" ref={searchResultsRef}>
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
                    disabled={isSearching || !searchQuery.trim() || !pdfDocument || !pdfDocument.numPages}
                    aria-label="Search"
                  >
                    {isSearching ? (
                      <span className="adex-search-loading"></span>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                {/* {searchResults.length > 0 && (
            <div className="adex-search-results">
              
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
                </div>
              )} */}
              </div>
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
          )}

          {/* Bookmarks and Outline Sidebar */}
          {leftPanel == 2 && (
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
                                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
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
          )}
          {/* Add the annotations sidebar panel */}
          {leftPanel == 3 && (
            <div className="adex-preview-annotations">
              <div className="adex-annotations-header">
                <h3>Annotations</h3>
                <div className="adex-annotations-tools">
                  <button
                    className={`adex-annotation-tool ${isAddingAnnotation && annotationType === "note" ? "active" : ""}`}
                    onClick={() =>
                      isAddingAnnotation && annotationType === "note"
                        ? cancelAddingAnnotation()
                        : startAddingAnnotation("note")
                    }
                    aria-label="Add note"
                    title="Add note"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button
                    className={`adex-annotation-tool ${isAddingAnnotation && annotationType === "highlight" ? "active" : ""}`}
                    onClick={() =>
                      isAddingAnnotation && annotationType === "highlight"
                        ? cancelAddingAnnotation()
                        : startAddingAnnotation("highlight")
                    }
                    aria-label="Add highlight"
                    title="Add highlight"
                    disabled={!textOptions.enableSelection}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                      <path d="M3.915 2a.5.5 0 0 0-.5.5V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2.5a.5.5 0 0 0-.5-.5h-8Z" />
                    </svg>
                  </button>
                  <button
                    className={`adex-annotation-tool ${isAddingAnnotation && annotationType === "drawing" ? "active" : ""}`}
                    onClick={() =>
                      isAddingAnnotation && annotationType === "drawing"
                        ? cancelAddingAnnotation()
                        : startAddingAnnotation("drawing")
                    }
                    aria-label="Add drawing"
                    title="Add drawing"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </button>
                </div>
                {isAddingAnnotation && (
                  <div className="adex-annotation-color-picker">
                    <div className="adex-color-options">
                      {["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => (
                        <button
                          key={color}
                          className={`adex-color-option ${annotationColor === color ? "active" : ""}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setAnnotationColor(color)}
                          aria-label={`Set color to ${color}`}
                        />
                      ))}
                    </div>
                    <button className="adex-cancel-annotation" onClick={cancelAddingAnnotation} aria-label="Cancel">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="adex-annotations-list">
                {annotations.length > 0 ? (
                  annotations
                    .sort((a, b) => b.createdAt - a.createdAt)
                    .map((annotation) => (
                      <div
                        key={annotation.id}
                        className={`adex-annotation-item ${selectedAnnotation?.id === annotation.id ? "active" : ""}`}
                        onClick={() => {
                          // Toggle the selected annotation
                          setSelectedAnnotation(selectedAnnotation?.id === annotation.id ? null : annotation)
                          // Scroll to the annotation's page
                          goToPage(annotation.pageNumber)

                          // Add a small delay to ensure the page is loaded before trying to focus on the annotation
                          setTimeout(() => {
                            // Find the annotation element on the page and scroll to it
                            const pageElement = pageRefs.current[annotation.pageNumber]
                            if (pageElement) {
                              const annotationElements = pageElement.querySelectorAll(
                                `.adex-annotation[data-id="${annotation.id}"]`,
                              )
                              if (annotationElements.length > 0) {
                                annotationElements[0].scrollIntoView({ behavior: "smooth", block: "center" })
                              }
                            }
                          }, 300)
                        }}
                      >
                        <div className="adex-annotation-icon" style={{ color: annotation.color }}>
                          {annotation.type === "note" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            </svg>
                          )}
                          {annotation.type === "highlight" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                              <path d="M3.915 2a.5.5 0 0 0-.5.5V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2.5a.5.5 0 0 0-.5-.5h-8Z" />
                            </svg>
                          )}
                          {annotation.type === "drawing" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                            </svg>
                          )}
                        </div>
                        <div className="adex-annotation-content">
                          <div className="adex-annotation-title">
                            {annotation.type.charAt(0).toUpperCase() + annotation.type.slice(1)}
                            <span className="adex-annotation-page">Page {annotation.pageNumber}</span>
                          </div>
                          <div className="adex-annotation-preview">
                            {annotation.content
                              ? annotation.content.substring(0, 50) + (annotation.content.length > 50 ? "..." : "")
                              : "No content"}
                          </div>
                        </div>
                        {selectedAnnotation?.id === annotation.id && renderAnnotationDetail(annotation)}
                      </div>
                    ))
                ) : (
                  <div className="adex-no-annotations">
                    No annotations added yet. Use the tools above to add annotations to your document.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {sidebar && (
          <div
            ref={resizeDividerRef}
            style={{
              width: "8px",
              cursor: "col-resize",
              background: "rgba(0, 0, 0, 0.05)",
              flexShrink: 0,
              zIndex: 10,
              position: "relative",
            }}
            onMouseDown={startResize}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "4px",
                height: "30px",
                borderRadius: "2px",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        )}
        <div ref={previewRef} className="adex-preview" style={{ flex: 1, overflow: "auto" }}>
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
                    onClick={(e) => handlePageClick(e, index + 1)}
                    onMouseDown={(e) => handleDrawingMouseDown(e, index + 1)}
                    onMouseMove={handleDrawingMouseMove}
                    onMouseUp={(e) => {
                      handleDrawingMouseUp(e, index + 1), handleTextSelection(index + 1)
                    }}
                    onMouseLeave={(e) => isDrawing && handleDrawingMouseUp(e, index + 1)}
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
                    {renderAnnotations(index + 1)}
                    {isDrawing && index + 1 === pageNumber && renderCurrentDrawing()}
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
