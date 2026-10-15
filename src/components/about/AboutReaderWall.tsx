import React from "react";
import Link from "next/link";

const quotes = [
  {
    quote: "The only guide we trust when planning our summer. It has never once let us down.",
    by: "The Harpers \u00B7 Kent",
  },
  {
    quote: "Josh sent us to places we would never have found on our own.",
    by: "Reader review",
  },
  {
    quote: "The definitive word on British and Irish days out.",
    by: "Travel press",
  },
  {
    quote: "Our copy is dog-eared, highlighted and utterly loved.",
    by: "The Morgans \u00B7 Leeds",
  },
  {
    quote: "Every recommendation landed. Every single one.",
    by: "Reader review",
  },
  {
    quote: "A national institution in paperback form.",
    by: "Press quote",
  },
];

export function AboutReaderWall() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="shead rv in">
          <h2>What readers find</h2>
          <span className="rule" />
          <span className="cap">FROM THE BOOKS</span>
        </div>
      </div>

      <div className="wall rv in" style={{ "--d": ".2s" } as React.CSSProperties}>
        <div className="fade l" />
        <div className="fade r" />
        <div className="row">
          <div className="track2" id="wall1">
            {[...quotes, ...quotes].map((q, idx) => (
              <div key={idx} className="qcard">
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>&ldquo;{q.quote}&rdquo;</p>
                <span>{q.by}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="duo">
          <div className="panelcard bookp rv in">
            <h3>Think your place belongs here?</h3>
            <p>Tell us about it. Every submission is read, and nothing is listed without a visit.</p>
            <Link className="btn" href="/contact">
              CONTACT US
            </Link>
          </div>
          <div className="panelcard appp rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
            <div className="appdots" />
            <h3>Read the guide, then carry it.</h3>
            <p>The books and the four free apps carry the same hundred, kept current from one desk.</p>
            <div className="storebtns">
              <Link href="/book">BUY THE BOOK</Link>
              <Link href="/app">GET THE FREE APP</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
