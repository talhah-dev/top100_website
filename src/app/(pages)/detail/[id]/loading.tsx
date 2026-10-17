import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/ui/spinner";
import "@/components/home/home.css";
import "@/components/detail/detail.css";

export default function DetailLoading() {
  return (
    <>
      <Navbar />
      <main className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-28 text-center">
        <div className="relative flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full blur-xl bg-[var(--gold,#FABF33)]/25 animate-pulse" />
            <Spinner className="relative size-12 text-[var(--gold,#FABF33)]" />
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold,#FABF33)]">
              Top 100 Attractions
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Loading Attraction...
            </h2>
            <p className="text-xs text-[var(--mist,#94a3b8)]">
              Preparing photos, verdict, and visitor details
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
