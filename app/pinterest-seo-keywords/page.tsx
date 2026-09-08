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
import { KeywordResultGroup } from '@/lib/keywords';

export default function PinterestSEOKeywordsPage() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<KeywordResultGroup | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`/api/keywords?keyword=${encodeURIComponent(keyword.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to generate keywords');
      } else {
        setResult(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const allKeywordsText = result
    ? [
        ...result.primaryKeywords.map((k) => k.keyword),
        ...result.longTailKeywords.map((k) => k.keyword),
        ...result.relatedKeywords.map((k) => k.keyword),
      ].join(', ')
    : '';

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest SEO Keywords', url: '/pinterest-seo-keywords' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Keyword Optimization</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Pinterest SEO Keywords <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Uncover high-intent primary search terms, secondary variations, long-tail phrases, and semantic keyword clusters to optimize your Pin titles, descriptions, and boards for maximum algorithmic rank.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={keyword}
        onChange={setKeyword}
        onSubmit={handleGenerate}
        placeholder="Enter your seed topic (e.g., modern interior design, healthy vegan dinner)..."
        buttonLabel="Generate SEO Keywords"
        loading={loading}
        helperText="Enter any niche, product, or topic to generate categorized keyword clusters."
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Analyzing Pinterest search graph and generating keyword clusters..." />}

      {/* Results Section */}
      {result && (
        <div className="space-y-8 max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <p className="text-xs text-slate-400">Target Keyword Seed</p>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">{result.seed}</h3>
            </div>
            <CopyButton text={allKeywordsText} label="Copy All Keywords" variant="primary" />
          </div>

          {/* Primary & High-Intent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard title="Primary Keywords" badge="High Search Volume">
              <div className="space-y-2 mt-2">
                {result.primaryKeywords.map((item, idx) => (
                  <div key={idx} className="result-item">
                    <div>
                      <span className="text-sm font-medium text-white">{item.keyword}</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400">{item.intent}</span>
                        <span className="text-[10px] text-red-400 font-semibold">• {item.volumeIndicator} Vol</span>
                      </div>
                    </div>
                    <CopyButton text={item.keyword} label="Copy" variant="ghost" />
                  </div>
                ))}
              </div>
            </ResultCard>

            <ResultCard title="Long-Tail Opportunities" badge="Low Competition">
              <div className="space-y-2 mt-2">
                {result.longTailKeywords.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="result-item">
                    <div>
                      <span className="text-sm font-medium text-white">{item.keyword}</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400">{item.intent}</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">• Low Competition</span>
                      </div>
                    </div>
                    <CopyButton text={item.keyword} label="Copy" variant="ghost" />
                  </div>
                ))}
              </div>
            </ResultCard>
          </div>

          {/* Semantic Clusters */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Semantic Keyword Clusters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {result.clusters.map((cluster, idx) => (
                <ResultCard
                  key={idx}
                  title={cluster.name}
                  badge="Cluster"
                  copyText={cluster.keywords.join(', ')}
                >
                  <ul className="space-y-2 mt-2">
                    {cluster.keywords.map((kw, kIdx) => (
                      <li key={kIdx} className="text-xs text-slate-300 flex items-center justify-between">
                        <span>• {kw}</span>
                        <CopyButton text={kw} label="Copy" variant="ghost" className="p-1" />
                      </li>
                    ))}
                  </ul>
                </ResultCard>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Use Pinterest SEO Keywords"
        subtitle="Follow this proven process to rank your content on Pinterest search."
      />

      {/* SEO Strategy Content (Prevents Thin Content per PRD) */}
      <section className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white">
          Why Pinterest Keyword Research is Critical in 2026
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Pinterest is not a traditional social media feed where content dies after 24 hours. It is a visual discovery search engine. When users search for solutions, the Pinterest algorithm ranks Pins using topical authority, keyword relevance, and engagement velocity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-sm font-bold text-red-400 mb-1">Pin Title Optimization</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Place your primary keyword within the first 30 characters of your Pin title so it displays prominently in search cards.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-sm font-bold text-blue-400 mb-1">Board Context & Alt Text</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Save your pins to boards whose titles directly match your keyword clusters to reinforce topical indexing.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-seo-keywords" category="seo" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-seo-keywords'] || []}
        title="Pinterest SEO Keywords FAQ"
      />
    </div>
  );
}
