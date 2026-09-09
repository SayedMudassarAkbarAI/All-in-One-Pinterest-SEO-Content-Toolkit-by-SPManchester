import React from 'react';
import { TOOLS } from '@/data/tools';
import ToolCard from './ToolCard';

interface RelatedToolsProps {
  currentSlug: string;
  category?: 'seo' | 'generator' | 'trends' | 'downloader';
  limit?: number;
}

export default function RelatedTools({
  currentSlug,
  category,
  limit = 3,
}: RelatedToolsProps) {
  let filtered = TOOLS.filter((t) => t.slug !== currentSlug);

  if (category) {
    const sameCategory = filtered.filter((t) => t.category === category);
    if (sameCategory.length >= limit) {
      filtered = sameCategory;
    }
  }

  const selected = filtered.slice(0, limit);

  return (
    <section className="py-16 border-t border-slate-200/80">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="badge mb-2">Explore Ecosystem</span>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Related Pinterest Tools by SPManchester
        </h3>
        <p className="text-xs text-slate-500">
          Pair this tool with our other free utilities to amplify your impressions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selected.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
