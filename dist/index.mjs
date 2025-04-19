var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/AdexViewer.tsx
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { jsx, jsxs } from "react/jsx-runtime";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
var AdexViewer = ({
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
    annotations: true
  },
  defaultValues = {
    zoom: 1.25,
    page: 1,
    fullscreen: false
  },
  responsive = {
    mobileBreakpoint: 768,
    hideSidebarOnMobile: true,
    reduceToolbarOnMobile: true
  },
  textOptions = {
    enableSelection: true,
    enableCopy: true
  },
  printOptions = {
    printBackground: true,
    pageRangeEnabled: true
  }
}) => {
  var _a;
  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(defaultValues.page || 1);
  const [scale, setScale] = useState(defaultValues.zoom || 1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [fullScreenView, setFullScreenView] = useState(defaultValues.fullscreen || false);
  const [sidebar, setSidebar] = useState(showSidebar || false);
  const [previewNumber, setPreviewNumber] = useState(defaultValues.page || 1);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = useState(5);
  const viewerRef = useRef(null);
  const pageRefs = useRef({});
  const previewRef = useRef(null);
  const printIframeRef = useRef(null);
  const showCredits = credits != null ? credits : true;
  const [metadata, setMetadata] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const maxRetries = 5;
  const [isMobile, setIsMobile] = useState(false);
  const [pageRotations, setPageRotations] = useState({});
  const [isTextLayerEnabled, setIsTextLayerEnabled] = useState(
    Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy)
  );
  const [originalZoom, setOriginalZoom] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentSearchResult, setCurrentSearchResult] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const searchInputRef = useRef(null);
  const [showSearchSidebar, setShowSearchSidebar] = useState(false);
  const searchResultsRef = useRef(null);
  const [documentOutline, setDocumentOutline] = useState([]);
  const [expandedOutlineItems, setExpandedOutlineItems] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [activeTab, setActiveTab] = useState("outline");
  const [showBookmarksSidebar, setShowBookmarksSidebar] = useState(false);
  const [isAddingBookmark, setIsAddingBookmark] = useState(false);
  const [newBookmarkTitle, setNewBookmarkTitle] = useState("");
  const bookmarksRef = useRef(null);
  const [leftPanel, setLeftPanel] = useState(0);
  const [leftPanelWidth, setLeftPanelWidth] = useState(220);
  const [isDragging, setIsDragging] = useState(false);
  const resizeDividerRef = useRef(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);
  const [annotations, setAnnotations] = useState([]);
  const [isAddingAnnotation, setIsAddingAnnotation] = useState(false);
  const [annotationType, setAnnotationType] = useState("note");
  const [annotationColor, setAnnotationColor] = useState("#ffeb3b");
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);
  const [newAnnotationContent, setNewAnnotationContent] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentDrawingPoints, setCurrentDrawingPoints] = useState([]);
  const [showAnnotationsSidebar, setShowAnnotationsSidebar] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < ((responsive == null ? void 0 : responsive.mobileBreakpoint) || 768));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [responsive == null ? void 0 : responsive.mobileBreakpoint]);
  useEffect(() => {
    if (isMobile && (responsive == null ? void 0 : responsive.hideSidebarOnMobile)) {
      setSidebar(false);
      setShowSearchSidebar(false);
      setShowBookmarksSidebar(false);
    } else {
      setSidebar(showSidebar || false);
    }
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startXRef.current;
      let newWidth = startWidthRef.current + deltaX;
      newWidth = Math.max(210, Math.min(400, newWidth));
      setLeftPanelWidth(newWidth);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile, responsive == null ? void 0 : responsive.hideSidebarOnMobile, showSidebar, isDragging, showAnnotationsSidebar]);
  const startResize = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
    startWidthRef.current = leftPanelWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };
  useEffect(() => {
    if (defaultValues.fullscreen && viewerRef.current && document.fullscreenElement === null) {
      const timer = setTimeout(() => {
        var _a2;
        (_a2 = viewerRef.current) == null ? void 0 : _a2.requestFullscreen().catch((err) => {
          console.warn("Couldn't enter fullscreen mode:", err);
        });
        setFullScreenView(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [defaultValues.fullscreen]);
  useEffect(() => {
    let retryTimer = null;
    const fetchPdfBlob = () => __async(void 0, null, function* () {
      try {
        const response = yield fetch(data == null ? void 0 : data.url);
        if (!response.ok) throw new Error("Failed to fetch PDF");
        const blob = yield response.blob();
        const url = URL.createObjectURL(blob);
        setPdfBlobUrl(url);
        setRetryCount(0);
        if (retryTimer) {
          clearTimeout(retryTimer);
          retryTimer = null;
        }
      } catch (error) {
        console.error(`Failed to load PDF (Attempt ${retryCount + 1}):`, error);
        if (retryCount < maxRetries) {
          retryTimer = setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, retryTimeoutDelay);
          setRetryTimeoutDelay(retryTimeoutDelay * 2);
        }
      }
    });
    if (data == null ? void 0 : data.url) fetchPdfBlob();
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [data == null ? void 0 : data.url, retryCount]);
  const goToPage = useCallback((pageNum) => {
    setPreviewNumber(pageNum);
    setPageNumber(pageNum);
    const pageEl = pageRefs.current[pageNum];
    if (pageEl) {
      pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const extractOutline = useCallback((pdf) => __async(void 0, null, function* () {
    try {
      const outline = yield pdf.getOutline();
      if (outline && outline.length > 0) {
        const processedOutline = yield processOutlineItems(outline, pdf);
        setDocumentOutline(processedOutline);
      } else {
        setDocumentOutline([]);
      }
    } catch (error) {
      console.error("Error extracting outline:", error);
      setDocumentOutline([]);
    }
  }), []);
  const processOutlineItems = useCallback((items, pdf, level = 0) => __async(void 0, null, function* () {
    const processedItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const id = `outline-${level}-${i}-${Date.now()}`;
      let pageNumber2 = void 0;
      if (item.dest) {
        try {
          if (typeof item.dest === "string") {
            const dest = yield pdf.getDestination(item.dest);
            if (dest) {
              const ref = yield pdf.getPageRef(dest[0]);
              const pageIndex = yield pdf.getPageIndex(ref);
              pageNumber2 = pageIndex + 1;
            }
          } else if (Array.isArray(item.dest)) {
            const ref = item.dest[0];
            if (ref) {
              try {
                const pageIndex = yield pdf.getPageIndex(ref);
                pageNumber2 = pageIndex + 1;
              } catch (error) {
                console.error("Error getting page index from ref:", error);
              }
            }
          }
        } catch (error) {
          console.error("Error resolving destination:", error);
        }
      }
      const processedItem = {
        title: item.title,
        dest: item.dest,
        pageNumber: pageNumber2,
        id,
        expanded: level < 1
        // Expand only the first level by default
      };
      if (item.items && item.items.length > 0) {
        processedItem.items = yield processOutlineItems(item.items, pdf, level + 1);
      }
      processedItems.push(processedItem);
    }
    return processedItems;
  }), []);
  function onDocumentLoadSuccess(pdf) {
    return __async(this, null, function* () {
      setNumPages(pdf.numPages);
      setPdfDocument(pdf);
      const meta = yield pdf.getMetadata();
      setMetadata(meta.info);
      yield extractOutline(pdf);
      if (defaultValues.page && defaultValues.page > 1 && defaultValues.page <= pdf.numPages) {
        goToPage(defaultValues.page);
      }
    });
  }
  const toggleOutlineItem = useCallback((itemId) => {
    setExpandedOutlineItems((prev) => __spreadProps(__spreadValues({}, prev), {
      [itemId]: !prev[itemId]
    }));
  }, []);
  const navigateToOutlineItem = useCallback(
    (item) => __async(void 0, null, function* () {
      if (item.pageNumber) {
        goToPage(item.pageNumber);
      } else if (item.dest && pdfDocument) {
        try {
          let pageNumber2 = void 0;
          if (typeof item.dest === "string") {
            const dest = yield pdfDocument.getDestination(item.dest);
            if (dest) {
              const ref = yield pdfDocument.getPageRef(dest[0]);
              const pageIndex = yield pdfDocument.getPageIndex(ref);
              pageNumber2 = pageIndex + 1;
            }
          } else if (Array.isArray(item.dest)) {
            const ref = item.dest[0];
            if (ref) {
              try {
                const pageIndex = yield pdfDocument.getPageIndex(ref);
                pageNumber2 = pageIndex + 1;
              } catch (error) {
                console.error("Error getting page index from ref:", error);
              }
            }
          }
          if (pageNumber2) {
            goToPage(pageNumber2);
          }
        } catch (error) {
          console.error("Error navigating to outline item:", error);
        }
      }
    }),
    [goToPage, pdfDocument]
  );
  const addBookmark = useCallback(() => {
    if (!newBookmarkTitle.trim()) return;
    const newBookmark = {
      id: `bookmark-${Date.now()}`,
      title: newBookmarkTitle.trim(),
      pageNumber,
      createdAt: Date.now()
    };
    setBookmarks((prev) => [...prev, newBookmark]);
    setNewBookmarkTitle("");
    setIsAddingBookmark(false);
    localStorage.setItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`, JSON.stringify([...bookmarks, newBookmark]));
  }, [newBookmarkTitle, pageNumber, bookmarks, data == null ? void 0 : data.url]);
  const deleteBookmark = useCallback(
    (id) => {
      setBookmarks((prev) => {
        const updatedBookmarks = prev.filter((bookmark) => bookmark.id !== id);
        localStorage.setItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`, JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      });
    },
    [data == null ? void 0 : data.url]
  );
  const navigateToBookmark = useCallback(
    (bookmark) => {
      goToPage(bookmark.pageNumber);
    },
    [goToPage]
  );
  useEffect(() => {
    if (data == null ? void 0 : data.url) {
      const savedBookmarks = localStorage.getItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`);
      if (savedBookmarks) {
        try {
          setBookmarks(JSON.parse(savedBookmarks));
        } catch (error) {
          console.error("Error parsing saved bookmarks:", error);
        }
      }
    }
  }, [data == null ? void 0 : data.url]);
  const toggleBookmarksSidebar = useCallback(() => {
    setLeftPanel(2);
    setSidebar(true);
    setShowBookmarksSidebar((prev) => !prev);
    if (!showBookmarksSidebar) {
      setActiveTab("outline");
    }
  }, [showBookmarksSidebar]);
  const toggleAnnotationsSidebar = useCallback(() => {
    setLeftPanel(3);
    setSidebar(true);
    setShowAnnotationsSidebar((prev) => !prev);
  }, [showAnnotationsSidebar]);
  function updatePage(__page) {
    if (__page > 0 && numPages !== null && __page <= numPages) {
      goToPage(__page);
    } else {
      setPreviewNumber(pageNumber);
    }
  }
  function updatePDFPage(e) {
    const __page = Number(e.target.value);
    setPreviewNumber(__page);
    debounce(() => updatePage(__page), 500);
  }
  const toggleFullscreen = () => {
    var _a2;
    if (!document.fullscreenElement) {
      setFullScreenView(true);
      (_a2 = viewerRef.current) == null ? void 0 : _a2.requestFullscreen().catch((err) => {
        console.warn("Couldn't enter fullscreen mode:", err);
      });
    } else {
      setFullScreenView(false);
      document.exitFullscreen().catch((err) => {
        console.warn("Couldn't exit fullscreen mode:", err);
      });
    }
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  useEffect(() => {
    const handleScroll = () => {
      if (!previewRef.current) return;
      let closestPage = pageNumber;
      Object.entries(pageRefs.current).forEach(([pageNum, pageEl]) => {
        if (pageEl instanceof HTMLElement) {
          const { top, bottom } = pageEl.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= 0) {
            closestPage = Number(pageNum);
          }
        }
      });
      setPreviewNumber(closestPage);
      setPageNumber(closestPage);
    };
    const debouncedHandleScroll = debounce(handleScroll, 500);
    const scrollContainer = previewRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", debouncedHandleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", debouncedHandleScroll);
      }
    };
  }, [pageNumber, numPages]);
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && fullScreenView) {
        setFullScreenView(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [fullScreenView]);
  const rotatePage = (pageNum, clockwise = true) => {
    setPageRotations((prev) => {
      const currentRotation = prev[pageNum] || 0;
      const newRotation = (currentRotation + (clockwise ? 90 : -90)) % 360;
      return __spreadProps(__spreadValues({}, prev), { [pageNum]: newRotation < 0 ? newRotation + 360 : newRotation });
    });
  };
  useEffect(() => {
    setIsTextLayerEnabled(Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy));
  }, [textOptions == null ? void 0 : textOptions.enableSelection, textOptions == null ? void 0 : textOptions.enableCopy]);
  const documentOptions = useMemo(
    () => ({
      cMapUrl: "https://unpkg.com/pdfjs-dist@3.4.120/cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/"
    }),
    []
  );
  const onDocumentLoadError = useCallback(() => {
    console.error(`Failed to load PDF (Attempt ${retryCount + 1})`);
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
    }
  }, [retryCount, maxRetries]);
  const handlePrint = useCallback(() => {
    printPdf();
  }, []);
  const printPdf = useCallback(() => {
    try {
      console.log("Printing PDF directly from the viewer");
      setOriginalZoom(scale);
      setScale(1);
      setIsPrinting(true);
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          setIsPrinting(false);
          if (originalZoom !== null) {
            setScale(originalZoom);
            setOriginalZoom(null);
          }
        }, 1e3);
      }, 300);
    } catch (error) {
      console.error("Error in print function:", error);
      setIsPrinting(false);
      if (originalZoom !== null) {
        setScale(originalZoom);
        setOriginalZoom(null);
      }
      alert("An error occurred while trying to print. Please try again.");
    }
  }, [originalZoom, scale]);
  useEffect(() => {
    if (isPrinting) {
      const style = document.createElement("style");
      style.id = "adex-print-styles";
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
          .adex-topbar, .adex-power-row, .adex-preview-thumbs, .adex-preview-search, .adex-preview-bookmarks, .adex-pdf-meta-info,.adex-left-col,.adex-preview-annotations {
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
      `;
      document.head.appendChild(style);
      return () => {
        const styleElement = document.getElementById("adex-print-styles");
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, [isPrinting]);
  const toggleSearch = useCallback(() => {
    setLeftPanel(1);
    setSidebar(true);
    setShowSearch((prev) => {
      const newState = !prev;
      if (newState && searchInputRef.current) {
        setTimeout(() => {
          var _a2;
          (_a2 = searchInputRef.current) == null ? void 0 : _a2.focus();
        }, 100);
      }
      return newState;
    });
    if (showSearch) {
      setSearchQuery("");
      setSearchResults([]);
      setCurrentSearchResult(-1);
      setShowSearchSidebar(false);
    }
  }, [showSearch]);
  const getContextAroundMatch = (text, matchIndex, matchLength, contextLength = 30) => {
    const startIndex = Math.max(0, matchIndex - contextLength);
    const endIndex = Math.min(text.length, matchIndex + matchLength + contextLength);
    let context = text.substring(startIndex, endIndex);
    if (startIndex > 0) context = "..." + context;
    if (endIndex < text.length) context = context + "...";
    return context;
  };
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);
  const navigateToSearchResult = useCallback(
    (result) => {
      if (!result) return;
      goToPage(result.pageIndex + 1);
      setTimeout(() => {
        const pageElement = pageRefs.current[result.pageIndex + 1];
        if (!pageElement) return;
        const textLayer = pageElement.querySelector(".react-pdf__Page__textContent");
        if (!textLayer) return;
        document.querySelectorAll(".adex-search-highlight").forEach((el) => {
          el.remove();
        });
        const textSpans = textLayer.querySelectorAll("span");
        if (!textSpans || textSpans.length === 0) return;
        const searchLower = searchQuery.toLowerCase();
        let foundCurrentResult = false;
        let highlightElement = null;
        for (let i = 0; i < textSpans.length; i++) {
          const span = textSpans[i];
          const text = span.textContent || "";
          const textLower = text.toLowerCase();
          let startIndex = 0;
          let index;
          while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
            const highlight = document.createElement("div");
            highlight.className = "adex-search-highlight";
            const rect = span.getBoundingClientRect();
            const textLayerRect = textLayer.getBoundingClientRect();
            const left = rect.left - textLayerRect.left;
            const top = rect.top - textLayerRect.top;
            highlight.style.left = `${left}px`;
            highlight.style.top = `${top}px`;
            highlight.style.width = `${rect.width}px`;
            highlight.style.height = `${rect.height}px`;
            const resultId = `search-highlight-${result.matchIndex}-${i}-${index}`;
            highlight.id = resultId;
            if (!foundCurrentResult && result.text.toLowerCase() === searchLower) {
              highlight.classList.add("current");
              highlightElement = highlight;
              foundCurrentResult = true;
            }
            textLayer.appendChild(highlight);
            startIndex = index + searchLower.length;
          }
        }
        if (highlightElement) {
          highlightElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
        if (searchResultsRef.current) {
          const resultElement = searchResultsRef.current.querySelector(`#search-result-${result.matchIndex}`);
          if (resultElement) {
            searchResultsRef.current.querySelectorAll(".adex-search-result-item").forEach((el) => {
              el.classList.remove("active");
            });
            resultElement.classList.add("active");
            resultElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      }, 300);
    },
    [goToPage, searchQuery]
  );
  const performSearch = useCallback(() => __async(void 0, null, function* () {
    if (!searchQuery.trim() || !pdfDocument) {
      return;
    }
    setIsSearching(true);
    setSearchResults([]);
    setCurrentSearchResult(-1);
    try {
      const results = [];
      if (!pdfDocument || !pdfDocument.numPages) {
        throw new Error("PDF document is not available or fully loaded");
      }
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        try {
          const page = yield pdfDocument.getPage(i);
          if (!page) {
            console.warn(`Page ${i} could not be loaded, skipping`);
            continue;
          }
          const textContent = yield page.getTextContent();
          const viewport = page.getViewport({ scale: 1 });
          const pageText = textContent.items.map((item) => item.str).join(" ");
          const searchRegex = new RegExp(searchQuery, "gi");
          let match;
          while ((match = searchRegex.exec(pageText)) !== null) {
            const context = getContextAroundMatch(pageText, match.index, searchQuery.length);
            results.push({
              pageIndex: i - 1,
              matchIndex: results.length,
              text: match[0],
              context,
              position: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }
            });
          }
        } catch (pageError) {
          console.warn(`Error processing page ${i} during search:`, pageError);
          continue;
        }
      }
      setSearchResults(results);
      if (results.length > 0) {
        setCurrentSearchResult(0);
        navigateToSearchResult(results[0]);
        setShowSearchSidebar(true);
      }
    } catch (error) {
      console.error("Error searching PDF:", error);
      alert("There was an error while searching. Please try again after the document is fully loaded.");
    } finally {
      setIsSearching(false);
    }
  }), [searchQuery, pdfDocument, navigateToSearchResult]);
  const handleSearchKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (!pdfDocument || !pdfDocument.numPages) {
          alert("Please wait for the document to fully load before searching.");
          return;
        }
        performSearch();
      }
    },
    [pdfDocument, performSearch]
  );
  const nextSearchResult = useCallback(() => {
    if (searchResults.length === 0) return;
    const nextIndex = (currentSearchResult + 1) % searchResults.length;
    setCurrentSearchResult(nextIndex);
    navigateToSearchResult(searchResults[nextIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const prevSearchResult = useCallback(() => {
    if (searchResults.length === 0) return;
    const prevIndex = (currentSearchResult - 1 + searchResults.length) % searchResults.length;
    setCurrentSearchResult(prevIndex);
    navigateToSearchResult(searchResults[prevIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const highlightAllResultsOnPage = useCallback(
    (pageIndex) => {
      const pageElement = pageRefs.current[pageIndex + 1];
      if (!pageElement) return;
      const textLayer = pageElement.querySelector(".react-pdf__Page__textContent");
      if (!textLayer) return;
      pageElement.querySelectorAll(".adex-search-highlight").forEach((el) => el.remove());
      if (!searchQuery || searchResults.length === 0) return;
      const textSpans = textLayer.querySelectorAll("span");
      if (!textSpans || textSpans.length === 0) return;
      const searchLower = searchQuery.toLowerCase();
      for (let i = 0; i < textSpans.length; i++) {
        const span = textSpans[i];
        const text = span.textContent || "";
        const textLower = text.toLowerCase();
        let startIndex = 0;
        let index;
        while ((index = textLower.indexOf(searchLower, startIndex)) !== -1) {
          const highlight = document.createElement("div");
          highlight.className = "adex-search-highlight";
          const rect = span.getBoundingClientRect();
          const textLayerRect = textLayer.getBoundingClientRect();
          const left = rect.left - textLayerRect.left;
          const top = rect.top - textLayerRect.top;
          highlight.style.left = `${left}px`;
          highlight.style.top = `${top}px`;
          highlight.style.width = `${rect.width}px`;
          highlight.style.height = `${rect.height}px`;
          const isCurrentResult = searchResults.some(
            (result) => result.pageIndex === pageIndex && result.matchIndex === currentSearchResult && result.text.toLowerCase() === text.substring(index, index + searchLower.length).toLowerCase()
          );
          if (isCurrentResult) {
            highlight.classList.add("current");
          }
          textLayer.appendChild(highlight);
          startIndex = index + searchLower.length;
        }
      }
    },
    [searchQuery, searchResults, currentSearchResult]
  );
  useEffect(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      highlightAllResultsOnPage(pageNumber - 1);
    }
  }, [pageNumber, searchResults, highlightAllResultsOnPage]);
  useEffect(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      const timer = setTimeout(() => {
        highlightAllResultsOnPage(pageNumber - 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scale, pageNumber, searchResults, highlightAllResultsOnPage]);
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
`;
  useEffect(() => {
    if (documentOutline.length > 0) {
      const initialExpandedState = {};
      const initializeExpandedState = (items, level) => {
        items.forEach((item) => {
          initialExpandedState[item.id] = level === 0;
          if (item.items && item.items.length > 0) {
            initializeExpandedState(item.items, level + 1);
          }
        });
      };
      initializeExpandedState(documentOutline, 0);
      setExpandedOutlineItems(initialExpandedState);
    }
  }, [documentOutline]);
  const renderOutlineItems = (items) => {
    return items.map((item) => /* @__PURE__ */ jsxs("div", { className: "adex-outline-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "adex-outline-item-content", children: [
        item.items && item.items.length > 0 ? /* @__PURE__ */ jsx(
          "button",
          {
            className: "adex-outline-toggle",
            onClick: () => toggleOutlineItem(item.id),
            "aria-label": expandedOutlineItems[item.id] ? "Collapse" : "Expand",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                style: {
                  transform: expandedOutlineItems[item.id] ? "rotate(90deg)" : "rotate(0deg)"
                },
                children: /* @__PURE__ */ jsx("path", { d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })
              }
            )
          }
        ) : /* @__PURE__ */ jsx("span", { className: "adex-outline-toggle", style: { width: "20px" } }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "adex-outline-link",
            onClick: () => navigateToOutlineItem(item),
            disabled: !item.pageNumber && !item.dest,
            children: [
              item.title,
              item.pageNumber && /* @__PURE__ */ jsxs("span", { className: "adex-outline-page", children: [
                "p. ",
                item.pageNumber
              ] })
            ]
          }
        )
      ] }),
      item.items && item.items.length > 0 && expandedOutlineItems[item.id] && /* @__PURE__ */ jsx("div", { className: "adex-outline-children", style: { marginLeft: "20px" }, children: renderOutlineItems(item.items) })
    ] }, item.id));
  };
  const startAddingAnnotation = useCallback((type) => {
    setIsAddingAnnotation(true);
    setAnnotationType(type);
    setNewAnnotationContent("");
  }, []);
  const cancelAddingAnnotation = useCallback(() => {
    setIsAddingAnnotation(false);
    setCurrentDrawingPoints([]);
  }, []);
  const addAnnotation = useCallback(
    (pageNumber2, position) => {
      if (annotationType === "drawing" && currentDrawingPoints.length < 2) {
        return;
      }
      const newAnnotation = {
        id: `annotation-${Date.now()}`,
        pageNumber: pageNumber2,
        type: annotationType,
        content: newAnnotationContent,
        color: annotationColor,
        position,
        points: annotationType === "drawing" ? currentDrawingPoints : void 0,
        createdAt: Date.now()
      };
      setAnnotations((prev) => {
        const updatedAnnotations = [...prev, newAnnotation];
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      setIsAddingAnnotation(false);
      setCurrentDrawingPoints([]);
      setNewAnnotationContent("");
    },
    [annotationType, newAnnotationContent, annotationColor, currentDrawingPoints, data == null ? void 0 : data.url]
  );
  const deleteAnnotation = useCallback(
    (id) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.filter((annotation) => annotation.id !== id);
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      if ((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === id) {
        setSelectedAnnotation(null);
      }
    },
    [selectedAnnotation, data == null ? void 0 : data.url]
  );
  const updateAnnotation = useCallback(
    (id, updates) => {
      setAnnotations((prev) => {
        const updatedAnnotations = prev.map(
          (annotation) => annotation.id === id ? __spreadValues(__spreadValues({}, annotation), updates) : annotation
        );
        localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
        return updatedAnnotations;
      });
      if ((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === id) {
        setSelectedAnnotation((prev) => prev ? __spreadValues(__spreadValues({}, prev), updates) : null);
      }
    },
    [selectedAnnotation, data == null ? void 0 : data.url]
  );
  const handleDrawingMouseDown = useCallback(
    (e, pageNumber2) => {
      if (isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(true);
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        setCurrentDrawingPoints([{ x, y }]);
      }
    },
    [isAddingAnnotation, annotationType, scale]
  );
  const handleDrawingMouseMove = useCallback(
    (e) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        setCurrentDrawingPoints((prev) => [...prev, { x, y }]);
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, scale]
  );
  const handleDrawingMouseUp = useCallback(
    (e, pageNumber2) => {
      if (isDrawing && isAddingAnnotation && annotationType === "drawing") {
        setIsDrawing(false);
        if (currentDrawingPoints.length < 2) {
          return;
        }
        const minX = Math.min(...currentDrawingPoints.map((p) => p.x));
        const minY = Math.min(...currentDrawingPoints.map((p) => p.y));
        const maxX = Math.max(...currentDrawingPoints.map((p) => p.x));
        const maxY = Math.max(...currentDrawingPoints.map((p) => p.y));
        const width = Math.max(maxX - minX, 1);
        const height = Math.max(maxY - minY, 1);
        const adjustedPoints = currentDrawingPoints.map((point) => ({
          x: point.x - minX,
          y: point.y - minY
        }));
        const newAnnotation = {
          id: `annotation-${Date.now()}`,
          pageNumber: pageNumber2,
          type: "drawing",
          content: "",
          color: annotationColor,
          position: {
            x: minX,
            y: minY,
            width,
            height
          },
          points: adjustedPoints,
          createdAt: Date.now()
        };
        setAnnotations((prev) => {
          const updatedAnnotations = [...prev, newAnnotation];
          localStorage.setItem(`pdf-annotations-${data == null ? void 0 : data.url}`, JSON.stringify(updatedAnnotations));
          return updatedAnnotations;
        });
        setIsAddingAnnotation(false);
        setCurrentDrawingPoints([]);
      }
    },
    [isDrawing, isAddingAnnotation, annotationType, currentDrawingPoints, annotationColor, data == null ? void 0 : data.url]
  );
  const handlePageClick = useCallback(
    (e, pageNumber2) => {
      if (isAddingAnnotation && annotationType === "note") {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / scale;
        const y = (e.clientY - rect.top) / scale;
        addAnnotation(pageNumber2, { x, y });
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation]
  );
  const handleTextSelection = useCallback(
    (pageNumber2) => {
      if (isAddingAnnotation && annotationType === "highlight") {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        const rects = range.getClientRects();
        if (rects.length === 0) return;
        const pageElement = pageRefs.current[pageNumber2];
        if (!pageElement) return;
        const pageRect = pageElement.getBoundingClientRect();
        const firstRect = rects[0];
        const lastRect = rects[rects.length - 1];
        const x = (firstRect.left - pageRect.left) / scale;
        const y = (firstRect.top - pageRect.top) / scale;
        const width = (lastRect.right - firstRect.left) / scale;
        const height = Math.max(...Array.from(rects).map((r) => r.height)) / scale;
        addAnnotation(pageNumber2, { x, y, width, height });
        selection.removeAllRanges();
      }
    },
    [isAddingAnnotation, annotationType, scale, addAnnotation]
  );
  useEffect(() => {
    if (data == null ? void 0 : data.url) {
      const savedAnnotations = localStorage.getItem(`pdf-annotations-${data == null ? void 0 : data.url}`);
      if (savedAnnotations) {
        try {
          setAnnotations(JSON.parse(savedAnnotations));
        } catch (error) {
          console.error("Error parsing saved annotations:", error);
        }
      }
    }
  }, [data == null ? void 0 : data.url]);
  const renderAnnotations = useCallback(
    (pageNumber2) => {
      const pageAnnotations = annotations.filter((a) => a.pageNumber === pageNumber2);
      return pageAnnotations.map((annotation) => {
        const { id, type, position, color, content, points } = annotation;
        if (type === "note") {
          return /* @__PURE__ */ jsx(
            "div",
            {
              "data-id": id,
              className: "adex-annotation adex-note-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                zIndex: 100,
                cursor: "pointer",
                background: color
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              },
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" }) })
            },
            id
          );
        }
        if (type === "highlight") {
          return /* @__PURE__ */ jsx(
            "div",
            {
              "data-id": id,
              className: "adex-annotation adex-highlight-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                backgroundColor: color,
                opacity: 0.3,
                zIndex: 50,
                pointerEvents: "none"
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              }
            },
            id
          );
        }
        if (type === "drawing" && points && points.length > 1) {
          const pathData = points.reduce((path, point, index) => {
            return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
          }, "");
          return /* @__PURE__ */ jsx(
            "svg",
            {
              "data-id": id,
              className: "adex-annotation adex-drawing-annotation",
              style: {
                position: "absolute",
                left: `${position.x * scale}px`,
                top: `${position.y * scale}px`,
                width: `${(position.width || 0) * scale}px`,
                height: `${(position.height || 0) * scale}px`,
                zIndex: 75,
                pointerEvents: "auto",
                // Change from "none" to "auto" to make it clickable
                cursor: "pointer"
              },
              onClick: () => {
                setSelectedAnnotation(annotation), setSidebar(true), setLeftPanel(3);
              },
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: pathData,
                  stroke: color,
                  strokeWidth: "2",
                  fill: "none",
                  vectorEffect: "non-scaling-stroke",
                  transform: `scale(${scale})`
                }
              )
            },
            id
          );
        }
        return null;
      });
    },
    [annotations, scale]
  );
  const renderCurrentDrawing = useCallback(() => {
    if (!isDrawing || currentDrawingPoints.length < 2) return null;
    const pathData = currentDrawingPoints.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
    }, "");
    return /* @__PURE__ */ jsx(
      "svg",
      {
        className: "adex-current-drawing",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 75,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: pathData,
            stroke: annotationColor,
            strokeWidth: "3",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    );
  }, [isDrawing, currentDrawingPoints, annotationColor]);
  const renderAnnotationDetail = useCallback(
    (annotation) => {
      return /* @__PURE__ */ jsxs("div", { className: "adex-annotation-detail", children: [
        /* @__PURE__ */ jsx("div", { className: "adex-annotation-detail-header", children: /* @__PURE__ */ jsx("div", { className: "adex-annotation-detail-actions" }) }),
        /* @__PURE__ */ jsxs("div", { className: "adex-annotation-detail-content", children: [
          (annotation.type === "note" || annotation.type === "highlight") && /* @__PURE__ */ jsx("div", { className: "adex-annotation-content-editor", children: /* @__PURE__ */ jsx(
            "textarea",
            {
              value: annotation.content || "",
              onChange: (e) => updateAnnotation(annotation.id, { content: e.target.value }),
              placeholder: "Add a note...",
              onClick: (e) => e.stopPropagation()
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "adex-annotation-color-picker", children: [
            /* @__PURE__ */ jsx("div", { className: "adex-color-options", children: ["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => /* @__PURE__ */ jsx(
              "button",
              {
                className: `adex-color-option ${annotation.color === color ? "active" : ""}`,
                style: { backgroundColor: color },
                onClick: (e) => {
                  e.stopPropagation();
                  updateAnnotation(annotation.id, { color });
                },
                "aria-label": `Set color to ${color}`
              },
              color
            )) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "adex-annotation-delete",
                onClick: (e) => {
                  e.stopPropagation();
                  deleteAnnotation(annotation.id);
                },
                "aria-label": "Delete annotation",
                children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "adex-annotation-page", children: [
            "Page ",
            annotation.pageNumber,
            " - ",
            new Date(annotation.createdAt).toLocaleString()
          ] })
        ] })
      ] });
    },
    [deleteAnnotation, updateAnnotation]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: viewerRef,
      className: `PDFViewer adex-viewer ${fullScreenView ? "fullScreenView" : ""} ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} dev-abhishekbagul ${isMobile ? "adex-mobile" : ""} ${!textOptions.enableSelection ? "disable-text-selection" : ""} ${isPrinting ? "adex-printing" : ""}`,
      children: [
        showToolbar && /* @__PURE__ */ jsxs("div", { className: "adex-topbar", children: [
          (showControls == null ? void 0 : showControls.navigation) && /* @__PURE__ */ jsxs("div", { className: "adex-control-page", children: [
            (showControls == null ? void 0 : showControls.sidebarButton) ? /* @__PURE__ */ jsx("button", { onClick: () => setSidebar(!sidebar), "aria-label": "Toggle sidebar", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-layout-text-sidebar-reverse",
                viewBox: "0 0 16 16",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" }),
                  /* @__PURE__ */ jsx("path", { d: "M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z" })
                ]
              }
            ) }) : /* @__PURE__ */ jsx("div", {}),
            /* @__PURE__ */ jsx("button", { disabled: pageNumber <= 1, onClick: () => goToPage(pageNumber - 1), "aria-label": "Previous page", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-chevron-up",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "page-number",
                  type: "number",
                  onChange: updatePDFPage,
                  value: previewNumber,
                  "aria-label": "Page number"
                }
              ),
              " ",
              "/ ",
              numPages || "?"
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: numPages === null || pageNumber >= numPages,
                onClick: () => goToPage(pageNumber + 1),
                "aria-label": "Next page",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-chevron-down",
                    viewBox: "0 0 16 16",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          (showControls == null ? void 0 : showControls.zoom) && /* @__PURE__ */ jsxs("div", { className: "adex-control-zoom", children: [
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => rotatePage(pageNumber, false),
                "aria-label": "Rotate counterclockwise",
                title: "Rotate counterclockwise",
                children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" }),
                      /* @__PURE__ */ jsx("path", { d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("select", { onChange: (e) => setScale(+e.target.value), value: scale, "aria-label": "Zoom level", children: scaleSets.map((scaleLevel) => /* @__PURE__ */ jsxs("option", { value: scaleLevel, children: [
              (scaleLevel * 100).toFixed(0),
              "%"
            ] }, scaleLevel)) }),
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => rotatePage(pageNumber, true),
                "aria-label": "Rotate clockwise",
                title: "Rotate clockwise",
                children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" }),
                      /* @__PURE__ */ jsx("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "adex-control-options", children: [
            (showControls == null ? void 0 : showControls.print) && /* @__PURE__ */ jsx("button", { onClick: handlePrint, "aria-label": "Print document", title: "Print document", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
              /* @__PURE__ */ jsx("path", { d: "M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }),
              /* @__PURE__ */ jsx("path", { d: "M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" })
            ] }) }),
            (showControls == null ? void 0 : showControls.fullscreen) && /* @__PURE__ */ jsx("button", { onClick: toggleFullscreen, "aria-label": fullScreenView ? "Exit fullscreen" : "Enter fullscreen", children: !fullScreenView ? /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-arrows-fullscreen",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                  }
                )
              }
            ) : /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-fullscreen-exit",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ jsx("path", { d: "M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" })
              }
            ) }),
            (showControls == null ? void 0 : showControls.download) && /* @__PURE__ */ jsx(
              "a",
              {
                href: data == null ? void 0 : data.url,
                download: "document.pdf",
                className: "open-link-btn",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Download PDF",
                children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-box-arrow-down",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "adex-preview-panel", style: { display: "flex" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "adex-left-col", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setLeftPanel(0), setSidebar(true);
                },
                "aria-label": "Pages Previews",
                title: "Pages Previews",
                className: leftPanel == 0 ? "active" : "",
                children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ jsx("path", { d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" }),
                  /* @__PURE__ */ jsx("path", { d: "M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" })
                ] })
              }
            ),
            (showControls == null ? void 0 : showControls.search) && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleSearch,
                "aria-label": "Search document",
                title: "Search document",
                className: leftPanel == 1 ? "active" : "",
                children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }) })
              }
            ),
            (showControls == null ? void 0 : showControls.bookmarks) && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleBookmarksSidebar,
                "aria-label": "Bookmarks and outline",
                title: "Bookmarks and outline",
                className: leftPanel == 2 ? "active" : "",
                children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ jsx("path", { d: "M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" }),
                  /* @__PURE__ */ jsx("path", { d: "M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" })
                ] })
              }
            ),
            (showControls == null ? void 0 : showControls.annotations) && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toggleAnnotationsSidebar(),
                "aria-label": "Annotations",
                title: "Annotations",
                className: leftPanel == 3 ? "active" : "",
                children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "adex-left-panel",
              style: {
                width: sidebar ? `${leftPanelWidth}px` : "0px",
                flexShrink: 0,
                transition: isDragging ? "none" : "0.2s width ease",
                overflow: "hidden",
                position: "relative"
              },
              children: [
                leftPanel == 0 && /* @__PURE__ */ jsx("div", { className: "adex-preview-thumbs", children: pdfBlobUrl && /* @__PURE__ */ jsxs(
                  Document,
                  {
                    file: pdfBlobUrl,
                    loading: /* @__PURE__ */ jsxs("div", { className: "adex-thumb-loader", children: [
                      /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ jsx("span", { className: "thumb-loader" })
                    ] }),
                    onLoadSuccess: onDocumentLoadSuccess,
                    onLoadError: onDocumentLoadError,
                    children: [
                      !pdfBlobUrl && /* @__PURE__ */ jsxs("div", { className: "adex-thumb-loader", children: [
                        /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ jsx("span", { className: "thumb-loader" })
                      ] }),
                      numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: `adex-page-thumb ${pageNumber === index + 1 ? "active" : ""}`,
                          onClick: () => goToPage(index + 1),
                          "aria-label": `Page ${index + 1}`,
                          "aria-current": pageNumber === index + 1 ? "page" : void 0,
                          children: /* @__PURE__ */ jsx(
                            Page,
                            {
                              scale: 0.2,
                              loading: /* @__PURE__ */ jsx("div", { className: "adex-thumb-loader", children: /* @__PURE__ */ jsx("span", { className: "thumb-loader" }) }),
                              pageNumber: index + 1,
                              width: 600,
                              rotate: pageRotations[index + 1] || 0
                            }
                          )
                        },
                        `thumb-${index}`
                      ))
                    ]
                  }
                ) }),
                leftPanel == 1 && /* @__PURE__ */ jsxs("div", { className: "adex-preview-search", ref: searchResultsRef, children: [
                  /* @__PURE__ */ jsxs("div", { className: "adex-search-bar", children: [
                    /* @__PURE__ */ jsxs("div", { className: "adex-search-results-header", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h3", { children: "Search" }),
                        /* @__PURE__ */ jsxs("span", { className: "adex-search-results-count", children: [
                          searchResults.length,
                          " matches"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "adex-search-controls", children: searchResults.length > 0 && /* @__PURE__ */ jsxs("div", { className: "adex-search-navigation", children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            className: "adex-search-prev",
                            onClick: prevSearchResult,
                            disabled: searchResults.length <= 1,
                            "aria-label": "Previous result",
                            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" }) })
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            className: "adex-search-next",
                            onClick: nextSearchResult,
                            disabled: searchResults.length <= 1,
                            "aria-label": "Next result",
                            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" }) })
                          }
                        )
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "adex-search-input-container", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          ref: searchInputRef,
                          type: "text",
                          className: "adex-search-input",
                          placeholder: "Search in document...",
                          value: searchQuery,
                          onChange: handleSearchChange,
                          onKeyDown: handleSearchKeyDown,
                          "aria-label": "Search in document"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "adex-search-button",
                          onClick: performSearch,
                          disabled: isSearching || !searchQuery.trim() || !pdfDocument || !pdfDocument.numPages,
                          "aria-label": "Search",
                          children: isSearching ? /* @__PURE__ */ jsx("span", { className: "adex-search-loading" }) : /* @__PURE__ */ jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: /* @__PURE__ */ jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
                            }
                          )
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "adex-search-results-list", children: searchResults.length > 0 ? searchResults.map((result, index) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      id: `search-result-${result.matchIndex}`,
                      className: `adex-search-result-item ${currentSearchResult === result.matchIndex ? "active" : ""}`,
                      onClick: () => {
                        setCurrentSearchResult(result.matchIndex);
                        navigateToSearchResult(result);
                      },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "adex-search-result-page", children: [
                          "Page ",
                          result.pageIndex + 1
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "adex-search-result-context", children: result.context.split(new RegExp(`(${searchQuery})`, "i")).map(
                          (part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? /* @__PURE__ */ jsx("span", { className: "adex-search-result-highlight", children: part }, i) : /* @__PURE__ */ jsx("span", { children: part }, i)
                        ) })
                      ]
                    },
                    `search-result-${index}`
                  )) : /* @__PURE__ */ jsx("div", { className: "adex-search-no-results", children: isSearching ? "Searching..." : "No results found" }) })
                ] }),
                leftPanel == 2 && /* @__PURE__ */ jsxs("div", { className: "adex-preview-bookmarks", ref: bookmarksRef, children: [
                  /* @__PURE__ */ jsx("div", { className: "adex-bookmarks-header", children: /* @__PURE__ */ jsxs("div", { className: "adex-bookmarks-tabs", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "outline" ? "active" : ""}`,
                        onClick: () => setActiveTab("outline"),
                        children: [
                          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                            /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" }),
                            /* @__PURE__ */ jsx("path", { d: "M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" })
                          ] }),
                          " ",
                          /* @__PURE__ */ jsx("span", { children: "Outline" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "bookmarks" ? "active" : ""}`,
                        onClick: () => setActiveTab("bookmarks"),
                        children: [
                          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                            /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8" }),
                            /* @__PURE__ */ jsx("path", { d: "M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" }),
                            /* @__PURE__ */ jsx("path", { d: "M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" })
                          ] }),
                          /* @__PURE__ */ jsx("span", { children: "Bookmarks" })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "adex-bookmarks-content", children: activeTab === "outline" ? /* @__PURE__ */ jsx("div", { className: "adex-outline-container", children: documentOutline.length > 0 ? /* @__PURE__ */ jsx("div", { className: "adex-outline-list", children: renderOutlineItems(documentOutline) }) : /* @__PURE__ */ jsx("div", { className: "adex-no-outline", children: "No outline available in this document" }) }) : /* @__PURE__ */ jsxs("div", { className: "adex-bookmarks-container", children: [
                    /* @__PURE__ */ jsx("div", { className: "adex-bookmarks-actions", children: isAddingBookmark ? /* @__PURE__ */ jsxs("div", { className: "adex-add-bookmark-form", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          className: "adex-bookmark-title-input",
                          placeholder: "Bookmark title",
                          value: newBookmarkTitle,
                          onChange: (e) => setNewBookmarkTitle(e.target.value),
                          autoFocus: true,
                          onKeyDown: (e) => {
                            if (e.key === "Enter") addBookmark();
                            if (e.key === "Escape") setIsAddingBookmark(false);
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "adex-bookmark-form-actions", children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            className: "adex-bookmark-save",
                            onClick: addBookmark,
                            disabled: !newBookmarkTitle.trim(),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ jsx("button", { className: "adex-bookmark-cancel", onClick: () => setIsAddingBookmark(false), children: "Cancel" })
                      ] })
                    ] }) : /* @__PURE__ */ jsxs("button", { className: "adex-add-bookmark-btn", onClick: () => setIsAddingBookmark(true), children: [
                      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                        /* @__PURE__ */ jsx("path", { d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" }),
                        /* @__PURE__ */ jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4" })
                      ] }),
                      "Add Bookmark"
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "adex-bookmarks-list", children: bookmarks.length > 0 ? bookmarks.sort((a, b) => a.pageNumber - b.pageNumber).map((bookmark) => /* @__PURE__ */ jsxs("div", { className: "adex-bookmark-item", children: [
                      /* @__PURE__ */ jsxs("button", { className: "adex-bookmark-link", onClick: () => navigateToBookmark(bookmark), children: [
                        /* @__PURE__ */ jsx(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsx("path", { d: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" })
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "adex-bookmark-title", children: bookmark.title }),
                        /* @__PURE__ */ jsxs("span", { className: "adex-bookmark-page", children: [
                          "p. ",
                          bookmark.pageNumber
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "adex-bookmark-delete",
                          onClick: () => deleteBookmark(bookmark.id),
                          "aria-label": `Delete bookmark: ${bookmark.title}`,
                          children: /* @__PURE__ */ jsxs(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "12",
                              height: "12",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: [
                                /* @__PURE__ */ jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                                /* @__PURE__ */ jsx(
                                  "path",
                                  {
                                    fillRule: "evenodd",
                                    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  }
                                )
                              ]
                            }
                          )
                        }
                      )
                    ] }, bookmark.id)) : /* @__PURE__ */ jsx("div", { className: "adex-no-bookmarks", children: "No bookmarks added yet" }) })
                  ] }) })
                ] }),
                leftPanel == 3 && /* @__PURE__ */ jsxs("div", { className: "adex-preview-annotations", children: [
                  /* @__PURE__ */ jsxs("div", { className: "adex-annotations-header", children: [
                    /* @__PURE__ */ jsx("h3", { children: "Annotations" }),
                    /* @__PURE__ */ jsxs("div", { className: "adex-annotations-tools", children: [
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "note" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "note" ? cancelAddingAnnotation() : startAddingAnnotation("note"),
                          "aria-label": "Add note",
                          title: "Add note",
                          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "highlight" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "highlight" ? cancelAddingAnnotation() : startAddingAnnotation("highlight"),
                          "aria-label": "Add highlight",
                          title: "Add highlight",
                          disabled: !textOptions.enableSelection,
                          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z" }) })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: `adex-annotation-tool ${isAddingAnnotation && annotationType === "drawing" ? "active" : ""}`,
                          onClick: () => isAddingAnnotation && annotationType === "drawing" ? cancelAddingAnnotation() : startAddingAnnotation("drawing"),
                          "aria-label": "Add drawing",
                          title: "Add drawing",
                          children: /* @__PURE__ */ jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: /* @__PURE__ */ jsx("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })
                            }
                          )
                        }
                      )
                    ] }),
                    isAddingAnnotation && /* @__PURE__ */ jsxs("div", { className: "adex-annotation-color-picker", children: [
                      /* @__PURE__ */ jsx("div", { className: "adex-color-options", children: ["#ffeb3b", "#4caf50", "#2196f3", "#f44336", "#9c27b0"].map((color) => /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: `adex-color-option ${annotationColor === color ? "active" : ""}`,
                          style: { backgroundColor: color },
                          onClick: () => setAnnotationColor(color),
                          "aria-label": `Set color to ${color}`
                        },
                        color
                      )) }),
                      /* @__PURE__ */ jsx("button", { className: "adex-cancel-annotation", onClick: cancelAddingAnnotation, "aria-label": "Cancel", children: "Cancel" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "adex-annotations-list", children: annotations.length > 0 ? annotations.sort((a, b) => b.createdAt - a.createdAt).map((annotation) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `adex-annotation-item ${(selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id ? "active" : ""}`,
                      onClick: () => {
                        setSelectedAnnotation((selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id ? null : annotation);
                        goToPage(annotation.pageNumber);
                        setTimeout(() => {
                          const pageElement = pageRefs.current[annotation.pageNumber];
                          if (pageElement) {
                            const annotationElements = pageElement.querySelectorAll(
                              `.adex-annotation[data-id="${annotation.id}"]`
                            );
                            if (annotationElements.length > 0) {
                              annotationElements[0].scrollIntoView({ behavior: "smooth", block: "center" });
                            }
                          }
                        }, 300);
                      },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "adex-annotation-list-item", children: [
                          /* @__PURE__ */ jsxs("div", { className: "adex-annotation-icon", style: { background: annotation.color }, children: [
                            annotation.type === "note" && /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z" }) }),
                            annotation.type === "highlight" && /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z" }) }),
                            annotation.type === "drawing" && /* @__PURE__ */ jsx(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                viewBox: "0 0 16 16",
                                children: /* @__PURE__ */ jsx("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "adex-annotation-content", children: [
                            /* @__PURE__ */ jsxs("div", { className: "adex-annotation-title", children: [
                              annotation.type.charAt(0).toUpperCase() + annotation.type.slice(1),
                              /* @__PURE__ */ jsxs("span", { className: "adex-annotation-page", children: [
                                "Page ",
                                annotation.pageNumber
                              ] })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "adex-annotation-preview", children: annotation.content ? annotation.content.substring(0, 50) + (annotation.content.length > 50 ? "..." : "") : "No content" })
                          ] })
                        ] }),
                        (selectedAnnotation == null ? void 0 : selectedAnnotation.id) === annotation.id && renderAnnotationDetail(annotation)
                      ]
                    },
                    annotation.id
                  )) : /* @__PURE__ */ jsx("div", { className: "adex-no-annotations", children: "No annotations added yet. Use the tools above to add annotations to your document." }) })
                ] })
              ]
            }
          ),
          sidebar && /* @__PURE__ */ jsx(
            "div",
            {
              ref: resizeDividerRef,
              style: {
                width: "8px",
                cursor: "col-resize",
                background: "rgba(0, 0, 0, 0.05)",
                flexShrink: 0,
                zIndex: 10,
                position: "relative"
              },
              onMouseDown: startResize,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "4px",
                    height: "30px",
                    borderRadius: "2px",
                    background: "rgba(0, 0, 0, 0.2)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { ref: previewRef, className: "adex-preview", style: { flex: 1, overflow: "auto" }, children: pdfBlobUrl && /* @__PURE__ */ jsxs(
            Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ jsxs("div", { className: "adex-preview-loader", children: [
                /* @__PURE__ */ jsx("span", { className: "page-loader" }),
                /* @__PURE__ */ jsx("span", { className: "page-loader" })
              ] }),
              onLoadSuccess: onDocumentLoadSuccess,
              onLoadError: onDocumentLoadError,
              options: documentOptions,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ jsxs("div", { className: "adex-preview-loader", children: [
                  /* @__PURE__ */ jsx("span", { className: "page-loader" }),
                  /* @__PURE__ */ jsx("span", { className: "page-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    ref: (el) => pageRefs.current[index + 1] = el,
                    className: "adex-page",
                    "aria-label": `Page ${index + 1} content`,
                    onClick: (e) => handlePageClick(e, index + 1),
                    onMouseDown: (e) => handleDrawingMouseDown(e, index + 1),
                    onMouseMove: handleDrawingMouseMove,
                    onMouseUp: (e) => {
                      handleDrawingMouseUp(e, index + 1), handleTextSelection(index + 1);
                    },
                    onMouseLeave: (e) => isDrawing && handleDrawingMouseUp(e, index + 1),
                    children: [
                      /* @__PURE__ */ jsx(
                        Page,
                        {
                          loading: /* @__PURE__ */ jsx("div", { className: "adex-preview-loader", children: /* @__PURE__ */ jsx("span", { className: "page-loader" }) }),
                          scale,
                          pageNumber: index + 1,
                          width: 600,
                          rotate: pageRotations[index + 1] || 0,
                          renderTextLayer: isTextLayerEnabled,
                          renderAnnotationLayer: isTextLayerEnabled,
                          canvasBackground: "white"
                        }
                      ),
                      renderAnnotations(index + 1),
                      isDrawing && index + 1 === pageNumber && renderCurrentDrawing()
                    ]
                  },
                  `page-${index}`
                ))
              ]
            }
          ) }),
          showInfo && /* @__PURE__ */ jsx("div", { className: "adex-pdf-meta-info", children: /* @__PURE__ */ jsxs("div", { className: "adex-meta-panel", children: [
            /* @__PURE__ */ jsxs("div", { className: "adex-pdf-meta-info-header", children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                " ",
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-info-square",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ jsx("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                      /* @__PURE__ */ jsx("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                    ]
                  }
                ),
                " ",
                "Info: ",
                (metadata == null ? void 0 : metadata.Title) || "N/A"
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setShowInfo(false);
                  },
                  "aria-label": "Close info panel",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-x-square",
                      viewBox: "0 0 16 16",
                      children: [
                        /* @__PURE__ */ jsx("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                        /* @__PURE__ */ jsx("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "adex-pdf-meta-info-content", children: /* @__PURE__ */ jsx("ul", { className: "adex-pdf-meta-info-list", children: (_a = Object == null ? void 0 : Object.entries(metadata || {})) == null ? void 0 : _a.map(([key, value]) => /* @__PURE__ */ jsxs("li", { className: "adex-pdf-meta-info-item", children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                key,
                ":"
              ] }),
              " ",
              typeof value === "object" ? JSON.stringify(value) : value
            ] }, key)) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "adex-power-row", children: [
          /* @__PURE__ */ jsx("div", { className: "adex-left-option", children: (showControls == null ? void 0 : showControls.info) && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setShowInfo(true);
              },
              "aria-label": "Show document information",
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  className: "bi bi-info-square",
                  viewBox: "0 0 16 16",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                    /* @__PURE__ */ jsx("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                  ]
                }
              )
            }
          ) }),
          showCredits && /* @__PURE__ */ jsxs("p", { children: [
            "Created with ",
            /* @__PURE__ */ jsx("span", { children: "\u2665" }),
            " by",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://github.com/abhibagul/", target: "_blank", rel: "noreferrer", children: "Abhishek" })
          ] })
        ] })
      ]
    }
  );
};
var AdexViewer_default = AdexViewer;
export {
  AdexViewer_default as AdexViewer
};
//# sourceMappingURL=index.mjs.map