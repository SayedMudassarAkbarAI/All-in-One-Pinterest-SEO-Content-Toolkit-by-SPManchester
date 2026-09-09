import React from 'react';
import Link from 'next/link';
import { BookOpen, Lightbulb, Video } from 'lucide-react';

/**
 * GuidesSection – showcases curated guides, tutorials and video walkthroughs.
 * Simple cards with an icon, title, brief description and a CTA link.
 */
export default function GuidesSection() {
  const guides = [
    {
      icon: <BookOpen className="w-5 h-5" />, 
      title: 'SEO Keyword Guide',
      description: 'Step‑by‑step workflow to find high‑intent Pinterest keywords.',
      href: '/guides/seo-keyword',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />, 
      title: 'Content Ideation Playbook',
      description: 'Generate viral pin ideas and content calendars in minutes.',
      href: '/guides/content-ideation',
    },
    {
      icon: <Video className="w-5 h-5" />, 
      title: 'Video Downloader Tutorial',
      description: 'Learn how to download high‑quality Pinterest videos quickly.',
      href: '/guides/video-downloader',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
        Guides & Resources
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g, i) => (
          <Link
            key={i}
            href={g.href}
            className="group flex flex-col p-6 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E60023] flex items-center justify-center mr-3">
                {g.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#E60023] transition-colors">
                {g.title}
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{g.description}</p>
            <span className="mt-auto text-xs font-semibold text-[#E60023] group-hover:underline">Read guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
