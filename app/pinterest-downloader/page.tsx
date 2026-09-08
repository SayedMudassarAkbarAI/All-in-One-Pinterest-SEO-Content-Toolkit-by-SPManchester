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

export default function PinterestDownloaderPage() {
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
        setError(data.error || 'Failed to fetch Pinterest media');
      } else {
        setDownloadResult(data.data);
      }
    } catch {
      setError('Network error. Please ensure the link is a valid public Pin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Pinterest Downloader', url: '/pinterest-downloader' }]} />

      {/* Header & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">100% Free Public Downloader</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          All-in-One Pinterest Downloader <span className="text-red-500">by SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Download publicly accessible Pinterest images, MP4 videos, and animated GIFs in uncompressed original quality. Fast, safe, no watermarks, and no login required.
        </p>
      </div>

      {/* Tool Input */}
      <ToolInput
        value={pinUrl}
        onChange={setPinUrl}
        onSubmit={handleDownloadSubmit}
        placeholder="Paste public Pinterest Pin URL (e.g. https://pinterest.com/pin/123456/)..."
        buttonLabel="Fetch Media"
        loading={loading}
        iconType="url"
        helperText="Only public pins are supported. We respect intellectual property and DRM safeguards."
      />

      {/* Error Message */}
      {error && (
        <div className="p-4 max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl text-center">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && <LoadingState message="Detecting public media stream, resolution options, and metadata..." />}

      {/* Results */}
      {downloadResult && downloadResult.success && (
        <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
          <ResultCard className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Thumbnail / Media Preview */}
              {downloadResult.media[0]?.thumbnail && (
                <div className="w-full md:w-48 shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={downloadResult.media[0].thumbnail}
                    alt={downloadResult.title || 'Pin thumbnail'}
                    className="w-full h-auto object-cover max-h-64"
                  />
                </div>
              )}

              {/* Media Details & Download Buttons */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-red-400 px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
                    Public Media Detected
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {downloadResult.title || 'Pinterest Pin Asset'}
                  </h3>
                  {downloadResult.description && (
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {downloadResult.description}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <p className="text-xs font-semibold text-slate-300">
                    Available Download Formats:
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {downloadResult.media.map((media, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800"
                      >
                        <div>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">
                            {media.quality}
                          </p>
                          <span className="text-[10px] text-slate-400 uppercase font-mono">
                            .{media.extension} format
                          </span>
                        </div>
                        <DownloadButton
                          url={media.url}
                          filename={media.filename}
                          label={`Download .${media.extension}`}
                          className="text-xs py-2 px-3.5"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ResultCard>
        </div>
      )}

      {/* Downloader How it Works */}
      <HowItWorks
        title="How to Download From Pinterest"
        subtitle="Quick, safe 3-step download process for publicly shared content."
        steps={[
          {
            number: '01',
            title: 'Copy Public Pin URL',
            description: 'Open Pinterest on mobile or desktop, click the share icon on any public Pin, and copy link.',
          },
          {
            number: '02',
            title: 'Paste URL & Detect',
            description: 'Paste the link into the box above. Our servers detect the direct uncompressed CDN asset stream.',
          },
          {
            number: '03',
            title: 'Download Original HD File',
            description: 'Choose your desired resolution (HD MP4, full-res image, or GIF) and click Download.',
          },
          {
            number: '04',
            title: 'Save to Camera Roll / PC',
            description: 'The file downloads directly to your device storage ready for offline review or moodboards.',
          },
        ]}
      />

      {/* Disclaimer Section per TRD Section 12 */}
      <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs text-slate-400 space-y-1">
        <p className="font-semibold text-slate-300">Intellectual Property & Fair Use Disclaimer</p>
        <p>
          SPManchester does not host or store any media files on its servers. All media is fetched directly from public Pinterest CDN servers. Please respect creator copyright and use downloaded media only for personal inspiration, research, or fair use.
        </p>
      </div>

      {/* Related Tools */}
      <RelatedTools currentSlug="pinterest-downloader" category="downloader" />

      {/* FAQ */}
      <FAQ
        faqs={TOOL_SPECIFIC_FAQS['pinterest-downloader'] || []}
        title="Pinterest Downloader FAQ"
      />
    </div>
  );
}
