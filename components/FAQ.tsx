'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';
import { generateFAQSchema } from '@/lib/seo';

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about Pinterest SEO, algorithms, and content growth.',
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schema = generateFAQSchema(faqs);

  return (
    <section className="py-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="badge mb-3">Got Questions?</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="border border-slate-800/80 rounded-xl bg-[#0a1628]/40 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-semibold text-white hover:text-red-400 transition-colors focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transform transition-transform shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-red-500' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
