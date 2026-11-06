import { NextRequest, NextResponse } from "next/server";
import { executeSearch } from "@/lib/search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "";
    const area = searchParams.get("area") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "18", 10);

    const result = await executeSearch({
      q,
      area,
      category,
      page,
      limit,
      forMap: false,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
