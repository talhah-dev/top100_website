"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "ATTRACTIONS", mobileLabel: "Attractions", href: "#attractions" },
  { label: "PLACES TO STAY", mobileLabel: "Places to Stay", href: "#stay" },
  { label: "PLACES TO EAT", mobileLabel: "Places to Eat", href: "#eat" },
  { label: "MAP", mobileLabel: "Map", href: "#map" },
  { label: "THE BOOK", mobileLabel: "The Book", href: "#book" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? "bg-[#2b0d17]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-black/35 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Stevenson's Top 100"
                fill
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-amber-300 transition-colors"
              >
                Stevenson&apos;s Top 100
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="size-4 rounded-full border border-amber-400/50 flex items-center justify-center text-[8px] text-amber-300 hover:text-white hover:border-white transition-all"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="size-4 rounded-full border border-amber-400/50 flex items-center justify-center text-[8px] text-amber-300 hover:text-white hover:border-white transition-all"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="size-4 rounded-full border border-amber-400/50 flex items-center justify-center text-[8px] text-amber-300 hover:text-white hover:border-white transition-all"
                >
                  <FaInstagram />
                </a>
                <div className="w-10 sm:w-14 h-[1px] bg-amber-400/40" />
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-[0.14em] text-zinc-100">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-amber-300 transition-colors uppercase py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="#app"
              className="rounded-full bg-[linear-gradient(90deg,#5285f2_0%,#35ba62_34%,#f4be28_67%,#fa7260_100%)] text-[#111827] font-black text-xs tracking-wider uppercase px-7 py-2.5 shadow-md hover:brightness-105 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              GET THE APP
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 text-white hover:text-amber-300 transition-colors"
              aria-label="Open mobile menu"
            >
              <HiMenuAlt3 className="size-7" />
            </button>
          </div>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-[#10b981] via-[#06b6d4] via-[#3b82f6] via-[#8b5cf6] via-[#ec4899] via-[#ef4444] via-[#f59e0b] to-[#eab308]" />
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-[#0c121e] shadow-2xl flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-end mb-8">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-1 text-amber-400 hover:text-amber-300 transition-colors"
              aria-label="Close mobile menu"
            >
              <IoClose className="size-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-amber-300 transition-colors"
              >
                {item.mobileLabel}
              </Link>
            ))}
            <Link
              href="#app"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors mt-1"
            >
              Get the App
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 pt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="size-9 rounded-full border border-amber-400/50 flex items-center justify-center text-xs text-amber-300 hover:text-white hover:border-white transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="size-9 rounded-full border border-amber-400/50 flex items-center justify-center text-xs text-amber-300 hover:text-white hover:border-white transition-all"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="size-9 rounded-full border border-amber-400/50 flex items-center justify-center text-xs text-amber-300 hover:text-white hover:border-white transition-all"
          >
            <FaInstagram />
          </a>
        </div>
      </aside>
    </>
  );
}
