"use client";

import React from "react";

export function BookReaderQuotes() {
  return (
    <section className="section" style={{ paddingTop: "40px" }}>
      <div className="wrap">
        <div className="shead rv in">
          <div className="kicker">
            <span className="line" />
            <span className="eyebrow">From the Books</span>
          </div>
          <h2 className="h2">What readers find</h2>
        </div>
        <div className="qgrid">
          <div className="qcard rv in">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>
              &ldquo;The only guide we trust when planning our summer. It has never once let us down.&rdquo;
            </p>
            <span>The Harpers &middot; Kent</span>
          </div>
          <div className="qcard rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>
              &ldquo;Our copy is dog-eared, highlighted and utterly loved.&rdquo;
            </p>
            <span>The Morgans &middot; Leeds</span>
          </div>
          <div className="qcard rv in" style={{ "--d": ".16s" } as React.CSSProperties}>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>
              &ldquo;A national institution in paperback form.&rdquo;
            </p>
            <span>Press quote</span>
          </div>
        </div>
      </div>
    </section>
  );
}
