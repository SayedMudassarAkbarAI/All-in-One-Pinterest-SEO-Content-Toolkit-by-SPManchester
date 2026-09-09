"use client";
import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

/**
 * HeroSection – premium hero area with badge, headline, subheadline, search bar,
 * CTA, popular searches and a right‑hand visual mockup.
 */
export function HeroSection() {
  const [query, setQuery] = useState('');
  const popular = [
    'Pinterest SEO Tools',
    'Home Decor',
    'Fashion Trends',
    'Travel Tips',
    'Health & Wellness',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // route to a generic search results page – placeholder for now
      // In a real app you would push to the appropriate tool page
      // router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 bg-white overflow-hidden text-center">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-red-500/[0.07] via-rose-500/[0.02] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs hover:border-red-200/80 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60023]" />
            </span>
            <span className="tracking-wide">FREE PINTEREST SEO &amp; CONTENT TOOLKIT 2026 🚀</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E60023]" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#101828] leading-[1.08] tracking-tight">
            Everything You Need to<br className="hidden sm:inline" />{' '}
            <span className="text-[#E60023]">
              Grow on Pinterest
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#667085] max-w-2xl mx-auto leading-relaxed">
            Discover breakout trends, generate keyword‑optimized Pin copy, and unlock viral traffic with powerful Pinterest tools.
          </p>

          {/* Large Centered Search bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.12)] hover:border-red-300 focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/15 transition-all">
              <div className="flex items-center gap-3.5 flex-1 px-4 py-2 sm:py-0">
                <Search className="w-6 h-6 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search any keyword, niche, or topic (e.g. summer outfits, home decor...)"
                  className="w-full bg-transparent py-2 text-slate-900 placeholder-slate-400 text-base sm:text-lg focus:outline-none font-medium"
                />
              </div>
              <button
                type="submit"
                className="bg-[#E60023] hover:bg-[#c9001f] active:scale-[0.98] text-white py-3.5 sm:py-4 px-8 sm:px-10 rounded-xl font-bold text-base shrink-0 shadow-md shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Centered Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-[#667085] pt-2">
            <span className="font-semibold flex items-center gap-1.5">🔥 Popular searches:</span>
            {popular.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#E60023] hover:border-red-300 hover:bg-red-50/50 text-xs sm:text-sm font-medium shadow-2xs transition-all cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
