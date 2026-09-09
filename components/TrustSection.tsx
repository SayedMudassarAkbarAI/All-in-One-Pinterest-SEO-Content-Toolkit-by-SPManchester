import React from 'react';
import { Users, ShieldCheck, Star } from 'lucide-react';

/**
 * TrustSection – showcases credibility with stats and trust signals.
 * Uses three cards with icons, short titles, and supporting text.
 */
export function TrustSection() {
  const items = [
    {
      icon: <Users className="w-5 h-5" />, 
      title: '10K+ Happy Users',
      description: 'Creators worldwide trust our free toolkit to grow their Pinterest presence.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: '100% Secure',
      description: 'Your data never leaves your browser – privacy‑first, no tracking.',
    },
    {
      icon: <Star className="w-5 h-5" />, 
      title: 'Industry‑Recognized',
      description: 'Featured on leading marketing blogs and recommended by top Pinterest experts.',
    },
  ];

  return (
    <section className="bg-[#FAFAFC] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
          Trusted By Creators Everywhere
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
