"use client";

import React from "react";

export function DetailVisitCard() {
  return (
    <section className="section" id="visit" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Plan Your Visit</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Get in touch, <span className="grad">get there.</span>
        </h2>
        <div className="visitcard rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
          <div className="vinfo">
            <div className="fact">
              <span className="flabel">Address</span>
              <span className="fval">
                Bodnant Garden, Tal-y-Cafn
                <br />
                Conwy Valley, Wales LL28 5RE
              </span>
            </div>
            <div className="fact">
              <span className="flabel">Telephone</span>
              <span className="fval">
                <a href="tel:+441492650460">+44 1492 650 460</a>
              </span>
            </div>
            <div className="fact">
              <span className="flabel">Email</span>
              <span className="fval">
                <a href="mailto:bodnantgarden@nationaltrust.org.uk">
                  bodnantgarden@nationaltrust.org.uk
                </a>
              </span>
            </div>
            <div className="fact">
              <span className="flabel">Website</span>
              <span className="fval">
                <a
                  href="https://www.nationaltrust.org.uk/visit/wales/bodnant-garden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nationaltrust.org.uk
                </a>
              </span>
            </div>
            <div className="fact">
              <span className="flabel">Follow</span>
              <span className="socials">
                <a
                  href="https://www.facebook.com/Top100AttractionsUKIRELAND"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/top100attractio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X, formerly Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/top100attractions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
            <a
              className="dirs"
              href="https://maps.google.com/?q=Bodnant+Garden,+Tal-y-Cafn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET DIRECTIONS &#8599;
            </a>
          </div>
          <div className="vmap">
            <svg
              viewBox="0 0 1200 560"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Stylised map of the Conwy Valley with Bodnant Garden pinned"
            >
              <rect width="1200" height="560" fill="#0D1528" />
              <g fill="none" stroke="rgba(185,193,212,.06)" strokeWidth="1.5">
                <ellipse cx="330" cy="300" rx="210" ry="150" />
                <ellipse cx="330" cy="300" rx="140" ry="95" />
                <ellipse cx="1010" cy="380" rx="180" ry="130" />
                <ellipse cx="1010" cy="380" rx="110" ry="75" />
              </g>
              <path
                d="M0 0 H1200 V70 Q1050 96 900 84 Q780 74 720 96 Q660 116 560 92 Q400 60 240 84 Q120 100 0 78 Z"
                fill="rgba(76,110,190,.16)"
              />
              <text className="waterlab" x="410" y="46">
                CONWY BAY
              </text>
              <path
                d="M718 84 Q760 120 744 168"
                fill="none"
                stroke="rgba(76,110,190,.3)"
                strokeWidth="44"
                strokeLinecap="round"
              />
              <path
                d="M718 92 Q740 150 716 200 Q690 250 706 300 Q724 350 700 400 Q676 450 700 500 Q712 530 706 560"
                fill="none"
                stroke="rgba(76,110,190,.34)"
                strokeWidth="26"
                strokeLinecap="round"
              />
              <g stroke="rgba(185,193,212,.28)" strokeWidth="3" fill="none">
                <path d="M0 132 Q300 118 600 138 Q900 158 1200 136" />
                <path d="M786 120 Q800 240 762 330 Q730 420 754 560" />
              </g>
              <g stroke="rgba(185,193,212,.16)" strokeWidth="2" fill="none">
                <path d="M672 180 Q650 300 664 420 Q672 480 650 560" />
                <path d="M700 402 L744 398" />
              </g>
              <text className="roadlab" x="330" y="122">
                A55
              </text>
              <text className="roadlab" x="806" y="252">
                A470
              </text>
              <g fill="rgba(185,193,212,.75)">
                <circle cx="872" cy="92" r="4.5" />
                <circle cx="806" cy="140" r="4" />
                <circle cx="662" cy="168" r="4.5" />
                <circle cx="700" cy="402" r="4" />
                <circle cx="656" cy="528" r="4" />
              </g>
              <text x="856" y="88" textAnchor="end">
                LLANDUDNO
              </text>
              <text x="790" y="136" textAnchor="end">
                DEGANWY
              </text>
              <text x="566" y="162">
                CONWY
              </text>
              <text x="552" y="396">
                TAL-Y-CAFN
              </text>
              <text x="470" y="548">
                BETWS-Y-COED
              </text>
              <g stroke="rgba(185,193,212,.25)" strokeWidth="2" fill="none">
                <path d="M300 330 l14 -18 l14 18" />
                <path d="M350 360 l14 -18 l14 18" />
                <path d="M270 385 l14 -18 l14 18" />
              </g>
              <text x="332" y="316" opacity=".7">
                THE CARNEDDAU
              </text>
              <circle className="pin-ring" cx="760" cy="432" r="26" fill="none" stroke="#FABF33" strokeWidth="2" />
              <circle cx="760" cy="432" r="9" fill="#FABF33" />
              <circle cx="760" cy="432" r="3" fill="#0A1122" />
              <text className="pinlab" x="736" y="438" textAnchor="end">
                BODNANT GARDEN
              </text>
              <g stroke="rgba(185,193,212,.5)" strokeWidth="2" fill="none">
                <path d="M856 496 V456" />
                <path d="M848 468 L856 456 L864 468" />
              </g>
              <text x="850" y="516">
                N
              </text>
              <path
                d="M320 508 H440 M320 502 V514 M440 502 V514"
                stroke="rgba(185,193,212,.4)"
                strokeWidth="2"
                fill="none"
              />
              <text className="roadlab" x="346" y="498">
                2 MILES
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
