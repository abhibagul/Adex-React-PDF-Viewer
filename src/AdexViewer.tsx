"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "./index.css";



// Set worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  data: { url: string }
  credits?: boolean | null
}

const AdexViewer: React.FC<PDFViewerProps> = ({ data, credits }) => {

  const scaleSets = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.25);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [fullScreenView, setFullScreenView] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [previewNumber, setPreviewNumber] = useState<number>(pageNumber);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [retryTimeoutDelay, setRetryTimeoutDelay] = useState<number>(5);
  const viewerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const previewRef = useRef<HTMLDivElement>(null);
  const showCredits = credits ?? true;
  const [metadata, setMetadata] = useState<any>(null);
  const [showInfo,setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    let retryTimer: ReturnType<typeof setTimeout> | null = null;

    const fetchPdfBlob = async () => {
      try {
        const response = await fetch(data?.url);
        if (!response.ok) throw new Error("Failed to fetch PDF");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfBlobUrl(url);
        setRetryCount(0); // Reset retry count on success

        //remove if existing timeout exist
        if (retryTimer) {
          clearTimeout(retryTimer); // Clear any pending retry
          retryTimer = null;
        }
      } catch (error) {
        console.error(`Failed to load PDF (Attempt ${retryCount + 1}):`, error);
        if (retryCount < 5) {
          retryTimer = setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, retryTimeoutDelay); //retry every 30 seconds
          setRetryTimeoutDelay(retryTimeoutDelay * 2);
        }
      }
    };

    if (data?.url) fetchPdfBlob();

    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [data?.url, retryCount]);

  async function onDocumentLoadSuccess(pdf:any) {
    setNumPages(pdf.numPages);
    const meta = await pdf.getMetadata();
    setMetadata(meta.info);
  }

  const goToPage = useCallback(
    (pageNum:number) => {
      setPreviewNumber(pageNum);
      setPageNumber(pageNum);
      const pageEl = pageRefs.current[pageNum];
      if (pageEl) {
        pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [setPageNumber]
  );

  function updatePage(__page:number) {
    //@ts-ignore
    if (__page > 0 && __page <= numPages) {
      goToPage(__page), 500;
    } else {
      setPreviewNumber(pageNumber);
    }
  }

  function updatePDFPage(e:any) {
    let __page = Number(e.target.value);
    setPreviewNumber(__page);
    debounce(updatePage(__page), 500);
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      setFullScreenView(true);
      viewerRef.current?.requestFullscreen();
    } else {
      setFullScreenView(false);
      document.exitFullscreen();
    }
  };

  const debounce = (func:any, delay:any) => {
    let timeoutId:any;
    return (...args:any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!previewRef.current) return;

      let closestPage: number = pageNumber;

      //@ts-ignore
      Object.entries(pageRefs.current).forEach(([pageNum, pageEl]) => {
        if (pageEl instanceof HTMLElement) {
          const { top, bottom } = pageEl.getBoundingClientRect();
          // Only check pages that are close to the viewport (adjust threshold as needed)
          if (top <= window.innerHeight / 2 && bottom >= 0) {
            closestPage = Number(pageNum);
          }
        }
      });
      setPreviewNumber(closestPage);
      setPageNumber(closestPage);
    };

    const debouncedHandleScroll = debounce(handleScroll, 500); // Debouncing with a delay of 100ms

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


  return (
    <div
      ref={viewerRef}
      className={`PDFViewer ${"adex-viewer"} ${
        fullScreenView && "fullScreenView"
      } ${sidebar ? "thumbs-slide-in" : "thumbs-slide-out"} ${
        "dev-abhishekbagul"
      }`}
    >
      <div className={"adex-topbar"}>
        <div className={"adex-control-page"}>
          <button onClick={() => setSidebar(!sidebar)}>
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
          <button
            disabled={pageNumber <= 1}
            onClick={() => goToPage(pageNumber - 1)}
          >
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
              className={"page-number"}
              type="number"
              onChange={updatePDFPage}
              value={previewNumber}
            />{" "}
            / {numPages || "?"}
          </p>
          <button
          //@ts-ignore
            disabled={pageNumber >= numPages}
            onClick={() => goToPage(pageNumber + 1)}
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
        <div className={"adex-control-zoom"}>
          <select onChange={(e) => setScale(+e.target.value)} value={scale}>
            {scaleSets.map((scaleLevel) => (
              <option key={scaleLevel} value={scaleLevel}>
                {(scaleLevel * 100).toFixed(0)}%
              </option>
            ))}
          </select>
        </div>
        <div className={"adex-control-options"}>
          <button onClick={toggleFullscreen}>
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
          <a
            href={data?.url}
            download="sample.pdf"
            className={"open-link-btn"}
            target="_blank"
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
                d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={"adex-preview-panel"}>
        {/* Thumbnail Sidebar */}
        <div className={"adex-preview-thumbs"}>
          {pdfBlobUrl && (
            <Document
              file={pdfBlobUrl}
              loading={
                <div
                  className={"adex-thumb-loader"}
                  //@ts-ignore
                  onLoadError={() => {
                    //@ts-ignore
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  }}
                >
                  <span className={"thumb-loader"}></span>
                  <span className={"thumb-loader"}></span>
                  <span className={"thumb-loader"}></span>
                </div>
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {!pdfBlobUrl && (
                <div className={"adex-thumb-loader"}>
                  <span className={"thumb-loader"}></span>
                  <span className={"thumb-loader"}></span>
                  <span className={"thumb-loader"}></span>
                </div>
              )}
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <button
                    key={`thumb-${index}`}
                    className={`${"adex-page-thumb"} ${
                      pageNumber === index + 1 ? "active" : ""
                    }`}
                    onClick={() => goToPage(index + 1)}
                  >
                    <Page
                      scale={0.2}
                      loading={
                        <div className={"adex-thumb-loader"}>
                          <span className={"thumb-loader"}></span>
                        </div>
                      }
                      pageNumber={index + 1}
                      width={600}
                    />
                  </button>
                ))}
            </Document>
          )}
        </div>

        {/* PDF Pages */}
        <div ref={previewRef} className={"adex-preview"}>
          {pdfBlobUrl && (
            <Document
              file={pdfBlobUrl}
              loading={
                <div
                  className={"adex-preview-loader"}
                  //@ts-ignore
                  onLoadError={() => {
                    //@ts-ignore
                    if (retryCount < maxRetries) {
                      setRetryCount((prev) => prev + 1);
                    }
                  }}
                >
                  <span className={"page-loader"}></span>
                  <span className={"page-loader"}></span>
                </div>
              }
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {!pdfBlobUrl && (
                <div className={"adex-preview-loader"}>
                  <span className={"page-loader"}></span>
                  <span className={"page-loader"}></span>
                </div>
              )}
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={`page-${index}`}
                    ref={(el) => (pageRefs.current[index + 1] = el)}
                    className={"adex-page"}
                  >
                    <Page
                      loading={
                        <div className={"adex-preview-loader"}>
                          <span className={"page-loader"}></span>
                        </div>
                      }
                      scale={scale}
                      pageNumber={index + 1}
                      width={600}
                    />
                  </div>
                ))}
            </Document>
          )}
        </div>

        {(showInfo) && <div className="adex-pdf-meta-info">
          <div className="adex-meta-panel">
          <div className="adex-pdf-meta-info-header">
            <strong>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg> Info: {metadata?.Title || "N/A"}</strong>
            <button onClick={()=>{setShowInfo(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
          <div className="adex-pdf-meta-info-content">
            <ul className="adex-pdf-meta-info-list">
              {/* @ts-ignore */}
              {Object?.entries(metadata|| {})?.map(([key, value]: [string, any]) => (
                <li key={key} className="adex-pdf-meta-info-item">
                  <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>}
      </div>
       <div className={"adex-power-row"}>
        <div className="adex-left-option">
          <button onClick={()=>{setShowInfo(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
          </button>
        </div> 
        {(showCredits) && <p>Created with <span>♥</span> by <a href="https://github.com/abhibagul/" target="_blank">Abhishek</a></p>}
      </div>
    </div>
  );
};

export default AdexViewer;
