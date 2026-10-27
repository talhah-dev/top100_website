import { getDb } from "@/lib/db";
import { getFallbackCoordinates } from "./coordinates";

interface GeocodeInput {
  id?: number;
  title?: string;
  address?: string;
  town?: string;
  county?: string;
  postcode?: string;
  area?: string;
}

export async function resolveCoordinates(input: GeocodeInput): Promise<{ lat: number; lng: number } | null> {
  const { id, title, address, town, county, postcode, area } = input;

  if (postcode) {
    const cleanPc = postcode.replace(/[^A-Za-z0-9]/g, "");
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(`https://api.postcodes.io/postcodes/${cleanPc}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const d = await res.json();
        if (d.result?.latitude && d.result?.longitude) {
          const lat = Number(d.result.latitude);
          const lng = Number(d.result.longitude);
          if (id) {
            try {
              getDb().prepare("UPDATE attractions SET lat = ?, lng = ? WHERE id = ?").run(lat, lng, id);
            } catch {}
          }
          return { lat, lng };
        }
      }
    } catch {}
  }

  const queries = [
    [title, town, county].filter(Boolean).join(", "),
    [address, town, county].filter(Boolean).join(", "),
    [address, county].filter(Boolean).join(", "),
    [town, county].filter(Boolean).join(", "),
  ].filter((q, idx, arr) => q.length > 0 && arr.indexOf(q) === idx);

  for (const q of queries) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`;
      const res = await fetch(url, {
        headers: { "User-Agent": "Top100AttractionsApp/1.0" },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const d = await res.json();
        if (Array.isArray(d) && d.length > 0 && d[0].lat && d[0].lon) {
          const lat = parseFloat(d[0].lat);
          const lng = parseFloat(d[0].lon);
          if (id) {
            try {
              getDb().prepare("UPDATE attractions SET lat = ?, lng = ? WHERE id = ?").run(lat, lng, id);
            } catch {}
          }
          return { lat, lng };
        }
      }
    } catch {}
  }

  const [fallbackLat, fallbackLng] = getFallbackCoordinates(county, town, area);
  return { lat: fallbackLat, lng: fallbackLng };
}
