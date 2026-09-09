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
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Keyword Comparison <span className="text-red-600">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Compare two or more Pinterest keywords side-by-side to evaluate audience demand, growth trajectory, opportunity scores, and seasonal peaks. Focus your creative effort on the highest-yielding topics.
        </p>
      </div>

      {/* Comparison Inputs Form */}
      <form onSubmit={handleCompare} className="max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Keyword A
            </label>
            <input
              type="text"
              value={kw1}
              onChange={(e) => setKw1(e.target.value)}
              placeholder="e.g. summer outfits"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Keyword B
            </label>
            <input
              type="text"
              value={kw2}
              onChange={(e) => setKw2(e.target.value)}
              placeholder="e.g. fall fashion"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !kw1.trim() || !kw2.trim()}
          className="btn btn-primary w-full py-3.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all"
        >
          {loading ? 'Comparing Metrics...' : 'Compare Search Opportunities'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center shadow-sm">
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
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                      Keyword #{idx + 1}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 capitalize">{item.keyword}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                    {item.trajectory}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Opportunity</p>
                    <p className="text-lg font-black text-blue-600">{item.opportunityScore}/100</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Growth Rate</p>
                    <p className="text-lg font-black text-emerald-600">+{item.growthPercentage}%</p>
                  </div>
                </div>

                <div className="text-xs text-slate-600">
                  <strong className="text-slate-800">Peak Demand Window:</strong> {item.peakMonths}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-600">Related High-Converting Searches:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
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
