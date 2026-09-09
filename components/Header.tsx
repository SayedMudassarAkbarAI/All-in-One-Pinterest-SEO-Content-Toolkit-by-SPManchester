'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tools', href: '/#tools' },
    { name: 'Pinterest SEO', href: '/pinterest-seo-keywords' },
    { name: 'Trends', href: '/pinterest-trends' },
    { name: 'Downloader', href: '/pinterest-downloader' },
    { name: 'Seasonal', href: '/seasonal-pinterest-trends' },
    { name: 'About', href: '/about-sp-manchester' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03)]'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[72px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative h-10 w-40 flex items-center">
            <Image
              src="/logo/spmanchester_logoo.png"
              alt="SPManchester Private Limited Company"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            <Sparkles className="w-3 h-3 text-[#E60023]" />
            Toolkit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  active
                    ? 'text-[#E60023] bg-red-50/70 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#tools"
            className="btn btn-primary text-xs py-2.5 px-4 rounded-lg shadow-sm font-medium"
          >
            <span>Explore Free Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-1 text-slate-700 font-medium text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-[#E60023] bg-red-50 font-semibold'
                    : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                href="/#tools"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full text-xs py-3 rounded-lg justify-center shadow-sm"
              >
                <span>Explore All Free Tools</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
