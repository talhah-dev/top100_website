import { NextResponse } from "next/server"
import areas from "@/data/areas.json"

export async function GET() {
  return NextResponse.json({ areas })
}
