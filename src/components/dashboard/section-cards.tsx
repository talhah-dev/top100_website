"use client"

import Link from "next/link"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CompassIcon,
  FolderTreeIcon,
  ImageIcon,
  MailIcon,
  ArrowRightIcon,
  Sparkles,
} from "lucide-react"

export function SectionCards() {
  return (
    <div className="space-y-6 px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md hover:border-[rgba(250,191,51,0.4)] transition">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5">
            <CardDescription className="text-[#B9C1D4] font-medium">Total Attractions</CardDescription>
            <CardTitle className="font-['Overlock'] text-3xl font-black tabular-nums text-white mt-1">
              26,919
            </CardTitle>
            <CardAction>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(250,191,51,0.15)] text-[#FABF33] border border-[rgba(250,191,51,0.3)]">
                4 Nations
              </span>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex items-center gap-2 text-xs text-[#B9C1D4] border-t border-[rgba(185,193,212,0.08)] pt-3 pb-3">
            <CompassIcon className="size-4 text-[#FABF33]" />
            <span>Wales, Scotland, England & Ireland</span>
          </CardFooter>
        </Card>

        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md hover:border-[rgba(250,191,51,0.4)] transition">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5">
            <CardDescription className="text-[#B9C1D4] font-medium">Curated Areas</CardDescription>
            <CardTitle className="font-['Overlock'] text-3xl font-black tabular-nums text-white mt-1">
              113
            </CardTitle>
            <CardAction>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Counties & Coasts
              </span>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex items-center gap-2 text-xs text-[#B9C1D4] border-t border-[rgba(185,193,212,0.08)] pt-3 pb-3">
            <FolderTreeIcon className="size-4 text-emerald-400" />
            <span>Active regional directories</span>
          </CardFooter>
        </Card>

        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md hover:border-[rgba(250,191,51,0.4)] transition">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5">
            <CardDescription className="text-[#B9C1D4] font-medium">Form Submissions</CardDescription>
            <CardTitle className="font-['Overlock'] text-3xl font-black tabular-nums text-white mt-1">
              13
            </CardTitle>
            <CardAction>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                Inquiries
              </span>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex items-center gap-2 text-xs text-[#B9C1D4] border-t border-[rgba(185,193,212,0.08)] pt-3 pb-3">
            <MailIcon className="size-4 text-blue-400" />
            <span>Reader contact & recommendation forms</span>
          </CardFooter>
        </Card>

        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md hover:border-[rgba(250,191,51,0.4)] transition">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5">
            <CardDescription className="text-[#B9C1D4] font-medium">Media Assets</CardDescription>
            <CardTitle className="font-['Overlock'] text-3xl font-black tabular-nums text-white mt-1">
              5,830
            </CardTitle>
            <CardAction>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30">
                Library
              </span>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex items-center gap-2 text-xs text-[#B9C1D4] border-t border-[rgba(185,193,212,0.08)] pt-3 pb-3">
            <ImageIcon className="size-4 text-rose-400" />
            <span>Photographs & uploaded media</span>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/dashboard/assets"
          className="group relative rounded-2xl p-6 bg-[#101A30] border border-[rgba(185,193,212,0.14)] hover:border-[rgba(250,191,51,0.5)] transition overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rainbow-bar opacity-80" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.12)] text-[#FABF33]">
                  <ImageIcon className="size-5" />
                </span>
                <span className="font-['Overlock'] text-xl font-black text-white">
                  Media & Assets Library
                </span>
              </div>
              <p className="text-sm text-[#B9C1D4] pt-2 max-w-md">
                Search, inspect and filter 5,830 high-resolution attraction photos, file dimensions and upload dates.
              </p>
            </div>
            <span className="p-2.5 rounded-full bg-[#0D1528] text-[#FABF33] group-hover:translate-x-1 transition shrink-0 border border-[rgba(250,191,51,0.2)]">
              <ArrowRightIcon className="size-4" />
            </span>
          </div>
        </Link>

        <Link
          href="/dashboard/form-submissions"
          className="group relative rounded-2xl p-6 bg-[#101A30] border border-[rgba(185,193,212,0.14)] hover:border-[rgba(250,191,51,0.5)] transition overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rainbow-bar opacity-80" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.12)] text-[#FABF33]">
                  <MailIcon className="size-5" />
                </span>
                <span className="font-['Overlock'] text-xl font-black text-white">
                  Reader Form Submissions
                </span>
              </div>
              <p className="text-sm text-[#B9C1D4] pt-2 max-w-md">
                Review visitor messages, place submissions, telephone inquiries and correspondence details.
              </p>
            </div>
            <span className="p-2.5 rounded-full bg-[#0D1528] text-[#FABF33] group-hover:translate-x-1 transition shrink-0 border border-[rgba(250,191,51,0.2)]">
              <ArrowRightIcon className="size-4" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
