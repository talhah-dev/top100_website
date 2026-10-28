"use client";

import React, { useState, useRef, useEffect } from "react";

export interface DestinationItem {
  id: string;
  name: string;
  flagUrl: string;
}

export const DESTINATIONS: DestinationItem[] = [
  {
    id: "all",
    name: "All Countries",
    flagUrl: "/flags/gb.svg",
  },
  {
    id: "england",
    name: "England",
    flagUrl: "/flags/england.svg",
  },
  {
    id: "scotland",
    name: "Scotland",
    flagUrl: "/flags/scotland.svg",
  },
  {
    id: "wales",
    name: "Wales",
    flagUrl: "/flags/wales.svg",
  },
  {
    id: "ireland",
    name: "Ireland",
    flagUrl: "/flags/ireland.svg",
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    flagUrl: "/flags/northern-ireland.svg",
  },
];

export interface WhereToGoDropdownProps {
  value: string;
  onChange?: (val: string) => void;
  onSelect?: (destination: DestinationItem) => void;
  placeholder?: string;
}

export function WhereToGoDropdown({
  value,
  onChange,
  onSelect,
  placeholder = "Where would you like to go?",
}: WhereToGoDropdownProps) {
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

  const filtered = value.trim()
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(value.toLowerCase())
      )
    : DESTINATIONS;

  const handleSelect = (item: DestinationItem) => {
    if (onSelect) {
      onSelect(item);
    } else if (onChange) {
      onChange(item.name);
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="search-dest-field">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
          if (!isOpen) setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
      />

      {isOpen && (
        <div className="search-dropdown-menu left-0 min-w-[280px] sm:min-w-[320px]">
          <div className="px-3 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5">
            Select Country
          </div>
          <div className="search-dropdown-list mt-1">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="search-dropdown-item"
                >
                  <img
                    src={item.flagUrl}
                    alt={item.name}
                    width={28}
                    height={20}
                    className="w-7 h-5 object-cover rounded shadow-xs border border-white/10 shrink-0"
                    loading="lazy"
                  />
                  <span>{item.name}</span>
                </button>
              ))
            ) : (
              <div className="px-3 py-3 text-xs text-[#B9C1D4] italic">
                Press search or enter to find &ldquo;{value}&rdquo;
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
