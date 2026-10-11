export interface Asset {
  id: number
  volume_id: number | null
  folder_id: number | null
  filename: string
  kind: string
  width: number | null
  height: number | null
  size: number | null
  url: string
  date_created: string
  date_updated: string
}

export interface AssetsApiResponse {
  assets: Asset[]
  total: number
  page: number
  limit: number
  totalPages: number
}
