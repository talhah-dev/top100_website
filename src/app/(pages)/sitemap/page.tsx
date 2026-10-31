import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/sitemap/sitemap.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SitemapHero, SitemapContent } from "@/components/sitemap";

export const metadata: Metadata = {
  title: "Sitemap | Top 100 Attractions",
  description: "Complete directory of regional attractions, places to stay, places to eat, and guide pages across Stevenson's Top 100.",
};

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitemapHero />
        <SitemapContent />
      </main>
      <Footer />
    </>
  );
}

