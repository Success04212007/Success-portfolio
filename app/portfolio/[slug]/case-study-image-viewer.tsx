"use client";

import { useEffect, useState } from "react";

type CaseStudyImageViewerProps = {
  src: string;
  alt: string;
  imageNumber: number;
};

export default function CaseStudyImageViewer({
  src,
  alt,
  imageNumber,
}: CaseStudyImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const zoomIn = () => setZoom((current) => Math.min(2.5, Number((current + 0.25).toFixed(2))));
  const zoomOut = () => setZoom((current) => Math.max(0.5, Number((current - 0.25).toFixed(2))));

  return (
    <>
      <div className="case-study-image-viewer">
        <button
          type="button"
          className="case-study-preview-trigger"
          onClick={() => {
            setZoom(1);
            setIsOpen(true);
          }}
          aria-label={"Open full-size website image: " + alt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="case-study-full-image" src={src} alt={alt} />
          <span className="case-study-enlarge-prompt">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5M10.8 7.8v6M7.8 10.8h6" />
            </svg>
            CLICK TO EXPAND &amp; ZOOM
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="case-study-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={"Full-size website design: " + alt}
          onClick={() => setIsOpen(false)}
        >
          <div className="case-study-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <header className="case-study-lightbox-header">
              <div className="case-study-lightbox-heading">
                <span>WEBSITE DESIGN PREVIEW</span>
                <strong>{alt}</strong>
                <small>VISUAL {String(imageNumber).padStart(2, "0")} · FULL-SIZE VIEW</small>
              </div>
              <button
                type="button"
                className="case-study-lightbox-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close full-size image viewer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
              </button>
            </header>

            <div className="case-study-lightbox-toolbar" aria-label="Image zoom controls">
              <div className="case-study-zoom-group">
                <button type="button" onClick={zoomOut} disabled={zoom <= 0.5} aria-label="Zoom out">−</button>
                <span aria-live="polite">{Math.round(zoom * 100)}%</span>
                <button type="button" onClick={zoomIn} disabled={zoom >= 2.5} aria-label="Zoom in">+</button>
              </div>
              <button type="button" className="case-study-fit-button" onClick={() => setZoom(1)}>
                FIT TO WIDTH
              </button>
              <span className="case-study-viewer-hint">Scroll to explore the full page</span>
            </div>

            <div className="case-study-lightbox-scroll">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="case-study-lightbox-image"
                src={src}
                alt={alt}
                style={{
                  width: zoom === 1 ? "100%" : `${zoom * 100}%`,
                  maxWidth: zoom === 1 ? "100%" : "none",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
