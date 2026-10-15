"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NavMain } from "@/components/dashboard/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  FileTextIcon,
  FolderTreeIcon,
  ImageIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboardIcon className="size-4 shrink-0" />,
  },
  {
    title: "Entries",
    url: "#",
    icon: <FileTextIcon className="size-4 shrink-0" />,
  },
  {
    title: "Categories",
    url: "#",
    icon: <FolderTreeIcon className="size-4 shrink-0" />,
  },
  {
    title: "Assets",
    url: "/dashboard/assets",
    icon: <ImageIcon className="size-4 shrink-0" />,
  },
  {
    title: "Form Submissions",
    url: "/dashboard/form-submissions",
    icon: <MailIcon className="size-4 shrink-0" />,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const items = navItems.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }))

  return (
    <Sidebar collapsible="offcanvas" className="border-r border-[rgba(185,193,212,0.12)] bg-[#060B16]" {...props}>
      <SidebarHeader className="p-0 border-b border-[rgba(185,193,212,0.12)] bg-[#0A1122]">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3.5 transition hover:bg-[rgba(250,191,51,0.04)]"
        >
          <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-[#0D1528] border border-[rgba(250,191,51,0.35)] shadow-md shrink-0">
            <Image
              src="/images/logo.png"
              alt="Stevenson's Top 100 Logo"
              width={34}
              height={34}
              className="object-contain w-auto h-auto"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-['Overlock'] font-black text-sm tracking-wide text-white truncate leading-tight">
              Stevenson&rsquo;s <span className="text-[#FABF33]">Top 100</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#B9C1D4] uppercase flex items-center gap-1.5 mt-0.5">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Admin Portal
            </span>
          </div>
        </Link>
        <div className="rainbow-bar opacity-80" />
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter className="border-t border-[rgba(185,193,212,0.1)] p-3 bg-[#0A1122]/50">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 text-xs font-bold rounded-xl border border-[rgba(250,191,51,0.3)] text-[#FABF33] bg-[rgba(250,191,51,0.06)] hover:bg-[rgba(250,191,51,0.14)] transition"
        >
          <span>View Live Website</span>
          <ExternalLinkIcon className="size-3.5" />
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}
