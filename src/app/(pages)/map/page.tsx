import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPage } from "@/components/map/MapPage";

export const metadata: Metadata = {
  title: "Map | Top 100 Attractions",
  description: "Every place in the guide, on one map. Zoom is the interface.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <MapPage />
    </Suspense>
  );
}
