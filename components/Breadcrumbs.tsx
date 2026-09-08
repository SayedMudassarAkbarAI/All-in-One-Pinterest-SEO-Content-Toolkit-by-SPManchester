import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/seo';

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
    <nav aria-label="Breadcrumb" className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {isLast ? (
                <span className="text-slate-200 font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-red-400 transition-colors">
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
