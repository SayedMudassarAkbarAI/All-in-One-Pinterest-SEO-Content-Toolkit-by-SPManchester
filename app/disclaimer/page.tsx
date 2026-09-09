import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Disclaimer | SPManchester Private Limited Company',
  description: 'Legal disclaimer for Pinterest SEO estimations, trend projections, and downloader utilities.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-4xl">
      <Breadcrumbs items={[{ name: 'Disclaimer', url: '/disclaimer' }]} />

      <div className="space-y-3">
        <span className="badge">Legal Disclosures</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Disclaimer</h1>
        <p className="text-xs text-slate-500">Published by SPManchester Private Limited Company</p>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Independence & Non-Affiliation</h2>
          <p>
            The All-in-One Pinterest SEO & Content Toolkit is an independent software application created and operated solely by <strong>SPManchester Private Limited Company</strong>. We are not an official Pinterest tool, nor are we partnered with, sponsored by, or endorsed by Pinterest, Inc.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. SEO & Ranking Projections</h2>
          <p>
            The keyword volumes, trend trajectory scores, and SEO metrics displayed throughout this site are algorithmic estimates intended solely for strategic guidance and creative inspiration. We do not guarantee specific rankings, viral impressions, outbound website clicks, or financial results on Pinterest or search engines.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Public Media Downloader</h2>
          <p>
            Our downloader tools are designed strictly as technical utilities to save publicly accessible content for personal reference, study, and fair use. Users are strictly responsible for adhering to international copyright laws and Pinterest&apos;s Terms of Service. SPManchester does not host or pirate media files.
          </p>
        </section>
      </div>
    </div>
  );
}
