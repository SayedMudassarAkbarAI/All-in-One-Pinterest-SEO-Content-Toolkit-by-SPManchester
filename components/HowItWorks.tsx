import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

export default function HowItWorks({
  title = 'How It Works',
  subtitle = 'Simple 4-step workflow to accelerate your Pinterest content discovery & rankings.',
  steps = [
    {
      number: '01',
      title: 'Select Your Niche or Enter URL',
      description: 'Choose from our 13 specialized tools and input your topic, seed keyword, or public Pinterest Pin URL.',
    },
    {
      number: '02',
      title: 'Instant Algorithmic Processing',
      description: 'Our engine identifies semantic trends, parses keyword search volume, and formulates high-CTR copy.',
    },
    {
      number: '03',
      title: 'Review & Copy Results',
      description: 'Explore categorized clusters, copy individual hashtags or full sets in one tap with clean formatting.',
    },
    {
      number: '04',
      title: 'Publish & Watch Traffic Grow',
      description: 'Apply the generated SEO metadata to your Pins, Boards, and titles to dominate Pinterest search results.',
    },
  ],
}: HowItWorksProps) {
  return (
    <section className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="badge mb-3">Simple Workflow</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="glass-card p-6 relative border border-slate-800/80 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl font-black text-red-500/30 mb-4 font-mono">
                {step.number}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-red-400 font-semibold">
              <span>Ready in seconds</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
