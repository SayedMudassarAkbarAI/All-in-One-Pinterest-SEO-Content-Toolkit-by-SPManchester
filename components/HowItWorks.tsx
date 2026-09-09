import React from 'react';
import { Target, Search, Sparkles, TrendingUp } from 'lucide-react';

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
  subtitle = 'A simple, 4-step workflow to accelerate your Pinterest content discovery & rankings.',
  steps = [
    {
      number: '01',
      title: 'Choose Your Topic',
      description: 'Select from our 13 tools and enter any niche, seed keyword, or public Pinterest Pin URL.',
    },
    {
      number: '02',
      title: 'Discover Opportunities',
      description: 'Our engine identifies semantic trends, volume indicators, and seasonal demand trajectories.',
    },
    {
      number: '03',
      title: 'Generate Optimized Content',
      description: 'Formulate high-CTR titles, descriptions, hashtags, and visual prompts in one click.',
    },
    {
      number: '04',
      title: 'Publish & Grow',
      description: 'Apply the generated metadata to your Pins and Boards to capture compounding search traffic.',
    },
  ],
}: HowItWorksProps) {
  const stepIcons = [
    <Target key="1" className="w-5 h-5 text-[#E60023]" />,
    <Search key="2" className="w-5 h-5 text-[#E60023]" />,
    <Sparkles key="3" className="w-5 h-5 text-[#E60023]" />,
    <TrendingUp key="4" className="w-5 h-5 text-[#E60023]" />,
  ];

  return (
    <section className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="badge mb-3">Simple Workflow</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 text-sm">{subtitle}</p>
      </div>

      <div className="relative">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-slate-200 -translate-y-12 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="saas-card p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                Step {step.number} of 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
