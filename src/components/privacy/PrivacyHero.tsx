"use client";

import React from "react";

export function PrivacyHero() {
  return (
    <header className="shero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">Stevenson&rsquo;s Top 100</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              Privacy <em className="grad" style={{ fontStyle: "normal" }}>Policy</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          We are committed to protecting your privacy and handling your information lawfully, transparently, and securely.
        </p>
      </div>
    </header>
  );
}

