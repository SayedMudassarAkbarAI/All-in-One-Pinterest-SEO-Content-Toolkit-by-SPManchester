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
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-red-500/[0.07] via-rose-500/[0.02] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center max-w-6xl">
        {/* Left side – copy */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs hover:border-red-200/80 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60023]" />
            </span>
            <span className="tracking-wide">FREE PINTEREST SEO & CONTENT TOOLKIT 2026 🚀</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E60023]" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101828] leading-[1.05]">
            Everything You Need to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E60023] to-[#E60023]">
              Grow
            </span>{' '}
            on Pinterest
          </h1>
          <p className="text-base md:text-lg text-[#667085] max-w-lg">
            Discover breakout trends, generate keyword‑optimized Pin copy, and unlock viral traffic with powerful Pinterest tools.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="max-w-xl">
            <div className="flex items-center p-2 rounded-2xl bg-white border border-slate-200 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.08)] hover:border-slate-300 focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/10 transition-all duration-200">
              <Search className="w-5 h-5 text-slate-400 ml-3.5 mr-2 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search any keyword, niche, or topic (e.g. capsule wardrobe, summer nails...)"
                className="flex-1 bg-transparent py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
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

          {/* Popular searches */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#667085] mt-3">
            <span className="font-medium">Popular searches:</span>
            {popular.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-600 hover:text-[#E60023] hover:border-red-200 shadow-xs transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Right side – visual mockup */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center items-center">
          {/* Placeholder image – copy the generated hero visual to public/hero.jpg */}
          <img
            src="/hero.jpg"
            alt="Pinterest SEO dashboard mockup"
            className="max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
