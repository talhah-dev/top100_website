"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import { AssetsCards } from "./assets-cards"
import { AssetsTable } from "./assets-table"
import { AssetsPreviewDialog } from "./assets-preview-dialog"
import { Asset, AssetsApiResponse } from "./types"

export function AssetsContent() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm)
      setPage(1)
    }, 300)
    return () => clearTimeout(handler)
  }, [searchTerm])

  const fetchAssets = useCallback(async (searchQuery: string, pageNum: number) => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        limit: "25",
      })
      if (searchQuery.trim()) {
        params.append("q", searchQuery.trim())
      }
      const res = await fetch(`/api/assets?${params.toString()}`)
      if (res.ok) {
        const data: AssetsApiResponse = await res.json()
        setAssets(data.assets || [])
        setTotal(data.total || 0)
        setPages(data.totalPages || 1)
      }
    } catch {
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAssets(debouncedSearch, page)
  }, [debouncedSearch, page, fetchAssets])

  const handleSelect = (asset: Asset) => {
    setSelectedAsset(asset)
    setIsPreviewOpen(true)
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col gap-6 py-4 md:py-6">
      <AssetsCards total={total} />
      <AssetsTable
        assets={assets}
        total={total}
        page={page}
        totalPages={totalPages}
        isLoading={isLoading}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onPageChange={handlePageChange}
        onSelect={handleSelect}
      />
      <AssetsPreviewDialog
        asset={selectedAsset}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
      />
    </div>
  )
}
