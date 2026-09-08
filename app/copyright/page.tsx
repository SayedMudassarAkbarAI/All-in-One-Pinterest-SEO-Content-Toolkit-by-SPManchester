import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Copyright & DMCA Notice | SPManchester Private Limited Company',
  description: 'Copyright policies, intellectual property protections, and DMCA takedown procedures for SPManchester.',
};

export default function CopyrightPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-4xl">
      <Breadcrumbs items={[{ name: 'Copyright Notice', url: '/copyright' }]} />

      <div className="space-y-3">
        <span className="badge">Intellectual Property</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Copyright & DMCA Notice</h1>
        <p className="text-xs text-slate-400">Published by SPManchester Private Limited Company</p>
      </div>

      <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-800 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Platform Intellectual Property</h2>
          <p>
            All original website design, UI components, brand assets, custom algorithms, proprietary software code, and copywriting contained on this website are the intellectual property of <strong>SPManchester Private Limited Company</strong> and are protected under international copyright and trademark laws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Pinterest Content & Third-Party Rights</h2>
          <p>
            SPManchester respects the intellectual property rights of all content creators, photographers, and artists. We do not claim ownership of any third-party images, videos, or media fetched via our downloader tools. All media rights remain with their respective copyright holders.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. DMCA / Takedown Inquiries</h2>
          <p>
            If you believe your intellectual property rights have been violated in connection with any aspect of our service, please send a notice to our designated agent at:
          </p>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
            <p>Attn: Legal & Copyright Agent</p>
            <p>SPManchester Private Limited Company</p>
            <p>Email: info@spmanchester.com</p>
            <p>Phone: +92 306 4350580</p>
          </div>
        </section>
      </div>
    </div>
  );
}
