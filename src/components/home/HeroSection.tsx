"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const bgPhotos = [
  { url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=2400&q=80", kb: "kb1", mplx: 18 },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=2400&q=75", kb: "kb2", mplx: 18 },
  { url: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=2400&q=75", kb: "kb3", mplx: 18 },
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
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const heroRef = useRef<HTMLElement>(null);
  const hundredRef = useRef<HTMLDivElement>(null);
  const subLineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % bgPhotos.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sizeGhost = () => {
      const ghostN = hundredRef.current;
      const subLine = subLineRef.current;
      if (!ghostN || !subLine) return;
      if (window.innerWidth < 981) {
        ghostN.style.fontSize = "";
        ghostN.style.marginLeft = "";
        return;
      }
      const range = document.createRange();
      range.selectNodeContents(subLine);
      const w = range.getBoundingClientRect().width;
      if (!w) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = "900 100px Overlock, sans-serif";
      const m = ctx.measureText("100");
      if (m.actualBoundingBoxLeft === undefined || m.actualBoundingBoxRight === undefined) {
        ghostN.style.fontSize = "100px";
        const gw = ghostN.getBoundingClientRect().width;
        if (gw) ghostN.style.fontSize = `${(100 * w) / gw}px`;
        return;
      }
      const inkStart = -m.actualBoundingBoxLeft;
      const inkW = m.actualBoundingBoxRight - inkStart;
      if (inkW <= 0) return;
      const scale = w / inkW;
      ghostN.style.fontSize = `${100 * scale}px`;
      ghostN.style.marginLeft = `${scale * ((m.width - inkW) / 2 - inkStart)}px`;
    };

    window.addEventListener("resize", sizeGhost);
    sizeGhost();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sizeGhost);
    }
    return () => window.removeEventListener("resize", sizeGhost);
  }, []);

  return (
    <header className="hero" id="hero" ref={heroRef}>
      {bgPhotos.map((photo, idx) => (
        <div
          key={photo.url}
          className={`photo ${photo.kb} ${idx === activePhoto ? "active" : ""}`}
          data-mplx={photo.mplx}
          style={{ backgroundImage: `url('${photo.url}')` }}
        />
      ))}
      <div className="scrim" />
      <div className="glow" data-mplx="34" />
      <div className="hundred" data-plx="70" ref={hundredRef}>
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
          <p className="sub rv in" style={{ "--d": ".9s" } as React.CSSProperties} ref={subLineRef}>
            Attractions, places to stay and to eat across Britain and Ireland, selected and reviewed to the Stevenson&rsquo;s standard.
          </p>
        </div>

        <div className="search rv in" style={{ "--d": "1.15s" } as React.CSSProperties}>
          <span className="q">Where would you like to go?</span>
          <span className="q q2">
            What would you like to do? <i className="chev">&#9662;</i>
          </span>
          <span className="seg">
            <span
              onClick={() => setViewMode("grid")}
              className={`segbtn ${viewMode === "grid" ? "on" : ""}`}
              role="button"
              tabIndex={0}
            >
              &#9638; Grid
            </span>
            <span
              onClick={() => setViewMode("map")}
              className={`segbtn ${viewMode === "map" ? "on" : ""}`}
              role="button"
              tabIndex={0}
            >
              &#8982; Map
            </span>
          </span>
          <span className="go" role="button" tabIndex={0}>
            SEARCH
          </span>
        </div>
      </div>

      <div className="scrollcue">Scroll</div>
    </header>
  );
}
