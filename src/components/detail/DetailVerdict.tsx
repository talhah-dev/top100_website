"use client";

import React from "react";

interface DetailVerdictProps {
  summary?: string;
  description?: string;
  review?: string;
}

function toPlainText(str?: string) {
  if (!str) return "";
  return str
    .replace(/\\r/g, " ")
    .replace(/\\n/g, " ")
    .replace(/\r/g, " ")
    .replace(/\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isCompleteSentence(text: string): boolean {
  const t = text.trim();
  if (!t || t.endsWith("...") || t.endsWith("…")) return false;
  return /[.!?]["'”’]?$/.test(t);
}

function getSentences(text: string): string[] {
  if (!text) return [];
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
      return Array.from(segmenter.segment(text), (s) => s.segment.trim()).filter(Boolean);
    } catch {}
  }
  const matches = text.match(/[^.!?]+[.!?]+["'”’]?/g);
  return matches ? matches.map((s) => s.trim()).filter(Boolean) : [text.trim()];
}

function getCleanVerdict(summary?: string, description?: string, review?: string): string {
  const cleanSummary = toPlainText(summary);
  const cleanDesc = toPlainText(description);
  const cleanRev = toPlainText(review);

  if (cleanSummary && isCompleteSentence(cleanSummary)) {
    return cleanSummary;
  }

  if (cleanSummary && (cleanDesc || cleanRev)) {
    const sPrefix = cleanSummary.slice(0, Math.min(30, cleanSummary.length)).toLowerCase();

    if (cleanDesc && cleanDesc.toLowerCase().startsWith(sPrefix)) {
      const descSentences = getSentences(cleanDesc);
      if (descSentences.length > 0 && isCompleteSentence(descSentences[0])) {
        let result = descSentences[0];
        if (result.length < 100 && descSentences.length > 1 && isCompleteSentence(descSentences[1])) {
          result += " " + descSentences[1];
        }
        return result;
      }
    }

    if (cleanRev && cleanRev.toLowerCase().startsWith(sPrefix)) {
      const revSentences = getSentences(cleanRev);
      if (revSentences.length > 0 && isCompleteSentence(revSentences[0])) {
        let result = revSentences[0];
        if (result.length < 100 && revSentences.length > 1 && isCompleteSentence(revSentences[1])) {
          result += " " + revSentences[1];
        }
        return result;
      }
    }
  }

  if (cleanSummary) {
    const sumSentences = getSentences(cleanSummary);
    const completeSentences = sumSentences.filter((s) => isCompleteSentence(s));
    if (completeSentences.length > 0) {
      return completeSentences.join(" ");
    }
  }

  if (cleanDesc) {
    const descSentences = getSentences(cleanDesc);
    if (descSentences.length > 0 && isCompleteSentence(descSentences[0])) {
      let result = descSentences[0];
      if (result.length < 100 && descSentences.length > 1 && isCompleteSentence(descSentences[1])) {
        result += " " + descSentences[1];
      }
      return result;
    }
  }

  if (cleanRev) {
    const revSentences = getSentences(cleanRev);
    if (revSentences.length > 0 && isCompleteSentence(revSentences[0])) {
      let result = revSentences[0];
      if (result.length < 100 && revSentences.length > 1 && isCompleteSentence(revSentences[1])) {
        result += " " + revSentences[1];
      }
      return result;
    }
  }

  if (cleanSummary) {
    return cleanSummary.replace(/[,;:\-\s]+$/, "") + ".";
  }

  return "A place of notable heritage and character, well worth taking the time to experience.";
}

export function DetailVerdict({
  summary,
  description,
  review,
}: DetailVerdictProps) {
  const content = getCleanVerdict(summary, description, review);

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
