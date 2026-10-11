"use client";

import React from "react";

export function DetailHero() {
  return (
    <header className="hero dhero" id="hero">
      <div
        className="photo kb1 active"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=2400&q=80')",
        }}
      />
      <div className="scrim" />
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Attraction &middot; Garden &middot; Wales
        </div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".35s" }}>Bodnant Garden.</span>
          </span>
        </h1>
        <div className="where rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
          Tal-y-Cafn, Conwy Valley, North Wales
        </div>
      </div>
      <div className="scrollcue">Scroll</div>
    </header>
  );
}
