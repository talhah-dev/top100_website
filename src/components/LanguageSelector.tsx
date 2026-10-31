"use client";

import React, { useEffect, useState } from "react";

export function LanguageSelector({ id = "google_translate_element" }: { id?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

    const init = () => {
      if (win.google?.translate?.TranslateElement) {
        const el = document.getElementById(id);
        if (el && el.children.length === 0) {
          try {
            new win.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                autoDisplay: false,
              },
              id
            );
          } catch {}
        }
      }
    };

    if (win.google?.translate?.TranslateElement) {
      init();
    } else {
      win.googleTranslateElementInit = init;

      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [id]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="language-selector-wrap">
      <div id={id} className="notranslate" />
    </div>
  );
}
