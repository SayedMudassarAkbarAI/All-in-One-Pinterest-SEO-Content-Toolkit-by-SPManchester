'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TOOLS } from '@/data/tools';
import { GENERAL_FAQS } from '@/data/faqs';
import ToolCard from '@/components/ToolCard';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  const router = useRouter();
  const [searchSeed, setSearchSeed] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchSeed.trim()) {
      router.push(`/pinterest-trending-keywords-generator?q=${encodeURIComponent(searchSeed.trim())}`);
    }
  };

  return (
    <div className="space-y-24">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-xs font-semibold text-slate-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>100% Free Pinterest SEO & Content Ecosystem</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            All-in-One Pinterest SEO & Content Toolkit{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">
              by SPManchester
            </span>
          </h1>

          {/* Hero Copy */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover Pinterest trends, generate SEO keywords, craft viral pin titles & descriptions, and download publicly accessible Pinterest media with free tools by SPManchester.
          </p>

          {/* Hero Search Box */}
          <form onSubmit={handleHeroSearch} className="w-full max-w-xl mx-auto mb-8">
            <div className="relative flex items-center p-2 rounded-2xl bg-[#0a1628]/95 border border-slate-700 shadow-2xl backdrop-blur-xl focus-within:border-red-500 transition-all">
              <svg
                className="w-5 h-5 text-slate-400 ml-3 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchSeed}
                onChange={(e) => setSearchSeed(e.target.value)}
                placeholder="Enter any topic (e.g. summer outfits, home decor)..."
                className="w-full bg-transparent px-3 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-primary text-xs py-2.5 px-5 rounded-xl font-semibold shrink-0"
              >
                Discover
              </button>
            </div>
          </form>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#tools" className="btn btn-primary text-sm px-6 py-3 rounded-xl shadow-lg">
              Explore Pinterest Tools
            </a>
            <Link
              href="/pinterest-downloader"
              className="btn btn-secondary text-sm px-6 py-3 rounded-xl"
            >
              Pinterest Downloader
            </Link>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80 max-w-3xl mx-auto">
            <div>
              <p className="text-2xl font-black text-white font-mono">13+</p>
              <p className="text-xs text-slate-400 mt-0.5">Free Dedicated Tools</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white font-mono">100%</p>
              <p className="text-xs text-slate-400 mt-0.5">Free For Creators</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white font-mono">HD</p>
              <p className="text-xs text-slate-400 mt-0.5">Original Media Quality</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white font-mono">2026</p>
              <p className="text-xs text-slate-400 mt-0.5">Algorithm Optimized</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: POPULAR TOOLS ===== */}
      <section id="tools" className="container mx-auto px-4 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge mb-3">Core Utilities</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Popular Pinterest Tools by SPManchester
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to research keywords, create optimized pins, and download assets in one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: HOW IT WORKS ===== */}
      <div className="container mx-auto px-4">
        <HowItWorks />
      </div>

      {/* ===== SECTION 4: WHY SPMANCHESTER ===== */}
      <section className="container mx-auto px-4">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge">Corporate Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why SPManchester Built This Pinterest Toolkit
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pinterest creators, Etsy shop owners, and digital brands shouldn&apos;t have to juggle five different subscription services just to find trending keywords and format high-CTR pin copy.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                <strong>SPManchester Private Limited Company</strong> developed this ecosystem as a free-first public service. As a technology consulting and software engineering firm, we specialize in high-scale web platforms, artificial intelligence, search engine optimization, and enterprise eCommerce.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about-sp-manchester"
                  className="btn btn-secondary text-xs py-2.5 px-4 rounded-xl"
                >
                  Learn About SPManchester →
                </Link>
                <a
                  href="https://spmanchester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs py-2.5 px-4"
                >
                  Corporate Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-red-400 text-base font-bold mb-1">Zero Cost</div>
                <p className="text-xs text-slate-400">All tools are permanently free with no mandatory credit card or paywalls.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-blue-400 text-base font-bold mb-1">Privacy First</div>
                <p className="text-xs text-slate-400">We do not track personal user data, cookies, or private browsing history.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-emerald-400 text-base font-bold mb-1">Ultra Fast</div>
                <p className="text-xs text-slate-400">Engineered with Next.js App Router for instant results and zero lag.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-purple-400 text-base font-bold mb-1">Enterprise Backed</div>
                <p className="text-xs text-slate-400">Supported by SPManchester Private Limited Company infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: PINTEREST SEO RESOURCES ===== */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge mb-3">Actionable Guides</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Pinterest SEO Strategies & Resources
          </h2>
          <p className="text-slate-400 text-sm">
            Master the 2026 Pinterest smart feed algorithm with battle-tested content formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">SEO Strategy</span>
            <h3 className="text-lg font-bold text-white">
              The 2026 Pinterest Algorithm Guide
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Discover how Pinterest indexes visual images, extracts text overlays, and ranks Pins based on domain quality, pinner trust score, and pin engagement.
            </p>
            <div className="pt-2">
              <Link href="/pinterest-seo-keywords" className="text-xs text-red-400 hover:text-red-300 font-semibold">
                Use SEO Keywords Tool →
              </Link>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Trend Mastery</span>
            <h3 className="text-lg font-bold text-white">
              Pinning 60 Days Ahead: The Seasonal Secret
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Why timing is everything on Pinterest. Learn how to capitalize on holiday demand peaks (Christmas, Halloween, Summer) before competition floods the feed.
            </p>
            <div className="pt-2">
              <Link href="/seasonal-pinterest-trends" className="text-xs text-blue-400 hover:text-blue-300 font-semibold">
                Explore Seasonal Calendar →
              </Link>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Copywriting</span>
            <h3 className="text-lg font-bold text-white">
              High-CTR Pin Titles & Descriptions That Convert
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The exact formula for writing Pin titles that trigger curiosity and Pin descriptions that satisfy algorithmic keyword density without robotic stuffing.
            </p>
            <div className="pt-2">
              <Link href="/pinterest-title-generator" className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold">
                Generate Pin Titles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FAQ ===== */}
      <div className="container mx-auto px-4">
        <FAQ faqs={GENERAL_FAQS} />
      </div>
    </div>
  );
}
