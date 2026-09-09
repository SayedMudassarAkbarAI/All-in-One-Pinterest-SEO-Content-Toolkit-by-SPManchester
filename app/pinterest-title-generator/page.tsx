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
import { TitleItem } from '@/lib/titles';

export default function PinterestTitleGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState<TitleItem[]>([]);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setTitles([]);

    try {
      const res = await fetch('/api/titles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim(), keyword: keyword.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to generate titles');
      } else {
        setTitles(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Title Generator', url: '/pinterest-title-generator' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">High CTR Copywriting</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Title Generator <span className="text-[#E60023]">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Craft irresistible, keyword-optimized Pin titles that stop the scroll and drive clicks to your website. Tested formulas across Listicles, How-To guides, and Curiosity hooks.
        </p>
      </div>

      {/* Inputs */}
      <div className="max-w-2xl mx-auto space-y-4">
        <ToolInput
          value={topic}
          onChange={setTopic}
          onSubmit={handleGenerate}
          placeholder="Enter Pin topic (e.g. gluten-free dessert, small patio makeover)..."
          buttonLabel="Generate Titles"
          loading={loading}
        />
        <div className="px-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Optional: Target keyword to embed (e.g. vegan chocolate cake)"
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E60023] shadow-xs"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-[#E60023] text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Crafting high-converting, keyword-dense Pin titles..." />}

      {/* Results */}
      {titles.length > 0 && (
        <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Generated High-CTR Titles</h3>
            <span className="text-xs text-slate-500 font-medium">{titles.length} Variations</span>
          </div>

          <div className="space-y-3">
            {titles.map((item, idx) => (
              <ResultCard key={idx}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {item.style}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {item.characterCount} / 100 chars
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900">{item.title}</p>
                  </div>
                  <CopyButton text={item.title} label="Copy Title" variant="secondary" className="shrink-0" />
                </div>
              </ResultCard>
            ))}
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="Formula for High-Ranking Pinterest Titles"
        subtitle="Combine curiosity with keyword placement for the best results."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-title-generator" category="generator" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-title-generator'] || []}
        title="Pinterest Titles FAQ"
      />
    </div>
  );
}
