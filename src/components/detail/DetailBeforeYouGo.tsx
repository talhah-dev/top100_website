"use client";

import React from "react";

export function DetailBeforeYouGo() {
  return (
    <section className="section" id="why" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Before You Go</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Everything to know about <span className="grad">Bodnant Garden.</span>
        </h2>
        <div className="whys">
          <div className="why rv in">
            <div className="wnum">01</div>
            <h3>The Laburnum Arch</h3>
            <p>Fifty five metres of gold, three weeks a year.</p>
          </div>
          <div className="why rv in" style={{ "--d": ".12s" } as React.CSSProperties}>
            <div className="wnum">02</div>
            <h3>The Italianate terraces</h3>
            <p>Five of them, stepping down toward the river.</p>
          </div>
          <div className="why rv in" style={{ "--d": ".24s" } as React.CSSProperties}>
            <div className="wnum">03</div>
            <h3>The Dell</h3>
            <p>Champion trees and the tallest redwood in Wales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
