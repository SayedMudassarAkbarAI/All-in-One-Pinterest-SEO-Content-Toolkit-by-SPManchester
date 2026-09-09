import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />}
              {index === 0 && <Home className="w-3.5 h-3.5 text-slate-400 mr-0.5" />}
              {isLast ? (
                <span className="text-slate-900 font-semibold">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-[#E60023] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
