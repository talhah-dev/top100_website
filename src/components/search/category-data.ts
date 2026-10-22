export interface CategorySubItem {
  label: string;
  value: string;
  iconPath: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  value: string;
  iconPath: string;
  subcategories: CategorySubItem[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "attractions",
    name: "Attractions",
    value: "Attractions",
    iconPath: "/attraction_icons_transparent/33-theme-park.png",
    subcategories: [
      {
        label: "Historical Places",
        value: "Historical Places",
        iconPath: "/attraction_icons_transparent/02-castle.png",
      },
      {
        label: "Gardens",
        value: "Garden",
        iconPath: "/attraction_icons_transparent/17-garden.png",
      },
      {
        label: "Museums",
        value: "Museums",
        iconPath: "/attraction_icons_transparent/03-museum.png",
      },
      {
        label: "Iconic",
        value: "Iconic",
        iconPath: "/attraction_icons_transparent/60-local-landmark.png",
      },
    ],
  },
  {
    id: "eating-out",
    name: "Eating Out",
    value: "Eating Out",
    iconPath: "/attraction_icons_transparent/45-distillery-brewery.png",
    subcategories: [
      {
        label: "Restaurant with Rooms",
        value: "Restaurant with Rooms",
        iconPath: "/attraction_icons_transparent/06-stately-home.png",
      },
    ],
  },
  {
    id: "accommodation",
    name: "Accommodation",
    value: "Accommodation",
    iconPath: "/attraction_icons_transparent/01-historic-house.png",
    subcategories: [
      {
        label: "Hotels",
        value: "Hotels",
        iconPath: "/attraction_icons_transparent/06-stately-home.png",
      },
      {
        label: "Guest House / B&Bs",
        value: "Guest House / B&Bs",
        iconPath: "/attraction_icons_transparent/01-historic-house.png",
      },
      {
        label: "Self Catering",
        value: "Self Catering",
        iconPath: "/attraction_icons_transparent/48-market.png",
      },
      {
        label: "Caravans / Campsites / Glamping",
        value: "Caravans / Campsites / Glamping",
        iconPath: "/attraction_icons_transparent/27-forest.png",
      },
      {
        label: "Country House",
        value: "Country House",
        iconPath: "/attraction_icons_transparent/07-palace.png",
      },
      {
        label: "Hostels",
        value: "Hostels",
        iconPath: "/attraction_icons_transparent/36-activity-centre.png",
      },
      {
        label: "Romance",
        value: "Romance",
        iconPath: "/attraction_icons_transparent/17-garden.png",
      },
      {
        label: "Pet Friendly",
        value: "Pet Friendly",
        iconPath: "/attraction_icons_transparent/37-wildlife-centre.png",
      },
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

export function getCategoryIcon(value: string): string | undefined {
  if (!value || value === "All") return "/attraction_icons_transparent/60-local-landmark.png";
  for (const group of CATEGORY_GROUPS) {
    if (group.value === value) return group.iconPath;
    for (const sub of group.subcategories) {
      if (sub.value === value) return sub.iconPath;
    }
  }
  return undefined;
}
