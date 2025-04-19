"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AdexViewer: () => AdexViewer_default
});
module.exports = __toCommonJS(index_exports);

// src/AdexViewer.tsx
var import_react = require("react");
var import_react_pdf = require("react-pdf");
var import_TextLayer = require("react-pdf/dist/esm/Page/TextLayer.css");
var import_AnnotationLayer = require("react-pdf/dist/esm/Page/AnnotationLayer.css");
var import_jsx_runtime = require("react/jsx-runtime");
import_react_pdf.pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf.pdfjs.version}/pdf.worker.min.js`;
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
    // Default to showing rotation controls
    print: true,
    // Default to showing print button
    search: true,
    // Default to showing search functionality
    bookmarks: true
    // Default to showing bookmarks functionality
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
  const [numPages, setNumPages] = (0, import_react.useState)(null);
  const [pageNumber, setPageNumber] = (0, import_react.useState)(defaultValues.page || 1);
  const [scale, setScale] = (0, import_react.useState)(defaultValues.zoom || 1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = (0, import_react.useState)(null);
  const [fullScreenView, setFullScreenView] = (0, import_react.useState)(defaultValues.fullscreen || false);
  const [sidebar, setSidebar] = (0, import_react.useState)(showSidebar || false);
  const [previewNumber, setPreviewNumber] = (0, import_react.useState)(defaultValues.page || 1);
  const [retryCount, setRetryCount] = (0, import_react.useState)(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = (0, import_react.useState)(5);
  const viewerRef = (0, import_react.useRef)(null);
  const pageRefs = (0, import_react.useRef)({});
  const previewRef = (0, import_react.useRef)(null);
  const printIframeRef = (0, import_react.useRef)(null);
  const showCredits = credits != null ? credits : true;
  const [metadata, setMetadata] = (0, import_react.useState)(null);
  const [showInfo, setShowInfo] = (0, import_react.useState)(false);
  const [isPrinting, setIsPrinting] = (0, import_react.useState)(false);
  const maxRetries = 5;
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  const [pageRotations, setPageRotations] = (0, import_react.useState)({});
  const [isTextLayerEnabled, setIsTextLayerEnabled] = (0, import_react.useState)(
    Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy)
  );
  const [originalZoom, setOriginalZoom] = (0, import_react.useState)(null);
  const [showSearch, setShowSearch] = (0, import_react.useState)(false);
  const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
  const [searchResults, setSearchResults] = (0, import_react.useState)([]);
  const [currentSearchResult, setCurrentSearchResult] = (0, import_react.useState)(-1);
  const [isSearching, setIsSearching] = (0, import_react.useState)(false);
  const [pdfDocument, setPdfDocument] = (0, import_react.useState)(null);
  const searchInputRef = (0, import_react.useRef)(null);
  const [showSearchSidebar, setShowSearchSidebar] = (0, import_react.useState)(false);
  const searchResultsRef = (0, import_react.useRef)(null);
  const [documentOutline, setDocumentOutline] = (0, import_react.useState)([]);
  const [expandedOutlineItems, setExpandedOutlineItems] = (0, import_react.useState)({});
  const [bookmarks, setBookmarks] = (0, import_react.useState)([]);
  const [activeTab, setActiveTab] = (0, import_react.useState)("outline");
  const [showBookmarksSidebar, setShowBookmarksSidebar] = (0, import_react.useState)(false);
  const [isAddingBookmark, setIsAddingBookmark] = (0, import_react.useState)(false);
  const [newBookmarkTitle, setNewBookmarkTitle] = (0, import_react.useState)("");
  const bookmarksRef = (0, import_react.useRef)(null);
  const [leftPanel, setLeftPanel] = (0, import_react.useState)(0);
  const [leftPanelWidth, setLeftPanelWidth] = (0, import_react.useState)(220);
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const resizeDividerRef = (0, import_react.useRef)(null);
  const startXRef = (0, import_react.useRef)(0);
  const startWidthRef = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < ((responsive == null ? void 0 : responsive.mobileBreakpoint) || 768));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [responsive == null ? void 0 : responsive.mobileBreakpoint]);
  (0, import_react.useEffect)(() => {
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
      newWidth = Math.max(180, Math.min(450, newWidth));
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
  }, [isMobile, responsive == null ? void 0 : responsive.hideSidebarOnMobile, showSidebar, isDragging]);
  const startResize = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
    startWidthRef.current = leftPanelWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
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
  const goToPage = (0, import_react.useCallback)((pageNum) => {
    setPreviewNumber(pageNum);
    setPageNumber(pageNum);
    const pageEl = pageRefs.current[pageNum];
    if (pageEl) {
      pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const extractOutline = (0, import_react.useCallback)((pdf) => __async(void 0, null, function* () {
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
  const processOutlineItems = (0, import_react.useCallback)((items, pdf, level = 0) => __async(void 0, null, function* () {
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
  const toggleOutlineItem = (0, import_react.useCallback)((itemId) => {
    setExpandedOutlineItems((prev) => __spreadProps(__spreadValues({}, prev), {
      [itemId]: !prev[itemId]
    }));
  }, []);
  const navigateToOutlineItem = (0, import_react.useCallback)(
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
  const addBookmark = (0, import_react.useCallback)(() => {
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
  const deleteBookmark = (0, import_react.useCallback)(
    (id) => {
      setBookmarks((prev) => {
        const updatedBookmarks = prev.filter((bookmark) => bookmark.id !== id);
        localStorage.setItem(`pdf-bookmarks-${data == null ? void 0 : data.url}`, JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      });
    },
    [data == null ? void 0 : data.url]
  );
  const navigateToBookmark = (0, import_react.useCallback)(
    (bookmark) => {
      goToPage(bookmark.pageNumber);
    },
    [goToPage]
  );
  (0, import_react.useEffect)(() => {
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
  const toggleBookmarksSidebar = (0, import_react.useCallback)(() => {
    setLeftPanel(2);
    setSidebar(true);
    setShowBookmarksSidebar((prev) => !prev);
    if (!showBookmarksSidebar) {
      setActiveTab("outline");
    }
  }, [showBookmarksSidebar]);
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
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
    setIsTextLayerEnabled(Boolean(textOptions == null ? void 0 : textOptions.enableSelection) || Boolean(textOptions == null ? void 0 : textOptions.enableCopy));
  }, [textOptions == null ? void 0 : textOptions.enableSelection, textOptions == null ? void 0 : textOptions.enableCopy]);
  const documentOptions = (0, import_react.useMemo)(
    () => ({
      cMapUrl: "https://unpkg.com/pdfjs-dist@3.4.120/cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/"
    }),
    []
  );
  const onDocumentLoadError = (0, import_react.useCallback)(() => {
    console.error(`Failed to load PDF (Attempt ${retryCount + 1})`);
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
    }
  }, [retryCount, maxRetries]);
  const handlePrint = (0, import_react.useCallback)(() => {
    printPdf();
  }, []);
  const printPdf = (0, import_react.useCallback)(() => {
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
  (0, import_react.useEffect)(() => {
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
  const toggleSearch = (0, import_react.useCallback)(() => {
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
  const handleSearchChange = (0, import_react.useCallback)((e) => {
    setSearchQuery(e.target.value);
  }, []);
  const handleSearchKeyDown = (0, import_react.useCallback)(
    (e) => {
      if (e.key === "Enter") {
        performSearch();
      }
    },
    [searchQuery, pdfDocument]
  );
  const getContextAroundMatch = (text, matchIndex, matchLength, contextLength = 30) => {
    const startIndex = Math.max(0, matchIndex - contextLength);
    const endIndex = Math.min(text.length, matchIndex + matchLength + contextLength);
    let context = text.substring(startIndex, endIndex);
    if (startIndex > 0) context = "..." + context;
    if (endIndex < text.length) context = context + "...";
    return context;
  };
  const performSearch = (0, import_react.useCallback)(() => __async(void 0, null, function* () {
    if (!searchQuery.trim() || !pdfDocument) return;
    setIsSearching(true);
    setSearchResults([]);
    setCurrentSearchResult(-1);
    try {
      const results = [];
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = yield pdfDocument.getPage(i);
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
      }
      setSearchResults(results);
      if (results.length > 0) {
        setCurrentSearchResult(0);
        navigateToSearchResult(results[0]);
        setShowSearchSidebar(true);
      }
    } catch (error) {
      console.error("Error searching PDF:", error);
    } finally {
      setIsSearching(false);
    }
  }), [searchQuery, pdfDocument]);
  const navigateToSearchResult = (0, import_react.useCallback)(
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
  const nextSearchResult = (0, import_react.useCallback)(() => {
    if (searchResults.length === 0) return;
    const nextIndex = (currentSearchResult + 1) % searchResults.length;
    setCurrentSearchResult(nextIndex);
    navigateToSearchResult(searchResults[nextIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const prevSearchResult = (0, import_react.useCallback)(() => {
    if (searchResults.length === 0) return;
    const prevIndex = (currentSearchResult - 1 + searchResults.length) % searchResults.length;
    setCurrentSearchResult(prevIndex);
    navigateToSearchResult(searchResults[prevIndex]);
  }, [currentSearchResult, searchResults, navigateToSearchResult]);
  const toggleSearchSidebar = (0, import_react.useCallback)(() => {
    if (searchResults.length > 0) {
      setShowSearchSidebar((prev) => !prev);
    }
  }, [searchResults.length]);
  (0, import_react.useEffect)(() => {
    if (!showSearch) {
      document.querySelectorAll(".adex-search-highlight").forEach((el) => {
        el.remove();
      });
    }
  }, [showSearch]);
  const highlightAllResultsOnPage = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
    if (searchResults.length > 0 && pageNumber > 0) {
      highlightAllResultsOnPage(pageNumber - 1);
    }
  }, [pageNumber, searchResults, highlightAllResultsOnPage]);
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
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
    return items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-outline-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-outline-item-content", children: [
        item.items && item.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: "adex-outline-toggle",
            onClick: () => toggleOutlineItem(item.id),
            "aria-label": expandedOutlineItems[item.id] ? "Collapse" : "Expand",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })
              }
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-outline-toggle", style: { width: "20px" } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            className: "adex-outline-link",
            onClick: () => navigateToOutlineItem(item),
            disabled: !item.pageNumber && !item.dest,
            children: [
              item.title,
              item.pageNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-outline-page", children: [
                "p. ",
                item.pageNumber
              ] })
            ]
          }
        )
      ] }),
      item.items && item.items.length > 0 && expandedOutlineItems[item.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-children", style: { marginLeft: "20px" }, children: renderOutlineItems(item.items) })
    ] }, item.id));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: viewerRef,
      className: `PDFViewer adex-viewer ${fullScreenView ? "fullScreenView" : ""} ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} dev-abhishekbagul ${isMobile ? "adex-mobile" : ""} ${!textOptions.enableSelection ? "disable-text-selection" : ""} ${isPrinting ? "adex-printing" : ""}`,
      children: [
        showToolbar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-topbar", children: [
          (showControls == null ? void 0 : showControls.navigation) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-page", children: [
            (showControls == null ? void 0 : showControls.sidebarButton) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setSidebar(!sidebar), "aria-label": "Toggle sidebar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-layout-text-sidebar-reverse",
                viewBox: "0 0 16 16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z" })
                ]
              }
            ) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: pageNumber <= 1, onClick: () => goToPage(pageNumber - 1), "aria-label": "Previous page", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-chevron-up",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                disabled: numPages === null || pageNumber >= numPages,
                onClick: () => goToPage(pageNumber + 1),
                "aria-label": "Next page",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-chevron-down",
                    viewBox: "0 0 16 16",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
          (showControls == null ? void 0 : showControls.zoom) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-zoom", children: [
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => rotatePage(pageNumber, false),
                "aria-label": "Rotate counterclockwise",
                title: "Rotate counterclockwise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { onChange: (e) => setScale(+e.target.value), value: scale, "aria-label": "Zoom level", children: scaleSets.map((scaleLevel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: scaleLevel, children: [
              (scaleLevel * 100).toFixed(0),
              "%"
            ] }, scaleLevel)) }),
            (showControls == null ? void 0 : showControls.rotation) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => rotatePage(pageNumber, true),
                "aria-label": "Rotate clockwise",
                title: "Rotate clockwise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fillRule: "evenodd", d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-options", children: [
            (showControls == null ? void 0 : showControls.print) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: handlePrint, "aria-label": "Print document", title: "Print document", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" })
            ] }) }),
            (showControls == null ? void 0 : showControls.fullscreen) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: toggleFullscreen, "aria-label": fullScreenView ? "Exit fullscreen" : "Enter fullscreen", children: !fullScreenView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-arrows-fullscreen",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                  }
                )
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-fullscreen-exit",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" })
              }
            ) }),
            (showControls == null ? void 0 : showControls.download) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "a",
              {
                href: data == null ? void 0 : data.url,
                download: "document.pdf",
                className: "open-link-btn",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "Download PDF",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-box-arrow-down",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-panel", style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-left-col", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => {
                  setLeftPanel(0), setSidebar(true);
                },
                "aria-label": "Pages Previews",
                title: "Pages Previews",
                className: showBookmarksSidebar ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" })
                ] })
              }
            ),
            (showControls == null ? void 0 : showControls.search) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: toggleSearch,
                "aria-label": "Search document",
                title: "Search document",
                className: showSearch ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }) })
              }
            ),
            (showControls == null ? void 0 : showControls.bookmarks) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: toggleBookmarksSidebar,
                "aria-label": "Bookmarks and outline",
                title: "Bookmarks and outline",
                className: showBookmarksSidebar ? "active" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
                leftPanel == 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-thumbs", children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_react_pdf.Document,
                  {
                    file: pdfBlobUrl,
                    loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-thumb-loader", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                    ] }),
                    onLoadSuccess: onDocumentLoadSuccess,
                    onLoadError: onDocumentLoadError,
                    children: [
                      !pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-thumb-loader", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                      ] }),
                      numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: `adex-page-thumb ${pageNumber === index + 1 ? "active" : ""}`,
                          onClick: () => goToPage(index + 1),
                          "aria-label": `Page ${index + 1}`,
                          "aria-current": pageNumber === index + 1 ? "page" : void 0,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            import_react_pdf.Page,
                            {
                              scale: 0.2,
                              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-thumb-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }) }),
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
                leftPanel == 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-search", ref: searchResultsRef, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-bar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-input-container", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: "adex-search-button",
                        onClick: performSearch,
                        disabled: isSearching || !searchQuery.trim(),
                        "aria-label": "Search",
                        children: isSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-search-loading" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
                          }
                        )
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-results-header", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Search Results" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-search-results-count", children: [
                      searchResults.length,
                      " matches"
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-results-list", children: searchResults.length > 0 ? searchResults.map((result, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      id: `search-result-${result.matchIndex}`,
                      className: `adex-search-result-item ${currentSearchResult === result.matchIndex ? "active" : ""}`,
                      onClick: () => {
                        setCurrentSearchResult(result.matchIndex);
                        navigateToSearchResult(result);
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-search-result-page", children: [
                          "Page ",
                          result.pageIndex + 1
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-result-context", children: result.context.split(new RegExp(`(${searchQuery})`, "i")).map(
                          (part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-search-result-highlight", children: part }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i)
                        ) })
                      ]
                    },
                    `search-result-${index}`
                  )) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-search-no-results", children: isSearching ? "Searching..." : "No results found" }) })
                ] }),
                leftPanel == 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-bookmarks", ref: bookmarksRef, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-header", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmarks-tabs", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "outline" ? "active" : ""}`,
                        onClick: () => setActiveTab("outline"),
                        children: "Outline"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: `adex-bookmarks-tab ${activeTab === "bookmarks" ? "active" : ""}`,
                        onClick: () => setActiveTab("bookmarks"),
                        children: "Bookmarks"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-content", children: activeTab === "outline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-container", children: documentOutline.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-outline-list", children: renderOutlineItems(documentOutline) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-no-outline", children: "No outline available in this document" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmarks-container", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-actions", children: isAddingBookmark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-add-bookmark-form", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmark-form-actions", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            className: "adex-bookmark-save",
                            onClick: addBookmark,
                            disabled: !newBookmarkTitle.trim(),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "adex-bookmark-cancel", onClick: () => setIsAddingBookmark(false), children: "Cancel" })
                      ] })
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "adex-add-bookmark-btn", onClick: () => setIsAddingBookmark(true), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "14",
                          height: "14",
                          fill: "currentColor",
                          viewBox: "0 0 16 16",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })
                        }
                      ),
                      "Add Bookmark"
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-bookmarks-list", children: bookmarks.length > 0 ? bookmarks.sort((a, b) => a.pageNumber - b.pageNumber).map((bookmark) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-bookmark-item", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "adex-bookmark-link", onClick: () => navigateToBookmark(bookmark), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 2 0 0 0-2 2z" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "adex-bookmark-title", children: bookmark.title }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "adex-bookmark-page", children: [
                          "p. ",
                          bookmark.pageNumber
                        ] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          className: "adex-bookmark-delete",
                          onClick: () => deleteBookmark(bookmark.id),
                          "aria-label": `Delete bookmark: ${bookmark.title}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "12",
                              height: "12",
                              fill: "currentColor",
                              viewBox: "0 0 16 16",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                    ] }, bookmark.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-no-bookmarks", children: "No bookmarks added yet" }) })
                  ] }) })
                ] })
              ]
            }
          ),
          sidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: previewRef, className: "adex-preview", style: { flex: 1, overflow: "auto" }, children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_react_pdf.Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-loader", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" })
              ] }),
              onLoadSuccess: onDocumentLoadSuccess,
              onLoadError: onDocumentLoadError,
              options: documentOptions,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-loader", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    ref: (el) => pageRefs.current[index + 1] = el,
                    className: "adex-page",
                    "aria-label": `Page ${index + 1} content`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react_pdf.Page,
                      {
                        loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }) }),
                        scale,
                        pageNumber: index + 1,
                        width: 600,
                        rotate: pageRotations[index + 1] || 0,
                        renderTextLayer: isTextLayerEnabled,
                        renderAnnotationLayer: isTextLayerEnabled,
                        canvasBackground: "white"
                      }
                    )
                  },
                  `page-${index}`
                ))
              ]
            }
          ) }),
          showInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-meta-panel", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-pdf-meta-info-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-info-square",
                    viewBox: "0 0 16 16",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                    ]
                  }
                ),
                " ",
                "Info: ",
                (metadata == null ? void 0 : metadata.Title) || "N/A"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: () => {
                    setShowInfo(false);
                  },
                  "aria-label": "Close info panel",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-x-square",
                      viewBox: "0 0 16 16",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-pdf-meta-info-content", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "adex-pdf-meta-info-list", children: (_a = Object == null ? void 0 : Object.entries(metadata || {})) == null ? void 0 : _a.map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "adex-pdf-meta-info-item", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
                key,
                ":"
              ] }),
              " ",
              typeof value === "object" ? JSON.stringify(value) : value
            ] }, key)) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-power-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-left-option", children: (showControls == null ? void 0 : showControls.info) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => {
                setShowInfo(true);
              },
              "aria-label": "Show document information",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  className: "bi bi-info-square",
                  viewBox: "0 0 16 16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                  ]
                }
              )
            }
          ) }),
          showCredits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            "Created with ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2665" }),
            " by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/abhibagul/", target: "_blank", rel: "noreferrer", children: "Abhishek" })
          ] })
        ] })
      ]
    }
  );
};
var AdexViewer_default = AdexViewer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdexViewer
});
//# sourceMappingURL=index.js.map