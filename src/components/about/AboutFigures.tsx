"use client";

import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { target: 5000, suffix: "+", label: "Places listed" },
  { target: 5, suffix: "", label: "Regions covered" },
  { target: 30, suffix: "+", label: "Years in hospitality" },
  { target: 1, suffix: "", label: "Voice you can trust" },
];

export function AboutFigures() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!animatedRef.current) {
            animatedRef.current = true;
            if (rafId) cancelAnimationFrame(rafId);
            const startTime = performance.now();
            const duration = 1400;

            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(1, elapsed / duration);
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCounts(statsData.map((s) => Math.round(s.target * easeOut)));

              if (progress < 1) {
                rafId = requestAnimationFrame(animate);
              }
            };

            rafId = requestAnimationFrame(animate);
          }
        } else {
          if (rafId) cancelAnimationFrame(rafId);
          animatedRef.current = false;
          setCounts([0, 0, 0, 0]);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <div className="wrap">
        <div className="stats rv in">
          {statsData.map((stat, i) => (
            <div key={i} className="stat">
              <b>
                {counts[i].toLocaleString("en-GB")}
                {stat.suffix}
              </b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
