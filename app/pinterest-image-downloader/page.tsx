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

export default function PinterestImageDownloaderPage() {
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
        setError(data.error || 'Failed to detect image on this Pin');
      } else {
        setDownloadResult(data.data);
      }
    } catch {
      setError('Network error. Please verify the URL.');
    } finally {
      setLoading(false);
    }
  };

  const imageMedia = downloadResult?.media.filter((m) => m.type === 'image');

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Image Downloader', url: '/pinterest-image-downloader' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Max Resolution JPEG/PNG</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pinterest Image Downloader <span className="text-red-600">by SPManchester</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Save original, uncompressed high-resolution images, infographics, wallpapers, and photos from any public Pinterest Pin. No quality loss, no watermark.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={pinUrl}
        onChange={setPinUrl}
        onSubmit={handleDownloadSubmit}
        placeholder="Paste public Pinterest Image URL..."
        buttonLabel="Get High-Res Image"
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
      {loading && <LoadingState message="Extracting maximum resolution original image CDN asset..." />}

      {/* Results */}
      {downloadResult && downloadResult.success && imageMedia && imageMedia.length > 0 && (
        <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
          <ResultCard className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {imageMedia[0]?.url && (
                <div className="w-full md:w-48 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageMedia[0].url}
                    alt="Pin image preview"
                    className="w-full h-auto object-cover max-h-64"
                  />
                </div>
              )}

              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {downloadResult.title || 'Pinterest Image'}
                </h3>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {imageMedia.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase">{m.quality}</p>
                        <span className="text-[10px] text-slate-500">Direct CDN File</span>
                      </div>
                      <DownloadButton url={m.url} filename={m.filename} label="Download Image" />
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
        title="How to Save Original Quality Photos"
        subtitle="Avoid blurry screenshots and get true uncompressed files."
      />

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-image-downloader" category="downloader" />

      {/* FAQ */}
      <FAQ faqs={TOOL_SPECIFIC_FAQS['pinterest-downloader'] || []} title="Image Downloader FAQ" />
    </div>
  );
}
