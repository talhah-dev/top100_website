"use client";

import React from "react";

export function AppFeatures() {
  return (
    <section className="features">
      <div className="wrap">
        <div className="shead rv in">
          <h2>Built for the day out</h2>
          <span className="rule" />
          <span className="cap">THE SAME GUIDE, LIVE IN HAND</span>
        </div>
        <div className="fgrid">
          <div className="fcard rv in">
            <div className="fico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </div>
            <h3>The whole nation in hand.</h3>
            <p>Every listed attraction, place to stay and place to eat for the country you are travelling.</p>
          </div>

          <div className="fcard rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
            <div className="fico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M15.8 15.8 21 21" />
              </svg>
            </div>
            <h3>Search that understands places.</h3>
            <p>Name, town, county or postcode, filtered to what you feel like doing.</p>
          </div>

          <div className="fcard rv in" style={{ "--d": ".16s" } as React.CSSProperties}>
            <div className="fico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m15.7 8.3-2.2 5.2-5.2 2.2 2.2-5.2z" />
              </svg>
            </div>
            <h3>A map that gets you there.</h3>
            <p>Every place pinned, with directions from wherever you are standing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
