import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/app/app.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AppHero,
  AppPhones,
  AppFeatures,
  AppFamily,
} from "@/components/app";

export const metadata: Metadata = {
  title: "The Free App | Top 100 Attractions",
  description: "Four apps, one for each nation, free on both stores. Carry the definitive guide in your pocket.",
};

export default function AppPage() {
  return (
    <>
      <Navbar />
      <main>
        <AppHero />
        <AppPhones />
        <AppFeatures />
        <AppFamily />
      </main>
      <Footer />
    </>
  );
}
