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
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [searchSeed, setSearchSeed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ===== SECTION 1: HERO SECTION ===== */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-dot-pattern">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-red-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-8 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E60023]" />
            <span className="tracking-wide">FREE PINTEREST SEO & CONTENT TOOLKIT</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12] max-w-[850px] mx-auto">
            Everything You Need to{' '}
            <span className="text-[#E60023] inline-block">
              Grow on Pinterest
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Discover trends, generate SEO keywords, create high-CTR content, and manage your Pinterest workflow from one powerful toolkit.
          </p>

          {/* AI Search / Discovery Component */}
          <div className="w-full max-w-2xl mx-auto mb-8">
            <form onSubmit={handleHeroSearch} className="relative">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-md focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/10 transition-all duration-200">
                <div className="relative flex-1 w-full flex items-center">
                  <Search className="w-4 h-4 text-slate-400 ml-3.5 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    value={searchSeed}
                    onChange={(e) => setSearchSeed(e.target.value)}
                    placeholder="Enter a topic, keyword, or niche..."
                    className="w-full bg-transparent py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto text-xs py-2.5 px-6 rounded-xl font-semibold shrink-0 shadow-sm"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
              <span className="text-slate-400">Try:</span>
              {['summer outfits', 'home decor', 'wedding ideas', 'bullet journal'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    setSearchSeed(sample);
                    router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(sample)}`);
                  }}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-[#E60023] hover:border-red-200 transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <a href="#tools" className="btn btn-primary text-sm px-6 py-3 rounded-xl shadow-sm">
              <span>Explore Free Tools</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pinterest-seo-keywords"
              className="btn btn-secondary text-sm px-6 py-3 rounded-xl"
            >
              Explore Pinterest SEO
            </Link>
          </div>

          {/* Trust Line */}
          <p className="text-xs text-slate-400 font-medium">
            13+ Free Tools · No Credit Card Required · Built by SPManchester
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: COMPACT STATS ===== */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="saas-card p-5 text-center bg-white border border-slate-200/90 rounded-2xl">
            <div className="text-2xl font-bold text-slate-900 font-display">13+</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Free Dedicated Tools</div>
          </div>
          <div className="saas-card p-5 text-center bg-white border border-slate-200/90 rounded-2xl">
            <div className="text-2xl font-bold text-[#E60023] font-display">100%</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Free For Creators</div>
          </div>
          <div className="saas-card p-5 text-center bg-white border border-slate-200/90 rounded-2xl">
            <div className="text-2xl font-bold text-slate-900 font-display">HD</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Media Quality</div>
          </div>
          <div className="saas-card p-5 text-center bg-white border border-slate-200/90 rounded-2xl">
            <div className="text-2xl font-bold text-slate-900 font-display">2026</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Algorithm Ready</div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FEATURED / CORE TOOL SHOWCASE ===== */}
      <section className="container mx-auto px-4">
        <div className="saas-card-static p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-5xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Action */}
            <div className="lg:col-span-6 space-y-4">
              <span className="badge">Featured Core Tool</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Pinterest SEO Keywords Tool
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate high-intent primary, secondary, long-tail keywords, and semantic clusters to help your pins rank in Pinterest smart feed and visual search results.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60023] shrink-0" />
                  <span>Search intent classification (Inspirational, Informational, Commercial)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60023] shrink-0" />
                  <span>Low-competition long-tail query expansion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60023] shrink-0" />
                  <span>One-click copy formatted for Pin titles & descriptions</span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  href="/pinterest-seo-keywords"
                  className="btn btn-primary text-xs py-3 px-5 rounded-xl font-semibold inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Launch SEO Keywords Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual SaaS Dashboard Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-xs space-y-3.5">
                {/* Dashboard Mockup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-slate-500 ml-1 text-[11px]">Cluster: &quot;modern interior&quot;</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    High Search Vol
                  </span>
                </div>

                {/* Keyword Result Rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-slate-900">modern interior design ideas</div>
                      <div className="text-[10px] text-slate-400">Inspirational · 94 Opportunity Index</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      Very High
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-slate-900">budget modern interior styling hacks</div>
                      <div className="text-[10px] text-slate-400">Long-tail · Low Competition</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                      Low Comp
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-slate-900">minimalist apartment living room decor</div>
                      <div className="text-[10px] text-slate-400">Commercial · High Conversion</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      High Vol
                    </span>
                  </div>
                </div>

                {/* Dashboard Footer */}
                <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-medium">
                  <span>3 Clusters · 16 Semantic Variations</span>
                  <span className="text-[#E60023] font-semibold">Ready to Copy</span>
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
