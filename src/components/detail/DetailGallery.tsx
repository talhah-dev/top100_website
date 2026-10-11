"use client";

import React from "react";
import Image from "next/image";

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
  const photoList = (photos.length > 0 ? photos : [
    "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=70",
    "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=70",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=70",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=70",
    "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=70",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70",
  ]).slice(0, 9);

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
          {photoList.map((photo, i) => {
            const photoUrl = photo.startsWith("http")
              ? photo
              : `https://top100attractions.com/attractions/images/${photo}`;
            const isTall = i % 3 === 0;
            const isWide = i === 6;

            return (
              <div
                key={i}
                className={`gitem ${isTall ? "tall" : ""} ${isWide ? "wide" : ""} rv in`}
                style={{ "--d": `${(i * 0.05).toFixed(2)}s` } as React.CSSProperties}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
