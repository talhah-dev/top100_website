import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="fbrand">
          <Image
            src="/images/logo.png"
            id="footLogo"
            alt="Top 100 Attractions badge"
            width={180}
            height={180}
            className="flogo"
          />
          <div>
            <div className="brandline">Stevenson&rsquo;s Top 100</div>
            <p style={{ marginTop: "10px" }}>Britain and Ireland&rsquo;s definitive guide to quality days out.</p>
            <div className="brandbar">
              <span style={{ background: "#C31A35" }} />
              <span style={{ background: "#00356B" }} />
              <span style={{ background: "#00843D" }} />
              <span style={{ background: "#6C2BD9" }} />
              <span style={{ background: "#007FFF" }} />
              <em>One family &middot; five regions</em>
            </div>
            <div className="foot-soc">
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
            </div>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/search?category=Attractions">Attractions</Link></li>
            <li><Link href="/search?category=Accommodation">Places to Stay</Link></li>
            <li><Link href="/search?category=Eating+Out">Places to Eat</Link></li>
            <li><Link href="/map">Map view</Link></li>
          </ul>
        </div>
        <div>
          <h4>Regions</h4>
          <ul>
            <li><Link href="/country/wales">Wales</Link></li>
            <li><Link href="/country/england">England</Link></li>
            <li><Link href="/country/ireland">Ireland</Link></li>
            <li><Link href="/country/northern-ireland">Northern Ireland</Link></li>
            <li><Link href="/country/scotland">Scotland</Link></li>
          </ul>
        </div>
        <div>
          <h4>Top 100</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/book">Buy the Book</Link></li>
            <li><Link href="/app">Get the Free App</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="base">
        &copy; 2026 Ryvel &middot; Founder Muhammad Afaq, design concept for Top&nbsp;100 Attractions
      </div>
    </footer>
  );
}
