import React from "react";
import Image from "next/image";

export function HeroEmblem({ className = "w-44 md:w-56" }: { className?: string }) {
  return (
    <div className={`relative mx-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Stevenson's Top One Hundred Attractions"
        width={320}
        height={340}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
