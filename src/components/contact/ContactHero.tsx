"use client";

import React from "react";

export function ContactHero() {
  return (
    <header className="shero chero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">Contact Us</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              Talk to <em className="grad" style={{ fontStyle: "normal" }}>the guide.</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          Questions, corrections, and places we should see next.
        </p>
      </div>
    </header>
  );
}
