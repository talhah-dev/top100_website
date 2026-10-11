"use client";

import React from "react";
import Link from "next/link";

export function BookAppCloser() {
  return (
    <section className="section" style={{ paddingTop: "40px", paddingBottom: 0 }}>
      <div className="wrap">
        <div className="panelcard appp solo rv in">
          <div className="appdots" />
          <h3>Rather carry it in your pocket?</h3>
          <p>The same hundred, free on the app, one nation at a time.</p>
          <div className="storebtns">
            <span>&#63743; App Store</span>
            <span>&#9654; Google Play</span>
            <Link href="#app">SEE THE APPS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
