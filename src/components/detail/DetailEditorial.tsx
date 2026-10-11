"use client";

import React from "react";

export function DetailEditorial() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">What Josh Says</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Eighty acres, <span className="grad">zero filler.</span>
        </h2>
        <div className="prose">
          <p className="rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
            Start at the top and take the Italianate terraces in order. There are five, stepping down the hillside with a confidence that borders on arrogance: roses on one level, a lily pond on the next, and at the bottom the Pin Mill, sitting at the end of its canal as if it had been rehearsing the reflection for years.
          </p>
          <p className="rv in" style={{ "--d": ".25s" } as React.CSSProperties}>
            Then drop into the Dell and the mood changes entirely. This is the wild half, a steep wooded valley along the river, planted with champion trees that have had more than a century to get on with it. Climb back out and the garden plays its final card: the view, wide open across the valley to the mountains beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
