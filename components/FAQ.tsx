'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';
import { generateFAQSchema } from '@/lib/seo';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about Pinterest SEO, algorithms, and content workflows.',
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schema = generateFAQSchema(faqs);

  return (
    <section className="py-20">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="badge mb-3">FAQ</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between py-5 text-left text-sm md:text-base font-semibold text-slate-900 hover:text-[#E60023] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#E60023]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pb-5 pt-1 text-slate-600 text-sm leading-relaxed animate-fade-in pr-6">
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
