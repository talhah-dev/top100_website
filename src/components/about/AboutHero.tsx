"use client";

import React from "react";

export function AboutHero() {
  return (
    <header className="shero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">About Us</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              One list. <em className="grad" style={{ fontStyle: "normal" }}>No shortcuts.</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          What it takes to be one of the hundred.
        </p>
      </div>
    </header>
  );
}
