import React from 'react';
import { Sparkles, ShieldCheck, Download, TrendingUp } from 'lucide-react';

/**
 * StatCards – horizontal strip of 4 rounded statistic cards.
 * Each card uses glass‑morphism styling with a subtle shadow and hover lift.
 */
export function StatCards() {
  const cards = [
    {
      icon: <Sparkles className="w-4 h-4" />,
      value: '13+',
      title: 'Dedicated Tools',
      description: 'Powerful, free Pinterest SEO tools',
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      value: '100%',
      title: 'Free Forever',
      description: 'No Credit Card Required',
    },
    {
      icon: <Download className="w-4 h-4" />,
      value: 'HD',
      title: 'Original Media',
      description: 'Clean, Crisp, High Quality',
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      value: '2026',
      title: 'Ready',
      description: 'Fresh Tools. Smarter Results.',
    },
  ];

  return (
    <section className="container mx-auto px-4 -mt-10">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="p-6 text-center space-y-1 hover:bg-slate-50/50 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center mx-auto mb-2">
              {c.icon}
            </div>
            <div className="text-2xl font-extrabold text-slate-900 font-display">{c.value}</div>
            <div className="text-xs font-semibold text-slate-700">{c.title}</div>
            <div className="text-[11px] text-slate-400">{c.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
