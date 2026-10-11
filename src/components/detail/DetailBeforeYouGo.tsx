"use client";

import React from "react";

interface DetailBeforeYouGoProps {
  title?: string;
  town?: string;
  area?: string;
}

export function DetailBeforeYouGo({
  title = "this attraction",
  town,
  area,
}: DetailBeforeYouGoProps) {
  return (
    <section className="section" id="why" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Before You Go</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Essential details for <span className="grad">{title}.</span>
        </h2>
        <div className="whys">
          <div className="why rv in">
            <div className="wnum">01</div>
            <h3>Prime Location</h3>
            <p>Situated in {[town, area].filter(Boolean).join(", ") || "the United Kingdom"}, making it an ideal destination to explore.</p>
          </div>
          <div className="why rv in" style={{ "--d": ".12s" } as React.CSSProperties}>
            <div className="wnum">02</div>
            <h3>Curated Heritage</h3>
            <p>Ranked among the premier destinations vetted by the Top 100 Attractions guide.</p>
          </div>
          <div className="why rv in" style={{ "--d": ".24s" } as React.CSSProperties}>
            <div className="wnum">03</div>
            <h3>Visitor Planning</h3>
            <p>Advance booking and checking seasonal hours are strongly recommended prior to arrival.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
