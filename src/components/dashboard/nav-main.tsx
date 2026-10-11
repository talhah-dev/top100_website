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
                  "transition-colors",
                  item.isActive
                    ? "bg-[#1e293b]! text-white! font-medium hover:bg-[#1e293b]! hover:text-white! data-[active=true]:bg-[#1e293b]! data-[active=true]:text-white!"
                    : "hover:bg-accent! hover:text-accent-foreground!"
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
