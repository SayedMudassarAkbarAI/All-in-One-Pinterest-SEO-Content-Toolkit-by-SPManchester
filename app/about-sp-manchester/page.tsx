import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'About SPManchester Private Limited Company | Pinterest Toolkit',
  description:
    'Learn about SPManchester Private Limited Company, a premier digital technology, IT consulting, and web development firm powering the free Pinterest SEO & Content Toolkit.',
};

export default function AboutSPManchesterPage() {
  const services = [
    { title: 'Web Design & Development', desc: 'Enterprise-grade, high-performance web applications built with Next.js, React, and modern full-stack architectures.' },
    { title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android delivering fluid user experiences and real-time synchronicity.' },
    { title: 'Graphic Design & UI/UX', desc: 'Design systems, branding identity, conversion-focused wireframes, and human-centered design for digital products.' },
    { title: 'IT Consultancy', desc: 'Strategic IT roadmap advisory, cloud migration, security posture hardening, and digital transformation consulting.' },
    { title: 'Digital Product & Ads Management', desc: 'End-to-end management of paid performance campaigns, funnel optimization, and scalable acquisition engines.' },
    { title: 'Search Engine Optimization (SEO)', desc: 'Technical SEO audits, topical cluster engineering, programmatic SEO architecture, and keyword authority building.' },
    { title: 'eCommerce Development', desc: 'High-converting custom eCommerce stores with seamless checkout flows, ERP integration, and multi-currency support.' },
    { title: 'Artificial Intelligence', desc: 'Custom generative AI pipelines, predictive machine learning models, autonomous workflows, and LLM fine-tuning.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'About SPManchester', url: '/about-sp-manchester' }]} />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Corporate Overview</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About <span className="text-red-600">SPManchester</span> Private Limited Company
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Empowering creators, entrepreneurs, and global businesses with state-of-the-art digital technology, enterprise software engineering, and high-impact SEO infrastructure.
        </p>
      </div>

      {/* Story & Vision */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-center pb-6 border-b border-slate-100">
          <Image
            src="/logo/spmanchester_logoo.png"
            alt="SPManchester Private Limited Company Logo"
            width={240}
            height={60}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-slate-900">Our Mission & Relationship to This Toolkit</h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>SPManchester Private Limited Company</strong> is a registered technology and digital solutions company providing IT support, cloud solutions, marketing, web development, AI, and consulting services worldwide.
        </p>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          The <strong>All-in-One Pinterest SEO & Content Toolkit</strong> was engineered by SPManchester to solve a core frustration experienced by digital marketers and creators: fragmented, expensive, and ad-bloated tools. We created this suite as a 100% free, high-speed public platform to help pinners find trends, generate keyword-optimized copy, and save public media.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-red-600 text-xs font-bold uppercase">Phone</span>
            <p className="text-slate-900 font-semibold text-sm mt-1">+92 306 4350580</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-blue-600 text-xs font-bold uppercase">Email</span>
            <p className="text-slate-900 font-semibold text-sm mt-1">info@spmanchester.com</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-emerald-700 text-xs font-bold uppercase">Official Website</span>
            <p className="text-slate-900 font-semibold text-sm mt-1">spmanchester.com</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <span className="badge mb-2">Our Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            SPManchester Professional Services
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Need custom web engineering, bespoke AI solutions, or dedicated enterprise SEO?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{srv.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://spmanchester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Partner With SPManchester</h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Interested in joint ventures, custom tool integrations, or hiring our software engineering teams? Let&apos;s build together.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/contact" className="btn btn-primary text-xs py-2.5 px-6 rounded-xl shadow-xs">
            Contact Our Team
          </Link>
          <Link href="/become-a-partner" className="btn btn-secondary text-xs py-2.5 px-6 rounded-xl shadow-xs">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
