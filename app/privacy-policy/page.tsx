import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | SPManchester Private Limited Company',
  description: 'Privacy Policy for the All-in-One Pinterest SEO & Content Toolkit operated by SPManchester Private Limited Company.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-4xl">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <div className="space-y-3">
        <span className="badge">Legal Agreement</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: January 1, 2026 | Last Updated: 2026</p>
      </div>

      <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-800 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Introduction & Scope</h2>
          <p>
            This Privacy Policy describes how <strong>SPManchester Private Limited Company</strong> (&quot;SPManchester&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles information in connection with the operation of the All-in-One Pinterest SEO & Content Toolkit website and related online utilities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Information We Do NOT Collect</h2>
          <p>
            We prioritize strict user privacy. Our tools are free to use without mandatory user registration or account creation. We do NOT collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Your personal identity, home address, or credit card numbers.</li>
            <li>Your private Pinterest login credentials, passwords, or authentication cookies.</li>
            <li>Your private, secret, or archived Pinterest boards.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Information We Collect Automatically</h2>
          <p>
            When you visit our site, our servers log anonymous technical information including your truncated IP address (strictly for rate limiting and bot mitigation), browser type, referring URLs, and aggregated tool generation events (e.g. `tool_opened`, `keyword_generated`). No personally identifying information is attached to these logs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Pinterest Downloader Utilities</h2>
          <p>
            When you use our media download tools, you provide a public URL. Our servers query the publicly available headers of the target Pinterest resource to identify media streams. We do not store, archive, or host downloaded videos, images, or GIFs on our servers. All downloads are fetched on-the-fly and streamed directly to your browser session.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">5. Cookies & Analytics</h2>
          <p>
            We may use minimal, privacy-compliant cookies strictly necessary for load balancing, rate limiting, and core web platform security.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">6. Contact Information</h2>
          <p>
            For questions regarding this policy, contact SPManchester Private Limited Company at:
          </p>
          <p className="text-white font-mono text-xs mt-1">
            Email: info@spmanchester.com | Phone: +92 306 4350580 | Website: spmanchester.com
          </p>
        </section>
      </div>
    </div>
  );
}
