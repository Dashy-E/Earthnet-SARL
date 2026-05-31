/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  textColorClass?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "w-12 h-12", 
  showText = false,
  textColorClass = "text-slate-900" 
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg 
        id="earthnet-solutions-brand-logo"
        className={className} 
        viewBox="0 0 500 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Bounds */}
        <circle cx="250" cy="250" r="230" stroke="#0f2e59" strokeWidth="12" fill="#fafbfc" />
        <circle cx="250" cy="250" r="218" stroke="#f26a36" strokeWidth="2" strokeDasharray="6 6" />
        
        {/* The Globe Network background */}
        <mask id="globe-mask">
          <circle cx="250" cy="220" r="160" fill="white" />
        </mask>
        
        <g mask="url(#globe-mask)">
          {/* Globe base */}
          <circle cx="250" cy="220" r="160" fill="#003566" />
          
          {/* Earth landmass outlines (simplified stylized continents) */}
          {/* Africa */}
          <path d="M220 180 C230 185, 240 210, 260 215 C280 220, 290 240, 275 270 C260 300, 240 330, 220 350 C210 360, 205 340, 200 320 C195 300, 180 280, 185 250 C190 220, 210 200, 220 180 Z" fill="#2d6a4f" opacity="0.85" />
          {/* Middle East & Europe parts */}
          <path d="M210 130 C220 120, 250 110, 270 125 C290 140, 310 130, 320 150 C300 160, 280 155, 260 170 C240 185, 210 160, 210 130 Z" fill="#52b788" opacity="0.8" />
          {/* Asia / India */}
          <path d="M300 140 C320 120, 350 130, 380 140 C390 160, 370 180, 360 200 C350 220, 330 220, 310 205 C305 190, 290 160, 300 140 Z" fill="#2d6a4f" opacity="0.85" />
          
          {/* Network Grids (White lines & nodes) */}
          <path d="M120 220 Q250 160 380 220" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <path d="M120 220 Q250 280 380 220" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <path d="M250 60 Q250 220 250 380" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M150 130 Q250 220 350 310" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M150 310 Q250 220 350 130" stroke="white" strokeWidth="1" opacity="0.4" />
          
          {/* Glowing Nodes */}
          <circle cx="210" cy="180" r="6" fill="#fca311" />
          <circle cx="210" cy="180" r="12" stroke="#fca311" strokeWidth="2" opacity="0.5" />
          <circle cx="270" cy="160" r="5" fill="#e76f51" />
          <circle cx="250" cy="260" r="6" fill="#00b4d8" />
          <circle cx="250" cy="260" r="14" stroke="#00b4d8" strokeWidth="2" opacity="0.4" />
          <circle cx="310" cy="190" r="5" fill="#ffd166" />
          <circle cx="350" cy="230" r="6" fill="#4caf50" />
        </g>
        
        {/* Structural Buildings in the center/foreground */}
        {/* Left tower (Dark grey/navy) */}
        <path d="M180 380 L180 230 L230 190 L260 215 L260 380 Z" fill="#09203f" stroke="#fafbfc" strokeWidth="4" />
        {/* Accent lines on left tower */}
        <line x1="200" y1="240" x2="200" y2="360" stroke="#f26a36" strokeWidth="3" />
        <line x1="220" y1="230" x2="220" y2="360" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="240" y1="240" x2="240" y2="360" stroke="#cbd5e1" strokeWidth="2" />

        {/* Right tower (Sleek Silver/White) */}
        <path d="M230 380 L230 250 L280 210 L310 235 L310 380 Z" fill="#4e657e" stroke="#fafbfc" strokeWidth="4" />
        {/* Accent rows representing windows on right tower */}
        <rect x="245" y="260" width="10" height="20" fill="white" opacity="0.8" />
        <rect x="245" y="295" width="10" height="20" fill="white" opacity="0.8" />
        <rect x="245" y="330" width="10" height="20" fill="white" opacity="0.8" />
        <rect x="280" y="260" width="15" height="20" fill="white" opacity="0.8" />
        <rect x="280" y="295" width="15" height="20" fill="white" opacity="0.8" />
        <rect x="280" y="330" width="15" height="20" fill="white" opacity="0.8" />

        {/* Construction Crane (Vivid Orange) on the left side */}
        <g id="logo-crane" stroke="#f26a36" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Crane mast */}
          <line x1="120" y1="380" x2="120" y2="180" />
          {/* Lattice diagonals on mast */}
          <line x1="120" y1="330" x2="105" y2="310" strokeWidth="3" />
          <line x1="120" y1="280" x2="105" y2="260" strokeWidth="3" />
          <line x1="120" y1="230" x2="105" y2="210" strokeWidth="3" />
          {/* Crane jib (horizontal boom) */}
          <line x1="80" y1="180" x2="210" y2="180" strokeWidth="8" />
          {/* Diagnostic cables/braces */}
          <line x1="120" y1="150" x2="120" y2="180" strokeWidth="4" />
          <line x1="120" y1="150" x2="160" y2="180" strokeWidth="3" />
          <line x1="120" y1="150" x2="85" y2="180" strokeWidth="3" />
          {/* Hook dangling */}
          <line x1="170" y1="180" x2="170" y2="215" strokeWidth="3" stroke="#003566" />
          <path d="M165 215 Q170 225 175 215" fill="none" stroke="#003566" strokeWidth="4" />
        </g>
        
        {/* Dynamic Blue Arrow wrapping around the globe representing Connectivity */}
        <path 
          d="M100 350 C30 250, 160 50, 360 110 C390 120, 420 145, 410 180" 
          stroke="#0077b6" 
          strokeWidth="12" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Arrow head */}
        <path d="M385 185 L420 185 L415 150 Z" fill="#0077b6" stroke="#0077b6" strokeWidth="6" strokeLinejoin="round" />
        
        {/* Soil Base / Horizontal Ground Platform */}
        <line x1="50" y1="380" x2="450" y2="380" stroke="#0f2e59" strokeWidth="12" strokeLinecap="round" />
        
        {/* Tagline Base */}
        <rect x="75" y="405" width="350" height="40" rx="6" fill="#0f2e59" />
        <text 
          x="250" 
          y="430" 
          fill="white" 
          fontSize="17" 
          fontWeight="bold" 
          fontFamily="sans-serif" 
          textAnchor="middle" 
          letterSpacing="2"
        >
          LUBUMBASHI • DRC
        </text>
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-extrabold tracking-tight ${textColorClass} font-sans`}>
            EARTHNET
          </span>
          <span className="text-xs font-bold text-orange-500 tracking-widest font-mono">
            SOLUTIONS SARL
          </span>
        </div>
      )}
    </div>
  );
};
