/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, Building2, Hotel, Factory, Construction, Workflow, Wrench, ShieldCheck,
  HardHat, Award, Cpu, Lightbulb, Briefcase, Leaf,
  Phone, Mail, MapPin, Clock, Calendar, Globe, ThumbsUp, Send, CheckCircle2,
  AlertTriangle, Menu, X, ArrowRight, FileCheck, Search, DollarSign, ExternalLink, MessageSquare, Download, Check
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  companyDetails, mainServices, coreValues, featuredProjects, 
  careerJobs, clientTestimonials, blogArticles, translations 
} from './data';
import { BrandLogo } from './components/BrandLogo';
import { CompanyMap } from './components/CompanyMap';
import { DocumentsHub } from './components/DocumentsHub';
import { Language, Service, Project, CareerOpportunity, ClientInquiry, OnlineQuotation } from './types';

// Safe, fallback render helpers for icons
const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Home': return <HomeIcon className="w-6 h-6 text-orange-500" />;
    case 'Building2': return <Building2 className="w-6 h-6 text-orange-500" />;
    case 'Hotel': return <Hotel className="w-6 h-6 text-orange-500" />;
    case 'Factory': return <Factory className="w-6 h-6 text-orange-500" />;
    case 'Construction': return <Construction className="w-6 h-6 text-orange-500" />;
    case 'Workflow': return <Workflow className="w-6 h-6 text-orange-500" />;
    case 'Wrench': return <Wrench className="w-6 h-6 text-orange-500" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-orange-500" />;
    default: return <Building2 className="w-6 h-6 text-orange-500" />;
  }
};

const getValueIcon = (name: string) => {
  switch (name) {
    case 'HardHat': return <HardHat className="w-8 h-8 text-orange-500" />;
    case 'Award': return <Award className="w-8 h-8 text-orange-500" />;
    case 'Cpu': return <Cpu className="w-8 h-8 text-orange-500" />;
    case 'Lightbulb': return <Lightbulb className="w-8 h-8 text-orange-500" />;
    case 'Briefcase': return <Briefcase className="w-8 h-8 text-orange-500" />;
    case 'Leaf': return <Leaf className="w-8 h-8 text-orange-500" />;
    default: return <Award className="w-8 h-8 text-orange-500" />;
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('earthnet_lang');
    return (saved === 'fr' || saved === 'en') ? saved : 'en';
  });

  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'about', 'services', 'projects', 'gallery', 'careers', 'portal', 'contact'].includes(hash) ? hash : 'home';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Form states
  const [jobApplicationForm, setJobApplicationForm] = useState({
    jobId: '',
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    fileAttached: false
  });
  const [jobAppliedSuccess, setJobAppliedSuccess] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'residential',
    area: 120,
    budget: '$50,000 - $100,000',
    timeline: '3-6 months',
    description: ''
  });
  const [calculatedQuote, setCalculatedQuote] = useState<{ materials: number; labor: number; total: number; code: string } | null>(null);
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);

  // In-app Inquiry Tracking database simulation (populated with 2 pre-existing trackable cases)
  const [trackedInquiries, setTrackedInquiries] = useState<Record<string, { name: string; service: string; status: string; date: string }>>({
    'AUTH-7290': { name: 'Jean-Luc Kabulo', service: 'Hospitality / Eco-Resorts', status: 'In Review / Design Board Study', date: 'May 10, 2026' },
    'AUTH-EX88': { name: 'Marie-Claire Ngoie', service: 'Residential Villa BYDH', status: 'Quoted / Dispatched Draft Contract', date: 'May 28, 2026' }
  });
  const [searchCode, setSearchCode] = useState('');
  const [searchCodeResult, setSearchCodeResult] = useState<{ name: string; service: string; status: string; date: string } | null>(null);
  const [searchCodeError, setSearchCodeError] = useState(false);

  useEffect(() => {
    localStorage.setItem('earthnet_lang', lang);
  }, [lang]);

  useEffect(() => {
    window.location.hash = activeTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeTab]);

  const t = translations[lang];

  const handleApplyClick = (job: CareerOpportunity) => {
    setJobApplicationForm(prev => ({
      ...prev,
      jobId: job.title[lang]
    }));
    const element = document.getElementById('careers-apply-form-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitJobApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobApplicationForm.jobId || !jobApplicationForm.fullName || !jobApplicationForm.email || !jobApplicationForm.phone) {
      alert(lang === 'en' ? 'Please fill all fields' : 'Veuillez remplir les informations requises');
      return;
    }
    setJobAppliedSuccess(true);
    setTimeout(() => {
      setJobAppliedSuccess(false);
      setJobApplicationForm({
        jobId: '',
        fullName: '',
        email: '',
        phone: '',
        bio: '',
        fileAttached: false
      });
    }, 6000);
  };

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert(lang === 'en' ? 'Please fill in mandatory fields.' : 'Veuillez remplir les champs obligatoires.');
      return;
    }
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 6000);
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.email || !quoteForm.phone) {
      alert(lang === 'en' ? 'Your name, email, and phone are required.' : 'Le nom, courriel, et téléphone sont requis.');
      return;
    }
    setQuoteSubmitting(true);
    setTimeout(() => {
      // Calculate realistic cost multipliers
      let multiplier = 250; // default base price per sq meter
      if (quoteForm.projectType === 'industrial') multiplier = 350;
      if (quoteForm.projectType === 'steel-structures') multiplier = 400;
      if (quoteForm.projectType === 'hotels') multiplier = 300;

      const baseArea = Math.max(10, Number(quoteForm.area));
      const materialCost = Math.round(baseArea * multiplier * 0.65);
      const laborCost = Math.round(baseArea * multiplier * 0.35);
      const totalCost = materialCost + laborCost;

      const randomCode = `AUTH-${Math.floor(1000 + Math.random() * 9000)}`;

      setCalculatedQuote({
        materials: materialCost,
        labor: laborCost,
        total: totalCost,
        code: randomCode
      });

      // Add to tracking database!
      setTrackedInquiries(prev => ({
        ...prev,
        [randomCode]: {
          name: quoteForm.name,
          service: quoteForm.projectType.toUpperCase(),
          status: 'Received / Estimating Done - Draft generated',
          date: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })
        }
      }));

      setQuoteSubmitting(false);
    }, 2000);
  };

  const handleTrackCode = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchCode.trim().toUpperCase();
    if (trackedInquiries[query]) {
      setSearchCodeResult(trackedInquiries[query]);
      setSearchCodeError(false);
    } else {
      setSearchCodeError(true);
      setSearchCodeResult(null);
    }
  };

  // Get gallery list from featured projects (combining all images)
  const galleryItems = featuredProjects.flatMap(proj => 
    proj.images.map((img, index) => ({
      url: img,
      title: proj.title[lang],
      location: proj.location[lang],
      category: proj.category
    }))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans tracking-tight flex flex-col justify-between selection:bg-orange-500 selection:text-white antialiased">
      
      {/* Dynamic Floating WhatsApp Portal Widget */}
      <a 
        href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hello%20Earthnet%20Solutions,%20I%20am%20interested%20in%20your%20construction%20and%20civil%20engineering%20services.`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border border-emerald-500/30 group"
        title={t.whatsappTitle}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.512 1.976 14.04 1.153 11.41 1.15c-5.442-.001-9.87 4.372-9.874 9.802-.001 1.73.468 3.418 1.357 4.916l-.985 3.597 3.69-.958zm13.125-7.391c-.29-.145-1.716-.848-1.982-.944-.265-.096-.458-.145-.65.145-.193.29-.747.944-.916 1.137-.168.193-.337.217-.627.072-1.29-.646-2.127-1.132-2.946-2.535-.216-.371.216-.344.62-.116.36.204.408.241.614.65.11.217.055.41-.027.553-.082.145-.747 1.802-.922 2.212-.17.41-.355.35-.487.355-.127.004-.272.005-.417.005-.145 0-.385.054-.586.273-.201.217-.77 1.096-.77 2.193 0 1.096.795 2.152.905 2.3.11.144 1.564 2.385 3.79 3.35.529.23 1.036.367 1.391.48.533.17 1.018.146 1.402.088.428-.063 1.715-.7 1.957-1.378.241-.678.241-1.26.168-1.379-.072-.119-.265-.192-.553-.338z" />
        </svg>
        <span className="absolute right-16 scale-0 bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-xl font-sans border border-emerald-600/30">
          {t.sendMsgWhatsApp}
        </span>
      </a>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setActiveTab('home')}>
            <BrandLogo className="w-10 h-10 sm:w-11 sm:h-11" showText={true} textColorClass="text-slate-100" />
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'home', label: t.homeTitle },
              { id: 'about', label: t.aboutTab },
              { id: 'services', label: t.servicesTab },
              { id: 'projects', label: t.projectsTab },
              { id: 'gallery', label: t.galleryTab },
              { id: 'careers', label: t.careersTab },
              { id: 'portal', label: t.portalTab },
              { id: 'contact', label: t.contactTab }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeTab === tab.id ? 'text-orange-400' : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Language & Actions HUD */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Action Info Button / Tab */}
            <button
              onClick={() => setActiveTab('portal')}
              className="bg-orange-600 hover:bg-orange-500 active:scale-95 text-white text-xs font-bold font-sans uppercase tracking-wider px-4 py-2 rounded-lg shadow-lg shadow-orange-950/40 transition-all flex items-center gap-1.5"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>{t.heroCTA1}</span>
            </button>

            {/* Language Changer Toggle */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-lg">
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] font-mono font-bold px-2 py-1 rounded transition-all ${lang === 'en' ? 'bg-orange-500 text-slate-950 shadow font-extrabold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('fr')}
                className={`text-[10px] font-mono font-bold px-2 py-1 rounded transition-all ${lang === 'fr' ? 'bg-orange-500 text-slate-950 shadow font-extrabold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-lg mr-1 scale-90">
              <button onClick={() => setLang('en')} className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${lang === 'en' ? 'bg-orange-500 text-slate-950' : 'text-slate-400'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${lang === 'fr' ? 'bg-orange-500 text-slate-950' : 'text-slate-400'}`}>FR</button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-900 shadow-2xl overflow-hidden"
            >
              <div className="p-4 space-y-2 flex flex-col">
                {[
                  { id: 'home', label: t.homeTitle },
                  { id: 'about', label: t.aboutTab },
                  { id: 'services', label: t.servicesTab },
                  { id: 'projects', label: t.projectsTab },
                  { id: 'gallery', label: t.galleryTab },
                  { id: 'careers', label: t.careersTab },
                  { id: 'portal', label: t.portalTab },
                  { id: 'contact', label: t.contactTab }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                    }}
                    className={`w-full text-left py-2.5 px-4 rounded-lg font-sans font-bold text-xs uppercase tracking-wider ${
                      activeTab === tab.id ? 'bg-orange-600/10 text-orange-400 border-l-4 border-orange-500' : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setActiveTab('portal');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-orange-600 active:scale-95 text-white text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  {t.heroCTA1}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            
            {/* TAB 1: HOME */}
            {activeTab === 'home' && (
              <div className="space-y-16">
                
                {/* Hero section */}
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl py-16 sm:py-24 px-8 text-left bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to right, rgba(2, 6, 23, 0.95) 45%, rgba(2, 6, 23, 0.45) 100%), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80")' }}>
                  <div className="max-w-2xl space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                      {lang === 'en' ? 'Lubumbashi • Katanga • DRC' : 'Lubumbashi • Katanga • RDC'}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                      {t.heroTitle}
                    </h1>
                    <p className="text-base text-slate-300 leading-relaxed font-sans">
                      {t.heroDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <button
                        onClick={() => setActiveTab('portal')}
                        className="bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-orange-950/40 transition-all flex items-center justify-center gap-2"
                      >
                        <FileCheck className="w-4 h-4" />
                        <span>{t.heroCTA1}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('services')}
                        className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white"
                      >
                        <span>{t.heroCTA2}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Taglines Banner Carousel mockup */}
                <div className="bg-slate-900/45 border-y border-slate-900 py-6 overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center text-slate-400 font-mono text-xs text-nowrap md:overflow-visible">
                    <div className="flex items-center gap-2 font-bold text-slate-300">
                      <span className="text-orange-500">★</span> "{t.tagline}"
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-300">
                      <span className="text-orange-500">★</span> "{t.taglineSecondary.toUpperCase()}"
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-300">
                      <span className="text-orange-500">★</span> "{t.taglineConstructing}"
                    </div>
                  </div>
                </div>

                {/* Quick Enterprise stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '45+', label: t.statProjects, icon: <Building2 className="text-orange-500 w-5 h-5" /> },
                    { value: '90+', label: t.statMembers, icon: <HardHat className="text-orange-500 w-5 h-5" /> },
                    { value: '100%', label: t.statHse, icon: <ShieldCheck className="text-orange-500 w-5 h-5" /> },
                    { value: '48h', label: t.statHours, icon: <Clock className="text-orange-500 w-5 h-5" /> }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-900 p-5 rounded-2xl flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center shrink-0 border border-slate-800">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white font-mono leading-none tracking-tight">{stat.value}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mt-1 font-sans">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Corporate Overview Hook page 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                      {lang === 'en' ? 'Our Foundation & Technical Drive' : 'Notre Ancrage & Pratique Technique'}
                    </h2>
                    <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-slate-300 text-sm font-sans leading-relaxed">
                      "Operating across complex built environments and evolving technological landscapes, Earthnet Solutions SARL brings together a disciplined multi-disciplinary approach..."
                    </blockquote>
                    <p className="text-xs text-slate-400 font-mono leading-relaxed uppercase">
                      [SITE VISUAL REFERENCE: Administrative Headquarters & Operational Complex]
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {lang === 'en' 
                        ? 'Our structural and mechanical engineering units work side-by-side with specialized telecommunication professionals to bridge conventional masonry work with tomorrows interconnected requirements. This hybrid capability positions us uniquely to execute smart site layouts, administrative hubs, industrial enclosures, and high-connectivity installations.'
                        : 'Nos services d\'ingénieries structurelles et mécaniques travaillent main dans la main avec des experts des télécommunications pour lier la maçonnerie conventionnelle aux requis connectés de demain. Cette polyvalence nous permet d\'aménager des bases de vie intelligentes, des centres industriels et des raccordements fiables.'
                      }
                    </p>
                    <button
                      onClick={() => setActiveTab('about')}
                      className="bg-slate-900 hover:bg-slate-850 text-orange-400 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg border border-slate-800 hover:text-orange-300 transition-all"
                    >
                      {lang === 'en' ? 'View Corporate Vision' : 'Consulter notre Vision'}
                    </button>
                  </div>
                  <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                      alt="Administrative Headquarters rendering" 
                      className="w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-6 flex flex-col justify-end text-left">
                      <span className="text-[10px] font-mono tracking-widest text-orange-400 font-bold uppercase">{lang === 'en' ? 'Operational Hub Design' : 'Maquette du Centre d’Affaires'}</span>
                      <h4 className="font-bold text-sm text-white mt-1">Earthnet Administrative Complex</h4>
                    </div>
                  </div>
                </div>

                {/* Key featured projects highlight */}
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
                    <div>
                      <h2 className="text-2xl font-black text-white font-sans tracking-tight">{lang === 'en' ? 'Featured Infrastructure Showcases' : 'Projets d’Infrastructure Phares'}</h2>
                      <p className="text-sm text-slate-400">{lang === 'en' ? 'Explore key projects built along Route Likasi and across general Katanga coordinates.' : 'Explorez notre savoir-faire concret sur la Route Likasi et au Katanga.'}</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('projects')}
                      className="text-orange-500 hover:text-orange-400 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1"
                    >
                      <span>{lang === 'en' ? 'Browse All Projects' : 'Consulter tous les projets'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {featuredProjects.slice(0, 3).map(proj => (
                      <div 
                        key={proj.id}
                        className="group bg-slate-900 border border-slate-900 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={proj.images[0]} 
                              alt={proj.title[lang]} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono font-bold tracking-widest text-orange-400 uppercase px-2 py-1 rounded">
                              {proj.category.toUpperCase()}
                            </span>
                          </div>
                          <div className="p-5 space-y-2">
                            <h4 className="font-bold text-slate-100 text-sm font-sans group-hover:text-orange-300 transition-colors">
                              {proj.title[lang]}
                            </h4>
                            <p className="text-xs text-slate-400 font-sans line-clamp-2">
                              {proj.scope[lang]}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-5 pt-2 border-t border-slate-950 flex justify-between items-center text-[10px] font-mono">
                          <span className="text-slate-500">{proj.location[lang]}</span>
                          <span className={`font-bold ${proj.status === 'completed' ? 'text-green-400' : 'text-orange-400'}`}>
                            {proj.status === 'completed' ? '✓ ' + (lang === 'en' ? 'Done' : 'Réceptionné') : '★ ' + (lang === 'en' ? 'Active' : 'Gros Œuvre')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonials */}
                <div className="bg-slate-900/50 rounded-2xl border border-slate-900 p-8 text-left">
                  <div className="max-w-2xl mb-8">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-orange-500 uppercase">{lang === 'en' ? 'Endorsements' : 'Témoignages Clients'}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">{lang === 'en' ? 'What our Construction Partners Say' : 'Paroles de Maîtres d’Ouvrage'}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {clientTestimonials.map((t, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, i) => <span key={i} className="text-orange-400 text-sm">★</span>)}
                        </div>
                        <p className="text-sm text-slate-300 italic font-sans leading-relaxed">
                          "{t.quote[lang]}"
                        </p>
                        <div>
                          <p className="font-sans font-bold text-slate-200 text-xs leading-none">{t.name}</p>
                          <p className="font-mono text-[9px] text-slate-500 uppercase mt-1">{t.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: ABOUT US */}
            {activeTab === 'about' && (
              <div className="space-y-12 text-left">
                
                {/* Introduction & Profile section */}
                <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-900 space-y-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-orange-500 uppercase">
                    {t.aboutIntro}
                  </span>
                  <blockquote className="p-5 bg-slate-950/40 border-l-4 border-orange-500 text-slate-200 font-sans text-sm block leading-relaxed rounded-r-lg">
                    {t.aboutMainParagraph1}
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed font-sans">
                    <p>{t.aboutMainParagraph2}</p>
                    <p>{t.aboutMainParagraph3}</p>
                  </div>
                </div>

                {/* Vision / Mission / Commitment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-orange-500/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <Globe className="text-orange-400 w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-white text-base font-sans">{t.visionTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'en' 
                        ? 'To become one of Africa\'s most trusted construction and engineering companies by delivering innovative, sustainable, and high-quality infrastructure solutions.'
                        : 'Devenir l’un des prestataires de génie civil les plus intègres et réputés d’Afrique en livrant des routes, cités et usines aux normes opérationnelles durables.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-orange-500/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <Workflow className="text-orange-400 w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-white text-base font-sans">{t.missionTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'en'
                        ? 'To provide safe, reliable, and cost-effective construction services while exceeding client expectations through technical excellence, integrity, and professionalism.'
                        : 'Fournir des chantiers sécurisés, respectueux des enveloppes budgétaires, tout en surpassant les objectifs techniques de nos clients par l’éthique et l’art de bâtir.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-orange-500/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <ShieldCheck className="text-orange-400 w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-white text-base font-sans">{t.commitmentTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'en'
                        ? '"We are dedicated to building strong foundations for the future by combining engineering excellence, modern technology, and sustainable development."'
                        : '"Nous unissons expertise technique avancée, processus de pointe et matériaux stables pour forger des ouvrages qui durent à l\'épreuve du temps au Congo."'
                      }
                    </p>
                  </div>
                </div>

                {/* Core Values Section */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-orange-500 font-extrabold uppercase">{lang === 'en' ? 'Pillars of Integrity' : 'Piliers de Valeur'}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">{lang === 'en' ? 'Our Values & Site Standards' : 'Nos Normes et Directives d’Atelier'}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {coreValues.map((val, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-slate-900 p-5 rounded-2xl text-left space-y-3">
                        <div className="w-10 h-10 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
                          {getValueIcon(val.iconName)}
                        </div>
                        <h4 className="font-bold text-slate-100 text-sm font-sans">{val.title[lang]}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">{val.desc[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HSE Commitment detail (Page 6 Values & Standards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/30 p-8 rounded-2xl border border-slate-900">
                  <div className="space-y-4">
                    <span className="inline-flex px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono rounded">
                      HSE COMMITTED • ZERO ACCIDENT
                    </span>
                    <h4 className="text-lg font-bold text-slate-100 font-sans">{t.hsePolicyTitle}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {t.hsePolicyDesc}
                    </p>
                    <ul className="space-y-2 text-xs font-mono text-slate-400">
                      <li>• {lang === 'en' ? 'Certified safety helmet & harness checks daily.' : 'Briefing sécurité quotidien avant premier coup de pelleteuse.'}</li>
                      <li>• {lang === 'en' ? 'High-velocity warning lines & lane guidelines.' : 'Clôture automatisée par badges et agents de permanence.'}</li>
                      <li>• {lang === 'en' ? 'HSE inspectors present on all structural steel assembly.' : 'Supervision technique rapprochée pour chaque levage de ferme acier.'}</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <span className="inline-flex px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono rounded">
                      ASTM & BS COMPLIANCE • HIGH QUALITY
                    </span>
                    <h4 className="text-lg font-bold text-slate-100 font-sans">{t.qualityPolicyTitle}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {t.qualityPolicyDesc}
                    </p>
                    <ul className="space-y-2 text-xs font-mono text-slate-400">
                      <li>• {lang === 'en' ? 'Slump verifications and compressometer evaluations.' : 'Fiches techniques d’ouvrages conformes et contrôles béton.'}</li>
                      <li>• {lang === 'en' ? 'Laser levelling for heavy civil logistics sub-bases.' : 'Nivellement theodolite de grande précision pour dalles industrielles.'}</li>
                      <li>• {lang === 'en' ? 'Certified grade-A steel rafters and anchor bolts.' : 'Assemblages boulonnés de type structure lourde validés.'}</li>
                    </ul>
                  </div>
                </div>

                {/* PDF Documents Download Hub */}
                <DocumentsHub lang={lang} />

              </div>
            )}

            {/* TAB 3: SERVICES */}
            {activeTab === 'services' && (
              <div className="space-y-12 text-left">
                
                {/* Introduction headers */}
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Scope of Operations' : 'Champs d’Application Technique'}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">{t.allServices}</h2>
                  <p className="text-xs sm:text-xs text-slate-400 font-mono text-center">
                    [INDUSTRIAL FOCUS: Precast Concrete Blocks, Structural Steel & Mechanical piping]
                  </p>
                </div>

                {/* Service Cards Grid / Interactive Detailed Blueprint Viewer */}
                {!selectedService ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mainServices.map(service => (
                      <div 
                        key={service.id}
                        className="group bg-slate-900 border border-slate-900 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all flex flex-col justify-between text-left"
                      >
                        <div>
                          <div className="relative aspect-video">
                            <img src={service.bgImage} alt={service.title[lang]} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-slate-950/90 backdrop-blur border border-slate-800 flex items-center justify-center">
                              {getServiceIcon(service.iconName)}
                            </div>
                          </div>
                          <div className="p-5 space-y-3">
                            <h4 className="font-bold text-sm text-slate-100 group-hover:text-orange-400 transition-colors font-sans">
                              {service.title[lang]}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed font-sans">
                              {service.shortDesc[lang]}
                            </p>
                          </div>
                        </div>

                        <div className="p-5 pt-0">
                          <button
                            onClick={() => setSelectedService(service)}
                            className="w-full bg-slate-950 hover:bg-slate-800 text-orange-400 hover:text-orange-300 border border-slate-800/80 text-[10px] font-mono uppercase font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-1"
                          >
                            <span>{t.viewDetails}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Animated Service Detail Screen */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 border border-slate-800/80 p-8 rounded-2xl text-left space-y-6 max-w-4xl mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                          {getServiceIcon(selectedService.iconName)}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-slate-100 font-sans">{selectedService.title[lang]}</h3>
                          <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">{selectedService.id.toUpperCase()} SECTOR • EARTHNET</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setSelectedService(null)}
                        className="bg-slate-950 hover:bg-slate-850 px-4 py-2 border border-slate-800 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200 transition-all flex items-center gap-1.5 self-start sm:self-center"
                      >
                        <X className="w-4 h-4" />
                        <span>{t.closeDetails}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <h4 className="font-sans font-bold text-white text-base">
                          {selectedService.detailed.title[lang]}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
                          {selectedService.detailed.intro[lang]}
                        </p>
                        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                          <p className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">{t.scopeOfServices}</p>
                          <ul className="space-y-2.5 mt-3">
                            {selectedService.detailed.items.map((it, idx) => (
                              <li key={idx} className="text-xs text-slate-300 font-sans flex items-start gap-2">
                                <span className="text-orange-500 shrink-0 text-xs mt-0.5">✓</span>
                                <span>{it[lang]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                          <img src={selectedService.bgImage} alt={selectedService.title[lang]} className="w-full object-cover aspect-video" />
                        </div>
                        <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-3">
                          <h5 className="text-xs font-bold text-slate-200 uppercase font-mono">{lang === 'en' ? 'Technical Specifications' : 'Spécificités d’Ingénierie'}</h5>
                          <p className="text-[11px] text-slate-400 font-sans">
                            {lang === 'en' 
                              ? 'Fully compliant with ASTM and British Standard regulations. Designed under strict architectural blueprints, leveraging high strength concrete and high-elevation steel beams.'
                              : 'Conforme aux régulations européennes, britanniques et ASTM. Calculs de charges structurelles modélisés et validés par ingénieurs agréés.'
                            }
                          </p>
                          <button
                            onClick={() => {
                              setSelectedService(null);
                              setActiveTab('portal');
                            }}
                            className="w-full mt-2 bg-orange-600 hover:bg-orange-500 text-white font-sans font-bold text-xs uppercase tracking-wider py-2 rounded-lg transition-all"
                          >
                            {lang === 'en' ? 'Get Quote For This Service' : 'Calculer un Devis pour ce Service'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>
            )}

            {/* TAB 4: PROJECTS PORTFOLIO */}
            {activeTab === 'projects' && (
              <div className="space-y-12 text-left">
                
                {/* Introduction */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Our Concrete Milestones' : 'Nos Chantiers Marquants'}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">{lang === 'en' ? 'Completed & Ongoing Handovers' : 'Tous nos Projets Clé en Main'}</h2>
                  <p className="text-sm text-slate-400 font-sans max-w-2xl">
                    {lang === 'en' 
                      ? 'Detailed construction categories for villas, heavy platforms, transit yards, and modular barracks across Lubumbashi Village Tumbwe and Likasi roads.'
                      : 'Suivi et catégories techniques de nos constructions : villas, dalles d’usines minières, entrepôts et enclos modulaires au Katanga.'
                    }
                  </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 border-b border-slate-900 pb-5">
                  {[
                    { id: 'all', label: t.filterAll },
                    { id: 'residential', label: t.filterResidential },
                    { id: 'apartments', label: t.filterApartments },
                    { id: 'hotels', label: t.filterHotels },
                    { id: 'industrial', label: t.filterIndustrial },
                    { id: 'warehouses', label: t.filterWarehouses },
                    { id: 'staff-camps', label: t.filterStaffCamps },
                    { id: 'steel-structures', label: t.filterSteel }
                  ].map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setProjectFilter(filter.id)}
                      className={`px-4 py-2 text-xs rounded-xl font-sans font-bold transition-all border ${
                        projectFilter === filter.id
                          ? 'bg-orange-600 border-orange-500 text-white shadow'
                          : 'bg-slate-900 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Projects Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProjects
                    .filter(proj => projectFilter === 'all' || proj.category === projectFilter)
                    .map(proj => (
                      <div 
                        key={proj.id}
                        className="group bg-slate-900 border border-slate-900 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all flex flex-col justify-between text-left"
                      >
                        <div>
                          {/* Image Switcher/Mock slider overlay */}
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={proj.images[0]} 
                              alt={proj.title[lang]} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono font-bold tracking-widest text-orange-400 uppercase px-2.5 py-1.2 rounded shadow">
                              {proj.category.toUpperCase()}
                            </span>
                          </div>

                          <div className="p-6 space-y-4">
                            <div>
                              <p className="text-[10px] font-mono font-bold text-slate-500 tracking-wider flex items-center gap-1.5 uppercase">
                                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                <span>{proj.location[lang]}</span>
                              </p>
                              <h4 className="font-extrabold text-white text-base mt-1 group-hover:text-orange-300 transition-colors">
                                {proj.title[lang]}
                              </h4>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed font-sans">
                              {proj.scope[lang]}
                            </p>

                            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase">{t.projectClient}</p>
                              <p className="text-xs text-slate-350 font-sans font-bold">{proj.client[lang]}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-6 pb-6 pt-2 border-t border-slate-950 flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{t.projectStatus}</span>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase border ${
                            proj.status === 'completed'
                              ? 'bg-green-500/5 border-green-500/20 text-green-400'
                              : 'bg-orange-500/5 border-orange-500/20 text-orange-400 animate-pulse'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${proj.status === 'completed' ? 'bg-green-400' : 'bg-orange-400'}`}></span>
                            {proj.status === 'completed' ? t.projectCompleted : t.projectOngoing}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

              </div>
            )}

            {/* TAB 5: GALLERY */}
            {activeTab === 'gallery' && (
              <div className="space-y-12 text-left">
                
                {/* Introduction */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Construction Camera & Snapshots' : 'Caméra de Chantier & Instants'}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">{lang === 'en' ? 'Erection Progress & Fleet Assets' : 'Photos de Chantiers et Parcs Machines'}</h2>
                  <p className="text-sm text-slate-400 font-sans max-w-2xl">
                    {lang === 'en' 
                      ? 'Live visual monitoring of pouring concrete, heavy scaffolding assemblies, turnstile installations, and structural steel works directly on Lubumbashi sites.'
                      : 'Photographies d’ouvrages, coulage de béton fluide, découpe d’ossatures d’acier et installations de tourniquets d’accès.'
                    }
                  </p>
                </div>

                {/* Filterable Zoomable Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems.map((item, index) => (
                    <div 
                      key={index} 
                      onClick={() => setLightboxImage(item.url)}
                      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-900 cursor-pointer aspect-video shadow-lg hover:border-orange-500/30 transition-all text-left"
                    >
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent opacity-0 group-hover:opacity-100 transition-all p-5 flex flex-col justify-end">
                        <span className="text-[9px] font-mono text-orange-400 font-bold tracking-widest uppercase mb-1">{item.category.toUpperCase()} • LIVE SITE PHOTO</span>
                        <h5 className="font-bold text-sm text-white font-sans">{item.title}</h5>
                        <p className="text-xs text-slate-300 font-sans mt-1 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </p>
                      </div>
                      
                      {/* Zoom Indicator Icon Overlay */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-slate-800">
                        <Search className="w-3.5 h-3.5 text-orange-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lightbox Modal */}
                {lightboxImage && (
                  <div 
                    className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md"
                    onClick={() => setLightboxImage(null)}
                  >
                    <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 text-left">
                      <img src={lightboxImage} alt="Large layout preview" className="w-full aspect-video object-cover" />
                      <button 
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-850 p-2.5 rounded-full border border-slate-700/80 text-white transition-all shadow-md"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="p-4 bg-slate-950 text-xs font-mono text-slate-400 flex justify-between items-center">
                        <span>{lang === 'en' ? '★ Verified Earthnet site capture' : '★ Capture certifiée de chantier Earthnet'}</span>
                        <span>{lang === 'en' ? 'Click outside to close' : 'Cliquez à l’extérieur pour fermer'}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* TAB 6: CAREERS */}
            {activeTab === 'careers' && (
              <div className="space-y-12 text-left">
                
                {/* Introduction */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-xl">
                    <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Build Africa’s Future' : 'Bâtir le Congo du Futur'}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">{t.careersTitle}</h2>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      {t.careersSubtitle}
                    </p>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shrink-0 text-left">
                    <p className="text-xs font-mono text-slate-400">{lang === 'en' ? '★ Safety Requirement:' : '★ Exigence de Sécurité:'}</p>
                    <p className="text-[11px] text-slate-500 font-sans mt-1 leading-relaxed max-w-xs">
                      {lang === 'en' 
                        ? 'All technicians must complete our strict HSE module prior to being dispatched on structural crane and high-elevation framing operations.' 
                        : 'Tous nos corps d’état techniques doivent recevoir leur habilitation HSE avant intervention sur échafaudages ou levages lourds.'
                      }
                    </p>
                  </div>
                </div>

                {/* Openings Grid */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-white font-sans">{lang === 'en' ? 'Current Vacant Blueprints' : 'Feuilles de Postes Vacants'}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {careerJobs.map(job => (
                      <div 
                        key={job.id}
                        className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 hover:border-orange-500/20 transition-all flex flex-col justify-between text-left"
                      >
                        <div className="space-y-4">
                          <div>
                            <span className="px-2.5 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-400 text-[9px] font-mono rounded-full font-bold uppercase">
                              {job.department[lang]}
                            </span>
                            <h4 className="font-extrabold text-white text-base font-sans mt-2 tracking-tight group-hover:text-orange-400">
                              {job.title[lang]}
                            </h4>
                          </div>

                          <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                            {job.description[lang]}
                          </p>

                          <div className="space-y-2 pt-2 border-t border-slate-900 text-xs">
                            <p className="font-sans text-slate-300 font-bold">{t.requirementsTitle}</p>
                            <ul className="space-y-1.5 text-slate-400 text-[11px] font-sans">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span className="text-orange-500 shrink-0 text-xs">•</span>
                                  <span>{req[lang]}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-6 mt-4 border-t border-slate-950 space-y-2">
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="w-full bg-slate-950 hover:bg-slate-800 text-orange-400 hover:text-orange-300 border border-slate-800 text-[10px] font-mono uppercase font-bold py-2.5 rounded-lg transition-all"
                          >
                            {lang === 'en' ? 'Apply Now' : 'Postuler à cet emploi'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Application submission form */}
                <div id="careers-apply-form-container" className="bg-slate-900/60 p-8 rounded-2xl border border-slate-900 max-w-2xl mx-auto space-y-6 text-left">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-white font-sans">{lang === 'en' ? 'Online Career Portal' : 'Transmission de Candidature'}</h3>
                    <p className="text-xs text-slate-400 font-sans">{lang === 'en' ? 'Submit your technical experience. CV file sizes must not exceed 10MB.' : 'Envoyez votre dossier d’expérience. Fichiers limités à 10 Mo.'}</p>
                  </div>

                  {jobAppliedSuccess ? (
                    <div className="bg-green-600/10 border border-green-500 text-green-300 p-5 rounded-xl flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-sm font-sans">{lang === 'en' ? 'Application Stream Logged' : 'Candidature enregistrée'}</h5>
                        <p className="text-xs text-slate-400 mt-1 font-sans">{t.submitSuccess}</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={submitJobApplication} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{lang === 'en' ? 'Target Position' : 'Poste Cible'}</label>
                          <select 
                            value={jobApplicationForm.jobId} 
                            onChange={(e) => setJobApplicationForm(prev => ({ ...prev, jobId: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans font-bold"
                          >
                            <option value="">-- {lang === 'en' ? 'Select an active opening' : 'Choisir un poste'} --</option>
                            <option value="Senior Structural Civil Engineer">{lang === 'en' ? 'Senior Structural Civil Engineer' : 'Ingénieur en Chef Génie Civil Structure'}</option>
                            <option value="Industrial Welder & Steel Fitter">{lang === 'en' ? 'Industrial Welder & Steel Fitter' : 'Soudeur Industriel & Assembleur Métallique'}</option>
                            <option value="Safety Specialist (HSE Officer)">{lang === 'en' ? 'Safety Specialist (HSE Officer)' : 'Spécialiste de la Sécurité (Officier HSE)'}</option>
                            <option value="Unspontaneous Internship">{lang === 'en' ? 'General Construction Internship' : 'Stage d’apprentissage de bâtiment'}</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.fullName}</label>
                          <input 
                            type="text" 
                            required
                            placeholder="Jean Muke"
                            value={jobApplicationForm.fullName}
                            onChange={(e) => setJobApplicationForm(prev => ({ ...prev, fullName: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.emailAddress}</label>
                          <input 
                            type="email" 
                            required
                            placeholder="muke@domain.cd"
                            value={jobApplicationForm.email}
                            onChange={(e) => setJobApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.phoneLabel}</label>
                          <input 
                            type="text" 
                            required
                            placeholder="+243 858 000 000"
                            value={jobApplicationForm.phone}
                            onChange={(e) => setJobApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.briefBio}</label>
                        <textarea 
                          rows={3}
                          placeholder={lang === 'en' ? 'Describe your heavy equipment skills or masonry work experience...' : 'Décrivez votre expérience avec les outils de chantier...'}
                          value={jobApplicationForm.bio}
                          onChange={(e) => setJobApplicationForm(prev => ({ ...prev, bio: e.target.value }))}
                          className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans"
                        />
                      </div>

                      {/* Simulated drag & drop CV field */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.fileLabel}</label>
                        <div 
                          onClick={() => setJobApplicationForm(prev => ({ ...prev, fileAttached: true }))}
                          className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                            jobApplicationForm.fileAttached 
                              ? 'bg-orange-500/10 border-orange-500 text-orange-200' 
                              : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                          }`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <Download className={`w-6 h-6 ${jobApplicationForm.fileAttached ? 'text-orange-500' : 'text-slate-500'}`} />
                            <p className="text-xs font-sans">
                              {jobApplicationForm.fileAttached 
                                ? (lang === 'en' ? '✓ CV_TECHNICAL_PROFILE.PDF attached successfully' : '✓ CV_TECHNICAL_PROFILE.PDF attaché avec succès')
                                : (lang === 'en' ? 'Click here to simulate uploading your CV' : 'Cliquez ici pour charger un CV fictif de démonstration')
                              }
                            </p>
                            <p className="text-[10px] opacity-75 font-mono">{lang === 'en' ? 'PDF or DOCX max 10MB' : 'Format PDF ou DOCX, max 10 Mo'}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>{t.submitCvBtn}</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            )}

            {/* TAB 7: CLIENT PORTAL (QUOTATIONS AND INQUIRY TRACKER) */}
            {activeTab === 'portal' && (
              <div className="space-y-12 text-left">
                
                {/* Intro banner */}
                <div className="max-w-3xl space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Enterprise Client Area' : 'Espace Clientèle d’Entreprises'}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">{t.portalTitle}</h2>
                  <p className="text-sm text-slate-400 font-sans">
                    {t.portalSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
                  {/* Part A: Fast Quotation Estimator Form */}
                  <div className="bg-slate-900 border border-slate-900 p-8 rounded-2xl space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-black text-white font-sans">{t.quoteFormTitle}</h3>
                      <p className="text-xs text-slate-400 font-sans">{t.quoteSubText}</p>
                    </div>

                    <form onSubmit={handleGenerateQuote} className="space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.fullName} *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Jean-Luc"
                            value={quoteForm.name}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, name: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.emailAddress} *</label>
                          <input 
                            type="email" 
                            required 
                            placeholder="luc@domain.cd"
                            value={quoteForm.email}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.phoneLabel} *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="+243 858 006 411"
                            value={quoteForm.phone}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, phone: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500 font-mono"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{lang === 'en' ? 'Corporate Company Entity' : 'Entité / Société Contractante'}</label>
                          <input 
                            type="text" 
                            placeholder="Société de Transit Katanga"
                            value={quoteForm.company}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, company: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{lang === 'en' ? 'Construction Project Category' : 'Catégorie Technique Principale'}</label>
                          <select
                            value={quoteForm.projectType}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, projectType: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500 text-xs font-bold"
                          >
                            <option value="residential">{lang === 'en' ? 'Residential / Villas BYDH' : 'Résidentiel / Villas BYDH'}</option>
                            <option value="apartments">{lang === 'en' ? 'Multi-Family Apartments' : 'Immeuble / Appartements collectifs'}</option>
                            <option value="hotels">{lang === 'en' ? 'Hospitality Projects / Eco-Resorts' : 'Complexe hôtelier ou pavillons touristiques'}</option>
                            <option value="industrial">{lang === 'en' ? 'Heavy Industrial Factories' : 'Ateliers / Usines industrielles lourdes'}</option>
                            <option value="warehouses">{lang === 'en' ? 'High-Span Steel Warehouses' : 'Dépôts et Hangars de Stockage'}</option>
                            <option value="steel-structures">{lang === 'en' ? 'Structural Overhead Steel Framing' : 'Charpente soudée métallique plateformes'}</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.areaLabel}</label>
                          <input 
                            type="number" 
                            min={10}
                            placeholder="120"
                            value={quoteForm.area}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, area: Number(e.target.value) }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500 font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.budgetLabel}</label>
                          <select
                            value={quoteForm.budget}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, budget: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500 text-xs font-bold"
                          >
                            <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                            <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                            <option value="$500,000+">$500,000+</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.timelineLabel}</label>
                          <select
                            value={quoteForm.timeline}
                            onChange={(e) => setQuoteForm(prev => ({ ...prev, timeline: e.target.value }))}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500 text-xs font-bold"
                          >
                            <option value="1-3 months">{lang === 'en' ? '1 to 3 Months (Fasttrack)' : '1 à 3 Mois (Express)'}</option>
                            <option value="3-6 months">{lang === 'en' ? '3 to 6 Months' : '3 à 6 Mois'}</option>
                            <option value="6-12 months">{lang === 'en' ? '6 to 12 Months' : '6 à 12 Mois'}</option>
                            <option value="Flexible">{lang === 'en' ? 'Flexible Delivery Scale' : 'Flexible / Sans contrainte'}</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.projectDescription}</label>
                        <textarea 
                          rows={3}
                          placeholder={lang === 'en' ? 'Specify floor load specifications, soil details, partition counts...' : 'Spécifiez la topographie du terrain, raccordements, maçonnerie...'}
                          value={quoteForm.description}
                          onChange={(e) => setQuoteForm(prev => ({ ...prev, description: e.target.value }))}
                          className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={quoteSubmitting}
                        className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                      >
                        {quoteSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>{t.quotePending}</span>
                          </>
                        ) : (
                          <>
                            <DollarSign className="w-4 h-4" />
                            <span>{t.requestQuoteBtn}</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Estimator Result & Real-Time Tracking HUD */}
                  <div className="space-y-6">
                    
                    {/* Quotation response panel (Dynamic) */}
                    <AnimatePresence mode="wait">
                      {calculatedQuote && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-slate-900 border-2 border-orange-500/30 p-6 rounded-2xl text-left space-y-4 shadow-xl"
                        >
                          <div className="flex items-center justify-between">
                            <span className="inline-flex px-2 py-1 bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-mono rounded font-bold">
                              ✓ {lang === 'en' ? 'ONLINE ESTIMATION FORGED' : 'ESTIMATION PRÉVISIONNELLE FORGÉE'}
                            </span>
                            <span className="text-slate-500 text-xs font-mono font-bold">
                              CODE: {calculatedQuote.code}
                            </span>
                          </div>

                          <h3 className="text-base font-black text-slate-100 font-sans border-b border-slate-800 pb-2.5">
                            {t.quoteEstimatorResult}
                          </h3>

                          <div className="space-y-3 font-sans text-xs">
                            <div className="flex justify-between items-center text-slate-400">
                              <span>{t.estMaterialCost}</span>
                              <span className="font-mono font-bold text-slate-200">${calculatedQuote.materials.toLocaleString()} USD</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-400">
                              <span>{t.estLaborCost}</span>
                              <span className="font-mono font-bold text-slate-200">${calculatedQuote.labor.toLocaleString()} USD</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-bold text-slate-200 pt-2 border-t border-slate-850">
                              <span className="text-orange-400">{t.estTotal}</span>
                              <span className="font-mono text-orange-400">${calculatedQuote.total.toLocaleString()} USD</span>
                            </div>
                          </div>

                          <div className="bg-slate-950 p-4 rounded-xl space-y-2 text-[11px] leading-relaxed text-slate-400">
                            <p className="font-bold text-orange-200">{lang === 'en' ? '★ Code Trackable Listed below' : '★ Votre Code est répertorié ci-dessous'}</p>
                            <p>
                              {lang === 'en'
                                ? `We have logged code ${calculatedQuote.code} in our database. Enter this code into the 'Active Client Inquiry Tracker' on the right to track updates in real-time or export a mock contract.`
                                : `Nous avons mémorisé le code ${calculatedQuote.code} dans notre base. Introduisez ce code dans le 'Suivre mon Dossier Technique' ci-contre pour vérifier les études et plans.`
                              }
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Part B: Active Client Inquiry Tracker */}
                    <div className="bg-slate-900 border border-slate-900 p-8 rounded-2xl space-y-6 text-left">
                      <div className="space-y-1">
                        <h3 className="text-base font-black text-white font-sans">{t.trackerTitle}</h3>
                        <p className="text-xs text-slate-400 font-sans">
                          {t.trackerSub}
                        </p>
                      </div>

                      <form onSubmit={handleTrackCode} className="flex gap-2">
                        <div className="relative grow">
                          <input 
                            type="text" 
                            required
                            placeholder="AUTH-7290 (or AUTH-EX88)"
                            value={searchCode}
                            onChange={(e) => setSearchCode(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-3 w-full focus:outline-none focus:border-orange-500 font-mono font-bold uppercase tracking-wider"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-slate-950 hover:bg-slate-850 text-orange-400 hover:text-orange-300 font-mono font-extrabold text-[10px] uppercase border border-slate-800/80 px-4 rounded-xl transition-all"
                        >
                          {t.trackBtn}
                        </button>
                      </form>

                      {/* Search Results Display */}
                      {searchCodeResult && (
                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase font-mono font-bold text-slate-500">{lang === 'en' ? 'Inquiry Details' : 'Renseignement Dossier'}</span>
                            <span className="text-[10px] text-slate-500 font-mono font-bold">{searchCodeResult.date}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                            <div>
                              <p className="text-[10px] uppercase font-mono text-slate-500 font-bold">{lang === 'en' ? 'Registered Name' : 'Nom du Demandeur'}</p>
                              <p className="font-bold text-slate-200 mt-0.5">{searchCodeResult.name}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase font-mono text-slate-500 font-bold">{lang === 'en' ? 'Target Sector' : 'Secteur d’Envergure'}</p>
                              <p className="font-bold text-slate-205 mt-0.5">{searchCodeResult.service}</p>
                            </div>
                          </div>

                          <div className="p-3 bg-orange-600/10 border border-orange-500/20 rounded-lg">
                            <p className="text-[10px] font-mono text-orange-400 font-semibold uppercase">{t.statusLabel}</p>
                            <p className="text-xs text-slate-200 font-sans font-bold mt-1 tracking-tight flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
                              <span>{searchCodeResult.status}</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {searchCodeError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-sans flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{t.codeError}</span>
                        </div>
                      )}

                      <div className="bg-slate-950/45 p-4 rounded-xl">
                        <p className="text-[10.5px] uppercase font-mono font-semibold text-slate-400">{lang === 'en' ? 'Testing References:' : 'Codes de Démo pour Test :'}</p>
                        <div className="flex gap-2.5 mt-2.5">
                          <button 
                            type="button" 
                            onClick={() => { setSearchCode('AUTH-7290'); setSearchCodeResult(trackedInquiries['AUTH-7290']); setSearchCodeError(false); }}
                            className="bg-slate-900 hover:bg-slate-850 px-2.5 py-1 text-[10px] font-mono text-slate-300 rounded border border-slate-800"
                          >
                            AUTH-7290
                          </button>
                          <button 
                            type="button" 
                            onClick={() => { setSearchCode('AUTH-EX88'); setSearchCodeResult(trackedInquiries['AUTH-EX88']); setSearchCodeError(false); }}
                            className="bg-slate-900 hover:bg-slate-850 px-2.5 py-1 text-[10px] font-mono text-slate-300 rounded border border-slate-800"
                          >
                            AUTH-EX88
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* TAB 8: CONTACT US */}
            {activeTab === 'contact' && (
              <div className="space-y-12 text-left">
                
                {/* Intro banner */}
                <div className="max-w-3xl space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-bold uppercase">{lang === 'en' ? 'Onsite Ground Presence' : 'Présence d’Atelier Régionale'}</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">{t.contactTitle}</h2>
                  <p className="text-sm text-slate-400 font-sans">
                    {t.contactSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
                  {/* Detailed contact channels & office hours */}
                  <div className="space-y-6">
                    <div className="bg-slate-900 border border-slate-900 p-6 rounded-2xl space-y-5">
                      <h3 className="font-extrabold text-white text-base font-sans">{lang === 'en' ? 'Office Location & Direct Calls' : 'Usinage Principal & Appels Directs'}</h3>
                      
                      <div className="space-y-4 text-xs font-sans">
                        <div className="flex gap-3">
                          <MapPin className="text-orange-500 w-5 h-5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-350">{lang === 'en' ? 'Headquarters Address' : 'Adresse Géographique du Siège'}</p>
                            <p className="text-slate-405 leading-relaxed mt-1 font-mono font-bold text-[11px]">{companyDetails.address}</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Phone className="text-orange-500 w-5 h-5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-350">{lang === 'en' ? 'Direct Mobile Lines' : 'Lignes Téléphoniques directes'}</p>
                            <a href={`tel:${companyDetails.phone}`} className="text-slate-200 mt-1 font-mono block hover:text-orange-400 font-bold">{companyDetails.phone}</a>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Mail className="text-orange-500 w-5 h-5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-350">{lang === 'en' ? 'General Technical Email' : 'Courriels d’Ingénieries'}</p>
                            <a href={`mailto:${companyDetails.email}`} className="text-slate-200 mt-1 font-mono block hover:text-orange-400 font-bold">{companyDetails.email}</a>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Clock className="text-orange-500 w-5 h-5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-350">{t.officeHoursTitle}</p>
                            <p className="text-slate-300 mt-1">{companyDetails.workingHours[lang]}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geo map details mock */}
                    <CompanyMap lang={lang} />

                  </div>

                  {/* High Quality interactive Quick email-dispatch form */}
                  <div className="bg-slate-900 border border-slate-900 p-8 rounded-2xl space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-black text-white font-sans">{t.contactFormTitle}</h3>
                      <p className="text-xs text-slate-400 font-sans">{lang === 'en' ? 'Direct secure socket dispatch for structural requests.' : 'Transmission directe au secrétariat technique.'}</p>
                    </div>

                    {contactSuccess ? (
                      <div className="bg-green-600/10 border border-green-500 text-green-300 p-5 rounded-xl flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-sm font-sans">{lang === 'en' ? 'Signal Dispatched' : 'Signal d’ingénierie transmis'}</h5>
                          <p className="text-xs text-slate-400 mt-1 font-sans">{t.messageSuccess}</p>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={submitContactForm} className="space-y-4 text-xs font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.msgName} *</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="Jean Muke"
                              value={contactForm.name}
                              onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.msgEmail} *</label>
                            <input 
                              type="email" 
                              required 
                              placeholder="muke@domain.cd"
                              value={contactForm.email}
                              onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.msgPhone}</label>
                            <input 
                              type="text" 
                              placeholder="+243 858 006 411"
                              value={contactForm.phone}
                              onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-mono"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.msgSubject}</label>
                            <input 
                              type="text" 
                              placeholder={lang === 'en' ? 'Bespoke Villa / Road Civil work' : 'Villa BYDH / Devis Maçonnerie'}
                              value={contactForm.subject}
                              onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-400 uppercase font-mono">{t.msgBody} *</label>
                          <textarea 
                            rows={4}
                            required
                            placeholder={lang === 'en' ? 'Detail your blueprint needs...' : 'Précisez l’étendue de l’étude technique demandée...'}
                            value={contactForm.message}
                            onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 font-sans"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-4 h-4" />
                          <span>{t.sendFormBtn}</span>
                        </button>
                      </form>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* General Blog & News Article Highlights under Home / About / Portal pages */}
            {(activeTab === 'home' || activeTab === 'about' || activeTab === 'portal') && (
              <div className="pt-16 border-t border-slate-900 text-left space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 font-extrabold uppercase">{lang === 'en' ? 'Journal & Knowledge' : 'Journal & Science Chantier'}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">{lang === 'en' ? 'Latest from Earthnet News' : 'Dernières Publications Techniques'}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {blogArticles.map(art => (
                    <div 
                      key={art.id} 
                      className="group bg-slate-900/40 border border-slate-900 rounded-2xl p-6 hover:border-orange-500/20 transition-all flex flex-col md:flex-row gap-6"
                    >
                      <img src={art.image} alt={art.title[lang]} className="w-full md:w-36 aspect-square object-cover rounded-xl shrink-0 border border-slate-800" />
                      
                      <div className="space-y-2 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono font-bold text-orange-500 uppercase tracking-widest bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">
                            {art.category[lang]}
                          </span>
                          <h4 className="font-bold text-sm text-slate-100 group-hover:text-orange-400 transition-colors font-sans leading-snug">
                            {art.title[lang]}
                          </h4>
                          <p className="text-xs text-slate-400 font-sans line-clamp-3">
                            {art.excerpt[lang]}
                          </p>
                        </div>
                        
                        <div className="text-[10px] font-mono text-slate-500 pt-2 flex justify-between items-center">
                          <span>{art.date}</span>
                          <span className="text-orange-500 group-hover:underline cursor-pointer font-bold">{lang === 'en' ? 'Read article' : 'Lire l’article'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-10 mt-16 text-left text-xs text-slate-400 font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
            <div className="space-y-2">
              <BrandLogo className="w-9 h-9" showText={true} textColorClass="text-slate-100" />
              <p className="text-[11px] font-sans text-slate-400 max-w-sm mt-2 leading-relaxed">
                {lang === 'en' 
                  ? 'Excellence in civil construction, premium masonry works, precast building elements, and turnkey project infrastructure designs.'
                  : 'Génie civil d’excellence, coulage de dalles armées, maçonnerie lourde, fabrique de blocs et encadrement de chantiers.'
                }
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 font-bold text-slate-200">
              <button onClick={() => setActiveTab('home')} className="hover:text-orange-400 transition-colors">{t.homeTitle}</button>
              <button onClick={() => setActiveTab('about')} className="hover:text-orange-400 transition-colors">{t.aboutTab}</button>
              <button onClick={() => setActiveTab('services')} className="hover:text-orange-400 transition-colors">{t.servicesTab}</button>
              <button onClick={() => setActiveTab('projects')} className="hover:text-orange-400 transition-colors">{t.projectsTab}</button>
              <button onClick={() => setActiveTab('careers')} className="hover:text-orange-400 transition-colors">{t.careersTab}</button>
              <button onClick={() => setActiveTab('portal')} className="hover:text-orange-400 transition-colors">{t.portalTab}</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 font-mono text-[10px]">
            <p className="text-slate-500">{t.footerCopy}</p>
            <p className="text-slate-500 font-bold max-w-md md:text-right">{t.footerAddress}</p>
          </div>
          
          <div className="text-[9px] text-slate-600 font-mono flex flex-col md:flex-row justify-between pt-2 border-t border-slate-900/60">
            <p>{t.footerLicense}</p>
            <p>{lang === 'en' ? 'Designed for Earthnet solutions. Fully compatible with production build.' : 'Conçu pour Earthnet Solutions. Entièrement compatible avec le build de production.'}</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
