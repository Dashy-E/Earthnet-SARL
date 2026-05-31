/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface MapProps {
  lang: 'en' | 'fr';
}

export const CompanyMap: React.FC<MapProps> = ({ lang }) => {
  const [activePin, setActivePin] = useState<string | null>('hq');

  const pins = {
    hq: {
      name: { en: 'Earthnet HQ & Fabrication Depot', fr: 'Siège Social & Dépôt Earthnet' },
      coords: '1064, Route Likasi, Village TUMBWE',
      desc: { 
        en: 'Our primary engineering barracks, structural steel shop, and precast block manufacturing factory.', 
        fr: 'Nos bureaux techniques, l\'atelier de chaudronnerie et la presse de blocs de béton.' 
      }
    },
    checkpoint: {
      name: { en: 'Likasi Road Security Checkpoint', fr: 'Poste de Contrôle Routier - Tumbwe' },
      coords: 'Route Likasi Highway',
      desc: { 
        en: 'Key reference waypoint before turning east into Tumbwe operational village.', 
        fr: 'Point de repère routier majeur avant de tourner vers l\'est dans le village Tumbwe.' 
      }
    },
    quarry: {
      name: { en: 'Aggregates & Sieve Yard', fr: 'Carrière de Granulats & Criblage' },
      coords: 'Adjacent Extraction Zone',
      desc: { 
        en: 'Our high-grade sand and gravel sourcing depot for the precast concrete mixers.', 
        fr: 'Notre approvisionnement en sable de quartz et graviers concassés pour les blocs.' 
      }
    }
  };

  const text = {
    en: {
      instructions: 'Click on the pins below to trace route directions from Lubumbashi Center northward along Route Likasi.',
      legend: 'Site Legend',
      hqLabel: 'Earthnet HQ',
      highwayLabel: 'Route Likasi (To Kolwezi)',
      lushiLabel: 'To Lubumbashi Centre (18 km)',
      tumbweLabel: 'Village Tumbwe District'
    },
    fr: {
      instructions: 'Cliquez sur les repères pour tracer l\'itinéraire depuis le centre-ville de Lubumbashi par la Route Likasi.',
      legend: 'Légende de la Carte',
      hqLabel: 'Siège Earthnet',
      highwayLabel: 'Route Likasi (Vers Kolwezi)',
      lushiLabel: 'Vers Lubumbashi Centre (18 km)',
      tumbweLabel: 'Zone Village Tumbwe'
    }
  }[lang];

  return (
    <div id="company-interactive-map" className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h4 className="text-lg font-bold text-slate-100 font-sans tracking-tight">
            {lang === 'en' ? 'Interactive HQ Navigation' : 'Navigation Interactive du Siège'}
          </h4>
          <p className="text-xs text-slate-400 font-mono mt-1">
            {text.instructions}
          </p>
        </div>
        <div className="flex gap-2 bg-slate-900 justify-start p-1.5 rounded-lg border border-slate-800 text-xs font-mono">
          <span className="text-orange-500 font-bold">★ GPS:</span>
          <span className="text-slate-300">11°34'12.4"S, 27°25'49.1"E</span>
        </div>
      </div>

      <div className="relative aspect-video w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
        {/* Dynamic Map Vector Grid */}
        <svg viewBox="0 0 800 450" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Topographical Rivers / Landscape */}
          <path d="M-10 120 Q 200 130 350 200 T 810 240" fill="none" stroke="#1d3557" strokeWidth="24" opacity="0.3" strokeLinecap="round" />
          <text x="50" y="105" fill="#1d3557" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.7">
            TUMBWE STREAM / RIVIÈRE TUMBWE
          </text>

          {/* Route Likasi Highway (Asphalt Grey Line) */}
          <path d="M 150 460 Q 200 250 420 50" fill="none" stroke="#334155" strokeWidth="36" strokeLinecap="square" />
          {/* Yellow center dashes */}
          <path d="M 150 460 Q 200 250 420 50" fill="none" stroke="#fca311" strokeWidth="2" strokeDasharray="15 15" />
          
          {/* Road labels */}
          <g transform="rotate(-38 270 190)">
            <text x="210" y="195" fill="#e2e8f0" fontSize="13" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">
              {text.highwayLabel}
            </text>
          </g>
          
          <g transform="rotate(-38 180 350)">
            <text x="100" y="355" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              {text.lushiLabel}
            </text>
          </g>

          {/* Minor Tracks leading to HQ */}
          <path d="M 285 242 Q 400 280 480 300" fill="none" stroke="#475569" strokeWidth="16" strokeLinecap="round" />
          <path d="M 285 242 Q 400 280 480 300" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
          <text x="340" y="295" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif" opacity="0.8">
            Access Rd / Voie d'accès Earthnet
          </text>

          {/* Area Zones */}
          <circle cx="500" cy="300" r="110" fill="#f26a36" fillOpacity="0.04" stroke="#f26a36" strokeDasharray="5 5" strokeWidth="1" strokeOpacity="0.3" />
          <text x="520" y="380" fill="#f26a36" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
            {text.tumbweLabel}
          </text>

          {/* Earthnet HQ Compound boundary */}
          <rect x="440" y="240" stroke="#f26a36" strokeWidth="2" fill="#0f2e59" fillOpacity="0.75" width="120" height="90" rx="10" />
          <text x="500" y="285" fill="#fafbfc" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            EARTHNET
          </text>
          <text x="500" y="300" fill="#ffedd5" fontSize="9" fontFamily="monospace" textAnchor="middle">
            ADMIN & FACTORY
          </text>

          {/* Sieve aggregate area */}
          <circle cx="620" cy="220" r="40" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="620" cy="220" r="30" fill="#475569" opacity="0.5" />
          
          {/* Scenic tree pins for decoration */}
          {[
            {x:420, y:360}, {x:580, y:340}, {x:480, y:180},
            {x:610, y:370}, {x:680, y:280}, {x:370, y:380}
          ].map((t, idx) => (
            <g key={idx} transform={`translate(${t.x}, ${t.y})`} opacity="0.4">
              <path d="M 0 0 L -5 -12 L 5 -12 Z" fill="#10b981" />
              <circle cx="0" cy="-14" r="6" fill="#047857" />
            </g>
          ))}

          {/* PINS FOR INTERACTIVE SELECTION */}
          {/* 1. Earthnet HQ Pin */}
          <g 
            className="cursor-pointer group" 
            onClick={() => setActivePin('hq')}
            transform="translate(500, 260)"
          >
            <circle cx="0" cy="0" r="18" fill="#f26a36" fillOpacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
            <path d="M0 -22 C-10 -22, -10 -5, 0 10 C10 -5, 10 -22, 0 -22 Z" fill="#f26a36" stroke="#ffffff" strokeWidth="2" />
            <circle cx="0" cy="-10" r="5" fill="#09203f" />
          </g>

          {/* 2. Checkpoint Pin */}
          <g 
            className="cursor-pointer group" 
            onClick={() => setActivePin('checkpoint')}
            transform="translate(285, 242)"
          >
            <circle cx="0" cy="0" r="14" fill="#0077b6" fillOpacity="0.3" />
            <path d="M0 -18 C-8 -18, -8 -4, 0 8 C8 -4, 8 -18, 0 -18 Z" fill="#0077b6" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="0" cy="-8" r="4" fill="#38bdf8" />
          </g>

          {/* 3. Quarry Pin */}
          <g 
            className="cursor-pointer group" 
            onClick={() => setActivePin('quarry')}
            transform="translate(620, 220)"
          >
            <circle cx="0" cy="0" r="14" fill="#047857" fillOpacity="0.3" />
            <path d="M0 -18 C-8 -18, -8 -4, 0 8 C8 -4, 8 -18, 0 -18 Z" fill="#047857" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="0" cy="-8" r="4" fill="#6ee7b7" />
          </g>
        </svg>

        {/* Selected Pin HUD HUD / Detail overlay */}
        {activePin && (
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-4 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row gap-3 items-start justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-orange-400">
                {lang === 'en' ? 'Waypoint Inspected' : 'Point d\'intérêt inspecté'}
              </span>
              <h5 className="text-sm font-bold text-slate-100 font-sans">
                {pins[activePin as keyof typeof pins].name[lang]}
              </h5>
              <p className="text-xs text-slate-400">
                {pins[activePin as keyof typeof pins].desc[lang]}
              </p>
            </div>
            <div className="text-right text-xs shrink-0 self-end md:self-center font-mono text-slate-400">
              <p className="text-[10px] text-slate-500 uppercase font-bold">{lang === 'en' ? 'Local Coordinates' : 'Repères Locaux'}</p>
              <p className="font-bold text-slate-300">{pins[activePin as keyof typeof pins].coords}</p>
            </div>
          </div>
        )}
      </div>

      {/* Manual Click Tabs to align pins */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {Object.entries(pins).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActivePin(key)}
            className={`px-3 py-2 text-xs rounded-lg font-sans border transition-all text-left truncate ${
              activePin === key
                ? 'bg-orange-600/20 border-orange-500 text-orange-200 shadow font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <span className="block text-[8.5px] uppercase opacity-75 font-mono mb-0.5">
              {key === 'hq' ? '★ ' : '• '}{lang === 'en' ? 'Position' : 'Position'}
            </span>
            {value.name[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};
