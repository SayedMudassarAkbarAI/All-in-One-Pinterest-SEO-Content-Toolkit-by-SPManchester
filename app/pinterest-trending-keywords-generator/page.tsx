'use client';

import React, { useState, useEffect } from 'react';
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
import { Zap } from 'lucide-react';

export default function TrendingKeywordsGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [trendData, setTrendData] = useState<TrendItem | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        setTopic(q);
        fetchTrends(q);
      }
    }
  }, []);

  const fetchTrends = async (searchTerm: string) => {
    setLoading(true);
    setError('');
    setTrendData(null);

    try {
      const res = await fetch(`/api/trends?keyword=${encodeURIComponent(searchTerm.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to fetch trend insights');
      } else {
        setTrendData(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      fetchTrends(topic);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Trending Keywords Generator', url: '/pinterest-trending-keywords-generator' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Surging Searches</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Trending Keywords Generator <span className="text-[#E60023]">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Discover high-growth Pinterest search terms, rising content ideas, and breakout keyword variations. Position your Pins in front of accelerating audience demand before your competitors.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={topic}
        onChange={setTopic}
        onSubmit={handleSubmit}
        placeholder="Enter trending topic or niche (e.g. spring outfits, wedding decor)..."
        buttonLabel="Find Trending Keywords"
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-[#E60023] text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Scanning real-time Pinterest interest metrics & search volume..." />}

      {/* Results Section */}
      {trendData && (
        <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
          {/* Trend Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="saas-card p-5 rounded-2xl bg-white border border-slate-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-400">Trajectory</span>
              <p className="text-xl font-extrabold text-[#E60023] mt-1">{trendData.trajectory}</p>
            </div>
            <div className="saas-card p-5 rounded-2xl bg-white border border-slate-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-400">Growth Velocity</span>
              <p className="text-xl font-extrabold text-emerald-600 mt-1">+{trendData.growthPercentage}%</p>
            </div>
            <div className="saas-card p-5 rounded-2xl bg-white border border-slate-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-400">Opportunity Score</span>
              <p className="text-xl font-extrabold text-blue-600 mt-1">{trendData.opportunityScore} / 100</p>
            </div>
            <div className="saas-card p-5 rounded-2xl bg-white border border-slate-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-400">Peak Window</span>
              <p className="text-sm font-bold text-slate-800 mt-1">{trendData.peakMonths}</p>
            </div>
          </div>

          {/* Related Searches */}
          <ResultCard
            title={`High-Growth Keyword Variations for "${trendData.keyword}"`}
            badge="Trending Now"
            copyText={trendData.relatedSearches.join(', ')}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {trendData.relatedSearches.map((item, idx) => (
                <div key={idx} className="result-item">
                  <span className="text-sm font-medium text-slate-900">{item}</span>
                  <CopyButton text={item} label="Copy" variant="ghost" />
                </div>
              ))}
            </div>
          </ResultCard>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Ride Pinterest Search Trends"
        subtitle="Learn how to capture peak seasonal traffic with strategic trend timing."
      />

      {/* Educational Section */}
      <section className="saas-card-static p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          The Secret to Pinterest Trend Timing
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Pinterest users plan life moments, weddings, home renovations, and holiday shopping months ahead of users on TikTok or Instagram. If you wait until December to pin Christmas decor, you missed 80% of the traffic wave. Use our trending keywords generator to detect spikes early.
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Pro Creator Recommendation</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              When a keyword shows &quot;Rising&quot; trajectory, create 3 to 5 unique pin graphics targeting that keyword variation, each linking to your blog post or product page.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-trending-keywords-generator" category="trends" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-trending-keywords-generator'] || []}
        title="Trending Keywords FAQ"
      />
    </div>
  );
}
