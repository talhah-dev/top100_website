import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/detail/detail.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  DetailHero,
  DetailVerdict,
  DetailEditorial,
  DetailBeforeYouGo,
  DetailVisitCard,
  DetailGallery,
  DetailNearby,
} from "@/components/detail";

export const metadata: Metadata = {
  title: "Bodnant Garden | Top 100 Attractions",
  description: "A National Trust garden on the slopes above the Conwy Valley. Eighty acres, zero filler.",
};

export default function DetailPage() {
  return (
    <>
      <Navbar />
      <main>
        <DetailHero />
        <DetailVerdict />
        <DetailEditorial />
        <DetailBeforeYouGo />
        <DetailVisitCard />
        <DetailGallery />
        <DetailNearby />
      </main>
      <Footer />
    </>
  );
}
