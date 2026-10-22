"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const wall1Quotes = [
  { text: "The only guide we trust when planning our summer. It has never once let us down.", who: "The Harpers · Kent" },
  { text: "Josh sent us to places we would never have found on our own.", who: "Reader review" },
  { text: "The definitive word on British and Irish days out.", who: "Travel press" },
  { text: "Our copy is dog-eared, highlighted and utterly loved.", who: "The Morgans · Leeds" },
  { text: "Every recommendation landed. Every single one.", who: "Reader review" },
  { text: "A national institution in paperback form.", who: "Press quote" },
];

const wall2Quotes = [
  { text: "Bought one for every family we know. It is that good.", who: "Reader review" },
  { text: "The app made our Scotland trip effortless from start to finish.", who: "The Frasers · Stirling" },
  { text: "Thirty years of knowing exactly where to go. Remarkable.", who: "Travel press" },
  { text: "We plan every school holiday around this list.", who: "The Patels · Birmingham" },
  { text: "If it is in the Top 100, it is worth the drive. Simple as that.", who: "Reader review" },
  { text: "The gold standard of tourism guides.", who: "Press quote" },
];

export function FromTheBooksSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="section" style={{ paddingTop: "40px", paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">From the Books</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Thirty years in print. <span className="grad">Millions of days out.</span>
        </h2>
      </div>

      <div className="wall rv in" style={{ "--d": ".2s" } as React.CSSProperties}>
        <div className="fade l" />
        <div className="fade r" />
        <div className="row">
          <div className="track2" id="wall1">
            {[...wall1Quotes, ...wall1Quotes].map((q, idx) => (
              <div key={idx} className="qcard">
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>&ldquo;{q.text}&rdquo;</p>
                <span>{q.who}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row rev" style={{ marginTop: "14px" }}>
          <div className="track2" id="wall2">
            {[...wall2Quotes, ...wall2Quotes].map((q, idx) => (
              <div key={idx} className="qcard">
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p>&ldquo;{q.text}&rdquo;</p>
                <span>{q.who}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: "64px" }}>
        <div className="duo">
          <div className="panelcard bookp rv in">
            <h3>The books that<br />started it all.</h3>
            <p>The best-selling Top 100 guides, available from all main book stores, online and direct.</p>
            <Link className="btn" href="/book">BUY THE BOOK ONLINE</Link>
            <div className="book">
              <b>TOP <i>100</i><br />ATTRACTIONS</b>
              <span>STEVENSON&rsquo;S GUIDES</span>
            </div>
          </div>

          <div className="panelcard appp rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
            <div className="appdots" />
            <h3>Four free apps.<br />One trusted standard.</h3>
            <p>England, Scotland, Wales and Ireland, always in your pocket.</p>
            <div className="storebtns">
              <Link href="/app">
                <FaApple style={{ fontSize: "16px", marginBottom: "2px" }} />
                <span>App Store</span>
              </Link>
              <Link href="/app">
                <FaGooglePlay style={{ fontSize: "13px" }} />
                <span>Google Play</span>
              </Link>
            </div>
          </div>

          <Link className="imgcard rv in" href="/detail/the-national-trust">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=70"
              alt="Green upland valley beneath crags"
            />
            <div className="veil" />
            <div className="meta">
              <span className="vchip">Top 100 Attractions</span>
              <h3>The National Trust</h3>
            </div>
          </Link>

          <div
            className="imgcard video rv in"
            style={{ "--d": ".15s" } as React.CSSProperties}
            role="button"
            tabIndex={0}
            onClick={() => setIsVideoOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsVideoOpen(true);
              }
            }}
            aria-label="Play the featured video"
          >
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?w=1200&q=70"
              alt="Estate woodland, featured video still"
            />
            <div className="veil" />
            <span className="play" />
            <div className="meta">
              <span className="vchip">Featured Video</span>
              <h3>Powerscourt Estate &amp; Gardens</h3>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-4xl w-[95vw] p-0 overflow-hidden bg-black/95 border border-[rgba(var(--gold-rgb),0.3)] shadow-2xl rounded-2xl [&>button]:z-50 [&>button]:bg-black/70 [&>button]:text-white [&>button]:hover:bg-black [&>button]:rounded-full [&>button]:top-3 [&>button]:right-3">
          <DialogTitle className="sr-only">
            Powerscourt Estate &amp; Gardens Featured Video
          </DialogTitle>
          <div className="relative w-full aspect-video">
            {isVideoOpen && (
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/g6w1gRdn67w?autoplay=1&si=EZBnJbxCeeyEms_r"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
