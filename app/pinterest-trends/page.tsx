'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolInput from '@/components/ToolInput';
import LoadingState from '@/components/LoadingState';
import ResultCard from '@/components/ResultCard';
import CopyButton from '@/components/CopyButton';
import HowItWorks from '@/components/HowItWorks';
import RelatedTools from '@/components/RelatedTools';
import FAQ from '@/components/FAQ';
import { TOOL_SPECIFIC_FAQS } from '@/data/faqs';
import { TrendItem } from '@/lib/trends';

export default function PinterestTrendsPage() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [trend, setTrend] = useState<TrendItem | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setError('');
    setTrend(null);

    try {
      const res = await fetch(`/api/trends?keyword=${encodeURIComponent(keyword.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to analyze trend data');
      } else {
        setTrend(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Trends', url: '/pinterest-trends' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Market Intelligence</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Trends <span className="text-red-600">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Monitor search interest curves, breakout trajectory, and peak demand cycles across any niche on Pinterest. Plan your editorial calendar to align with seasonal user spikes.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={keyword}
        onChange={setKeyword}
        onSubmit={handleSearch}
        placeholder="Enter trend keyword (e.g. matcha latte, minimalist nails, small patio)..."
        buttonLabel="Analyze Trend"
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center shadow-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Processing interest graph, search velocity, and seasonal waves..." />}

      {/* Results */}
      {trend && (
        <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
          {/* Main Highlights */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Search Term Trend Report</p>
                <h3 className="text-2xl font-black text-slate-900 capitalize mt-0.5">{trend.keyword}</h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-red-50 text-red-700 border border-red-200">
                {trend.trajectory} Trajectory
              </span>
            </div>

            {/* Metric Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-600">Audience Interest Score</span>
                  <span className="text-red-600 font-bold">{trend.searchInterest} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full transition-all duration-1000"
                    style={{ width: `${trend.searchInterest}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-600">Growth Velocity</span>
                  <span className="text-emerald-600 font-bold">+{trend.growthPercentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(trend.growthPercentage, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-600">Opportunity Index</span>
                  <span className="text-blue-600 font-bold">{trend.opportunityScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${trend.opportunityScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Strategic Summary */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Editorial Recommendation:
              </span>
              <p className="text-slate-700 leading-relaxed">
                Peak consumer interest falls around <strong className="text-red-600">{trend.peakMonths}</strong>. Begin creating and publishing content 45 to 60 days before this window to capture maximum algorithmic momentum.
              </p>
            </div>
          </div>

          {/* Related Breakout Queries */}
          <ResultCard
            title="Breakout & Related Search Queries"
            badge="Rising"
            copyText={trend.relatedSearches.join(', ')}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {trend.relatedSearches.map((item, idx) => (
                <div key={idx} className="result-item">
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                  <CopyButton text={item} label="Copy" variant="ghost" />
                </div>
              ))}
            </div>
          </ResultCard>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="Mastering Pinterest Demand Cycles"
        subtitle="Turn trend data into high-performing evergreen and seasonal traffic."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-trends" category="trends" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-trends'] || []}
        title="Pinterest Trends FAQ"
      />
    </div>
  );
}
