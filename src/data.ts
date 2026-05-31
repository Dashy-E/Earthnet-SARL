/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, TeamMember, CoreValue, FAQItem, NewsArticle, CareerOpportunity, Testimonial } from './types';

export const companyDetails = {
  name: 'Earthnet Solutions SARL',
  address: '1064, Route Likasi, Village TUMBWE C/ ANNEXE-LUBUMBASHI, Lubumbashi, DRC',
  phone: '+243 858 006 411',
  email: 'contact@earthnetsolutions.cd',
  website: 'www.earthnetsolutions.cd',
  whatsappNumber: '243858006411',
  workingHours: {
    en: 'Monday – Saturday: 08:00 AM – 05:00 PM',
    fr: 'Lundi – Samedi: 08h00 – 17h00'
  }
};

export const mainServices: Service[] = [
  {
    id: 'residential',
    iconName: 'Home',
    bgImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Residential Construction',
      fr: 'Construction Résidentielle'
    },
    shortDesc: {
      en: 'High-quality villas, luxury homes, residential compounds, and customized staff camps.',
      fr: 'Villas de haute qualité, maisons de luxe, complexes résidentiels et camps de personnel personnalisés.'
    },
    detailed: {
      title: {
        en: 'Bespoke Residential Systems & Materials',
        fr: 'Systèmes et Matériaux Résidentiels Sur Mesure'
      },
      intro: {
        en: 'Our residential unit represents "BYDH - Build Your Dream Home". We deliver high-end luxury architectural homes, secure multi-family residential compounds, and custom-designed staff camps using state-of-the-art materials like highly insulated precast blocks, ensuring comfortable and climate-resilient living spaces inside the Democratic Republic of the Congo.',
        fr: 'Notre unité résidentielle incarne l\'idéal "BYDH - Construisez la Maison de vos Rêves". Nous réalisons des maisons d\'architecte de prestige, des complexes résidentiels sécurisés et des camps de vie sur mesure avec des matériaux innovants assurant un confort d\'habitation thermique et acoustique.'
      },
      items: [
        { en: 'Villas & Individual Elegant Houses', fr: 'Villas et habitations individuelles de standing' },
        { en: 'High-End Luxury Homes & Smart Architecture', fr: 'Propriétés de prestige et architecture intelligente' },
        { en: 'Turnkey Residential Compounds with perimeter security', fr: 'Cités résidentielles clé en main avec clôture sécurisée' },
        { en: 'Engineered Staff Camps & Modular Units for mining sites', fr: 'Camps de personnel d\'ingénierie et unités modulaires pour sites miniers' },
        { en: 'Complete Interior Renovation & Modern Retrofitting', fr: 'Rénovation d\'intérieur complète et modernisation technique' }
      ]
    }
  },
  {
    id: 'commercial',
    iconName: 'Building2',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Commercial Construction',
      fr: 'Construction Commerciale'
    },
    shortDesc: {
      en: 'Modern office buildings, shopping centers, premium showrooms, and complex business hubs.',
      fr: 'Immeubles de bureaux modernes, centres commerciaux, showrooms de prestige et hubs d\'affaires.'
    },
    detailed: {
      title: {
        en: 'Enterprise-Grade Commercial Facilities',
        fr: 'Installations Commerciales de Classe Entreprise'
      },
      intro: {
        en: 'We create sustainable, high-traffic commercial spaces designed to maximize commercial business efficiency. Our engineering experts manage full life-cycle builds—from deep concrete foundations to integrated premium curtain-wall facades, comprehensive ventilation systems, and smart internal layouts.',
        fr: 'Nous construisons des espaces commerciaux durables, conçus pour maximiser l\'efficacité commerciale. Nos experts prennent en charge l\'intégralité du cycle de construction, des fondations profondes en béton armé aux façades rideaux modernes, systèmes de ventilation et agencements connectés.'
      },
      items: [
        { en: 'Corporate Office Buildings & Administrative Towers', fr: 'Immeubles de bureaux d\'entreprise et tours administratives' },
        { en: 'Multi-Tenant Shopping Malls & Retail Complexes', fr: 'Centres commerciaux multi-locataires et galeries de vente' },
        { en: 'High-visibility Brand Showrooms & Automotive Salons', fr: 'Showrooms de marque à grande visibilité et salons automobiles' },
        { en: 'Mixed-Use Urban Spatial Developments', fr: 'Développements spatiaux urbains à usage mixte' }
      ]
    }
  },
  {
    id: 'hospitality',
    iconName: 'Hotel',
    bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Hospitality Projects',
      fr: 'Projets Hôteliers & Touristiques'
    },
    shortDesc: {
      en: 'Luxury hotels, leisure resorts, scenic safari lodges, and premium restaurant spaces.',
      fr: 'Hôtels de standing, complexes touristiques, lodges de safari et restaurants haut de gamme.'
    },
    detailed: {
      title: {
        en: 'Leisure & Hospitality Architectural Landscapes',
        fr: 'Paysages Architecturaux de Loisirs & d\'Hébergement'
      },
      intro: {
        en: 'Our hospitality division combines architectural elegance and regional material sensitivity. We craft stunning eco-friendly lodges, resort environments, and luxury hotels that satisfy international travel standards while maintaining carbon efficiency and localized building compliance.',
        fr: 'Notre division hôtelière allie élégance architecturale et sensibilité aux matériaux régionaux. Nous créons des éco-lodges spectaculaires, des complexes de villégiature et des hôtels de luxe répondant aux standards internationaux tout en respectant l\'environnement.'
      },
      items: [
        { en: 'Five-Star & Boutique International Hotels', fr: 'Hôtels cinq étoiles et boutiques-hôtels internationaux' },
        { en: 'Eco-Friendly Scenic Safari Lodges & Wild Resorts', fr: 'Eco-lodges de safari écoresponsables et complexes sauvages' },
        { en: 'Guest Houses & Corporate Executive Lodgings', fr: 'Maisons d\'hôtes de standing et hébergements pour cadres' },
        { en: 'Premium Architectural Restaurants & Leisure Terraces', fr: 'Restaurants gastronomiques et terrasses de loisirs' }
      ]
    }
  },
  {
    id: 'industrial',
    iconName: 'Factory',
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Industrial Construction',
      fr: 'Construction Industrielle'
    },
    shortDesc: {
      en: 'Processing plants, heavy workshops, high-clearance warehouses, and factory facilities.',
      fr: 'Usines de traitement, grands ateliers, entrepôts à grande hauteur et infrastructures d\'usine.'
    },
    detailed: {
      title: {
        en: 'Heavy Industrial Infrastructure Engineering',
        fr: 'Ingénierie d\'Infrastructures Industrielles Lourdes'
      },
      intro: {
        en: 'Operating inside the DRC\'s rich mining and industrial hub, we engineer high-clearance steel warehouses, complex processing plants, and manufacturing factories. We install heavy equipment platforms, seismic-resistant foundation systems, and customized industrial storage yards engineered to withstand maximum operational loads.',
        fr: 'Opérant au cœur du bassin minier et de l\'industrie en RDC, nous concevons des entrepôts métalliques à haute portée, des usines de transformation complexes et des ateliers. Nous posons des socles d\'équipements lourds et des fondations conçus pour résister aux contraintes de charge maximales.'
      },
      items: [
        { en: 'High-Span Industrial Steel Warehouses', fr: 'Entrepôts industriels à grande portée en charpente métallique' },
        { en: 'Mineral Processing & Chemical Plant Foundations', fr: 'Fondations d\'usines de traitement de minerais et de chimie' },
        { en: 'Heavy Machinery Maintenance Workshops & Hangars', fr: 'Ateliers de maintenance de machines lourdes et hangars' },
        { en: 'Robust Logistics Depots with integrated loading doc bays', fr: 'Dépôts logistiques robustes avec quais de chargement intégrés' }
      ]
    }
  },
  {
    id: 'civil',
    iconName: 'Construction',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Civil Engineering Works',
      fr: 'Travaux de Génie Civil'
    },
    shortDesc: {
      en: 'Large earthworks, concrete structural foundations, drainage networks, and road building.',
      fr: 'Grands terrassements, fondations de structures en béton, réseaux de drainage et voiries.'
    },
    detailed: {
      title: {
        en: 'Strategic Land Formwork & Concrete Assets',
        fr: 'Terrassements Stratégiques & Ouvrages en Béton'
      },
      intro: {
        en: 'Our civil works form the geological foundation for infrastructure development. We handle bulk earthmoving, subgrade preparations, complex deep piling, poured concrete retaining walls, and civil stormwater runoffs. We execute tasks according to strict international geometric standards and heavy civil specifications.',
        fr: 'Nos travaux de génie civil constituent le socle géologique de toute infrastructure. Nous réalisons des mouvements de terre massifs, des préparations de chaussée, des pieux profonds, des murs de soutènement et des canalisations majeures de gestion de crues selon les normes techniques.'
      },
      items: [
        { en: 'Bulk Site Grading, Soil Stabilization & Earthmoving', fr: 'Terrassement de masse, stabilisation des sols et nivellement' },
        { en: 'Heavy-Duty Reinforced Concrete Bridges & Retaining Walls', fr: 'Ponts robustes en béton armé et murs de soutènement' },
        { en: 'Internal Access Bituminous & Concrete Roadways', fr: 'Voies d\'accès internes bitumées ou bétonnées' },
        { en: 'High-Capacity Site Drainage and Water Retention Systems', fr: 'Systèmes de drainage et bassins de rétention d\'eau à grande capacité' }
      ]
    }
  },
  {
    id: 'steel',
    iconName: 'Workflow',
    bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Structural Steel Works',
      fr: 'Charpentes Métalliques'
    },
    shortDesc: {
      en: 'Custom steel fabrication, pipe racks, overhead platforms, and modular steel assembly.',
      fr: 'Fabrication de structures métalliques, racks de tuyauteries, passerelles et montages.'
    },
    detailed: {
      title: {
        en: 'High-Precision Steel Fabrication & Erection',
        fr: 'Fabrication et Érection de Précision d\'Ossatures Acier'
      },
      intro: {
        en: 'With our dedicated steel fabrication shop, we manufacture custom structural trusses, overhead cranes, mining platforms, pipe racks, and structural framework. Our steel design is modeled on advanced CAD layouts, guaranteeing zero-tolerance deviations during final onsite erection and bolting.',
        fr: 'Grâce à notre atelier spécialisé, nous fabriquons des fermes de charpentes, portiques de levage, passerelles minières, racks de tuyauterie et structures sur mesure, modélisés sur CAO de pointe pour garantir un ajustement et un assemblage site impeccables.'
      },
      items: [
        { en: 'Custom Design Structural Steel Frameworks', fr: 'Structures et squelettes de charpentes en acier sur mesure' },
        { en: 'Heavy-Duty Industrial Pipe Girders & Racks', fr: 'Racks de tuyauterie industrielle et treillis de charge' },
        { en: 'High-Elevation Access Platforms & Maintenance Walkways', fr: 'Passerelles de maintenance en hauteur et plateformes de sécurité' },
        { en: 'Onsite Structural Steel Assembly & Precision Welding', fr: 'Soudure de haute qualité et montage d\'acier sur site' }
      ]
    }
  },
  {
    id: 'mechanical',
    iconName: 'Wrench',
    bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Mechanical & Piping Works',
      fr: 'Travaux Mécaniques et Tuyauterie'
    },
    shortDesc: {
      en: 'Industrial equipment positioning, slurry piping, structural fabrication, and mechanical maintenance.',
      fr: 'Positionnement de machines industrielles, tuyauterie commerciale et maintenance mécanique.'
    },
    detailed: {
      title: {
        en: 'Complex Mechanical Alignments & Slurry Piping',
        fr: 'Alignements Mécaniques Complexes et Tuyauterie Industrielle'
      },
      intro: {
        en: 'Earthnet Solutions SARL fields highly qualified industrial millwrights, pipers, and structural mechanics. We execute complex equipment positioning, critical pressure-piping systems, pumps alignment, industrial conveyor belt installations, and routine heavy plant preventive repairs.',
        fr: 'Earthnet Solutions SARL déploie des tuyauteurs, monteurs et techniciens mécaniques qualifiés. Nous réalisons le positionnement d\'équipements rotatifs, des réseaux de tuyauterie sous pression, l\'alignement de pompes et la maintenance préventive d\'usines.'
      },
      items: [
        { en: 'Industrial Pump, Motor, and Generator Installation', fr: 'Installation de pompes industrielles, moteurs et génératrices' },
        { en: 'High-Pressure Slurry & Process Piping Fabrication', fr: 'Fabrication et pose de tuyauterie haute pression et de transfert' },
        { en: 'Conveyor Belt Systems Construction & Commissioning', fr: 'Construction et mise en route de convoyeurs et bandes transporteuses' },
        { en: 'Scheduled Overhauls & Factory Plant Preventive Maintenance', fr: 'Arrêts d\'usine programmés et maintenance préventive des machines' }
      ]
    }
  },
  {
    id: 'pm',
    iconName: 'ShieldCheck',
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Project Management Services',
      fr: 'Services de Gestion de Projets'
    },
    shortDesc: {
      en: 'End-to-end critical path tracking, quality-assurance protocols, safety audits, and project delivery.',
      fr: 'Suivi de chemin critique, contrôle de qualité rigoureux, audits HSE et livraison clé en main.'
    },
    detailed: {
      title: {
        en: 'Multi-tiered Operational Quality Controls',
        fr: 'Contrôles Portefeuille et Qualité Multi-Niveaux'
      },
      intro: {
        en: 'We steer construction and engineering workflows using professional project management metrics. We govern procurement schedules, deploy state-of-the-art resource scheduling, control financial cash-flows, and run safety-first field audits to guarantee projects complete under the budget limits and on time.',
        fr: 'Nous pilotons tous les travaux selon des indicateurs de performance rigoureux. Nous gérons le calendrier d\'approvisionnement, l\'ordonnancement des effectifs, le suivi budgétaire et des audits de sécurité de terrain pour garantir une exécution conforme en temps et en coût.'
      },
      items: [
        { en: 'Critical Path Scheduling (using advanced Gantt & CPM)', fr: 'Planification par chemin critique (Gantt et CPM avancés)' },
        { en: 'Rigorous Onsite Material Quality Inspections & Testing', fr: 'Contrôles et essais rigoureux des matériaux sur chantier' },
        { en: 'HSE Risk Mitigation, Safety Auditing & Reporting', fr: 'Atténuation des risques HSE, audits de sécurité et rapports sur site' },
        { en: 'Bilingual Contract Negotiation, Procurement & Logistics Management', fr: 'Négociation de contrats bilingues et logistique d\'approvisionnement internationale' }
      ]
    }
  }
];

export const coreValues: CoreValue[] = [
  {
    title: { en: 'Safety First', fr: 'Sécurité d\'Abord' },
    desc: { en: 'Zero-harm policy through rigorous site inspections, custom HSE training, and high-quality protective gear.', fr: 'Politique zéro-accident via des inspections de site strictes, des formations HSE et des équipements de protection d\'élite.' },
    iconName: 'HardHat'
  },
  {
    title: { en: 'Integrity', fr: 'Intégrité' },
    desc: { en: 'Uncompromising transparency in contracts, material sourcing, billing, and technical inspections.', fr: 'Transparence totale dans nos contrats, l\'approvisionnement matériel, la facturation et les diagnostics.' },
    iconName: 'Award'
  },
  {
    title: { en: 'Quality', fr: 'Qualité Supérieure' },
    desc: { en: 'Absolute adherence to precise engineering specs, testing every concrete batch and steel truss.', fr: 'Respect absolu du devis technique, avec contrôle de chaque lot de béton armé et structure métallique.' },
    iconName: 'Cpu'
  },
  {
    title: { en: 'Innovation', fr: 'Innovation Technologique' },
    desc: { en: 'Deploying CAD, advanced earthworks tools, and cost-saving modern building techniques.', fr: 'Utilisation de maquettes numériques, d\'outils de nivellement modernes et de méthodes de pose durables.' },
    iconName: 'Lightbulb'
  },
  {
    title: { en: 'Accountability', fr: 'Responsabilité' },
    desc: { en: 'We own the results, guaranteeing warranty periods, structural durability, and timeline milestones.', fr: 'Responsables de nos résultats, nous garantissons des durées de garantie, d\'ouvrage et de délais.' },
    iconName: 'Briefcase'
  },
  {
    title: { en: 'Sustainability', fr: 'Développement Durable' },
    desc: { en: 'Integrating carbon-efficient materials, precast modular systems, and smart stormwater networks.', fr: 'Intégration d\'isolants thermiques, de blocs préfabriqués bas carbone et de réseaux d\'eaux d\'orage.' },
    iconName: 'Leaf'
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'proj-1',
    category: 'apartments',
    title: {
      en: 'Executive Modern Residential Estate',
      fr: 'Résidence des Cadres Urbains'
    },
    location: {
      en: 'Lubumbashi (Annexe District), DRC',
      fr: 'Lubumbashi (Quartier Annexe), RDC'
    },
    scope: {
      en: 'Design & turnkey construction of modern structure with premium masonry, custom balconies, and full security enclosures shown in PDF Page 2.',
      fr: 'Conception et livraison d\'un bâtiment moderne en maçonnerie de pointe, balcons suspendus et enceinte renforcée visible sur la page 2 du profil.'
    },
    status: 'completed',
    client: {
      en: 'Private Real Estate Corporation',
      fr: 'Société Civile Immobilière Privée'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-2',
    category: 'warehouses',
    title: {
      en: 'Heavy Logistics Enclosure & Warehousing Facility',
      fr: 'Complexe de Stockage & Enclos Logistique lourd'
    },
    location: {
      en: 'Route Likasi, Village Tumbwe, DRC',
      fr: 'Route Likasi, Village Tumbwe, RDC'
    },
    scope: {
      en: 'Structural steel roofing, soil grading for a logistics depot with a multi-bay security gate as showcased in PDF page 4.',
      fr: 'Ossature acier de toiture, stabilisation de terrassement pour dépôt logistique avec sas de contrôle multi-voies, page 4 du profil.'
    },
    status: 'completed',
    client: {
      en: 'Regional Distribution Group',
      fr: 'Groupe Congolais de Distribution Régionale'
    },
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-3',
    category: 'steel-structures',
    title: {
      en: 'Overhead Structural Mining Frame',
      fr: 'Portique Métallique & Charpente Industrielle Minière'
    },
    location: {
      en: 'Kolwezi Mining District, DRC',
      fr: 'Secteur Minier de Kolwezi, RDC'
    },
    scope: {
      en: 'Engineering drawing, pre-fabrication, and erection of high-elevation steel platforms and heavy equipment foundations shown in PDF Page 5.',
      fr: 'Plans d\'ingénierie, pré-fabrication et pose de passerelles en acier haute altitude et assises béton d\'équipements tournants, page 5 du profil.'
    },
    status: 'ongoing',
    client: {
      en: 'Major Copper Mining Joint-Venture',
      fr: 'Co-Entreprise Minière Internationale de Cuivre'
    },
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-4',
    category: 'staff-camps',
    title: {
      en: 'Protected Modular Project Offices & Hub',
      fr: 'Bâtiments Administratifs Modulaires de Chantier'
    },
    location: {
      en: 'Village Tumbwe, Lubumbashi Outskirts, DRC',
      fr: 'Village Tumbwe, Périphérie Lubumbashi, RDC'
    },
    scope: {
      en: 'Site layout preparation, perimeter security gating, and installation of durable modular project offices shown in PDF page 6.',
      fr: 'Terrassement de surface, montage de locaux de chantier modulaires haut de gamme et barrières de voies, page 6 du profil.'
    },
    status: 'completed',
    client: {
      en: 'Earthnet Solutions Operations Command',
      fr: 'Direction Opérationnelle Earthnet Solutions'
    },
    images: [
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-5',
    category: 'hotels',
    title: {
      en: 'High-Class Resort Complex',
      fr: 'Complexe Hôtelier Premium & Espaces Loisirs'
    },
    location: {
      en: 'Lubumbashi Centre, DRC',
      fr: 'Centre-Ville de Lubumbashi, RDC'
    },
    scope: {
      en: 'Structural concrete shells, water retaining utility systems, fire protection piping, and luxury internal woodwork.',
      fr: 'Gros œuvre béton armé, bassins hydrauliques, réseau de tuyauterie d\'incendie et parachèvement bois de standing.'
    },
    status: 'ongoing',
    client: {
      en: 'Continental Leisure & Lodges Group',
      fr: 'Infras Loisirs & Hôtels du DRC'
    },
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-6',
    category: 'residential',
    title: {
      en: 'BYDH Luxury Double Villa Development',
      fr: 'Double Villa de Prestige BYDH'
    },
    location: {
      en: 'Golf District, Lubumbashi, DRC',
      fr: 'Quartier Golf, Lubumbashi, RDC'
    },
    scope: {
      en: 'Exclusive high-compressive precast concrete wall architecture, custom multi-car garages, and environmental landscaping.',
      fr: 'Architecture prestigieuse en blocs creux isolants à haute résistance, garages fermés double-place et aménagement paysager.'
    },
    status: 'completed',
    client: {
      en: 'Private Investor Group',
      fr: 'Groupe d\'Investissement Privé'
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const careerJobs: CareerOpportunity[] = [
  {
    id: 'job-1',
    title: { en: 'Senior Structural Civil Engineer', fr: 'Ingénieur en Chef Génie Civil Structure' },
    department: { en: 'Core Engineering', fr: 'Direction Génie Civil' },
    type: { en: 'Full-time', fr: 'CDI - Plein temps' },
    location: { en: 'Lubumbashi Site Hub', fr: 'Bureau Central Lubumbashi' },
    description: {
      en: 'Lead technical blueprint analysis, calculate load distributions for structural steel scaffolds, concrete foundations, and coordinate on-site masonry operations.',
      fr: 'Diriger l\'analyse des plans techniques, calculer les charges d\'ossatures acier et de fondations béton, et coordonner les maçons sur chantier.'
    },
    requirements: [
      { en: 'B.Sc. in Civil / Structural Engineering with 6+ years experience.', fr: 'Diplômé Bac+5 en Génie Civil / Structures avec minimum 6 ans d\'expérience.' },
      { en: 'Fluency in technical French and working English.', fr: 'Excellent niveau en Français technique et Anglais de travail.' },
      { en: 'Expert knowledge in AutoCAD, Robot Structural Analysis, or equivalent.', fr: 'Maîtrise d\'AutoCAD, Robot Structural Analysis ou équivalent.' }
    ]
  },
  {
    id: 'job-2',
    title: { en: 'Industrial Welder & Steel Fitter', fr: 'Soudeur Industriel & Assembleur Métallique' },
    department: { en: 'Steel Fabrication Shop', fr: 'Atelier de Fabrication d\'Acier' },
    type: { en: 'Full-time', fr: 'CDI / Contrat Chantier' },
    location: { en: 'Likasi Road Depot', fr: 'Dépôt Route Likasi' },
    description: {
      en: 'Read mechanical piping blueprints, weld high-stress steel trusses, pipe racks, and erect structures in mineral plants according to safety codes.',
      fr: 'Lire les fiches de soudage de tuyauterie sous pression, assembler des treillis métalliques et dresser des plateformes en site minier.'
    },
    requirements: [
      { en: 'Professional certification in high-pressure TIG/MIG welding.', fr: 'Certification professionnelle en soudure TIG/MIG sous pression.' },
      { en: '3+ years experience in mining infrastructure erection.', fr: '3 ans d\'expérience dans le montage d\'infrastructures minières.' },
      { en: 'Rigorous application of HSE protective standards.', fr: 'Respect rigoureux des consignes de sécurité et équipements HSE.' }
    ]
  },
  {
    id: 'job-3',
    title: { en: 'Safety Specialist (HSE Officer)', fr: 'Spécialiste de la Sécurité (Officier HSE)' },
    department: { en: 'Project Quality & Care', fr: 'Qualité, Hygiène, Sécurité & Environnement' },
    type: { en: 'Full-time / Consultancy', fr: 'CDI / Consultant' },
    location: { en: 'Lubumbashi (Multi-site Operations)', fr: 'Lubumbashi (Multi-sites)' },
    description: {
      en: 'Enforce zero-harm rules across structural scaffolding, handle safety briefings, evaluate lane delineators, and perform strict environmental risk audits.',
      fr: 'Faire appliquer la politique zéro-accident, animer les "quarts d\'heure sécurité", vérifier le balisage de circulation et auditer les risques écologiques.'
    },
    requirements: [
      { en: 'HSE Certification (NEBOSH or local DRC equivalence).', fr: 'Certification HSE (NEBOSH ou équivalence locale en RDC).' },
      { en: 'Deep familiarity with mineral and construction safety regulations.', fr: 'Familiarité approfondie avec la législation de sécurité en carrières et BTP.' },
      { en: 'Excellent command of public speaking and team coaching.', fr: 'Excellente aptitude à la prise de parole et animation d\'équipes.' }
    ]
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    name: 'Jean-Luc Kabulo',
    company: 'Congo Gold & Mineral Joint-Venture',
    quote: {
      en: 'Earthnet Solutions completed our primary logistics warehouse on Route Likasi two weeks ahead of schedule. Their steel fabrication works and focus on safety are absolutely outstanding.',
      fr: 'L\'équipe d\'Earthnet Solutions a livré notre grand dépôt de transit logistique deux semaines en avance. Leur rigueur HSE et la qualité de leur chaudronnerie métallique sont exemplaires.'
    },
    rating: 5
  },
  {
    name: 'Marie-Claire Ngoie',
    company: 'Immobilier Lubum Prestige',
    quote: {
      en: 'With their precast hollow block technology, they built our residential compound with incredible thermal efficiency. Truly a trusted partner for modern sustainable home construction.',
      fr: 'Grâce à leurs blocs de béton isolants préfabriqués d\'atelier, ils ont bâti notre cité immobilière à des coûts maîtrisés et un grand confort thermique. Des ingénieurs d\'exception.'
    },
    rating: 5
  }
];

export const blogArticles: NewsArticle[] = [
  {
    id: 'blog-1',
    title: {
      en: 'Why Precast Concrete Hollow Blocks Revolutionize Building Speeds',
      fr: 'Pourquoi les Blocs Creux en Béton Préfabriqué Révolutionnent nos Chantiers'
    },
    excerpt: {
      en: 'Discover how Earthnet Solutions high-compressive precast blocks reduce total building dead load and provide superior thermal insulation.',
      fr: 'Découvrez comment les blocs haute résistance réduisent le poids mort des structures et procurent une isolation thermique de haut niveau.'
    },
    content: {
      en: 'Engineering construction requires constant innovation. At Earthnet Solutions SARL in Lubumbashi, we manufacture lightweight load-bearing precast hollow blocks at our Route Likasi headquarters. These materials provide dual advantages: first, they limit soil pressure by reducing total weight; second, their specific air chambers act as an acoustic and heat shield, reducing cooling costs in administrative facilities.',
      fr: 'L\'art de bâtir exige l\'innovation constante. Dans notre usine de la Route Likasi, nous coulons sous presse des blocs creux de haute densité. Leurs bénéfices sont majeurs : réduction de la masse totale de la bâtisse pour alléger les fondations d\'une part, et isolation naturelle contre le bruit et le soleil équatorial d\'autre part.'
    },
    date: 'May 12, 2026',
    category: { en: 'Materials Science', fr: 'Science des Matériaux' },
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'blog-2',
    title: {
      en: 'Strategic HSE Procedures: Achieving Zero-Harm in Critical Infrastructure',
      fr: 'Procédures HSE Stratégiques : Atteindre l\'Objectif Zéro Accident'
    },
    excerpt: {
      en: 'Our safety standards drive daily operational success. Read how Earthnet enforces strict scaffolding audits and turnstile perimeter controls.',
      fr: 'Nos normes de sécurité soutiennent nos réussites. Découvrez notre gestion des échafaudages et des tourniquets d\'enceinte.'
    },
    content: {
      en: 'At Earthnet Solutions, Safety First is not a tagline, but an actual engineering guideline. Every morning begins with a comprehensive HSE Toolbox Talk. Our workers are geared with premium-grade high-voltage boots, helmets, and harnesses. Additionally, our sites integrate secure turnstile entrances with automated badge readings to completely isolate operations from unauthorized personnel.',
      fr: 'Chez Earthnet Solutions SARL, "La Sécurité d\'Abord" est un mode d\'emploi au quotidien. Chaque matin démarre par un briefing sécurité (Toolbox Talk). Nos équipes sont protégées avec des EPI homologués. Nos accès chantiers intègrent des couloirs de tourniquet pour garder nos collaborateurs à l\'abri de toute intrusion.'
    },
    date: 'April 20, 2026',
    category: { en: 'Health & Safety', fr: 'Hygiène & Sécurité' },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
  }
];

export const translations = {
  en: {
    brandName: 'Earthnet Solutions',
    brandSuffix: 'SARL',
    tagline: 'Building Today, Connecting Tomorrow',
    taglineSecondary: 'If you can dream it, we can build it',
    taglineConstructing: 'Constructing solutions, not just buildings',
    aboutTab: 'About Us',
    servicesTab: 'Services',
    projectsTab: 'Projects',
    galleryTab: 'Gallery',
    careersTab: 'Careers',
    portalTab: 'Client Portal',
    contactTab: 'Contact Us',
    whyChooseUs: 'Why Choose Earthnet Solutions',
    homeTitle: 'Home',
    
    // Hero Elements
    heroTitle: "Africa's Trusted Construction & Engineering Partner",
    heroDesc: 'Based in Lubumbashi, we deliver turnkey heavy civil layouts, precast engineering blocks, bespoke luxury residential complexes, and robust structural steel assembly.',
    heroCTA1: 'Request Online Quotation',
    heroCTA2: 'Explore Services',
    
    // Quick Stats
    statProjects: 'Completed Projects',
    statMembers: 'Experienced Staff',
    statHse: 'Zero-Harm Site Record',
    statHours: 'Active Hours per Week',

    // About Page English
    aboutIntro: 'Company Profile Overview',
    aboutMainParagraph1: 'Earthnet Solution SARL is a multidisciplinary construction and engineering company based in Lubumbashi, Democratic Republic of the Congo. We provide comprehensive construction solutions for residential, commercial, hospitality, and industrial sectors.',
    aboutMainParagraph2: 'With a commitment to quality, safety, innovation, and timely delivery, we undertake projects ranging from individual homes and apartment developments to hotels, industrial facilities, warehouses, steel structures, and infrastructure projects.',
    aboutMainParagraph3: 'Our experienced team combines engineering expertise with modern construction practices to deliver durable and cost-effective solutions tailored to our clients\' needs.',
    visionTitle: 'Our Strategic Vision',
    missionTitle: 'Our Daily Mission',
    commitmentTitle: 'Our Core Commitment',
    leadershipTitle: 'Our Project Leadership',
    leadershipDesc: 'Our leadership comprises veteran project directors, mechanical supervisors, and structural blueprint estimators dedicated to quality controls.',
    hsePolicyTitle: 'HSE Policy Statement (Health, Safety & Environment)',
    hsePolicyDesc: 'Earthnet Solutions SARL maintains that no task is so critical that we cannot execute it with ultimate safety. We operate under zero-harm, checking harnesses, maintaining high-visibility signs, and installing automated perimeter access locks.',
    qualityPolicyTitle: 'Quality Standard Statement',
    qualityPolicyDesc: 'We audit every concrete batch, utilize high-tolerance laser graders, buy from certified steel providers, and enforce detailed standard testing across all spatial alignments.',

    // Services UI
    allServices: 'All Core Services',
    viewDetails: 'View Detailed Blueprints',
    closeDetails: 'Back to Service Grid',
    scopeOfServices: 'Core Scope of Works',

    // Projects Page UI
    filterAll: 'All Categories',
    filterResidential: 'Villas & Houses',
    filterApartments: 'Apartments',
    filterHotels: 'Hotels & Lodging',
    filterIndustrial: 'Industrial Buildings',
    filterWarehouses: 'Warehouses',
    filterStaffCamps: 'Staff Camps',
    filterSteel: 'Steel Structures',
    projectScope: 'Technical Scope',
    projectClient: 'Project Client',
    projectStatus: 'Status',
    projectOngoing: 'In Progress / Structural Build',
    projectCompleted: 'Completed & Certified',
    projectLocation: 'Location',

    // Careers UI
    careersTitle: 'Join the Earthnet Field Crew',
    careersSubtitle: 'Work on Congo\'s ultimate structural and engineering milestones. Submit your details below.',
    jobDepartment: 'Department',
    jobType: 'Contract Type',
    jobLocation: 'Site Location',
    requirementsTitle: 'Ideal Candidate Specifications',
    submitCvBtn: 'Apply & Submit CV',
    applyForJob: 'Apply for this position:',
    fullName: 'Your Full Name',
    emailAddress: 'Your Email Address',
    phoneLabel: 'Phone Number',
    briefBio: 'Cover Letter / Professional Bio',
    fileLabel: 'Upload CV (PDF, DOCX)',
    submitting: 'Submitting secure file stream...',
    submitSuccess: 'Application successfully received! Our HSE & operational managers will review your profile.',
    noJobs: 'No vacancies found matching search criteria.',

    // Client Portal
    portalTitle: 'Client Inquiry & Estimator Portal',
    portalSubtitle: 'Calculate potential construction values and track ongoing structural quote states live.',
    quoteFormTitle: 'Request an Online Material & Labor Quotation',
    quoteSubText: 'Receive a cost-estimated invoice based on area parameters and service classes.',
    areaLabel: 'Estimated Workspace Footprint (in sq. meters)',
    budgetLabel: 'Estimated Budget Allocation Limit',
    timelineLabel: 'Expected Delivery Timeframe',
    projectDescription: 'Describe work scope and spatial layouts',
    requestQuoteBtn: 'Send Quotation Application',
    quotePending: 'Analysing floorplans...',
    quoteSuccess: 'Draft quote generated! Code reference is:',
    quoteEstimatorResult: 'Dynamic Site Cost Projection',
    estMaterialCost: 'Projected Base Structural Materials',
    estLaborCost: 'Projected Specialist Field Labor (HSE + Steel Fabricators)',
    estTotal: 'Estimated Project Sub-total',
    trackerTitle: 'Active Client Inquiry Tracker',
    trackerSub: 'Verify real-time diagnostic and design stages using your Inquiry Code.',
    enterCode: 'Enter your 8-character Inquiry ID',
    trackBtn: 'Search Inquiries',
    codeError: 'Inquiry ID code not found. Examples: AUTH-7290, AUTH-EX88',
    statusLabel: 'Status of Foundations & Engineering Study',

    // Contact Us UI
    contactTitle: 'Reach Our Administrative Offices',
    contactSubtitle: 'Located on Route Likasi, Lubumbashi. Call or send an instant portal email.',
    officeHoursTitle: 'Corporate Office Hours',
    mapTitle: 'HQ Site Location (Lubumbashi, Katanga, DRC)',
    whatsappTitle: 'WhatsApp Instant Chat',
    whatsappDesc: 'Connect directly with an Earthnet Operations Assistant.',
    sendMsgWhatsApp: 'Chat on WhatsApp',
    contactFormTitle: 'Quick Message & Site Request Form',
    msgName: 'Name',
    msgEmail: 'Email',
    msgPhone: 'Phone',
    msgSubject: 'Subject of Interest',
    msgBody: 'How can our engineers build for you?',
    sendFormBtn: 'Dispatch Site Message',
    messageSuccess: 'Message securely logged in Earthnet CRM! An engineering inspector will contact you.',

    // Footer
    footerCopy: '© 2026 Earthnet Solutions SARL. All Rights Reserved. Construction • Engineering • Telecommunications.',
    footerAddress: '1064, Route Likasi, Village TUMBWE C/ ANNEXE-LUBUMBASHI',
    footerLicense: 'Licensed under Congo Construction & Infrastructure Board.'
  },
  fr: {
    brandName: 'Earthnet Solutions',
    brandSuffix: 'SARL',
    tagline: 'Bâtir Aujourd\'hui, Connecter Demain',
    taglineSecondary: 'Si vous pouvez le rêver, nous pouvons le bâtir',
    taglineConstructing: 'Construire des solutions, pas seulement des bâtiments',
    aboutTab: 'À Propos',
    servicesTab: 'Nos Services',
    projectsTab: 'Projets Réalisés',
    galleryTab: 'Galerie',
    careersTab: 'Carrières',
    portalTab: 'Portail Client',
    contactTab: 'Contactez-nous',
    whyChooseUs: 'Pourquoi Choisir Earthnet Solutions',
    homeTitle: 'Accueil',
    
    // Hero Elements
    heroTitle: "Partenaire de Confiance en Bâtiment & Génie Civil",
    heroDesc: 'Basés à Lubumbashi, nous livrons des ouvrages de génie civil clé en main, des blocs préfabriqués isolants, villas résidentielles BYDH et structures en acier haute technicité.',
    heroCTA1: 'Demander un devis en ligne',
    heroCTA2: 'Explorer nos Services',
    
    // Quick Stats
    statProjects: 'Chantiers Réalisés',
    statMembers: 'Ingénieurs & Équipes',
    statHse: 'Zéro Incident Chantier',
    statHours: 'Heures Actives par Semaine',

    // About Page French
    aboutIntro: 'Aperçu du Profil de l\'Entreprise',
    aboutMainParagraph1: 'Earthnet Solution SARL est une entreprise de construction et d\'ingénierie multidisciplinaire basée à Lubumbashi, République Démocratique du Congo. Nous fournissons des solutions de construction complètes pour les secteurs résidentiel, commercial, hôtelier et industriel.',
    aboutMainParagraph2: 'Forts de notre engagement envers la qualité, la sécurité, l\'innovation et le respect des délais, nous réalisons des projets allant des résidences individuelles et immeubles collectifs aux hôtels, installations industrielles, entrepôts, charpentes métalliques et travaux d\'infrastructure.',
    aboutMainParagraph3: 'Notre équipe expérimentée associe l\'expertise technique aux méthodes modernes de construction pour offrir des ouvrages durables, compétitifs et adaptés aux exigences de nos clients.',
    visionTitle: 'Notre Vision Stratégique',
    missionTitle: 'Notre Mission au Quotidien',
    commitmentTitle: 'Notre Réel Engagement',
    leadershipTitle: 'Direction & Conduite de Travaux',
    leadershipDesc: 'Notre directoire est composé d\'ingénieurs de projet vétérans, de chefs de chantiers mécaniques et de métreurs-estimateurs engagés pour le contrôle de qualité.',
    hsePolicyTitle: 'Charte d’Engagement HSE (Hygiène, Sécurité, Environnement)',
    hsePolicyDesc: 'Earthnet Solutions SARL soutient qu\'aucune tâche n\'est si urgente que nous ne puissions la réaliser en toute sécurité. Nous appliquons l\'objectif zéro-accident, en supervisant les harnais et en installant des barrières électroniques d\'accès.',
    qualityPolicyTitle: 'Politique de Qualité et d\'Alignement',
    qualityPolicyDesc: 'Nous analysons chaque gâchée de béton armé, utilisons des théodolites haute précision, achetons de l\'acier certifié et soumettons les structures à des essais rigoureux.',

    // Services UI
    allServices: 'Tous nos Services Techniques',
    viewDetails: 'Consulter la Fiche Chantier',
    closeDetails: 'Retour au Catalogue Services',
    scopeOfServices: 'Étendue Précise du Service',

    // Projects Page UI
    filterAll: 'Toutes les catégories',
    filterResidential: 'Villas & Pavillons',
    filterApartments: 'Appartements',
    filterHotels: 'Hôtels & Loges',
    filterIndustrial: 'Usines & Ateliers',
    filterWarehouses: 'Dépôts & Stockage',
    filterStaffCamps: 'Camps de Vie',
    filterSteel: 'Charpentes Métalliques',
    projectScope: 'Étendue des Travaux',
    projectClient: 'Maître d\'Ouvrage',
    projectStatus: 'Statut du Chantier',
    projectOngoing: 'En cours de Gros Œuvre',
    projectCompleted: 'Complété & Réceptionné',
    projectLocation: 'Localisation',

    // Careers UI
    careersTitle: 'Rejoignez nos Équipes de Terrain',
    careersSubtitle: 'Participez à la construction d\'édifices et d\'installations de premier plan en RDC. Postulez en quelques clics.',
    jobDepartment: 'Département',
    jobType: 'Type de Contrat',
    jobLocation: 'Lieu d\'Affectation',
    requirementsTitle: 'Compétences Requises',
    submitCvBtn: 'Transmettre ma Candidature',
    applyForJob: 'Postuler au poste de:',
    fullName: 'Votre Nom Complet',
    emailAddress: 'Votre Adresse Email',
    phoneLabel: 'Numéro de Téléphone',
    briefBio: 'Lettre de Motivation / Présentation',
    fileLabel: 'Joindre votre CV (PDF, DOCX)',
    submitting: 'Envoi sécurisé du fichier...',
    submitSuccess: 'Candidature enregistrée avec succès ! Notre département RH et nos directeurs de chantiers vont étudier votre dossier.',
    noJobs: 'Aucune offre d\'emploi ne correspond à votre recherche.',

    // Client Portal
    portalTitle: 'Portail Client & Simulateur Intelligent',
    portalSubtitle: 'Estimez les coûts et suivez en temps réel l\'évolution de vos dossiers d\'ingénierie.',
    quoteFormTitle: 'Faire une Demande d\'Estimation Réelle',
    quoteSubText: 'Estimez le budget prévisionnel de vos travaux de maçonnerie et de structure.',
    areaLabel: 'Surface au Sol Estimée (en mètres carrés)',
    budgetLabel: 'Budget de Construction Maximum',
    timelineLabel: 'Délai Réception Souhaité',
    projectDescription: 'Décrivez l\'étendue des travaux et les spécifications souhaitées',
    requestQuoteBtn: 'Envoyer ma Demande de Devis',
    quotePending: 'Analyse des plans au sol...',
    quoteSuccess: 'Estimation générée ! Votre code de suivi est:',
    quoteEstimatorResult: 'Fiche Estimative Prévisionnelle',
    estMaterialCost: 'Matériaux de Gros Œuvre (Ciment, Blocs, Acier)',
    estLaborCost: 'Main d\'œuvre Spécialisée (HSE, Chaudronniers, Maçons)',
    estTotal: 'Sous-Total Estimé Hors Taxes',
    trackerTitle: 'Suivre mon Dossier Technique',
    trackerSub: 'Entrez votre Code de Dossier pour connaître l\'avancement de l\'étude de vos plans.',
    enterCode: 'Entrez votre Code Dossier à 8 caractères',
    trackBtn: 'Rechercher mon Dossier',
    codeError: 'Code de dossier introuvable. Exemples : AUTH-7290, AUTH-EX88',
    statusLabel: 'Résultat du Diagnostic & Avancement',

    // Contact Us UI
    contactTitle: 'Contacter la Direction Générale',
    contactSubtitle: 'Bureaux d\'affaires sur la Route Likasi, Lubumbashi. Conduite directe de chantiers.',
    officeHoursTitle: 'Horaires d\'Ouverture',
    mapTitle: 'Emplacement Géographique HQ (Lubumbashi, Katanga, RDC)',
    whatsappTitle: 'Discuter sur WhatsApp',
    whatsappDesc: 'Contactez instantanément un assistant de direction Earthnet.',
    sendMsgWhatsApp: 'Ouvrir WhatsApp Messenger',
    contactFormTitle: 'Envoyer un Message Rapide d\'Ingénierie',
    msgName: 'Nom Complet',
    msgEmail: 'Courriel',
    msgPhone: 'Téléphone',
    msgSubject: 'Numéro de Sujet',
    msgBody: 'Comment nos ingénieurs peuvent-ils vous aider ?',
    sendFormBtn: 'Transmettre au Bureau Technique',
    messageSuccess: 'Message enregistré dans notre CRM ! Un ingénieur-conseil de permanence va prendre contact avec vous.',

    // Footer
    footerCopy: '© 2026 Earthnet Solutions SARL. Tous Droits Réservés. Construction • Génie Civil • Télécommunications.',
    footerAddress: '1064, Route Likasi, Village TUMBWE C/ ANNEXE-LUBUMBASHI',
    footerLicense: 'Agréé par le Conseil Congolais de Contrôle des Travaux et Infrastructures.'
  }
};
