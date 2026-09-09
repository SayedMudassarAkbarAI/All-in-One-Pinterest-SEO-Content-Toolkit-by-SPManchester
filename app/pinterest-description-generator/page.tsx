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
import { DescriptionItem } from '@/lib/descriptions';

export default function PinterestDescriptionGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [descriptions, setDescriptions] = useState<DescriptionItem[]>([]);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setDescriptions([]);

    try {
      const res = await fetch('/api/descriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim(), keyword: keyword.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to generate descriptions');
      } else {
        setDescriptions(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Description Generator', url: '/pinterest-description-generator' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Algorithm & Conversions</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Description Generator <span className="text-red-600">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Generate high-ranking Pin descriptions packed with natural keyword placements, compelling storytelling hooks, and tested calls-to-action (CTAs) that generate outbound website traffic.
        </p>
      </div>

      {/* Inputs */}
      <div className="max-w-2xl mx-auto space-y-4">
        <ToolInput
          value={topic}
          onChange={setTopic}
          onSubmit={handleGenerate}
          placeholder="Enter Pin topic (e.g. capsule wardrobe styling, sourdough bread recipe)..."
          buttonLabel="Generate Descriptions"
          loading={loading}
        />
        <div className="px-1">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Optional: Primary SEO keyword to include (e.g. minimalist capsule wardrobe)"
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center shadow-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Formulating keyword-rich Pin descriptions with proven CTAs..." />}

      {/* Results */}
      {descriptions.length > 0 && (
        <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">SEO Pin Descriptions</h3>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{descriptions.length} Variations</span>
          </div>

          <div className="space-y-4">
            {descriptions.map((item, idx) => (
              <ResultCard key={idx}>
                <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {item.angle}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {item.characterCount} / 500 chars
                    </span>
                  </div>
                  <CopyButton text={item.description} label="Copy Description" variant="secondary" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
              </ResultCard>
            ))}
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="Anatomy of a High-Converting Pin Description"
        subtitle="Learn how to balance keyword placement with natural copywriting."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-description-generator" category="generator" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-description-generator'] || []}
        title="Pin Descriptions FAQ"
      />
    </div>
  );
}
