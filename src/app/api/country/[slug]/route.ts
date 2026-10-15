import { NextRequest, NextResponse } from "next/server";
import { getDynamicCountryData } from "@/lib/country-service";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const data = getDynamicCountryData(slug);

    if (!data) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
