import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | SPManchester Private Limited Company',
  description: 'Terms of Service governing the use of the All-in-One Pinterest SEO & Content Toolkit.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-4xl">
      <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />

      <div className="space-y-3">
        <span className="badge">Legal Terms</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Effective Date: January 1, 2026 | Last Updated: 2026</p>
      </div>

      <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-800 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the All-in-One Pinterest SEO & Content Toolkit (&quot;Toolkit&quot;) developed and operated by <strong>SPManchester Private Limited Company</strong>, you agree to be bound by these Terms of Service. If you do not agree, do not use the Toolkit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Acceptable Use Policy</h2>
          <p>
            You agree to use this website solely for lawful, authorized purposes. You strictly agree NOT to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Abuse, flood, or conduct Denial of Service (DoS) attacks against our API infrastructure.</li>
            <li>Use automated scrapers, bots, or unauthorized crawlers at high frequencies that circumvent our rate limits.</li>
            <li>Use our downloader tools to infringe, pirate, or commercially redistribute intellectual property belonging to copyright holders without authorization.</li>
            <li>Attempt to bypass authentication, DRM protections, or access private Pins on Pinterest.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Third-Party Trademarks & Disclaimer</h2>
          <p>
            &quot;Pinterest&quot; is a registered trademark of Pinterest, Inc. This Toolkit is an independent software product developed and maintained by SPManchester Private Limited Company and is <strong>not endorsed by, directly affiliated with, sponsored by, or associated with Pinterest, Inc.</strong>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Limitation of Liability</h2>
          <p>
            The tools, keyword metrics, trend estimations, and generated content are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. SPManchester Private Limited Company shall not be liable for any indirect, punitive, or consequential damages arising from your use of this service.
          </p>
        </section>
      </div>
    </div>
  );
}
