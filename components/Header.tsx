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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/40'
      }`}
    >
      {/* Nav bar */}
      <div
        className="container mx-auto flex items-center justify-between"
        style={{ height: '64px' }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          aria-label="SPManchester — Home"
        >
          <div className="relative flex items-center" style={{ width: 136, height: 36 }}>
            <Image
              src="/logo/spmanchester_logoo.png"
              alt="SPManchester Private Limited Company"
              width={136}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 leading-none select-none">
            <Sparkles className="w-3 h-3 text-[#E60023]" />
            Toolkit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-[13.5px] font-medium transition-all leading-none ${
                  active
                    ? 'text-[#E60023] bg-red-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/#tools"
            className="btn btn-primary rounded-lg shadow-sm"
            style={{ fontSize: '13px', padding: '0.55rem 1.1rem', minHeight: '38px' }}
          >
            <span>Explore Free Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen
            ? <X className="w-5 h-5" />
            : <Menu className="w-5 h-5" />
          }
        </button>
      </div>

      {/* Mobile Drawer — full-bleed slide */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white border-b border-slate-100 animate-fade-in"
          style={{
            boxShadow: '0 8px 24px -4px rgba(15,23,42,0.08)',
          }}
        >
          <div className="container mx-auto py-4 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 rounded-xl transition-colors font-medium ${
                  isActive(link.href)
                    ? 'text-[#E60023] bg-red-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
                style={{ fontSize: '15px', minHeight: '48px' }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                href="/#tools"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center rounded-xl"
                style={{ fontSize: '14px', minHeight: '48px' }}
              >
                <span>Explore All Free Tools</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
