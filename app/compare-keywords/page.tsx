'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import LoadingState from '@/components/LoadingState';
import ResultCard from '@/components/ResultCard';
import CopyButton from '@/components/CopyButton';
import HowItWorks from '@/components/HowItWorks';
import RelatedTools from '@/components/RelatedTools';
import FAQ from '@/components/FAQ';
import { TOOL_SPECIFIC_FAQS } from '@/data/faqs';
import { TrendItem } from '@/lib/trends';

export default function CompareKeywordsPage() {
  const [kw1, setKw1] = useState('summer outfits');
  const [kw2, setKw2] = useState('fall fashion');
  const [loading, setLoading] = useState(false);
  const [comparisonResults, setComparisonResults] = useState<TrendItem[]>([]);
  const [error, setError] = useState('');

  const handleCompare = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kw1.trim() || !kw2.trim()) return;

    setLoading(true);
    setError('');
    setComparisonResults([]);

    try {
      const combined = `${encodeURIComponent(kw1.trim())},${encodeURIComponent(kw2.trim())}`;
      const res = await fetch(`/api/trends?compare=${combined}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to compare keywords');
      } else {
        setComparisonResults(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Compare Keywords', url: '/compare-keywords' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Keyword Intelligence</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Pinterest Keyword Comparison <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Compare two or more Pinterest keywords side-by-side to evaluate audience demand, growth trajectory, opportunity scores, and seasonal peaks. Focus your creative effort on the highest-yielding topics.
        </p>
      </div>

      {/* Comparison Inputs Form */}
      <form onSubmit={handleCompare} className="max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Keyword A
            </label>
            <input
              type="text"
              value={kw1}
              onChange={(e) => setKw1(e.target.value)}
              placeholder="e.g. summer outfits"
              className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Keyword B
            </label>
            <input
              type="text"
              value={kw2}
              onChange={(e) => setKw2(e.target.value)}
              placeholder="e.g. fall fashion"
              className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !kw1.trim() || !kw2.trim()}
          className="btn btn-primary w-full py-3.5 rounded-xl font-semibold text-sm shadow-xl"
        >
          {loading ? 'Comparing Metrics...' : 'Compare Search Opportunities'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Comparing keyword search interest, growth velocity, and opportunity ratings..." />}

      {/* Results */}
      {comparisonResults.length > 0 && (
        <div className="space-y-8 max-w-5xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonResults.map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Keyword #{idx + 1}
                    </span>
                    <h3 className="text-xl font-black text-white capitalize">{item.keyword}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
                    {item.trajectory}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <p className="text-[10px] text-slate-400 uppercase">Opportunity</p>
                    <p className="text-lg font-black text-blue-400">{item.opportunityScore}/100</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <p className="text-[10px] text-slate-400 uppercase">Growth Rate</p>
                    <p className="text-lg font-black text-emerald-400">+{item.growthPercentage}%</p>
                  </div>
                </div>

                <div className="text-xs text-slate-300">
                  <strong className="text-slate-400">Peak Demand Window:</strong> {item.peakMonths}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <p className="text-xs font-semibold text-slate-400">Related High-Converting Searches:</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {item.relatedSearches.slice(0, 4).map((rel, rIdx) => (
                      <li key={rIdx} className="flex items-center justify-between result-item p-2">
                        <span>{rel}</span>
                        <CopyButton text={rel} label="Copy" variant="ghost" className="p-1" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Prioritize High-Opportunity Keywords"
        subtitle="Evaluate competition vs. volume to pick winning Pin topics."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="compare-keywords" category="seo" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['compare-keywords'] || []}
        title="Keyword Comparison FAQ"
      />
    </div>
  );
}
