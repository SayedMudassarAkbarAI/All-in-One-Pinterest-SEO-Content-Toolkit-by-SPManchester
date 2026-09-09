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
import { HashtagGroup } from '@/lib/hashtags';

export default function PinterestHashtagGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [hashtags, setHashtags] = useState<HashtagGroup | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setHashtags(null);

    try {
      const res = await fetch('/api/hashtags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to generate hashtags');
      } else {
        setHashtags(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Hashtag Generator', url: '/pinterest-hashtag-generator' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Discovery Boost</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Hashtag Generator <span className="text-[#E60023]">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Generate algorithm-safe broad, niche, and trending Pinterest hashtags to accelerate discovery. Copy individual hashtags or one-click copy curated sets into your Pin descriptions.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={topic}
        onChange={setTopic}
        onSubmit={handleGenerate}
        placeholder="Enter your topic or niche (e.g. boho bedroom, vegan meal prep)..."
        buttonLabel="Generate Hashtags"
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-[#E60023] text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Generating algorithm-safe broad, niche, and viral hashtags..." />}

      {/* Results */}
      {hashtags && (
        <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
          {/* Curated Algorithm-Safe Recommendation */}
          <ResultCard
            title="Recommended Algorithm Set (5–7 Optimal Tags)"
            badge="Best For Ranking"
            copyText={hashtags.recommendedSet.join(' ')}
          >
            <div className="flex flex-wrap gap-2 my-3">
              {hashtags.recommendedSet.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-200/80 text-[#E60023] text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Using 5 to 7 highly specific hashtags avoids spam filters and helps Pinterest categorize your content accurately.
            </p>
          </ResultCard>

          {/* Broad vs Niche Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard
              title="Broad Discovery Tags"
              badge="High Reach"
              copyText={hashtags.broad.join(' ')}
            >
              <div className="flex flex-wrap gap-2 mt-3">
                {hashtags.broad.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs hover:bg-slate-200/70 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ResultCard>

            <ResultCard
              title="Targeted Micro-Niche Tags"
              badge="High Conversion"
              copyText={hashtags.niche.join(' ')}
            >
              <div className="flex flex-wrap gap-2 mt-3">
                {hashtags.niche.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs hover:bg-slate-200/70 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ResultCard>
          </div>

          {/* Copy All Strip */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Total Generated Tags: <strong className="text-slate-900 font-mono">{hashtags.broad.length + hashtags.niche.length + hashtags.trending.length}</strong>
            </div>
            <CopyButton text={hashtags.copyAllString} label="Copy Complete Hashtag Library" variant="primary" />
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="Best Practices for Pinterest Hashtags in 2026"
        subtitle="Avoid hashtag spam penalties while maximizing discovery."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-hashtag-generator" category="generator" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-hashtag-generator'] || []}
        title="Pinterest Hashtags FAQ"
      />
    </div>
  );
}
