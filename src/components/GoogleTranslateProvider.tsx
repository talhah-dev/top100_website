"use client";

import React, { useEffect } from "react";

export function GoogleTranslateProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as unknown as {
      google?: {
        translate?: {
          TranslateElement: new (
            options: { pageLanguage: string; autoDisplay?: boolean },
            elementId: string
          ) => unknown;
        };
      };
      googleTranslateElementInit?: () => void;
    };

    win.googleTranslateElementInit = () => {
      if (win.google?.translate?.TranslateElement) {
        try {
          new win.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
            },
            "google_translate_hidden_holder"
          );
        } catch {}
      }
    };

    if (win.google?.translate?.TranslateElement) {
      win.googleTranslateElementInit();
      return;
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_hidden_holder"
      className="notranslate"
      style={{
        position: "fixed",
        top: "-9999px",
        left: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}

