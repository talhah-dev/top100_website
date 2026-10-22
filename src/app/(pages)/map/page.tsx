import type { Metadata } from "next";
import { MapPage } from "@/components/map/MapPage";

export const metadata: Metadata = {
  title: "Map | Top 100 Attractions",
  description: "Every place in the guide, on one map. Zoom is the interface.",
};

export default function Page() {
  return <MapPage />;
}
