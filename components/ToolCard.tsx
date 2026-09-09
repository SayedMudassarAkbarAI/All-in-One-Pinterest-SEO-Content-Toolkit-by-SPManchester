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
      className="group relative saas-card flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E60023] focus-visible:ring-offset-2"
    >
      <div>
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-5 gap-3">
          <div
            className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-[#E60023] flex items-center justify-center group-hover:bg-[#E60023] group-hover:text-white group-hover:border-transparent transition-colors duration-200 shrink-0 shadow-2xs"
          >
            {renderIcon(tool.icon)}
          </div>

          {tool.badge && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border leading-none mt-0.5 whitespace-nowrap shadow-2xs ${
                tool.badge === 'Popular' || tool.badge === 'Core Tool'
                  ? 'bg-red-50 text-[#E60023] border-red-200/70'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {tool.badge}
            </span>
          )}
        </div>

        {/* Tool Name */}
        <h3 className="font-bold text-slate-900 group-hover:text-[#E60023] transition-colors leading-snug mb-2 text-lg">
          {tool.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed text-sm line-clamp-2 mb-6">
          {tool.shortDescription}
        </p>
      </div>

      {/* Footer CTA row */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-700 group-hover:text-[#E60023] transition-colors">
        <span>Open Tool</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </Link>
  );
}
