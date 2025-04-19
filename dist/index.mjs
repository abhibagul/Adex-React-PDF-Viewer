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
import { useEffect, useState, useRef, useCallback } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
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
    info: true
  },
  responsive = {
    mobileBreakpoint: 768,
    hideSidebarOnMobile: true,
    reduceToolbarOnMobile: true
  }
}) => {
  var _a;
  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [fullScreenView, setFullScreenView] = useState(false);
  const [sidebar, setSidebar] = useState(showSidebar || false);
  const [previewNumber, setPreviewNumber] = useState(pageNumber);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = useState(5);
  const viewerRef = useRef(null);
  const pageRefs = useRef({});
  const previewRef = useRef(null);
  const showCredits = credits != null ? credits : true;
  const [metadata, setMetadata] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const maxRetries = 5;
  const [isMobile, setIsMobile] = useState(false);
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
    } else {
      setSidebar(showSidebar || false);
    }
  }, [isMobile, responsive == null ? void 0 : responsive.hideSidebarOnMobile, showSidebar]);
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
  function onDocumentLoadSuccess(pdf) {
    return __async(this, null, function* () {
      setNumPages(pdf.numPages);
      const meta = yield pdf.getMetadata();
      setMetadata(meta.info);
    });
  }
  const goToPage = useCallback(
    (pageNum) => {
      setPreviewNumber(pageNum);
      setPageNumber(pageNum);
      const pageEl = pageRefs.current[pageNum];
      if (pageEl) {
        pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [setPageNumber]
  );
  function updatePage(__page) {
    if (__page > 0 && numPages !== null && __page <= numPages) {
      goToPage(__page), 500;
    } else {
      setPreviewNumber(pageNumber);
    }
  }
  function updatePDFPage(e) {
    const __page = Number(e.target.value);
    setPreviewNumber(__page);
    debounce(updatePage(__page), 500);
  }
  const toggleFullscreen = () => {
    var _a2;
    if (!document.fullscreenElement) {
      setFullScreenView(true);
      (_a2 = viewerRef.current) == null ? void 0 : _a2.requestFullscreen();
    } else {
      setFullScreenView(false);
      document.exitFullscreen();
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: viewerRef,
      className: `PDFViewer ${"adex-viewer"} ${fullScreenView && "fullScreenView"} ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} ${"dev-abhishekbagul"} ${isMobile ? "adex-mobile" : ""}`,
      children: [
        showToolbar && /* @__PURE__ */ jsxs("div", { className: "adex-topbar", children: [
          (showControls == null ? void 0 : showControls.navigation) && /* @__PURE__ */ jsxs("div", { className: "adex-control-page", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setSidebar(!sidebar), children: /* @__PURE__ */ jsxs(
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
            ) }),
            /* @__PURE__ */ jsx("button", { disabled: pageNumber <= 1, onClick: () => goToPage(pageNumber - 1), children: /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx("input", { className: "page-number", type: "number", onChange: updatePDFPage, value: previewNumber }),
              " /",
              " ",
              numPages || "?"
            ] }),
            /* @__PURE__ */ jsx("button", { disabled: numPages === null || pageNumber >= numPages, onClick: () => goToPage(pageNumber + 1), children: /* @__PURE__ */ jsx(
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
            ) })
          ] }),
          (showControls == null ? void 0 : showControls.zoom) && /* @__PURE__ */ jsx("div", { className: "adex-control-zoom", children: /* @__PURE__ */ jsx("select", { onChange: (e) => setScale(+e.target.value), value: scale, children: scaleSets.map((scaleLevel) => /* @__PURE__ */ jsxs("option", { value: scaleLevel, children: [
            (scaleLevel * 100).toFixed(0),
            "%"
          ] }, scaleLevel)) }) }),
          /* @__PURE__ */ jsxs("div", { className: "adex-control-options", children: [
            (showControls == null ? void 0 : showControls.fullscreen) && /* @__PURE__ */ jsx("button", { onClick: toggleFullscreen, children: !fullScreenView ? /* @__PURE__ */ jsx(
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
            (showControls == null ? void 0 : showControls.download) && /* @__PURE__ */ jsx("a", { href: data == null ? void 0 : data.url, download: "sample.pdf", className: "open-link-btn", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxs(
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
                      d: "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
                    }
                  )
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "adex-preview-panel", children: [
          /* @__PURE__ */ jsx("div", { className: "adex-preview-thumbs", children: pdfBlobUrl && /* @__PURE__ */ jsxs(
            Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "adex-thumb-loader",
                  onLoadError: () => {
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                    /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                    /* @__PURE__ */ jsx("span", { className: "thumb-loader" })
                  ]
                }
              ),
              onLoadSuccess: onDocumentLoadSuccess,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ jsxs("div", { className: "adex-thumb-loader", children: [
                  /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                  /* @__PURE__ */ jsx("span", { className: "thumb-loader" }),
                  /* @__PURE__ */ jsx("span", { className: "thumb-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: `${"adex-page-thumb"} ${pageNumber === index + 1 ? "active" : ""}`,
                    onClick: () => goToPage(index + 1),
                    children: /* @__PURE__ */ jsx(
                      Page,
                      {
                        scale: 0.2,
                        loading: /* @__PURE__ */ jsx("div", { className: "adex-thumb-loader", children: /* @__PURE__ */ jsx("span", { className: "thumb-loader" }) }),
                        pageNumber: index + 1,
                        width: 600
                      }
                    )
                  },
                  `thumb-${index}`
                ))
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { ref: previewRef, className: "adex-preview", children: pdfBlobUrl && /* @__PURE__ */ jsxs(
            Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "adex-preview-loader",
                  onLoadError: () => {
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "page-loader" }),
                    /* @__PURE__ */ jsx("span", { className: "page-loader" })
                  ]
                }
              ),
              onLoadSuccess: onDocumentLoadSuccess,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ jsxs("div", { className: "adex-preview-loader", children: [
                  /* @__PURE__ */ jsx("span", { className: "page-loader" }),
                  /* @__PURE__ */ jsx("span", { className: "page-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ jsx("div", { ref: (el) => pageRefs.current[index + 1] = el, className: "adex-page", children: /* @__PURE__ */ jsx(
                  Page,
                  {
                    loading: /* @__PURE__ */ jsx("div", { className: "adex-preview-loader", children: /* @__PURE__ */ jsx("span", { className: "page-loader" }) }),
                    scale,
                    pageNumber: index + 1,
                    width: 600
                  }
                ) }, `page-${index}`))
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