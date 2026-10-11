"use client";

import React, { useState, useEffect } from "react";

export function LoadingIntro() {
  const [count, setCount] = useState(1);
  const [done, setDone] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500;

    const endIntro = () => {
      setDone(true);
      document.documentElement.classList.add("loaded");
      document.querySelectorAll("#heroInner .rv").forEach((el) => {
        el.classList.add("in");
      });
      setTimeout(() => {
        setUnmounted(true);
      }, 900);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(1, (timestamp - startTime) / duration);
      const current = Math.max(1, Math.round(100 * (1 - Math.pow(1 - progress, 3))));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(endIntro, 380);
      }
    };

    const frameId = requestAnimationFrame(step);
    const fallbackTimer = setTimeout(endIntro, 3800);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (unmounted) return null;

  return (
    <div id="intro" className={done ? "done" : ""}>
      <div className="lbl">Stevenson&rsquo;s</div>
      <div className="n" id="introN">{count}</div>
      <div className="sub">Top 100 Attractions</div>
    </div>
  );
}
