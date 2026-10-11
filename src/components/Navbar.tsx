"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowSearch(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
        <div className="brand">
          <Link href="/">
            <Image
              className="logo"
              src="/images/logo.png"
              alt="Stevenson's Top 100 Attractions"
              width={160}
              height={70}
              priority
            />
          </Link>
          <span className="bcol">
            <span className="name">Stevenson&rsquo;s Top 100</span>
            <span className="nav-soc">
              <a
                href="https://www.facebook.com/Top100AttractionsUKIRELAND"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                </svg>
              </a>
              <a
                href="https://x.com/top100attractio"
                target="_blank"
                rel="noreferrer"
                aria-label="X, formerly Twitter"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/top100attractions"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </span>
          </span>
        </div>

        <div className="links">
          <Link href="/search">ATTRACTIONS</Link>
          <Link href="#stay">PLACES TO STAY</Link>
          <Link href="#eat">PLACES TO EAT</Link>
          <Link href="/search">MAP</Link>
          <Link href="/book">THE BOOK</Link>
        </div>

        <div className="actions">
          <Link
            aria-label="Search all places"
            className={`nav-search ${showSearch ? "show" : ""}`}
            href="/search"
            id="navSearch"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="7" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
            SEARCH
          </Link>
          <Link className="cta" href="#app">
            GET THE APP
          </Link>
        </div>

        <button
          className="burger"
          id="burger"
          aria-label="Open menu"
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mnav" className={menuOpen ? "open" : ""}>
        <button
          className="close"
          id="mclose"
          aria-label="Close menu"
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <Link href="/search" onClick={() => setMenuOpen(false)}>Attractions</Link>
        <Link href="#stay" onClick={() => setMenuOpen(false)}>Places to Stay</Link>
        <Link href="#eat" onClick={() => setMenuOpen(false)}>Places to Eat</Link>
        <Link href="/search" onClick={() => setMenuOpen(false)}>Map</Link>
        <Link href="/book" onClick={() => setMenuOpen(false)}>The Book</Link>
        <Link href="#app" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold)" }}>
          Get the App
        </Link>
        <span className="foot-soc">
          <a
            href="https://www.facebook.com/Top100AttractionsUKIRELAND"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
            </svg>
          </a>
          <a
            href="https://x.com/top100attractio"
            target="_blank"
            rel="noreferrer"
            aria-label="X, formerly Twitter"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/top100attractions"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </>
  );
}
