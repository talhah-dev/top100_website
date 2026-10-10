import React from "react";

export function HeroWireframe({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-7xl opacity-40 md:opacity-50"
      >
        <defs>
          <linearGradient id="goldWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <path
          d="M 330 500 L 410 500 L 410 820 M 340 550 L 410 500"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="330"
          y="490"
          width="160"
          height="340"
          rx="80"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.5"
        />

        <ellipse
          cx="680"
          cy="660"
          rx="180"
          ry="200"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="680"
          cy="660"
          rx="150"
          ry="170"
          stroke="url(#goldWireGrad)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        <ellipse
          cx="960"
          cy="660"
          rx="180"
          ry="200"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="960"
          cy="660"
          rx="150"
          ry="170"
          stroke="url(#goldWireGrad)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        <path
          d="M 200 750 Q 700 870 1200 750"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.2"
        />
        
        <path
          d="M 600 840 C 600 885 800 885 800 840"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.5"
        />
        <line
          x1="700"
          y1="820"
          x2="700"
          y2="880"
          stroke="url(#goldWireGrad)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
