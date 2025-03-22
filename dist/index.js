"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_react_pdf2 = require("react-pdf");
var import_jsx_runtime = require("react/jsx-runtime");
import_react_pdf2.pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${import_react_pdf2.pdfjs.version}/pdf.worker.min.js`;
var AdexViewer = ({ data, credits }) => {
  var _a;
  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
  const [numPages, setNumPages] = (0, import_react.useState)(null);
  const [pageNumber, setPageNumber] = (0, import_react.useState)(1);
  const [scale, setScale] = (0, import_react.useState)(1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = (0, import_react.useState)(null);
  const [fullScreenView, setFullScreenView] = (0, import_react.useState)(false);
  const [sidebar, setSidebar] = (0, import_react.useState)(true);
  const [previewNumber, setPreviewNumber] = (0, import_react.useState)(pageNumber);
  const [retryCount, setRetryCount] = (0, import_react.useState)(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = (0, import_react.useState)(5);
  const viewerRef = (0, import_react.useRef)(null);
  const pageRefs = (0, import_react.useRef)({});
  const previewRef = (0, import_react.useRef)(null);
  const showCredits = credits != null ? credits : true;
  const [metadata, setMetadata] = (0, import_react.useState)(null);
  const [showInfo, setShowInfo] = (0, import_react.useState)(false);
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
        if (retryCount < 5) {
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
  const goToPage = (0, import_react.useCallback)(
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
    if (__page > 0 && __page <= numPages) {
      goToPage(__page), 500;
    } else {
      setPreviewNumber(pageNumber);
    }
  }
  function updatePDFPage(e) {
    let __page = Number(e.target.value);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref: viewerRef,
      className: `PDFViewer ${"adex-viewer"} ${fullScreenView && "fullScreenView"} ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} ${"dev-abhishekbagul"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-topbar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-page", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setSidebar(!sidebar), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                disabled: pageNumber <= 1,
                onClick: () => goToPage(pageNumber - 1),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  className: "page-number",
                  type: "number",
                  onChange: updatePDFPage,
                  value: previewNumber
                }
              ),
              " ",
              "/ ",
              numPages || "?"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                disabled: pageNumber >= numPages,
                onClick: () => goToPage(pageNumber + 1),
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-control-zoom", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { onChange: (e) => setScale(+e.target.value), value: scale, children: scaleSets.map((scaleLevel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: scaleLevel, children: [
            (scaleLevel * 100).toFixed(0),
            "%"
          ] }, scaleLevel)) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-control-options", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: toggleFullscreen, children: !fullScreenView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "a",
              {
                href: data == null ? void 0 : data.url,
                download: "sample.pdf",
                className: "open-link-btn",
                target: "_blank",
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
                          d: "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-preview-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-thumbs", children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_react_pdf.Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: "adex-thumb-loader",
                  onLoadError: () => {
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                  ]
                }
              ),
              onLoadSuccess: onDocumentLoadSuccess,
              children: [
                !pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "adex-thumb-loader", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" })
                ] }),
                numPages && Array.from({ length: numPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    className: `${"adex-page-thumb"} ${pageNumber === index + 1 ? "active" : ""}`,
                    onClick: () => goToPage(index + 1),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react_pdf.Page,
                      {
                        scale: 0.2,
                        loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-thumb-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb-loader" }) }),
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: previewRef, className: "adex-preview", children: pdfBlobUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_react_pdf.Document,
            {
              file: pdfBlobUrl,
              loading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: "adex-preview-loader",
                  onLoadError: () => {
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" })
                  ]
                }
              ),
              onLoadSuccess: onDocumentLoadSuccess,
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
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react_pdf.Page,
                      {
                        loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-preview-loader", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "page-loader" }) }),
                        scale,
                        pageNumber: index + 1,
                        width: 600
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
                "  ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-info-square", viewBox: "0 0 16 16", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
                ] }),
                " Info: ",
                (metadata == null ? void 0 : metadata.Title) || "N/A"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => {
                setShowInfo(false);
              }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-x-square", viewBox: "0 0 16 16", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
              ] }) })
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "adex-left-option", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => {
            setShowInfo(true);
          }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-info-square", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" })
          ] }) }) }),
          showCredits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            "Created with ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2665" }),
            " by ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://github.com/abhibagul/", target: "_blank", children: "Abhishek" })
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