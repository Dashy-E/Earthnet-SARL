/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowDownToLine, Check, FileText, Download } from 'lucide-react';

interface DocumentsHubProps {
  lang: 'en' | 'fr';
}

export const DocumentsHub: React.FC<DocumentsHubProps> = ({ lang }) => {
  const [downloaded, setDownloaded] = useState<Record<string, boolean>>({});

  const docs = [
    {
      id: 'profile',
      title: { en: 'Earthnet Corporate Portrait & Profile', fr: 'Portrait d’Entreprise Earthnet' },
      size: '4.8 MB',
      type: 'PDF Document',
      desc: { 
        en: 'Our full structural engineering capability statements, fleet list, and registration paperwork.', 
        fr: 'Caractéristiques techniques complètes, parc de machines et agréments de construction.' 
      },
      contentToPrint: `
========================================
       EARTHNET SOLUTIONS SARL
           COMPANY PROFILE
========================================
Address: 1064, Route Likasi, Village TUMBWE
Industry: Construction & Engineering
Business Type: General Engineering Contractor
TIN / Id.Nat: L-1064-2026-LUSH

WHO WE ARE:
EARTHNET SOLUTIONS SARL is a multidisciplinary construction 
and engineering company based in Lubumbashi, Democratic Republic 
of the Congo. We provide comprehensive construction solutions 
for residential, commercial, hospitality, and industrial sectors.

CORE PILLARS:
1. Integrity & Quality
2. Innovation & Technology  
3. Safety & Sustainability
4. Client Satisfaction

SERVICES:
- Residential Development (BYDH - Build Your Dream Home)
- Commercial Headquarters
- Hospitality Complexes & Resorts
- Heavy Industrial Structures & Mining Handlings
- Civil Foundation Block Works
      `
    },
    {
      id: 'hse',
      title: { en: 'HSE Zero-Harm Commitment Charter', fr: 'Charte d’Engagement Sécurité HSE' },
      size: '2.1 MB',
      type: 'PDF Document',
      desc: { 
        en: 'Scaffolding codes, personal lockouts, turnstile security grids, and field audit checklist.', 
        fr: 'Procédures d’échafaudage, consignations, contrôle d’enceinte de chantier et sécurité.' 
      },
      contentToPrint: `
========================================
       EARTHNET SOLUTIONS SARL
      HSE ZERO-HARM COMMITMENT
========================================
Date: 2026 Edition
Approved by: Earthnet Safety Directorate

SAFETY CONVENTIONS:
1. All field personnel must equip certified hardhats, 
   steel-toe boots, and high-visibility lane vest indicators.
2. High-elevation scaffolding must integrate safety harnesses 
   fully secured to tested structural beams.
3. Access gates are restricted via automated RFID turnstiles 
   to block any non-certified site pedestrian entries.

ECOLOGICAL INTEGRATION:
- Standard site drainage systems are created to avoid soil siltation.
- Precast concrete hollow block materials use zero-carbon press-mold methods.
      `
    },
    {
      id: 'quality',
      title: { en: 'Structural Quality Policy Manual', fr: 'Manuel de Politique Qualité Ouvrage' },
      size: '3.3 MB',
      type: 'PDF Document',
      desc: { 
        en: 'Details of compressometer concrete mix ratings and spatial laser tolerances.', 
        fr: 'Réglementations des essais de compression de béton et tolérances laser.' 
      },
      contentToPrint: `
========================================
       EARTHNET SOLUTIONS SARL
        STRUCTURAL QUALITY MANUAL
========================================
1. CONCRETE VERIFICATION:
   Every batch of concrete cast on our sites must undergo 
   slump tests and compressometer cylinder crushing 
   verifications to confirm standard load ratings.

2. GEOMETRIC TOLERANCE:
   Total structural alignments are audited using high-precision 
   electronic theodolites to warrant zero-margin geometric drift.

3. STEEL COMPLIANCE:
   Trusses, girders, and pipe racks are assembled using certified 
   grades of structural steel sourced from registered global manufacturers.
      `
    }
  ];

  const handleDownload = (id: string, title: string, bodyText: string) => {
    setDownloaded(prev => ({ ...prev, [id]: true }));
    
    // Create actual offline file download
    const blob = new Blob([bodyText.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_profile.txt`;
    link.click();
    URL.revokeObjectURL(url);
    
    setTimeout(() => {
      setDownloaded(prev => ({ ...prev, [id]: false }));
    }, 3000);
  };

  const text = {
    en: {
      sectionTitle: 'Documents & Quality Manual Downloads',
      sectionSubtitle: 'Download verified technical files and charters to inspect our capabilities offline.',
      downloadBtn: 'Download Technical File',
      downloadedBtn: 'File Downloaded Successfully'
    },
    fr: {
      sectionTitle: 'Téléchargement de Documents Techniques',
      sectionSubtitle: 'Téléchargez nos dossiers agréés et chartes d’exécution pour consultation hors-ligne.',
      downloadBtn: 'Télécharger le Dossier',
      downloadedBtn: 'Fichier téléchargé !'
    }
  }[lang];

  return (
    <div id="documents-download-hub" className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800/80">
      <div className="max-w-3xl mb-8">
        <h4 className="text-xl font-bold text-slate-100 font-sans tracking-tight">
          {text.sectionTitle}
        </h4>
        <p className="text-sm text-slate-400 mt-2 font-sans">
          {text.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {docs.map(doc => (
          <div 
            key={doc.id} 
            className="group relative bg-slate-950 border border-slate-800/80 text-left rounded-xl p-5 hover:border-orange-500/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-200 text-sm font-sans tracking-tight line-clamp-1">
                  {doc.title[lang]}
                </h5>
                <p className="text-[10px] uppercase font-mono font-bold text-slate-500 mt-1">
                  {doc.type} • {doc.size}
                </p>
              </div>
              <p className="text-xs text-slate-400 font-sans line-clamp-3">
                {doc.desc[lang]}
              </p>
            </div>

            <button
              onClick={() => handleDownload(doc.id, doc.title.en, doc.contentToPrint)}
              className={`w-full mt-5 px-3 py-2.5 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-2 border transition-all ${
                downloaded[doc.id]
                  ? 'bg-green-600/15 border-green-500 text-green-300'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {downloaded[doc.id] ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span>{text.downloadedBtn}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-orange-400" />
                  <span>{text.downloadBtn}</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
