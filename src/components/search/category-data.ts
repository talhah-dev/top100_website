import { FerrisWheel, Utensils, Bed, Sparkles } from "lucide-react";

export interface CategorySubItem {
  label: string;
  value: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  value: string;
  icon: typeof FerrisWheel;
  subcategories: CategorySubItem[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "attractions",
    name: "Attractions",
    value: "Attractions",
    icon: FerrisWheel,
    subcategories: [
      { label: "Historical Places", value: "Historical Places" },
      { label: "Gardens", value: "Garden" },
      { label: "Museums", value: "Museums" },
      { label: "Iconic", value: "Iconic" },
    ],
  },
  {
    id: "eating-out",
    name: "Eating Out",
    value: "Eating Out",
    icon: Utensils,
    subcategories: [
      { label: "Restaurant with Rooms", value: "Restaurant with Rooms" },
    ],
  },
  {
    id: "accommodation",
    name: "Accommodation",
    value: "Accommodation",
    icon: Bed,
    subcategories: [
      { label: "Caravans / Campsites / Glamping", value: "Caravans / Campsites / Glamping" },
      { label: "Guest House / B&Bs", value: "Guest House / B&Bs" },
      { label: "Hotels", value: "Hotels" },
      { label: "Self Catering", value: "Self Catering" },
      { label: "Hostels", value: "Hostels" },
      { label: "Country House", value: "Country House" },
      { label: "Romance", value: "Romance" },
      { label: "Pet Friendly", value: "Pet Friendly" },
    ],
  },
];

export function getCategoryLabel(value: string): string {
  if (!value || value === "All") return "All Categories";
  for (const group of CATEGORY_GROUPS) {
    if (group.value === value) return group.name;
    for (const sub of group.subcategories) {
      if (sub.value === value) return sub.label;
    }
  }
  return value;
}
