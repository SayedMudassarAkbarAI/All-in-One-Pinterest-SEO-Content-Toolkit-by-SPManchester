'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TOOLS, ToolItem } from '@/data/tools';
import { GENERAL_FAQS } from '@/data/faqs';
import ToolCard from '@/components/ToolCard';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Layers,
  BookOpen,
  ArrowUpRight,
  SlidersHorizontal,
  Download,
  Copy,
  Check,
  Zap,
  BarChart3,
  Flame,
} from 'lucide-react';

const DEMO_CLUSTERS = {
  interior: {
    tab: 'Modern Interior',
    niche: 'Home Decor & Design',
    volume: '180,000/mo',
    growth: '+42%',
    keywords: [
      { term: 'modern interior design ideas', intent: 'Inspirational', volumeBar: 95, volumeText: 'Very High', comp: 'High Vol', compColor: 'bg-slate-100 text-slate-700' },
      { term: 'budget modern interior styling hacks', intent: 'Informational', volumeBar: 74, volumeText: '42K/mo', comp: 'Low Comp', compColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
      { term: 'minimalist apartment living room decor', intent: 'Commercial', volumeBar: 86, volumeText: '68K/mo', comp: 'High Conversion', compColor: 'bg-blue-50 text-blue-700 border border-blue-200' },
      { term: 'neutral aesthetic living room moodboard', intent: 'Inspirational', volumeBar: 64, volumeText: '29K/mo', comp: 'Breakout', compColor: 'bg-purple-50 text-purple-700 border border-purple-200' },
    ],
  },
  fashion: {
    tab: 'Capsule Wardrobe',
    niche: 'Style & Aesthetics',
    volume: '240,000/mo',
    growth: '+68%',
    keywords: [
      { term: 'capsule wardrobe essentials 2026', intent: 'Inspirational', volumeBar: 92, volumeText: 'Very High', comp: 'High Vol', compColor: 'bg-slate-100 text-slate-700' },
      { term: 'how to build minimalist wardrobe on a budget', intent: 'Informational', volumeBar: 78, volumeText: '54K/mo', comp: 'Low Comp', compColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
      { term: 'neutral chic everyday outfit formulas', intent: 'Commercial', volumeBar: 88, volumeText: '82K/mo', comp: 'High Conversion', compColor: 'bg-blue-50 text-blue-700 border border-blue-200' },
      { term: 'old money aesthetic capsule collection', intent: 'Inspirational', volumeBar: 71, volumeText: '38K/mo', comp: 'Breakout', compColor: 'bg-purple-50 text-purple-700 border border-purple-200' },
    ],
  },
  recipes: {
    tab: 'Matcha & Coffee',
    niche: 'Food & Beverage',
    volume: '160,000/mo',
    growth: '+55%',
    keywords: [
      { term: 'iced strawberry matcha latte recipe', intent: 'Inspirational', volumeBar: 89, volumeText: 'Very High', comp: 'High Vol', compColor: 'bg-slate-100 text-slate-700' },
      { term: 'ceremonial matcha vs culinary difference', intent: 'Informational', volumeBar: 67, volumeText: '35K/mo', comp: 'Low Comp', compColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
      { term: 'organic japanese matcha powder reviews', intent: 'Commercial', volumeBar: 82, volumeText: '62K/mo', comp: 'High Conversion', compColor: 'bg-blue-50 text-blue-700 border border-blue-200' },
      { term: 'creamy coconut cold foam matcha at home', intent: 'Inspirational', volumeBar: 76, volumeText: '44K/mo', comp: 'Breakout', compColor: 'bg-purple-50 text-purple-700 border border-purple-200' },
    ],
  },
};

export default function HomePage() {
  const router = useRouter();
  const [searchSeed, setSearchSeed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNicheKey, setActiveNicheKey] = useState<'interior' | 'fashion' | 'recipes'>('interior');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const handleCopy = (term: string) => {
    navigator.clipboard.writeText(term);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchSeed.trim()) {
      router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(searchSeed.trim())}`);
    }
  };

  const categories = [
    { id: 'all', label: 'All Tools', count: TOOLS.length },
    { id: 'seo', label: 'SEO & Keywords', count: TOOLS.filter((t) => t.category === 'seo').length },
    { id: 'generator', label: 'Content Creation', count: TOOLS.filter((t) => t.category === 'generator').length },
    { id: 'trends', label: 'Trends & Planning', count: TOOLS.filter((t) => t.category === 'trends').length },
    { id: 'downloader', label: 'Media Downloaders', count: TOOLS.filter((t) => t.category === 'downloader').length },
  ];

  const filteredTools =
    selectedCategory === 'all'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === selectedCategory);

  const currentCluster = DEMO_CLUSTERS[activeNicheKey];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ===== SECTION 1: HERO SECTION ===== */}
      <section className="relative pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden">
        {/* Luminous Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-b from-red-500/[0.07] via-rose-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 mb-8 shadow-xs hover:border-red-200/80 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60023]" />
            </span>
            <span className="tracking-wide">FREE PINTEREST SEO & CONTENT TOOLKIT 2026</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E60023]" />
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#E60023] via-rose-600 to-red-600 bg-clip-text text-transparent block sm:inline">
              Grow on Pinterest
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Discover breakout trends, generate keyword-optimized Pin copy, and unlock viral traffic with 13 free tools engineered by SPManchester.
          </p>

          {/* AI Search Omnibar */}
          <div className="w-full max-w-2xl mx-auto mb-6">
            <form onSubmit={handleHeroSearch} className="relative">
              <div className="flex items-center p-2 rounded-2xl bg-white border border-slate-200 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08)] hover:border-slate-300 focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/10 transition-all duration-200">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchSeed}
                  onChange={(e) => setSearchSeed(e.target.value)}
                  placeholder="Search any keyword, niche, or topic (e.g., capsule wardrobe, summer nails)..."
                  className="w-full bg-transparent py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn btn-primary py-2.5 px-6 rounded-xl font-semibold text-xs shrink-0 shadow-sm flex items-center gap-1.5"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Suggestion Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-slate-400 font-medium">Popular searches:</span>
              {['summer outfits', 'home decor', 'matcha latte', 'wedding ideas', 'bullet journal'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    setSearchSeed(sample);
                    router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(sample)}`);
                  }}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-600 hover:text-[#E60023] hover:border-red-200 shadow-xs transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Social Proof Trust Line */}
          <p className="text-xs text-slate-400 font-medium pt-2">
            13 Free Dedicated Tools · Zero Sign-up Required · Verified for 2026 Pinterest Smart Feed
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: UNIFIED METRICS STRIP ===== */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          <div className="p-6 text-center space-y-1 hover:bg-slate-50/50 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-display">13+</div>
            <div className="text-xs font-semibold text-slate-700">Dedicated Tools</div>
            <div className="text-[11px] text-slate-400">SEO, Copy, Trends & Media</div>
          </div>

          <div className="p-6 text-center space-y-1 hover:bg-slate-50/50 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-emerald-600 font-display">100%</div>
            <div className="text-xs font-semibold text-slate-700">Free Forever</div>
            <div className="text-[11px] text-slate-400">No Cards or Paywalls</div>
          </div>

          <div className="p-6 text-center space-y-1 hover:bg-slate-50/50 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
              <Download className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-display">HD</div>
            <div className="text-xs font-semibold text-slate-700">Original Media</div>
            <div className="text-[11px] text-slate-400">Direct CDN Downloads</div>
          </div>

          <div className="p-6 text-center space-y-1 hover:bg-slate-50/50 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-display">2026</div>
            <div className="text-xs font-semibold text-slate-700">Algorithm Ready</div>
            <div className="text-[11px] text-slate-400">Smart Feed Semantic Search</div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INTERACTIVE LIVE SAAS DEMO ===== */}
      <section className="container mx-auto px-4">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-5xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Action */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E60023] border border-red-200/70 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Live Interactive Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pinterest SEO Keywords & Cluster Engine
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate high-intent primary terms, long-tail variations, and keyword clusters structured to dominate Pinterest search results and category recommendations.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-[#E60023] flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Multi-Intent Classification</div>
                    <div className="text-[11px] text-slate-500">Separates Inspirational, Informational, and Commercial buyer queries.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Semantic Clustering</div>
                    <div className="text-[11px] text-slate-500">Group queries into targeted Pin boards for maximum algorithmic authority.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Copy className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">One-Click Copy to Clipboard</div>
                    <div className="text-[11px] text-slate-500">Directly formatted for title tags, descriptions, and alt text.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/pinterest-seo-keywords"
                  className="btn btn-primary text-xs py-3 px-6 rounded-xl font-semibold inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Launch SEO Keywords Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: High-End Live Interactive Sandbox */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/90 p-5 md:p-6 shadow-sm space-y-4">
                {/* Simulated Browser Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-mono text-slate-400 text-[11px] ml-2">pinterest.spmanchester.com/seo</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-emerald-600" />
                    {currentCluster.growth} YoY
                  </span>
                </div>

                {/* Interactive Sample Niche Switcher */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-[11px] text-slate-400 font-medium shrink-0">Sample Niche:</span>
                  {(Object.keys(DEMO_CLUSTERS) as Array<'interior' | 'fashion' | 'recipes'>).map((key) => {
                    const item = DEMO_CLUSTERS[key];
                    const isActive = activeNicheKey === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveNicheKey(key)}
                        className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                        }`}
                      >
                        {item.tab}
                      </button>
                    );
                  })}
                </div>

                {/* Keyword Result Rows */}
                <div className="space-y-2.5">
                  {currentCluster.keywords.map((kw, idx) => {
                    const isCopied = copiedTerm === kw.term;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs hover:border-slate-300 transition-colors"
                      >
                        <div className="space-y-1 flex-1 pr-3">
                          <div className="font-semibold text-slate-900 leading-snug">{kw.term}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase font-bold text-slate-400">{kw.intent}</span>
                            <span className="text-slate-300">·</span>
                            <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden inline-block">
                              <div
                                className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full"
                                style={{ width: `${kw.volumeBar}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono">{kw.volumeText}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${kw.compColor}`}>
                            {kw.comp}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(kw.term)}
                            className={`p-1.5 rounded-lg border transition-all ${
                              isCopied
                                ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                                : 'bg-slate-50 text-slate-500 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                            }`}
                            title="Copy Keyword"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Dashboard Footer Note */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-medium">
                  <span>Cluster Audience Demand: <strong className="text-slate-900">{currentCluster.volume}</strong></span>
                  <Link
                    href={`/pinterest-seo-keywords?q=${encodeURIComponent(currentCluster.tab)}`}
                    className="text-[#E60023] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Analyze Full Cluster</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: TOOL DIRECTORY WITH CATEGORY FILTERS ===== */}
      <section id="tools" className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge mb-3">Tool Directory</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Everything You Need for Pinterest
          </h2>
          <p className="text-slate-500 text-sm">
            Powerful free tools for research, SEO, content creation, and media workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#E60023] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ===== SECTION 5: HOW IT WORKS ===== */}
      <div className="container mx-auto px-4">
        <HowItWorks />
      </div>

      {/* ===== SECTION 6: SP MANCHESTER BRAND TRUST ===== */}
      <section className="container mx-auto px-4">
        <div className="saas-card-static p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge-neutral">Engineering & Trust</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Built by SPManchester
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                SPManchester Private Limited Company develops modern technology platforms across AI, SEO, software engineering, web platforms and digital commerce.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                This Pinterest Toolkit is designed and operated as a free-first utility to give creators, independent bloggers, and agencies enterprise-grade discovery engines without subscription fees or ad bloat.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about-sp-manchester"
                  className="btn btn-secondary text-xs py-2.5 px-4 rounded-lg"
                >
                  About SPManchester
                </Link>
                <a
                  href="https://spmanchester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs py-2.5 px-4 rounded-lg inline-flex items-center gap-1.5"
                >
                  <span>Corporate Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-left">
                <div className="text-slate-900 text-sm font-bold mb-1">Zero Paywalls</div>
                <p className="text-xs text-slate-500 leading-relaxed">All 13 tools are permanently free with no card required.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-left">
                <div className="text-slate-900 text-sm font-bold mb-1">Privacy First</div>
                <p className="text-xs text-slate-500 leading-relaxed">We never collect personal credentials or private board data.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-left">
                <div className="text-slate-900 text-sm font-bold mb-1">Sub-Second Speed</div>
                <p className="text-xs text-slate-500 leading-relaxed">Built with Next.js App Router for instant response times.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-left">
                <div className="text-slate-900 text-sm font-bold mb-1">Enterprise Backed</div>
                <p className="text-xs text-slate-500 leading-relaxed">Operated by SPManchester Private Limited Company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: EDITORIAL RESOURCES & STRATEGY ===== */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge mb-3">Guides & Strategy</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Pinterest SEO & Growth Guides
          </h2>
          <p className="text-slate-500 text-sm">
            Master the 2026 Pinterest smart feed algorithm with actionable frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="saas-card p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#E60023] uppercase tracking-wider">SEO Strategy</span>
              <h3 className="text-base font-bold text-slate-900">
                The 2026 Pinterest Algorithm Guide
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Discover how Pinterest indexes visual images, extracts text overlays, and ranks Pins based on domain authority and pinner trust score.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link href="/pinterest-seo-keywords" className="text-xs font-semibold text-slate-900 hover:text-[#E60023] inline-flex items-center gap-1.5 transition-colors">
                <span>Explore SEO Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="saas-card p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Trend Mastery</span>
              <h3 className="text-base font-bold text-slate-900">
                Pinning 60 Days Ahead: Seasonal Demand
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Why timing is everything on Pinterest. Learn how to capitalize on holiday demand peaks (Christmas, Halloween, Summer) before competitors flood the feed.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link href="/seasonal-pinterest-trends" className="text-xs font-semibold text-slate-900 hover:text-[#E60023] inline-flex items-center gap-1.5 transition-colors">
                <span>Explore Seasonal Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="saas-card p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Copywriting</span>
              <h3 className="text-base font-bold text-slate-900">
                High-CTR Pin Titles & Descriptions
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The exact formula for writing Pin titles that trigger curiosity and Pin descriptions that satisfy algorithmic keyword density without robotic stuffing.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link href="/pinterest-title-generator" className="text-xs font-semibold text-slate-900 hover:text-[#E60023] inline-flex items-center gap-1.5 transition-colors">
                <span>Generate Pin Titles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQ ACCORDION ===== */}
      <div className="container mx-auto px-4">
        <FAQ faqs={GENERAL_FAQS} />
      </div>
    </div>
  );
}
