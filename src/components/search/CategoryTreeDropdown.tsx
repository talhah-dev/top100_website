"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { CATEGORY_GROUPS } from "./category-data";

interface CategoryTreeDropdownProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
  onClose: () => void;
}

export function CategoryTreeDropdown({
  selectedCategory,
  onSelect,
  onClose,
}: CategoryTreeDropdownProps) {
  return (
    <div className="category-clean-scrollbar w-full p-1.5 text-left select-none" style={{ paddingRight: "14px" }}>
      <button
        type="button"
        onClick={() => {
          onSelect("All");
          onClose();
        }}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
          selectedCategory === "All"
            ? "bg-[#FABF33]/15 text-[#FABF33] font-semibold"
            : "text-[#F6EFDF] hover:bg-white/5 hover:text-[#FABF33]"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-7 h-7 rounded-full bg-[#FABF33]/15 border border-[#FABF33]/30 flex items-center justify-center text-[#FABF33] shrink-0">
            <Sparkles className="size-3.5" />
          </div>
          <span className="text-[14px] font-semibold truncate">All Categories</span>
        </div>
        {selectedCategory === "All" && (
          <Check className="size-4 text-[#FABF33] shrink-0 ml-2" />
        )}
      </button>

      <div className="my-2 border-b border-white/5" />

      <div className="space-y-3">
        {CATEGORY_GROUPS.map((group) => {
          const isGroupSelected = selectedCategory === group.value;

          return (
            <div key={group.id} className="relative">
              <button
                type="button"
                onClick={() => {
                  onSelect(group.value);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                  isGroupSelected
                    ? "bg-[#FABF33]/15 text-[#FABF33] font-bold"
                    : "text-[#F6EFDF] hover:bg-white/5 hover:text-[#FABF33]"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-[#141B2E] border border-[#FABF33]/35 flex items-center justify-center shrink-0 shadow-xs p-1">
                    <Image
                      src={group.iconPath}
                      alt={group.name}
                      width={22}
                      height={22}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[14.5px] font-bold tracking-wide truncate">
                    {group.name}
                  </span>
                </div>
                {isGroupSelected && (
                  <Check className="size-4 text-[#FABF33] shrink-0 ml-2" />
                )}
              </button>

              {group.subcategories.length > 0 && (
                <div className="ml-[25px] pl-4 border-l border-[#FABF33]/30 my-1 space-y-1">
                  {group.subcategories.map((sub) => {
                    const isSubSelected = selectedCategory === sub.value;

                    return (
                      <button
                        key={sub.value}
                        type="button"
                        onClick={() => {
                          onSelect(sub.value);
                          onClose();
                        }}
                        className={`w-full flex items-center justify-between pl-2.5 pr-3 py-1.5 rounded-lg text-left transition-all ${
                          isSubSelected
                            ? "bg-[#FABF33]/15 text-[#FABF33] font-semibold"
                            : "text-[#F6EFDF]/85 hover:bg-white/5 hover:text-[#FABF33]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-5 h-5 rounded-md bg-[#141B2E]/60 border border-white/10 flex items-center justify-center shrink-0 p-0.5">
                            <Image
                              src={sub.iconPath}
                              alt={sub.label}
                              width={18}
                              height={18}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[13px] truncate">{sub.label}</span>
                        </div>
                        {isSubSelected && (
                          <Check className="size-3.5 text-[#FABF33] shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
