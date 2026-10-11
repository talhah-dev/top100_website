"use client";

import React from "react";

interface DetailHeroProps {
  title?: string;
  category?: string;
  town?: string;
  area?: string;
  imageUrl?: string;
}

export function DetailHero({
  title = "Bodnant Garden",
  category = "Attraction",
  town = "Conwy Valley",
  area = "Wales",
  imageUrl,
}: DetailHeroProps) {
  const bg = imageUrl || "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=2400&q=80";

  return (
    <header className="hero dhero" id="hero">
      <div
        className="photo kb1 active"
        style={{
          backgroundImage: `url('${bg}')`,
        }}
      />
      <div className="scrim" />
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          {category} &middot; {area}
        </div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".35s" }}>{title}.</span>
          </span>
        </h1>
        <div className="where rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
          {[town, area].filter(Boolean).join(", ")}
        </div>
      </div>
      <div className="scrollcue">Scroll</div>
    </header>
  );
}
