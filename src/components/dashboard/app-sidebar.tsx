"use client"

import * as React from "react"
import Link from "next/link"
import { NavMain } from "@/components/dashboard/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  CommandIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  GlobeIcon,
  FolderTreeIcon,
  ImageIcon,
  MailIcon,
  BotIcon,
  ArrowLeftRightIcon,
  SproutIcon,
  WrenchIcon,
  ShoppingBagIcon,
} from "lucide-react"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon className="size-4 shrink-0" />,
      isActive: true,
    },
    {
      title: "Entries",
      url: "#",
      icon: <FileTextIcon className="size-4 shrink-0" />,
    },
    {
      title: "Globals",
      url: "#",
      icon: <GlobeIcon className="size-4 shrink-0" />,
    },
    {
      title: "Categories",
      url: "#",
      icon: <FolderTreeIcon className="size-4 shrink-0" />,
    },
    {
      title: "Assets",
      url: "#",
      icon: <ImageIcon className="size-4 shrink-0" />,
    },
    {
      title: "Form Submissions",
      url: "#",
      icon: <MailIcon className="size-4 shrink-0" />,
    },
    {
      title: "Feed Me",
      url: "#",
      icon: <BotIcon className="size-4 shrink-0" />,
    },
    {
      title: "Site redirects",
      url: "#",
      icon: <ArrowLeftRightIcon className="size-4 shrink-0" />,
    },
    {
      title: "Sprig",
      url: "#",
      icon: <SproutIcon className="size-4 shrink-0" />,
    },
    {
      title: "Utilities",
      url: "#",
      icon: <WrenchIcon className="size-4 shrink-0" />,
    },
    {
      title: "Plugin Store",
      url: "#",
      icon: <ShoppingBagIcon className="size-4 shrink-0" />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/dashboard" />}
            >
              <CommandIcon className="size-5!" />
              <span className="text-base font-semibold">Top 100</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
