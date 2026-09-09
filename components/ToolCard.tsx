import React from 'react';
import Link from 'next/link';
import { ToolItem } from '@/data/tools';
import {
  TrendingUp,
  Search,
  Hash,
  Type,
  FileText,
  Lightbulb,
  Activity,
  Calendar,
  BarChart2,
  Download,
  Video,
  Image as ImageIcon,
  Film,
  ArrowRight,
} from 'lucide-react';

interface ToolCardProps {
  tool: ToolItem;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'TrendingUp':   return <TrendingUp {...props} />;
      case 'Search':       return <Search {...props} />;
      case 'Hash':         return <Hash {...props} />;
      case 'Type':         return <Type {...props} />;
      case 'FileText':     return <FileText {...props} />;
      case 'Lightbulb':   return <Lightbulb {...props} />;
      case 'Activity':    return <Activity {...props} />;
      case 'Calendar':    return <Calendar {...props} />;
      case 'BarChart2':   return <BarChart2 {...props} />;
      case 'Video':       return <Video {...props} />;
      case 'Image':       return <ImageIcon {...props} />;
      case 'Film':        return <Film {...props} />;
      case 'DownloadCloud':
      default:            return <Download {...props} />;
    }
  };

  return (
    <Link
      href={`/${tool.slug}`}
      className="group relative saas-card flex flex-col justify-between hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E60023] focus-visible:ring-offset-2"
      style={{
        padding: 'clamp(1.1rem, 3vw, 1.5rem)',
        transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
      }}
    >
      <div>
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div
            className="rounded-xl bg-red-50/80 border border-red-100 text-[#E60023] flex items-center justify-center group-hover:bg-[#E60023] group-hover:text-white group-hover:border-transparent transition-colors duration-200 shrink-0"
            style={{ width: 40, height: 40 }}
          >
            {renderIcon(tool.icon)}
          </div>

          {tool.badge && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border leading-none mt-0.5 whitespace-nowrap ${
                tool.badge === 'Popular' || tool.badge === 'Core Tool'
                  ? 'bg-red-50 text-[#E60023] border-red-200/60'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {tool.badge}
            </span>
          )}
        </div>

        {/* Tool Name — fluid size so it reads well on mobile */}
        <h3
          className="font-bold text-slate-900 group-hover:text-[#E60023] transition-colors leading-snug mb-1.5"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw + 0.3rem, 1.05rem)' }}
        >
          {tool.name}
        </h3>

        {/* Description — slightly larger on mobile for readability */}
        <p
          className="text-slate-500 leading-relaxed line-clamp-2 mb-4"
          style={{ fontSize: 'clamp(0.78rem, 1vw + 0.2rem, 0.84rem)' }}
        >
          {tool.shortDescription}
        </p>
      </div>

      {/* Footer CTA row */}
      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#E60023] transition-colors">
        <span>Open Tool</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
