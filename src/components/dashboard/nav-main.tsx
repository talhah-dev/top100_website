"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={item.isActive}
                className={cn(
                  "transition-all duration-200 rounded-xl px-3 py-2 text-sm font-medium",
                  item.isActive
                    ? "bg-[#101A30]! text-[#FABF33]! font-bold border border-[rgba(250,191,51,0.35)] shadow-[0_4px_16px_rgba(0,0,0,0.35)] data-[active=true]:bg-[#101A30]! data-[active=true]:text-[#FABF33]!"
                    : "text-[#B9C1D4] hover:bg-[#101A30]/70 hover:text-white hover:border-[rgba(185,193,212,0.1)] border border-transparent"
                )}
                render={<Link href={item.url} />}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
