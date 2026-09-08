'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolInput from '@/components/ToolInput';
import LoadingState from '@/components/LoadingState';
import ResultCard from '@/components/ResultCard';
import DownloadButton from '@/components/DownloadButton';
import HowItWorks from '@/components/HowItWorks';
import RelatedTools from '@/components/RelatedTools';
import FAQ from '@/components/FAQ';
import { TOOL_SPECIFIC_FAQS } from '@/data/faqs';
import { DownloaderResult } from '@/lib/downloader';

export default function PinterestGifDownloaderPage() {
  const [pinUrl, setPinUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadResult, setDownloadResult] = useState<DownloaderResult | null>(null);
  const [error, setError] = useState('');

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinUrl.trim()) return;

    setLoading(true);
    setError('');
    setDownloadResult(null);

    try {
      const res = await fetch('/api/downloader', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: pinUrl.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to detect GIF animation on this Pin');
      } else {
        setDownloadResult(data.data);
      }
    } catch {
      setError('Network error. Please verify the URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest GIF Downloader', url: '/pinterest-gif-downloader' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Animated Loops</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Pinterest GIF Downloader <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Download animated GIFs and looping motion pins directly from Pinterest in their original playback speed and resolution.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={pinUrl}
        onChange={setPinUrl}
        onSubmit={handleDownloadSubmit}
        placeholder="Paste public Pinterest GIF Pin URL..."
        buttonLabel="Download Animated GIF"
        loading={loading}
        iconType="url"
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Detecting GIF animation stream..." />}

      {/* Results */}
      {downloadResult && downloadResult.success && (
        <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
          <ResultCard className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {downloadResult.media[0]?.thumbnail && (
                <div className="w-full md:w-48 shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={downloadResult.media[0].thumbnail}
                    alt="GIF preview"
                    className="w-full h-auto object-cover max-h-64"
                  />
                </div>
              )}

              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  {downloadResult.title || 'Pinterest GIF Asset'}
                </h3>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {downloadResult.media.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div>
                        <p className="text-xs font-bold text-white uppercase">{m.quality}</p>
                        <span className="text-[10px] text-slate-400">Direct Download</span>
                      </div>
                      <DownloadButton url={m.url} filename={m.filename} label={`Download .${m.extension}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ResultCard>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Download Pinterest GIFs"
        subtitle="Save animated memes and motion graphics without quality loss."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-gif-downloader" category="downloader" />

      {/* FAQ */}
      <FAQ faqs={TOOL_SPECIFIC_FAQS['pinterest-downloader'] || []} title="GIF Downloader FAQ" />
    </div>
  );
}
