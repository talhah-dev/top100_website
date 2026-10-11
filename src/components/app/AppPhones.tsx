"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NATIONS = [
  {
    name: "Wales",
    image: "/thumbs/app-wales.jpg",
    alt: "The Wales app home screen",
    href: "/search?area=Wales",
    tintRgb: "255,107,128",
    gradient: "linear-gradient(135deg, #FF6B80, #C31A35)",
    delay: "0s",
  },
  {
    name: "England",
    image: "/thumbs/app-england.jpg",
    alt: "The England app home screen",
    href: "/search?area=London",
    tintRgb: "147,183,212",
    gradient: "linear-gradient(135deg, #93B7D4, #00356B)",
    delay: ".08s",
  },
  {
    name: "Ireland",
    image: "/thumbs/app-ireland.jpg",
    alt: "The Ireland app home screen",
    href: "/search?area=Ireland",
    tintRgb: "47,191,110",
    gradient: "linear-gradient(135deg, #2FBF6E, #00843D)",
    delay: ".16s",
  },
  {
    name: "Scotland",
    image: "/thumbs/app-scotland.jpg",
    alt: "The Scotland app home screen",
    href: "/search?area=Scotland",
    tintRgb: "77,178,255",
    gradient: "linear-gradient(135deg, #4DB2FF, #007FFF)",
    delay: ".24s",
  },
];

export function AppPhones() {
  return (
    <section className="phones">
      <div className="wrap">
        <div className="prail">
          {NATIONS.map((nation) => (
            <div
              key={nation.name}
              className="phone rv in"
              style={
                {
                  "--tint-rgb": nation.tintRgb,
                  "--d": nation.delay,
                } as React.CSSProperties
              }
            >
              <Link
                aria-label={`Open the ${nation.name} guide`}
                className="pframe"
                href={nation.href}
              >
                <span className="notch" />
                <span className="pscreen">
                  <Image
                    src={nation.image}
                    alt={nation.alt}
                    width={320}
                    height={680}
                    loading="lazy"
                  />
                </span>
              </Link>
              <div className="pmeta">
                <b
                  className="chip"
                  style={{ background: nation.gradient }}
                />
                <div>
                  <h3>{nation.name}</h3>
                  <Link className="popen" href={nation.href}>
                    EXPLORE THE GUIDE &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
