import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/search/search.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchContent } from "@/components/search";

export const metadata: Metadata = {
  title: "Search | Top 100 Attractions",
  description: "Find somewhere worth going. Name a place and see what is worth your time.",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchContent />
      <Footer />
    </>
  );
}
