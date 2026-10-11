"use client";

import React from "react";
import Link from "next/link";

export function AppFamily() {
  return (
    <section className="family">
      <div className="wrap">
        <div className="panelcard appp rv in">
          <div className="appdots" />
          <h3>Built as one family.</h3>
          <p>
            The four apps share one design and one source of truth. A place updated once is updated everywhere, on the website and in the right nation&rsquo;s pocket.
          </p>
          <div className="storebtns flex-wrap justify-start">
            <Link href="/search">EXPLORE ALL ATTRACTIONS</Link>
            <Link href="/about">HOW THE GUIDE WORKS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
