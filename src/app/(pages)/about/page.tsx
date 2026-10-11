import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/about/about.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AboutHero,
  AboutEditorial,
  AboutRegions,
  AboutFigures,
  AboutReaderWall,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Top 100 Attractions",
  description: "What it takes to be one of the hundred. Recommendations, not directories.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutEditorial />
        <AboutRegions />
        <AboutFigures />
        <AboutReaderWall />
      </main>
      <Footer />
    </>
  );
}
