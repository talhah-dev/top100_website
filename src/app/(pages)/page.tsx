import { Header } from "@/components/Header";
import { HeroSection } from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
