import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * FinalCTA – the concluding call‑to‑action section encouraging users to start using the toolkit.
 */
export default function FinalCTA() {
  return (
    <section className="bg-[#FAFAFC] py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Ready to supercharge your Pinterest growth?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Unlock all 13 free tools instantly – no sign‑up, no credit card, just powerful SEO and content creation.
        </p>
        <Link
          href="/pinterest-seo-keywords"
          className="inline-flex items-center px-8 py-3 bg-[#E60023] text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
        >
          Start for Free
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}
