"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, HardDrive } from "lucide-react"

interface AssetsCardsProps {
  total: number
}

export function AssetsCards({ total }: AssetsCardsProps) {
  return (
    <div className="px-4 lg:px-6">
      <Card className="max-w-sm bg-linear-to-t from-primary/5 to-card shadow-xs">
        <CardHeader>
          <CardDescription>Total Images</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {total.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1 text-emerald-600 border-emerald-500/20 bg-emerald-500/10">
              <ImageIcon className="size-3" />
              Live
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <HardDrive className="size-3.5 text-primary" />
            Media & Attractions Library
          </div>
          <span>Stored attraction images & uploads</span>
        </CardFooter>
      </Card>
    </div>
  )
}
