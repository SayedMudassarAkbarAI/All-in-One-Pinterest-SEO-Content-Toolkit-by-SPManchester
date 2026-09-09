'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TOOLS } from '@/data/tools';
import { GENERAL_FAQS } from '@/data/faqs';
import ToolCard from '@/components/ToolCard';
import HowItWorks from '@/components/HowItWorks';
import {
  Search, ArrowRight, Sparkles, ShieldCheck, TrendingUp,
  Download, ChevronDown, Zap, ExternalLink,
  Users, Star, CheckCircle2,
} from 'lucide-react';

/* ── Static demo keyword rows matching reference screenshot ── */
const DEMO_ROWS = [
  { keyword: 'home decor ideas', volume: '135K', difficulty: 'Medium', diffColor: 'text-amber-700 bg-amber-50 border-amber-200', type: 'Primary' },
  { keyword: 'modern home decor', volume: '74K', difficulty: 'Low', diffColor: 'text-emerald-700 bg-emerald-50 border-emerald-200', type: 'Long-tail' },
  { keyword: 'boho home decor', volume: '48K', difficulty: 'Low', diffColor: 'text-emerald-700 bg-emerald-50 border-emerald-200', type: 'Long-tail' },
  { keyword: 'home decor aesthetic', volume: '33K', difficulty: 'Medium', diffColor: 'text-amber-700 bg-amber-50 border-amber-200', type: 'Long-tail' },
  { keyword: 'small space home decor', volume: '22K', difficulty: 'Low', diffColor: 'text-emerald-700 bg-emerald-50 border-emerald-200', type: 'Long-tail' },
];

const CLUSTERS = ['home decor ideas', 'modern home decor', 'boho home decor', 'rustic home decor', 'minimalist home decor'];

type NicheKey = 'all' | 'seo' | 'generator' | 'trends' | 'downloader';

export default function HomePage() {
  const router = useRouter();
  const [searchSeed, setSearchSeed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NicheKey>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchSeed.trim()) {
      router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(searchSeed.trim())}`);
    }
  };

  const categories = [
    { id: 'all' as NicheKey, label: 'All Tools', count: TOOLS.length },
    { id: 'seo' as NicheKey, label: 'SEO & Keywords', count: TOOLS.filter((t) => t.category === 'seo').length },
    { id: 'generator' as NicheKey, label: 'Content Creation', count: TOOLS.filter((t) => t.category === 'generator').length },
    { id: 'trends' as NicheKey, label: 'Trends & Planning', count: TOOLS.filter((t) => t.category === 'trends').length },
    { id: 'downloader' as NicheKey, label: 'Media Downloaders', count: TOOLS.filter((t) => t.category === 'downloader').length },
  ];

  const filteredTools = selectedCategory === 'all' ? TOOLS : TOOLS.filter((t) => t.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-red-100 selection:text-red-900">

      {/* ══════════════════════════════════════════════════════════
          HERO  –  Spacious, User-Friendly, Larger & Impactful
      ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
        {/* Soft radial atmospheric glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 right-0 w-[800px] h-[650px] bg-gradient-to-bl from-red-100/70 via-rose-50/40 to-transparent rounded-full blur-3xl opacity-80" />
          <div className="absolute top-1/2 left-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT – copy & actions */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#E60023] animate-ping" />
                FREE PINTEREST SEO &amp; CONTENT TOOLKIT 2026 🚀
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Everything You Need to{' '}
                <span className="text-[#E60023]">Grow on Pinterest</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                Discover breakout trends, generate keyword-optimised Pin copy, and unlock viral organic traffic with 13 free tools engineered by SPManchester.
              </p>

              {/* Large, user-friendly search bar */}
              <form onSubmit={handleHeroSearch} className="max-w-2xl">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-xl hover:border-red-300 focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/15 transition-all">
                  <div className="flex items-center gap-3 flex-1 px-3 py-2 sm:py-0">
                    <Search className="w-5 h-5 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={searchSeed}
                      onChange={(e) => setSearchSeed(e.target.value)}
                      placeholder="Search any keyword, niche, or topic (e.g. home decor, summer nails...)"
                      className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-base sm:text-lg focus:outline-none font-medium py-1.5"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#E60023] hover:bg-[#c9001f] active:scale-[0.98] text-white py-3.5 px-8 rounded-xl font-bold text-base shrink-0 flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all cursor-pointer"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Popular search tags */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-sm">
                <span className="text-slate-500 font-semibold flex items-center gap-1.5 mr-1">🔥 Popular:</span>
                {['pinterest seo tools', 'home decor', 'fashion trends', 'travel tips', 'health & wellness'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(s)}`)}
                    className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#E60023] hover:border-red-300 hover:bg-red-50/50 text-xs sm:text-sm font-medium transition-all shadow-2xs cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Quick trust metrics */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Free Forever
                </span>
                <span className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  No Account or Card Required
                </span>
                <span className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Instant Algorithm Insights
                </span>
              </div>
            </div>

            {/* RIGHT – Visual Dashboard Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px]">
                {/* Main mockup container */}
                <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/70 p-6 sm:p-7 space-y-5">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">pinterest-seo.spmanchester.com</span>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-5 text-sm font-bold border-b border-slate-100 pb-2.5">
                    {['Keyword Ideas', 'Clusters', 'Trends', 'Content Ideas'].map((tab, i) => (
                      <span
                        key={tab}
                        className={`pb-1 cursor-default ${i === 0 ? 'text-[#E60023] border-b-2 border-[#E60023]' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  {/* Mock search bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-2.5 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 bg-slate-50/70">
                      <Search className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">home decor</span>
                    </div>
                    <button className="bg-[#E60023] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs">
                      Generate
                    </button>
                  </div>

                  {/* Keywords Table */}
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-white">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                        <tr>
                          <th className="py-2.5 px-3">Keyword</th>
                          <th className="py-2.5 px-3 text-center">Volume</th>
                          <th className="py-2.5 px-3 text-center">Diff</th>
                          <th className="py-2.5 px-3 text-right">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {DEMO_ROWS.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-2.5 px-3 text-slate-900 font-semibold">{row.keyword}</td>
                            <td className="py-2.5 px-3 text-slate-600 font-mono text-center font-medium">{row.volume}</td>
                            <td className="py-2.5 px-3 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${row.diffColor}`}>{row.difficulty}</span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-500 text-right text-[11px]">{row.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Keyword Clusters */}
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">High-Relevance Clusters</div>
                    <div className="flex flex-wrap gap-2">
                      {CLUSTERS.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded-lg bg-red-50 text-[#E60023] border border-red-100 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Growth Badge */}
                <div className="absolute -bottom-6 -right-4 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-4 text-xs font-semibold text-slate-700 flex items-center gap-3.5 z-10 animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E60023] shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">More Reach</div>
                    <div className="text-xs text-slate-400">More Traffic · More Growth</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          METRICS STRIP  –  Roomy, High Impact, Clear Cards
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50/80 border-y border-slate-200/80 py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-[#E60023]" />,
                bgIcon: 'bg-red-50 border-red-100',
                value: '13+',
                label: 'Dedicated Tools',
                sub: 'Powerful, free Pinterest SEO tools',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                bgIcon: 'bg-emerald-50 border-emerald-100',
                value: '100%',
                label: 'Free Forever',
                sub: 'No Credit Card Required',
                valueClass: 'text-emerald-600',
              },
              {
                icon: <Download className="w-6 h-6 text-blue-600" />,
                bgIcon: 'bg-blue-50 border-blue-100',
                value: 'HD',
                label: 'Original Media',
                sub: 'Clear, Crisp, High Quality Media',
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-600" />,
                bgIcon: 'bg-purple-50 border-purple-100',
                value: '2026',
                label: 'Recently Ready',
                sub: 'Fresh Tools. Smarter Results.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${c.bgIcon}`}>
                  {c.icon}
                </div>
                <div>
                  <div className={`text-3xl sm:text-4xl font-black leading-none ${c.valueClass ?? 'text-slate-900'}`}>
                    {c.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-1.5">{c.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEO KEYWORDS CLUSTER ENGINE SECTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Info */}
            <div className="lg:col-span-5 space-y-7">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/70 px-4 py-1.5 rounded-full shadow-xs">
                SEO Tools &amp; Resources
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
                Pinterest SEO Keywords &amp; Cluster Engine
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Generate high-intent primary terms, long-tail variations, and keyword clusters structured to dominate Pinterest search results and category recommendations.
              </p>

              <div className="space-y-5 pt-2">
                {[
                  {
                    icon: '🎯',
                    title: 'Multi-Intent Classification',
                    desc: 'Identify transactional, informational and commercial keywords that convert pinners into buyers.',
                  },
                  {
                    icon: '🧩',
                    title: 'Semantic Clustering',
                    desc: 'Group related keywords together to form powerful board hierarchies and topic clusters.',
                  },
                  {
                    icon: '📋',
                    title: 'One-Click Copy to Clipboard',
                    desc: 'Export structured keyword sets and ready-to-paste descriptions in one simple click.',
                  },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl shrink-0 shadow-2xs">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900">{f.title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed mt-1">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/pinterest-seo-keywords"
                  className="inline-flex items-center gap-2.5 bg-[#E60023] hover:bg-[#c9001f] active:scale-[0.98] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all"
                >
                  Launch SEO Keywords Tool <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Demo Panel */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Panel Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Pinterest SEO Keywords Tool Live Demo</span>
                  <div className="w-12" />
                </div>

                {/* Sub-tabs */}
                <div className="flex gap-6 sm:gap-8 px-6 pt-4 pb-0 border-b border-slate-100 text-sm font-bold">
                  {['Keyword Ideas', 'Clusters', 'Trends', 'Content Ideas'].map((tab, i) => (
                    <span
                      key={tab}
                      className={`pb-3 cursor-pointer transition-colors ${i === 0 ? 'text-[#E60023] border-b-2 border-[#E60023]' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Search Input Simulation */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-700 bg-slate-50/60">
                      <Search className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-900">home decor</span>
                    </div>
                    <button className="bg-[#E60023] text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-xs cursor-pointer">
                      Generate <Zap className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clean Spacious Results Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Table */}
                    <div className="md:col-span-8 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                      <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
                        <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                          <tr>
                            <th className="py-3 px-3.5">Keyword</th>
                            <th className="py-3 px-3 text-center">Volume</th>
                            <th className="py-3 px-3 text-center">Diff</th>
                            <th className="py-3 px-3.5 text-right">Type</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {DEMO_ROWS.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                              <td className="py-3 px-3.5 text-slate-900 font-bold">{row.keyword}</td>
                              <td className="py-3 px-3 text-slate-600 font-mono text-center font-medium">{row.volume}</td>
                              <td className="py-3 px-3 text-center">
                                <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded border ${row.diffColor}`}>{row.difficulty}</span>
                              </td>
                              <td className="py-3 px-3.5 text-slate-500 text-right text-xs font-medium">{row.type}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Clusters sidebar */}
                    <div className="md:col-span-4 flex flex-col justify-between p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-3">
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                          Semantic Clusters
                        </div>
                        <div className="space-y-2">
                          {CLUSTERS.map((c) => (
                            <div key={c} className="text-xs font-semibold px-3 py-2 rounded-xl bg-white text-[#E60023] border border-red-200/80 shadow-2xs hover:bg-red-50 transition-colors">
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="text-[11px] text-slate-400 font-medium text-center">
                          Auto-generated cluster taxonomy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TOOL DIRECTORY  –  Spacious 4-column Grid with Roomy Cards
      ══════════════════════════════════════════════════════════ */}
      <section id="tools" className="py-24 md:py-32 bg-[#F8F9FC] scroll-mt-20 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/70 px-4 py-1.5 rounded-full shadow-xs mb-4">
              Tool Directory
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Everything You Need for Pinterest
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore 13 free, powerful tools engineered for research, SEO optimisation, high-converting content creation, and media downloads.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-xs cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E60023] text-white shadow-md shadow-red-500/20'
                    : 'bg-white border border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Cards Grid: 4 columns on large screens for maximum readability & spaciousness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <HowItWorks />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ABOUT SPMANCHESTER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F8F9FC] border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full shadow-xs">
                About SP Manchester
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Built by SPManchester
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                SPManchester Private Limited Company develops modern technology platforms across AI, SEO, software engineering, web development, and digital commerce. This Pinterest Toolkit is designed and operated as a free-first utility to give creators, independent bloggers, and agencies enterprise-grade discovery engines without subscription fees, paywalls, or lock-ins.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-3">
                <Link
                  href="/about-sp-manchester"
                  className="bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm py-3 px-6 rounded-xl font-bold transition-all shadow-xs"
                >
                  About SPManchester
                </Link>
                <a
                  href="https://spmanchester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm py-3 px-6 rounded-xl font-bold inline-flex items-center gap-2 transition-all shadow-xs"
                >
                  Corporate Services <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
                <Link
                  href="/about-sp-manchester#mission"
                  className="bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm py-3 px-6 rounded-xl font-bold transition-all shadow-xs"
                >
                  Our Mission
                </Link>
              </div>
            </div>

            {/* Right Trust Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                  title: 'Zero Paywalls',
                  desc: 'All 13 tools are permanently free with no card or payment required.',
                },
                {
                  icon: <Users className="w-5 h-5 text-blue-600" />,
                  title: 'Privacy First',
                  desc: 'We never collect personal credentials or access your private boards.',
                },
                {
                  icon: <Zap className="w-5 h-5 text-amber-600" />,
                  title: 'Sub-Second Speed',
                  desc: 'Built with Next.js App Router for instant, high-speed execution.',
                },
                {
                  icon: <Star className="w-5 h-5 text-purple-600" />,
                  title: 'Enterprise Backed',
                  desc: 'Operated and maintained by SPManchester Private Limited Company.',
                },
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <div className="text-slate-900 text-base font-bold">{card.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GUIDES & STRATEGY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/70 px-4 py-1.5 rounded-full shadow-xs mb-4">
              Guides &amp; Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tight">
              Pinterest SEO &amp; Growth Guides
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Master the 2026 Pinterest smart feed algorithm with actionable, data-backed frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: 'SEO STRATEGY',
                tagColor: 'text-[#E60023]',
                bgColor: 'bg-red-50 border-red-200/60',
                title: 'The 2026 Pinterest Algorithm Guide',
                desc: 'Discover how Pinterest indexes visual images, extracts text overlays, and ranks Pins based on domain authority and pinner trust scores.',
                href: '/pinterest-seo-keywords',
                cta: 'Explore SEO Tool →',
              },
              {
                tag: 'TREND ANALYSIS',
                tagColor: 'text-blue-600',
                bgColor: 'bg-blue-50 border-blue-200/60',
                title: 'Pinning 60 Days Ahead: Seasonal Demand',
                desc: 'Why timing is everything on Pinterest. Learn how to capitalise on holiday peaks, Christmas, Halloween, and summer before competitors flood the feed.',
                href: '/seasonal-pinterest-trends',
                cta: 'Explore Seasonal Calendar →',
              },
              {
                tag: 'CONTENT TIPS',
                tagColor: 'text-emerald-600',
                bgColor: 'bg-emerald-50 border-emerald-200/60',
                title: 'High-CTR Pin Titles & Descriptions',
                desc: 'We analysed thousands of winning pin titles to find the patterns that get more clicks, saves, and shares — without robotic keyword stuffing.',
                href: '/pinterest-title-generator',
                cta: 'Generate Pin Titles →',
              },
            ].map((g, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-8 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <div className="space-y-4">
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border w-fit ${g.tagColor} ${g.bgColor}`}>
                    {g.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#E60023] transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{g.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link href={g.href} className={`text-sm font-bold ${g.tagColor} inline-flex items-center gap-1.5 hover:underline`}>
                    {g.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ  –  Roomy, 2-Column Accordion
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F8F9FC] border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/70 px-4 py-1.5 rounded-full shadow-xs">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Everything you need to know about Pinterest SEO, algorithms, content workflows, and tool capabilities.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
              {GENERAL_FAQS.map((faq, idx) => (
                <div key={idx} className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-5 text-left text-base sm:text-lg font-bold text-slate-900 hover:text-[#E60023] transition-colors focus:outline-none cursor-pointer gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-[#E60023]' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pr-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM CTA BANNER  –  Spacious Enterprise Finish
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#E60023] flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg sm:text-xl">
                Built &amp; Operated by SPManchester Private Limited Company
              </div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                SPManchester Private Limited Company develops modern technology platforms across AI, SEO, software engineering, web development, and digital commerce.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://spmanchester.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white text-sm font-bold flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors"
            >
              Visit spmanchester.com <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/pinterest-seo-keywords"
              className="bg-[#E60023] hover:bg-[#c9001f] text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-red-600/30 transition-colors"
            >
              Become a Pro User
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
