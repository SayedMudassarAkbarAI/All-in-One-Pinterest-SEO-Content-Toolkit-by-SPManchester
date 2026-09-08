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
import { PinIdeaItem } from '@/lib/pin-ideas';

export default function PinterestPinIdeasPage() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<PinIdeaItem[]>([]);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setIdeas([]);

    try {
      const res = await fetch('/api/pin-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to generate pin ideas');
      } else {
        setIdeas(data.data);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Pin Ideas', url: '/pinterest-pin-ideas' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Creative Brainstorming</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Pinterest Pin Ideas Generator <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Overcome creator block with viral Pin concepts, layout angles, graphic design prompts, and headline hooks tailored to your specific niche.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={topic}
        onChange={setTopic}
        onSubmit={handleGenerate}
        placeholder="Enter your niche or content topic (e.g. productivity hacks, matcha tea)..."
        buttonLabel="Generate Pin Concepts"
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Brainstorming visual layouts, headline hooks, and Pin concepts..." />}

      {/* Results */}
      {ideas.length > 0 && (
        <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Creative Pin Concepts & Layouts</h3>
            <span className="text-xs text-slate-400">{ideas.length} Concepts</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {ideas.map((idea, idx) => (
              <ResultCard key={idx} className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/60">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
                      {idea.format}
                    </span>
                    <CopyButton
                      text={`Concept: ${idea.concept}\nHeadline: ${idea.headlineHook}\nVisual Prompt: ${idea.visualPrompt}\nCTA: ${idea.suggestedCta}`}
                      label="Copy Entire Concept"
                      variant="secondary"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{idea.concept}</h4>
                    <p className="text-xs text-slate-300">
                      <strong className="text-slate-400">Headline Hook:</strong> &quot;{idea.headlineHook}&quot;
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                    <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Visual Design Prompt (for Canva / Photoshop):
                    </p>
                    <p className="text-slate-300 italic">{idea.visualPrompt}</p>
                  </div>

                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-300">Recommended CTA:</strong> {idea.suggestedCta}
                  </div>
                </div>
              </ResultCard>
            ))}
          </div>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Execute High-Performing Pin Visuals"
        subtitle="Turn these concepts into clicks with standard 2:3 vertical aspect ratios."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-pin-ideas" category="generator" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-pin-ideas'] || []}
        title="Pin Ideas FAQ"
      />
    </div>
  );
}
