"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface CategoryItem {
  label: string;
  value: string;
}

export const CATEGORIES: CategoryItem[] = [
  { label: "All Categories", value: "All" },
  { label: "Attractions", value: "Attractions" },
  { label: "Historical Places", value: "Historical Places" },
  { label: "Gardens", value: "Garden" },
  { label: "Museums", value: "Museums" },
  { label: "Accommodation", value: "Accommodation" },
  { label: "Hotels", value: "Hotels" },
  { label: "Eating Out", value: "Eating Out" },
  { label: "Iconic", value: "Iconic" },
  { label: "Pet Friendly", value: "Pet Friendly" },
];

export interface CategoryDropdownProps {
  value?: string;
  onChange?: (val: string) => void;
}

export function CategoryDropdown({
  value = "All",
  onChange,
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentItem = CATEGORIES.find((c) => c.value === value) || CATEGORIES[0];

  return (
    <div ref={containerRef} className="search-select-field">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between bg-transparent border-none text-[var(--cream,#F6EFDF)] text-sm cursor-pointer outline-none font-sans"
      >
        <span className="truncate">{currentItem.label}</span>
        <ChevronDown
          className={`size-4 text-[#FABF33] transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="search-dropdown-menu left-0 sm:right-0 sm:left-auto min-w-[240px] sm:min-w-[270px]">
          <div className="px-3 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5">
            Categories
          </div>
          <div className="search-dropdown-list mt-1">
            {CATEGORIES.map((item) => {
              const isSelected = value === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    onChange?.(item.value);
                    setIsOpen(false);
                  }}
                  className={`search-dropdown-item justify-between ${
                    isSelected ? "active" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {isSelected && (
                    <Check className="size-4 text-[#FABF33] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
