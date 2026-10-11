"use client"

import * as React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Copy, Check, ExternalLink, HardDrive, Calendar, Maximize2, ImageIcon } from "lucide-react"
import { Asset } from "./types"

interface AssetsPreviewDialogProps {
  asset: Asset | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatBytes(bytes: number | null): string {
  if (!bytes || bytes === 0) return "0 B"
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
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return dateStr
  }
}

export function AssetsPreviewDialog({ asset, open, onOpenChange }: AssetsPreviewDialogProps) {
  const [copied, setCopied] = useState(false)
  const [imgError, setImgError] = useState(false)

  React.useEffect(() => {
    setImgError(false)
    setCopied(false)
  }, [asset])

  if (!asset) return null

  const ext = asset.filename.split(".").pop()?.toUpperCase() || "IMAGE"

  const handleCopy = () => {
    navigator.clipboard.writeText(asset.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0 gap-0">
        <DialogHeader className="p-5 pb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-[10px] uppercase">
              {ext}
            </Badge>
            <DialogTitle className="text-base font-semibold truncate max-w-md">
              {asset.filename}
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground">
            Asset ID #{asset.id}
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video w-full bg-muted/40 border-y flex items-center justify-center overflow-hidden">
          {!imgError ? (
            <img
              src={asset.url}
              alt={asset.filename}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground p-8">
              <ImageIcon className="size-10 stroke-1" />
              <span className="text-xs">Preview unavailable</span>
            </div>
          )}
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border bg-muted/20 p-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Maximize2 className="size-3.5" />
                <span>Dimensions</span>
              </div>
              <div className="font-semibold text-foreground">
                {asset.width && asset.height ? `${asset.width} × ${asset.height} px` : "—"}
              </div>
            </div>

            <div className="rounded-lg border bg-muted/20 p-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <HardDrive className="size-3.5" />
                <span>File Size</span>
              </div>
              <div className="font-semibold text-foreground">{formatBytes(asset.size)}</div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-lg border bg-muted/20 p-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Calendar className="size-3.5" />
                <span>Uploaded</span>
              </div>
              <div className="font-semibold text-foreground truncate">{formatDate(asset.date_created)}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2 border-t">
            <div className="text-xs text-muted-foreground truncate font-mono max-w-sm sm:max-w-md">
              {asset.url}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="h-8 text-xs gap-1.5"
              >
                {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                {copied ? "Copied" : "Copy URL"}
              </Button>
              <a
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default", size: "sm" }), "h-8 text-xs gap-1.5")}
              >
                <ExternalLink className="size-3.5" />
                Open
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
