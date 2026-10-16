"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { ZoomIn } from "lucide-react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface DetailGalleryProps {
  title?: string;
  photos?: string[];
  mainImage?: string;
}

export function DetailGallery({
  title = "Attraction",
  photos = [],
  mainImage,
}: DetailGalleryProps) {
  const [index, setIndex] = useState(-1);

  const rawList =
    photos.length > 0
      ? (mainImage && !photos.includes(mainImage) ? [mainImage, ...photos] : photos)
      : [
          mainImage || "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=70",
          "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=70",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=70",
          "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=70",
          "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=70",
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70",
        ];

  const photoList = rawList.slice(0, 12).map((photo) =>
    photo.startsWith("http")
      ? photo
      : `https://top100attractions.com/attractions/images/${photo}`
  );

  const slides = photoList.map((src) => ({
    src,
    alt: title,
  }));

  return (
    <section className="section" id="gallery" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Photo Gallery</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Visuals from <span className="grad">{title}.</span>
        </h2>

        <div className="gal">
          {photoList.map((photoUrl, i) => {
            const isTall = i % 3 === 0;
            const isWide = i === 6;

            return (
              <div
                key={i}
                className={`gitem ${isTall ? "tall" : ""} ${isWide ? "wide" : ""} rv in`}
                style={{ "--d": `${(i * 0.05).toFixed(2)}s` } as React.CSSProperties}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIndex(i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${i + 1} of ${title}`}
              >
                <Image
                  loading="lazy"
                  src={photoUrl}
                  alt={`${title} photo ${i + 1}`}
                  width={800}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover"
                />
                <div className="gitem-overlay">
                  <span className="gitem-zoom-icon">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Thumbnails, Counter, Fullscreen]}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
        }}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 52,
          border: 1,
          borderRadius: 6,
          padding: 4,
          gap: 10,
        }}
        animation={{ fade: 250, swipe: 250 }}
      />
    </section>
  );
}
