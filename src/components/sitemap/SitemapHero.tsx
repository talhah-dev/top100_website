"use client";

import React from "react";

export function SitemapHero() {
  return (
    <header className="shero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">Directory &amp; Navigation</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              Site <em className="grad" style={{ fontStyle: "normal" }}>Map</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          A complete directory of all nations, regional destinations, and guide pages across Stevenson&rsquo;s Top 100 Attractions.
        </p>
      </div>
    </header>
  );
}

