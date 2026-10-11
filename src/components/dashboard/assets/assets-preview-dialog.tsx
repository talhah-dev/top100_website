"use client"

import * as React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Copy,
  Check,
  ExternalLink,
  HardDrive,
  Calendar,
  Maximize2,
  ImageIcon,
  X,
  FileImage,
  Globe,
} from "lucide-react"
import { Asset } from "./types"

interface AssetsPreviewDialogProps {
  asset: Asset | null
  open: boolean
  onOpenChange: (open: boolean) => void
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
      <DialogContent
        showCloseButton={false}
        className="w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[92vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl border shadow-2xl bg-card"
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b bg-card shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <Badge
              variant="outline"
              className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border-primary/20 bg-primary/5 text-primary shrink-0"
            >
              {ext}
            </Badge>
            <div className="min-w-0">
              <DialogTitle className="text-sm sm:text-base font-semibold truncate max-w-[260px] sm:max-w-md md:max-w-lg leading-tight">
                {asset.filename}
              </DialogTitle>
              <span className="text-[11px] text-muted-foreground font-mono">
                Asset ID #{asset.id}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-3">
            <a
              href={asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "size-8 p-0 text-muted-foreground hover:text-foreground rounded-lg"
              )}
              title="Open in new tab"
            >
              <ExternalLink className="size-4" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="size-8 p-0 text-muted-foreground hover:text-foreground rounded-lg"
              title="Close modal"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[54vh] bg-muted/30 dark:bg-neutral-950/40 flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none shrink-0 border-b">
          {!imgError ? (
            <img
              src={asset.url}
              alt={asset.filename}
              className="max-w-full max-h-full object-contain rounded-md shadow-xs"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground p-8">
              <ImageIcon className="size-12 stroke-1 text-muted-foreground/60" />
              <span className="text-xs font-medium">Image preview not available</span>
            </div>
          )}

          {asset.width && asset.height && !imgError && (
            <div className="absolute bottom-3 right-3 bg-background/85 backdrop-blur-xs border text-[11px] font-mono px-2 py-0.5 rounded-md shadow-xs text-muted-foreground">
              {asset.width} × {asset.height} px
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 space-y-4 bg-card shrink-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
            <div className="rounded-xl border bg-muted/20 p-2.5 sm:p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Maximize2 className="size-3.5 text-primary" />
                <span className="font-medium">Dimensions</span>
              </div>
              <div className="font-semibold text-foreground truncate">
                {asset.width && asset.height ? `${asset.width} × ${asset.height} px` : "—"}
              </div>
            </div>

            <div className="rounded-xl border bg-muted/20 p-2.5 sm:p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <HardDrive className="size-3.5 text-primary" />
                <span className="font-medium">File Size</span>
              </div>
              <div className="font-semibold text-foreground truncate">{formatBytes(asset.size)}</div>
            </div>

            <div className="rounded-xl border bg-muted/20 p-2.5 sm:p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <FileImage className="size-3.5 text-primary" />
                <span className="font-medium">Asset Type</span>
              </div>
              <div className="font-semibold text-foreground uppercase truncate">
                {ext} Image
              </div>
            </div>

            <div className="rounded-xl border bg-muted/20 p-2.5 sm:p-3">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Calendar className="size-3.5 text-primary" />
                <span className="font-medium">Date Uploaded</span>
              </div>
              <div className="font-semibold text-foreground truncate">{formatDate(asset.date_created)}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t">
            <div className="flex-1 min-w-0 bg-muted/30 border rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Globe className="size-3.5 text-muted-foreground shrink-0" />
              <span className="text-xs font-mono text-muted-foreground truncate select-all">
                {asset.url}
              </span>
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
                Open Image
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
