import React from 'react';
import { TOOLS } from '@/data/tools';
import ToolCard from '@/components/ToolCard';

/**
 * ToolDirectory – grid showcasing all available tools (14 items) with responsive layout.
 * Each tool is rendered using the existing `ToolCard` component which provides
 * glass‑morphism styling, badge support and hover interaction.
 */
export function ToolDirectory() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
        Explore Our Free Pinterest Toolkit
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
