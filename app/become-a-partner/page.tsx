import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Become a Partner | SPManchester Private Limited Company',
  description:
    'Partner with SPManchester Private Limited Company on Pinterest marketing, co-branded tools, digital services, and affiliate distribution.',
};

export default function BecomeAPartnerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Become a Partner', url: '/become-a-partner' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Ecosystem Opportunities</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Become a Partner with <span className="text-red-500">SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Collaborate with SPManchester Private Limited Company to reach millions of creators, digital entrepreneurs, bloggers, and eCommerce merchants worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
          <span className="text-red-400 font-bold text-xs uppercase">Creators & Influencers</span>
          <h3 className="text-lg font-bold text-white">Affiliate & Sponsorship</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Co-brand content, review our toolkit, or provide custom templates to your audience with dedicated revenue share structures.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
          <span className="text-blue-400 font-bold text-xs uppercase">Agencies & Consultancies</span>
          <h3 className="text-lg font-bold text-white">White-Label & Custom API</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Integrate our Pinterest SEO engines, keyword clustering, and trend data directly into your agency client reporting dashboards.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
          <span className="text-emerald-400 font-bold text-xs uppercase">Enterprise Brands</span>
          <h3 className="text-lg font-bold text-white">Service Synergies</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Leverage SPManchester&apos;s full-stack software development, IT consulting, and custom AI engineering capabilities.
          </p>
        </div>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Submit a Partnership Proposal</h2>
        <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto">
          Reach out directly to our partnerships team with your proposal, audience size, or software integration requirements.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link href="/contact" className="btn btn-primary text-xs py-3 px-6 rounded-xl">
            Inquire via Contact Form
          </Link>
          <a
            href="mailto:info@spmanchester.com?subject=Partnership%20Proposal"
            className="btn btn-secondary text-xs py-3 px-6 rounded-xl"
          >
            Email info@spmanchester.com
          </a>
        </div>
      </div>
    </div>
  );
}
