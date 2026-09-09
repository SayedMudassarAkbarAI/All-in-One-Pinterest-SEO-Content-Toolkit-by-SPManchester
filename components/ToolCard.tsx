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
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Hash':
        return <Hash {...props} />;
      case 'Type':
        return <Type {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'BarChart2':
        return <BarChart2 {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'Image':
        return <ImageIcon {...props} />;
      case 'Film':
        return <Film {...props} />;
      case 'DownloadCloud':
      default:
        return <Download {...props} />;
    }
  };

  return (
    <Link
      href={`/${tool.slug}`}
      className="group relative saas-card p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1 focus:outline-none"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-50/80 border border-red-100 text-[#E60023] flex items-center justify-center group-hover:bg-[#E60023] group-hover:text-white transition-colors duration-200">
            {renderIcon(tool.icon)}
          </div>
          {tool.badge && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                tool.badge === 'Popular' || tool.badge === 'Core Tool'
                  ? 'bg-red-50 text-[#E60023] border-red-200/60'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {tool.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E60023] transition-colors mb-1.5 leading-snug">
          {tool.name}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
          {tool.shortDescription}
        </p>
      </div>

      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#E60023] transition-colors">
        <span>Open Tool</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
