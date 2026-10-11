"use client";

import React from "react";

export function DetailVerdict() {
  return (
    <section className="verdict" id="about">
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">About</span>
        </div>
        <p className="vq rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          A National Trust garden on the slopes above the Conwy Valley, running from the house at the top of the ground down to the river at the bottom.{" "}
          <span className="grad">Steep in places, and a long walk from end to end.</span>
        </p>
      </div>
    </section>
  );
}
