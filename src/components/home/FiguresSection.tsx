"use client";

import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { target: 5000, suffix: "+", label: "Places listed" },
  { target: 5, suffix: "", label: "Regions covered" },
  { target: 30, suffix: "+", label: "Years in hospitality" },
  { target: 1, suffix: "", label: "Voice you can trust" },
];

export function FiguresSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();
          const duration = 1400;

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(statsData.map((s) => Math.round(s.target * easeOut)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="figures" style={{ paddingTop: "40px" }} ref={sectionRef}>
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
