import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/privacy/privacy.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrivacyHero, PrivacyContent } from "@/components/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Top 100 Attractions",
  description: "Our commitment to protecting your privacy and handling your information in accordance with the Data Protection Act.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}

