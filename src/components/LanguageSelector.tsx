"use client";

import React, { useEffect, useRef, useState } from "react";
import * as Flags from "country-flag-icons/react/3x2";

interface LangDef {
  value: string;
  label: string;
  flag: string;
}

const LANGUAGES: LangDef[] = [
  { value: "en", label: "English", flag: "GB" },
  { value: "fr", label: "French", flag: "FR" },
  { value: "es", label: "Spanish", flag: "ES" },
  { value: "de", label: "German", flag: "DE" },
  { value: "it", label: "Italian", flag: "IT" },
  { value: "nl", label: "Dutch", flag: "NL" },
  { value: "zh-CN", label: "Chinese (Simplified)", flag: "CN" },
  { value: "zh-TW", label: "Chinese (Traditional)", flag: "TW" },
  { value: "ja", label: "Japanese", flag: "JP" },
  { value: "ko", label: "Korean", flag: "KR" },
  { value: "ar", label: "Arabic", flag: "SA" },
  { value: "ru", label: "Russian", flag: "RU" },
  { value: "pt", label: "Portuguese", flag: "PT" },
  { value: "pl", label: "Polish", flag: "PL" },
  { value: "tr", label: "Turkish", flag: "TR" },
  { value: "el", label: "Greek", flag: "GR" },
  { value: "sv", label: "Swedish", flag: "SE" },
  { value: "no", label: "Norwegian", flag: "NO" },
  { value: "da", label: "Danish", flag: "DK" },
  { value: "fi", label: "Finnish", flag: "FI" },
  { value: "cs", label: "Czech", flag: "CZ" },
  { value: "ro", label: "Romanian", flag: "RO" },
  { value: "hu", label: "Hungarian", flag: "HU" },
  { value: "uk", label: "Ukrainian", flag: "UA" },
  { value: "vi", label: "Vietnamese", flag: "VN" },
  { value: "th", label: "Thai", flag: "TH" },
  { value: "id", label: "Indonesian", flag: "ID" },
  { value: "ms", label: "Malay", flag: "MY" },
  { value: "hi", label: "Hindi", flag: "IN" },
  { value: "bn", label: "Bengali", flag: "BD" },
  { value: "ur", label: "Urdu", flag: "PK" },
  { value: "fa", label: "Persian", flag: "IR" },
  { value: "iw", label: "Hebrew", flag: "IL" },
  { value: "bg", label: "Bulgarian", flag: "BG" },
  { value: "hr", label: "Croatian", flag: "HR" },
  { value: "sk", label: "Slovak", flag: "SK" },
  { value: "sl", label: "Slovenian", flag: "SI" },
  { value: "et", label: "Estonian", flag: "EE" },
  { value: "lv", label: "Latvian", flag: "LV" },
  { value: "lt", label: "Lithuanian", flag: "LT" },
  { value: "ga", label: "Irish", flag: "IE" },
  { value: "cy", label: "Welsh", flag: "GB" },
  { value: "is", label: "Icelandic", flag: "IS" },
  { value: "af", label: "Afrikaans", flag: "ZA" },
  { value: "sq", label: "Albanian", flag: "AL" },
  { value: "am", label: "Amharic", flag: "ET" },
  { value: "hy", label: "Armenian", flag: "AM" },
  { value: "az", label: "Azerbaijani", flag: "AZ" },
  { value: "eu", label: "Basque", flag: "ES" },
  { value: "be", label: "Belarusian", flag: "BY" },
  { value: "bs", label: "Bosnian", flag: "BA" },
  { value: "ca", label: "Catalan", flag: "ES" },
  { value: "gl", label: "Galician", flag: "ES" },
  { value: "ka", label: "Georgian", flag: "GE" },
  { value: "gu", label: "Gujarati", flag: "IN" },
  { value: "ht", label: "Haitian Creole", flag: "HT" },
  { value: "jw", label: "Javanese", flag: "ID" },
  { value: "kn", label: "Kannada", flag: "IN" },
  { value: "kk", label: "Kazakh", flag: "KZ" },
  { value: "km", label: "Khmer", flag: "KH" },
  { value: "la", label: "Latin", flag: "VA" },
  { value: "mk", label: "Macedonian", flag: "MK" },
  { value: "ml", label: "Malayalam", flag: "IN" },
  { value: "mt", label: "Maltese", flag: "MT" },
  { value: "mr", label: "Marathi", flag: "IN" },
  { value: "mn", label: "Mongolian", flag: "MN" },
  { value: "ne", label: "Nepali", flag: "NP" },
  { value: "pa", label: "Punjabi", flag: "IN" },
  { value: "sr", label: "Serbian", flag: "RS" },
  { value: "si", label: "Sinhala", flag: "LK" },
  { value: "so", label: "Somali", flag: "SO" },
  { value: "sw", label: "Swahili", flag: "KE" },
  { value: "ta", label: "Tamil", flag: "IN" },
  { value: "te", label: "Telugu", flag: "IN" },
  { value: "tl", label: "Filipino", flag: "PH" },
  { value: "yi", label: "Yiddish", flag: "IL" },
  { value: "zu", label: "Zulu", flag: "ZA" },
];

function FlagIcon({ code }: { code?: string }) {
  if (!code) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 14, flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }

  const FlagComponent = (Flags as Record<string, React.ComponentType<{ style?: React.CSSProperties }> | undefined>)[code];
  if (!FlagComponent) return null;

  return (
    <span
      style={{
        display: "inline-flex",
        width: 20,
        height: 14,
        overflow: "hidden",
        borderRadius: 2,
        flexShrink: 0,
        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
      }}
    >
      <FlagComponent style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </span>
  );
}

function getSavedLanguage(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (match) {
    const parts = match[1].split("/");
    return parts[2] || parts[1] || "en";
  }
  return "en";
}

function clearGoogleTranslateCookie() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`];
  const parts = host.split(".");
  if (parts.length > 2) {
    domains.push(`.${parts.slice(-2).join(".")}`);
  }
  domains.forEach((dom) => {
    const domainPart = dom ? `; domain=${dom}` : "";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${domainPart};`;
    document.cookie = `googtrans=; max-age=0; path=/${domainPart};`;
    document.cookie = `googtrans=; max-age=0; path=${domainPart};`;
  });
}

function applyGoogleLanguage(langCode: string) {
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (combo) {
    combo.value = langCode === "en" ? "" : langCode;
    combo.dispatchEvent(new Event("change"));
  }

  const hostname = window.location.hostname;
  if (!langCode || langCode === "en") {
    clearGoogleTranslateCookie();
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
  }
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const active = getSavedLanguage();
    if (active && active !== "en") {
      setCurrentLang(active);
      const applyWhenReady = () => {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
        if (combo) {
          if (combo.value !== active) {
            combo.value = active;
            combo.dispatchEvent(new Event("change"));
          }
        } else {
          setTimeout(applyWhenReady, 300);
        }
      };
      applyWhenReady();
    } else {
      setCurrentLang("en");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    if (val === currentLang) {
      setIsOpen(false);
      setSearch("");
      return;
    }

    if (val === "en") {
      setCurrentLang("en");
      clearGoogleTranslateCookie();
      setIsOpen(false);
      setSearch("");

      const win = window as unknown as {
        googleTranslator?: Record<string, { restore?: () => void }>;
      };

      if (win.googleTranslator) {
        try {
          Object.keys(win.googleTranslator).forEach((k) => {
            const item = win.googleTranslator?.[k];
            if (typeof item?.restore === "function") {
              item.restore();
            }
          });
        } catch {}
      }

      try {
        const iframes = document.querySelectorAll<HTMLIFrameElement>(
          'iframe.goog-te-banner-frame, iframe.skiptranslate, iframe[id*=":1.container"], iframe[id*=":2.container"]'
        );
        iframes.forEach((iframe) => {
          try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc) {
              const btn = doc.querySelector<HTMLElement>(
                '#\\:1\\.restore, button[id*="restore"], a[id*="restore"], .goog-te-button button'
              );
              if (btn) btn.click();
              const close = doc.querySelector<HTMLElement>('.goog-close-link, [id*="close"]');
              if (close) close.click();
            }
          } catch {}
        });
      } catch {}

      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.selectedIndex = 0;
        combo.value = "";
        combo.dispatchEvent(new Event("change"));
      }

      document.querySelectorAll(".translated-ltr, .translated-rtl").forEach((el) => {
        el.classList.remove("translated-ltr", "translated-rtl");
      });

      return;
    }

    setCurrentLang(val);
    applyGoogleLanguage(val);
    setIsOpen(false);
    setSearch("");
  };

  const currentObj = LANGUAGES.find((l) => l.value === currentLang) || LANGUAGES[0];

  const filtered = LANGUAGES.filter((l) =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="language-selector-wrap" ref={containerRef}>
      <button
        type="button"
        aria-label="Select Language"
        title={currentObj.label}
        aria-expanded={isOpen}
        className="lang-select-custom notranslate"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FlagIcon code={currentObj.flag} />
        <svg
          className={`lang-chevron ${isOpen ? "open" : ""}`}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu notranslate">
          <div className="lang-search-box">
            <input
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="lang-search-input"
              autoFocus
            />
          </div>
          <div className="lang-options-list category-clean-scrollbar">
            {filtered.map((l) => (
              <button
                key={l.value}
                type="button"
                className={`lang-option-item ${currentLang === l.value ? "active" : ""}`}
                onClick={() => handleSelect(l.value)}
              >
                <FlagIcon code={l.flag} />
                <span className="lang-option-name">{l.label.toUpperCase()}</span>
                {currentLang === l.value && (
                  <svg
                    className="lang-check"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FABF33"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
