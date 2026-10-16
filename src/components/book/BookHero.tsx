"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BookHero() {
  return (
    <header className="bhero">
      <div className="wrap" id="heroInner">
        <div>
          <div className="inkbrow rv in">Buy the Book Online</div>
          <h1>
            <span className="wline">
              <span style={{ transitionDelay: ".3s" }}>
                The books that started it all.
              </span>
            </span>
          </h1>
          <p className="bsub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
            The best-selling Top 100 guides, available from all main book stores, online and direct.
          </p>
          <div className="bcta rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
            <Link className="btn-inkline" href="/about">
              HOW THE GUIDE WORKS
            </Link>
          </div>
        </div>
        <div className="bookstage rv in" style={{ "--d": ".35s" } as React.CSSProperties}>
          <div className="bb back" aria-hidden="true" />
          <div className="bb front">
            <Image
              className="blogo"
              src="/images/logo.png"
              alt="Top 100 Attractions badge"
              width={90}
              height={90}
            />
            <b>
              TOP <i>100</i>
              <br />
              ATTRACTIONS
            </b>
            <span className="crule" aria-hidden="true" />
            <span className="imprint">STEVENSON&rsquo;S GUIDES</span>
          </div>
        </div>
      </div>
    </header>
  );
}
