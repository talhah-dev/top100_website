import React from "react";
import "@/components/home/home.css";
import { LoadingIntro } from "@/components/LoadingIntro";
import { Navbar } from "@/components/Navbar";
import {
  HeroSection,
  MarqueeSection,
  FeaturedSection,
  RegionsSection,
  FiguresSection,
  FromTheBooksSection,
} from "@/components/home";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <LoadingIntro />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FeaturedSection />
        <RegionsSection />
        <FiguresSection />
        <FromTheBooksSection />
      </main>
      <Footer />
    </>
  );
}
