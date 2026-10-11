import React from "react";

export function ContactSocialBand() {
  return (
    <section className="socband rv in">
      <div className="eyebrow">Find Us On</div>
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
      <p className="socline">The guide posts what it finds, as it finds it.</p>
    </section>
  );
}
