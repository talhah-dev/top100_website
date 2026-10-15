import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ExternalLinkIcon, Sparkles } from "lucide-react"

export function SiteHeader({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="relative flex h-(--header-height) shrink-0 items-center justify-between border-b border-[rgba(185,193,212,0.12)] bg-[#0A1122]/90 backdrop-blur-md px-4 transition-[width,height] ease-linear lg:px-6 z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 text-[#B9C1D4] hover:text-[#FABF33] transition" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 bg-[rgba(185,193,212,0.18)]"
        />
        <h1 className="font-['Overlock'] text-lg font-bold text-[#F6EFDF] tracking-wide">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#101A30] border border-[rgba(185,193,212,0.15)] text-[#B9C1D4]">
          <Sparkles className="size-3 text-[#FABF33]" />
          <span>Top 100 System</span>
        </div>
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-[rgba(250,191,51,0.35)] text-[#FABF33] bg-[rgba(250,191,51,0.08)] hover:bg-[rgba(250,191,51,0.18)] transition shadow-sm"
        >
          <span>Live Site</span>
          <ExternalLinkIcon className="size-3" />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 rainbow-bar opacity-50" />
    </header>
  )
}
