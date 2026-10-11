"use client";

import React from "react";

export function BookInside() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="shead rv in">
          <div className="kicker">
            <span className="line" />
            <span className="eyebrow">The Guide in Print</span>
          </div>
          <h2 className="h2">What&rsquo;s inside</h2>
        </div>
        <div className="icards">
          <div className="icard rv in">
            <div className="glyph">100</div>
            <h3>A hundred that earned it.</h3>
            <p>
              Attractions, places to stay and places to eat across Britain and Ireland, every one visited before it was written up.
            </p>
          </div>
          <div className="icard rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
            <div className="glyph">&#9733;</div>
            <h3>Reviews you can hold.</h3>
            <p>
              The full editorial review for every entry, in print, no screen required.
            </p>
          </div>
          <div className="icard rv in" style={{ "--d": ".16s" } as React.CSSProperties}>
            <div className="glyph">5</div>
            <h3>Five regions, one shelf.</h3>
            <p>
              England, Scotland, Wales, Northern Ireland and Ireland, covered with the same straight face.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
