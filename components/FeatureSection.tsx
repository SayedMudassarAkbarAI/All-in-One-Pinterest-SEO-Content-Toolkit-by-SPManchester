import React from 'react';
import { Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

/**
 * FeatureSection – showcases core benefits of the toolkit with three highlighted cards.
 * Uses glass‑morphism cards, subtle hover lift, and fluid typography.
 */
export function FeatureSection() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'All‑in‑One Platform',
      description: 'One seamless hub for SEO, trends, content ideas, and media downloads.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Free Forever',
      description: 'No sign‑up, no credit‑card – use all tools without limits.',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Data‑Driven Results',
      description: 'Real‑time trends and keyword insights to stay ahead of the curve.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-8">
        Why Choose Our Toolkit?
      </h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center mr-3">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
