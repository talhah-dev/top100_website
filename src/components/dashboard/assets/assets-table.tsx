"use client"

import * as React from "react"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Search, Eye, ChevronLeft, ChevronRight, ImageIcon, ExternalLink, Loader2 } from "lucide-react"
import { Asset } from "./types"

interface AssetsTableProps {
  assets: Asset[]
  total: number
  page: number
  totalPages: number
  isLoading: boolean
  searchTerm: string
  onSearchChange: (value: string) => void
  onPageChange: (newPage: number) => void
  onSelect: (asset: Asset) => void
}

function formatBytes(bytes: number | null): string {
  if (!bytes || bytes === 0) return "—"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—"
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return dateStr
  }
}

function ImageThumbnail({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="size-10 rounded-md border bg-muted/50 flex items-center justify-center text-muted-foreground shrink-0">
        <ImageIcon className="size-5 stroke-1" />
      </div>
    )
  }

  return (
    <div className="size-10 rounded-md border bg-muted/30 overflow-hidden shrink-0 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setError(true)}
        className="size-full object-cover"
      />
    </div>
  )
}

export function AssetsTable({
  assets,
  total,
  page,
  totalPages,
  isLoading,
  searchTerm,
  onSearchChange,
  onPageChange,
  onSelect,
}: AssetsTableProps) {
  const fromRecord = total === 0 ? 0 : (page - 1) * 25 + 1
  const toRecord = Math.min(page * 25, total)

  return (
    <div className="px-4 lg:px-6">
      <Card className="border shadow-xs overflow-hidden">
        <CardHeader className="p-4 sm:p-6 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg font-semibold">Media Assets</CardTitle>
                <Badge variant="secondary" className="font-mono text-xs">
                  {total.toLocaleString()}
                </Badge>
              </div>
              <CardDescription className="text-xs">
                All images, attractions photography, and uploaded media files
              </CardDescription>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="size-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search images by name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 text-xs h-9"
              />
              {isLoading && (
                <Loader2 className="size-3.5 text-muted-foreground animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent bg-muted/40">
                  <TableHead className="w-[70px] text-xs font-semibold">Image</TableHead>
                  <TableHead className="text-xs font-semibold min-w-[200px]">File Name</TableHead>
                  <TableHead className="w-[140px] text-xs font-semibold">Dimensions</TableHead>
                  <TableHead className="w-[110px] text-xs font-semibold">File Size</TableHead>
                  <TableHead className="w-[140px] text-xs font-semibold">Date Uploaded</TableHead>
                  <TableHead className="text-right text-xs font-semibold w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.length > 0 ? (
                  assets.map((asset) => {
                    const ext = asset.filename.split(".").pop()?.toUpperCase() || "IMG"
                    return (
                      <TableRow
                        key={asset.id}
                        onClick={() => onSelect(asset)}
                        className="cursor-pointer transition-colors hover:bg-muted/60"
                      >
                        <TableCell className="py-2.5">
                          <ImageThumbnail src={asset.url} alt={asset.filename} />
                        </TableCell>

                        <TableCell className="py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-foreground truncate max-w-[240px] sm:max-w-xs md:max-w-md">
                              {asset.filename}
                            </span>
                            <Badge
                              variant="outline"
                              className="font-mono text-[10px] px-1.5 py-0 text-muted-foreground uppercase shrink-0"
                            >
                              {ext}
                            </Badge>
                          </div>
                        </TableCell>

                        <TableCell className="text-xs text-muted-foreground tabular-nums py-2.5">
                          {asset.width && asset.height ? `${asset.width} × ${asset.height} px` : "—"}
                        </TableCell>

                        <TableCell className="text-xs text-muted-foreground tabular-nums font-mono py-2.5">
                          {formatBytes(asset.size)}
                        </TableCell>

                        <TableCell className="text-xs text-muted-foreground whitespace-nowrap py-2.5">
                          {formatDate(asset.date_created)}
                        </TableCell>

                        <TableCell className="text-right py-2.5">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                onSelect(asset)
                              }}
                              className="h-8 px-2 text-xs gap-1 text-primary hover:text-primary"
                            >
                              <Eye className="size-3.5" />
                              View
                            </Button>
                            <a
                              href={asset.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 w-8 p-0 text-muted-foreground hover:text-foreground")}
                            >
                              <ExternalLink className="size-3.5" />
                            </a>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-32 text-center text-muted-foreground text-sm">
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="size-4 animate-spin text-primary" />
                          <span>Loading assets...</span>
                        </div>
                      ) : (
                        "No images found matching your search."
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t text-xs text-muted-foreground">
            <div>
              Showing <span className="font-medium text-foreground">{fromRecord}</span> to{" "}
              <span className="font-medium text-foreground">{toRecord}</span> of{" "}
              <span className="font-medium text-foreground">{total.toLocaleString()}</span> images
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs mr-2">
                Page {page} of {Math.max(1, totalPages)}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={page <= 1 || isLoading}
                onClick={() => onPageChange(page - 1)}
                className="h-8 px-2.5 gap-1 text-xs"
              >
                <ChevronLeft className="size-3.5" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages || isLoading}
                onClick={() => onPageChange(page + 1)}
                className="h-8 px-2.5 gap-1 text-xs"
              >
                Next
                <ChevronRight className="size-3.5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
