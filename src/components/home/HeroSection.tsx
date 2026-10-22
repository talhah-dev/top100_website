"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSearch } from "./HeroSearch";

const bgPhotos = [
  { url: "/images/slider/london-eye.jpeg", mplx: 18 },
  { url: "/images/slider/AdobeStock_276849097.jpg", mplx: 18 },
  { url: "/images/slider/Home-header-1.jpg", mplx: 18 },
  { url: "/images/slider/Home-header-2.jpeg", mplx: 18 },
  { url: "/images/slider/london-bus.jpeg", mplx: 18 },
  { url: "/images/slider/mildome.jpeg", mplx: 18 },
];

const sparks = [
  { left: "16%", top: "30%", delay: "0.4s" },
  { left: "24%", top: "62%", delay: "2.1s" },
  { left: "38%", top: "22%", delay: "3.4s" },
  { left: "64%", top: "26%", delay: "1.2s" },
  { left: "78%", top: "48%", delay: "4.6s" },
  { left: "86%", top: "30%", delay: "2.8s" },
  { left: "70%", top: "68%", delay: "5.2s" },
  { left: "30%", top: "76%", delay: "3.9s" },
];

export function HeroSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % bgPhotos.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero" id="hero">
      {bgPhotos.map((photo, idx) => (
        <div
          key={photo.url}
          className={`photo ${idx === activePhoto ? "active" : ""}`}
          data-mplx={photo.mplx}
          style={{ backgroundImage: `url('${photo.url}')` }}
        />
      ))}
      <div className="scrim" />
      <div className="glow" data-mplx="34" />
      <div className="hundred">
        100
      </div>

      {sparks.map((spark, i) => (
        <div
          key={i}
          className="spark"
          style={{ left: spark.left, top: spark.top, animationDelay: spark.delay }}
        />
      ))}

      <div className="inner" id="heroInner">
        <div id="heroCopy">
          <Image
            src="/images/logo.png"
            alt="Stevenson's Top 100 Attractions badge"
            width={270}
            height={270}
            className="herologo rv in"
            priority
          />
          <div className="eyebrow rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
            The UK&rsquo;s Leading Tourist Information Website
          </div>
          <h1>
            <span className="wline">
              <span style={{ transitionDelay: ".35s" }}>Places worth</span>
            </span>
            <span className="wline">
              <span style={{ transitionDelay: ".5s" }}>
                <em className="grad" style={{ fontStyle: "normal" }}>the journey.</em>
              </span>
            </span>
          </h1>
          <p className="sub rv in" style={{ "--d": ".9s" } as React.CSSProperties}>
            Attractions, places to stay and to eat across Britain and Ireland, selected and reviewed to the Stevenson&rsquo;s standard.
          </p>
        </div>

        <HeroSearch />
      </div>

      <div className="scrollcue">Scroll</div>
    </header>
  );
}
