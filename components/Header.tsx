'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050a12]/85 border-b border-slate-800/80 transition-all">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-44 h-12 flex items-center">
            <Image
              src="/logo/spmanchester_logoo.png"
              alt="SPManchester Private Limited Company"
              width={200}
              height={50}
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20">
            Pinterest Toolkit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/#tools" className="hover:text-red-400 transition-colors">
            All Tools
          </Link>
          <Link href="/pinterest-seo-keywords" className="hover:text-red-400 transition-colors">
            Pinterest SEO
          </Link>
          <Link href="/pinterest-trends" className="hover:text-red-400 transition-colors">
            Trends
          </Link>
          <Link href="/pinterest-downloader" className="hover:text-red-400 transition-colors">
            Downloader
          </Link>
          <Link href="/seasonal-pinterest-trends" className="hover:text-red-400 transition-colors">
            Seasonal
          </Link>
          <Link href="/about-sp-manchester" className="hover:text-red-400 transition-colors">
            About SPManchester
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/pinterest-downloader"
            className="btn btn-primary text-xs py-2 px-4 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Pin Downloader</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1628]/95 border-b border-slate-800 px-4 pt-3 pb-6 animate-slide-down">
          <div className="flex flex-col gap-3 text-slate-300 font-medium text-base">
            <Link
              href="/#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              All Pinterest Tools
            </Link>
            <Link
              href="/pinterest-seo-keywords"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              Pinterest SEO Keywords
            </Link>
            <Link
              href="/pinterest-trending-keywords-generator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              Trending Keywords
            </Link>
            <Link
              href="/pinterest-trends"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              Pinterest Trends
            </Link>
            <Link
              href="/seasonal-pinterest-trends"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              Seasonal Calendar
            </Link>
            <Link
              href="/pinterest-downloader"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60 text-red-400 font-semibold"
            >
              Pinterest Downloader
            </Link>
            <Link
              href="/about-sp-manchester"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400 border-b border-slate-800/60"
            >
              About SPManchester
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
