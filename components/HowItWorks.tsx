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
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E60023] bg-red-50 border border-red-200/70 px-4 py-1.5 rounded-full shadow-xs mb-4">
          Simple Workflow
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{subtitle}</p>
      </div>

      <div className="relative">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-slate-200 -translate-y-10 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="saas-card p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                Step {step.number} of 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
