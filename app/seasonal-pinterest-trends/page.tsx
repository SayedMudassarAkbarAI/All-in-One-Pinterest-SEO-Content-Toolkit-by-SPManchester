'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ResultCard from '@/components/ResultCard';
import CopyButton from '@/components/CopyButton';
import RelatedTools from '@/components/RelatedTools';
import FAQ from '@/components/FAQ';
import { SEASONAL_DATA } from '@/data/seasonal-trends';
import { TOOL_SPECIFIC_FAQS } from '@/data/faqs';

export default function SeasonalPinterestTrendsPage() {
  const [selectedSeasonId, setSelectedSeasonId] = useState(SEASONAL_DATA[0].id);

  const currentSeason =
    SEASONAL_DATA.find((s) => s.id === selectedSeasonId) || SEASONAL_DATA[0];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Seasonal Pinterest Trends', url: '/seasonal-pinterest-trends' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Holiday & Seasonal Demand</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Seasonal Pinterest Trends <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Pinterest users plan holidays, parties, home transformations, and vacations 45–60 days in advance. Use our comprehensive seasonal calendar to capitalize on high-volume search waves before anyone else.
        </p>
      </div>

      {/* Season Selection Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {SEASONAL_DATA.map((season) => {
          const isSelected = season.id === selectedSeasonId;
          return (
            <button
              key={season.id}
              onClick={() => setSelectedSeasonId(season.id)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {season.name}
            </button>
          );
        })}
      </div>

      {/* Detailed Season Card */}
      <div className="glass-card p-6 md:p-10 rounded-3xl border border-slate-800 space-y-8 max-w-5xl mx-auto">
        {/* Season Overview */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase font-bold text-red-400">{currentSeason.season}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currentSeason.name}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl mt-2 leading-relaxed">
              {currentSeason.description}
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div>
              <p className="text-slate-400 font-medium">Consumer Search Peak:</p>
              <p className="text-white font-bold">{currentSeason.peakPeriod}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Optimal Time to Pin:</p>
              <p className="text-emerald-400 font-bold">{currentSeason.startPinningMonth}</p>
            </div>
          </div>
        </div>

        {/* Trending Keywords for this Season */}
        <ResultCard
          title={`Top Trending Searches for ${currentSeason.name}`}
          badge="High Search Velocity"
          copyText={currentSeason.trendingKeywords.join(', ')}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {currentSeason.trendingKeywords.map((kw, idx) => (
              <div key={idx} className="result-item">
                <span className="text-sm font-medium text-white">{kw}</span>
                <CopyButton text={kw} label="Copy" variant="ghost" />
              </div>
            ))}
          </div>
        </ResultCard>

        {/* Board & Content Angle Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResultCard title="Recommended Board Titles" badge="SEO Authority">
            <ul className="space-y-2 mt-2">
              {currentSeason.boardIdeas.map((board, idx) => (
                <li key={idx} className="result-item text-xs text-white">
                  <span>📌 {board}</span>
                  <CopyButton text={board} label="Copy" variant="ghost" />
                </li>
              ))}
            </ul>
          </ResultCard>

          <ResultCard title="High-Converting Content Angles" badge="Viral Hooks">
            <ul className="space-y-2 mt-2">
              {currentSeason.contentAngles.map((angle, idx) => (
                <li key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                  &quot;{angle}&quot;
                </li>
              ))}
            </ul>
          </ResultCard>
        </div>
      </div>

      {/* Strategic Rule Section */}
      <section className="glass-card p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-white">
          The 60-Day Lead Time Rule for Pinterest Seasonal Traffic
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Unlike search engines that index instantly or social platforms with short content lifespans, Pinterest Pins take 30 to 60 days to gain algorithmic traction, collect repins, and appear in search suggestions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-red-400 font-bold text-sm mb-1">Day 1 - 30</div>
            <p className="text-[11px] text-slate-400">Content indexing & algorithmic semantic tagging.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-blue-400 font-bold text-sm mb-1">Day 30 - 60</div>
            <p className="text-[11px] text-slate-400">Early planner saves and category board associations.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-emerald-400 font-bold text-sm mb-1">Peak Period</div>
            <p className="text-[11px] text-slate-400">Mass consumer search spikes deliver maximum clicks.</p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools currentSlug="seasonal-pinterest-trends" category="trends" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['seasonal-pinterest-trends'] || []}
        title="Seasonal Trends FAQ"
      />
    </div>
  );
}
