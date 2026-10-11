"use client";

import React from "react";

interface DetailEditorialProps {
  title?: string;
  description?: string;
  review?: string;
}

function sanitizeHtml(html: string) {
  return html
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\r/g, "")
    .replace(/\\n/g, "")
    .replace(/id=\\?"docs-internal-guid-[^\\">]*\\?"/gi, "");
}

export function DetailEditorial({
  title = "Attraction",
  description,
  review,
}: DetailEditorialProps) {
  const content = description?.trim() || review?.trim() || "";
  const cleaned = sanitizeHtml(content);

  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Editorial Review</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Exploring <span className="grad">{title}.</span>
        </h2>
        {cleaned ? (
          <div
            className="prose text-white/90 leading-relaxed [&>p]:mb-4 [&>p]:text-base [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4"
            dangerouslySetInnerHTML={{ __html: cleaned }}
          />
        ) : (
          <div className="prose">
            <p className="rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
              Immerse yourself in one of the most exceptional settings in the country, carefully curated and preserved for visitors who appreciate authentic regional heritage.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
