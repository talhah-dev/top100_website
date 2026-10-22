"use client";

import React from "react";

interface DetailVerdictProps {
  summary?: string;
  review?: string;
}

function toPlainText(str?: string) {
  if (!str) return "";
  return str
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function DetailVerdict({
  summary,
  review,
}: DetailVerdictProps) {
  const cleanSummary = toPlainText(summary);
  const cleanReview = toPlainText(review);
  const content =
    cleanSummary ||
    cleanReview ||
    "A place of notable heritage and character, well worth taking the time to experience.";

  return (
    <section className="dverdict" id="about">
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">About</span>
        </div>
        <p className="vq rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          {content}
        </p>
      </div>
    </section>
  );
}
