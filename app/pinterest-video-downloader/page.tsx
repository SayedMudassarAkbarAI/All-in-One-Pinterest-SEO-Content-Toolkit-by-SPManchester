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

export default function PinterestVideoDownloaderPage() {
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
        setError(data.error || 'Failed to detect video stream from this Pin');
      } else {
        setDownloadResult(data.data);
      }
    } catch {
      setError('Network error. Please verify the URL.');
    } finally {
      setLoading(false);
    }
  };

  const videoMedia = downloadResult?.media.filter((m) => m.type === 'video');

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Video Downloader', url: '/pinterest-video-downloader' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">HD MP4 Video</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Video Downloader <span className="text-red-600">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Download high-definition MP4 Pinterest videos, Idea Pins, and video reels with original audio. Free, no watermark, and compatible with iPhone, Android, Mac, and Windows.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={pinUrl}
        onChange={setPinUrl}
        onSubmit={handleDownloadSubmit}
        placeholder="Paste public Pinterest Video URL..."
        buttonLabel="Extract Video MP4"
        loading={loading}
        iconType="url"
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center shadow-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Extracting direct MP4 video streams and audio channels..." />}

      {/* Results */}
      {downloadResult && downloadResult.success && (
        <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
          <ResultCard className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {downloadResult.media[0]?.thumbnail && (
                <div className="w-full md:w-48 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={downloadResult.media[0].thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-auto object-cover max-h-64"
                  />
                </div>
              )}

              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {downloadResult.title || 'Pinterest Video'}
                </h3>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {videoMedia && videoMedia.length > 0 ? (
                    videoMedia.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div>
                          <p className="text-xs font-bold text-slate-900 uppercase">{m.quality}</p>
                          <span className="text-[10px] text-slate-500">Direct MP4 Video Stream</span>
                        </div>
                        <DownloadButton url={m.url} filename={m.filename} label="Download MP4" />
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-xs text-amber-800 bg-amber-50 rounded-xl border border-amber-200">
                      No standalone video stream detected on this Pin. You can still download the high-resolution image asset below.
                      {downloadResult.media.map((m, idx) => (
                        <div key={idx} className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200">
                          <span className="text-slate-800 text-xs font-medium">{m.quality}</span>
                          <DownloadButton url={m.url} filename={m.filename} label="Download Image" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ResultCard>
        </div>
      )}

      {/* How to Use */}
      <HowItWorks
        title="How to Save Pinterest Videos to MP4"
        subtitle="Extract clean, watermark-free videos in 3 clicks."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-video-downloader" category="downloader" />

      {/* FAQ */}
      <FAQ faqs={TOOL_SPECIFIC_FAQS['pinterest-downloader'] || []} title="Video Downloader FAQ" />
    </div>
  );
}
