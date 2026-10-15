import React from "react";
import "@/components/dashboard/dashboard.css";

export const metadata = {
  title: "Admin Dashboard | Stevenson's Top 100",
  description: "Management dashboard for Top 100 Attractions, media assets and reader inquiries.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-root min-h-screen bg-background text-foreground antialiased selection:bg-[#FABF33] selection:text-[#0A1122]">
      {children}
    </div>
  );
}
