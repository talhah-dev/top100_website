"use client";

import React from "react";

export function AppHero() {
  return (
    <header className="shero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">Download the Free App</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              The journey, <em className="grad" style={{ fontStyle: "normal" }}>in your pocket.</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          Four apps, one for each nation, free on both stores.
        </p>
        <div className="storebtns rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
          <span>&#63743; App Store</span>
          <span>&#9654; Google Play</span>
        </div>
      </div>
    </header>
  );
}
