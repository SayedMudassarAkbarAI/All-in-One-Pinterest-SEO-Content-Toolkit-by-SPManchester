import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-600 text-sm mt-28">
      {/* Company Teaser Strip */}
      <div className="border-b border-slate-200/70 bg-white/70 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="badge-neutral mb-2">Corporate Technology</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Built & Operated by SPManchester Private Limited Company
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                SPManchester Private Limited Company develops modern technology platforms across AI, SEO, software engineering, web development, and digital commerce.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://spmanchester.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs py-2.5 px-4 rounded-lg flex items-center gap-1.5"
              >
                <span>Visit spmanchester.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <Link
                href="/become-a-partner"
                className="btn btn-primary text-xs py-2.5 px-4 rounded-lg"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/spmanchester_logoo.png"
                alt="SPManchester Private Limited Company"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              A free-first Pinterest SEO, keyword discovery, and content creation toolkit designed for creators, bloggers, Etsy sellers, and eCommerce brands.
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="font-medium text-slate-700">+92 306 4350580</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="font-medium text-slate-700">info@spmanchester.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="font-medium text-slate-700">spmanchester.com</span>
              </div>
            </div>
          </div>

          {/* Pinterest SEO */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Pinterest SEO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pinterest-trending-keywords-generator" className="hover:text-slate-900 hover:underline transition-colors">
                  Trending Keywords
                </Link>
              </li>
              <li>
                <Link href="/pinterest-seo-keywords" className="hover:text-slate-900 hover:underline transition-colors">
                  Pinterest SEO Keywords
                </Link>
              </li>
              <li>
                <Link href="/pinterest-hashtag-generator" className="hover:text-slate-900 hover:underline transition-colors">
                  Hashtag Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-title-generator" className="hover:text-slate-900 hover:underline transition-colors">
                  Pin Title Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-description-generator" className="hover:text-slate-900 hover:underline transition-colors">
                  Pin Description Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-pin-ideas" className="hover:text-slate-900 hover:underline transition-colors">
                  Pin Ideas Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Trends & Utilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Trends & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pinterest-trends" className="hover:text-slate-900 hover:underline transition-colors">
                  Trends Explorer
                </Link>
              </li>
              <li>
                <Link href="/seasonal-pinterest-trends" className="hover:text-slate-900 hover:underline transition-colors">
                  Seasonal Demand Calendar
                </Link>
              </li>
              <li>
                <Link href="/compare-keywords" className="hover:text-slate-900 hover:underline transition-colors">
                  Compare Keywords
                </Link>
              </li>
              <li>
                <Link href="/pinterest-downloader" className="hover:text-slate-900 hover:underline transition-colors">
                  All-in-One Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-video-downloader" className="hover:text-slate-900 hover:underline transition-colors">
                  Video Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-image-downloader" className="hover:text-slate-900 hover:underline transition-colors">
                  Image Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-gif-downloader" className="hover:text-slate-900 hover:underline transition-colors">
                  GIF Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-sp-manchester" className="hover:text-slate-900 hover:underline transition-colors">
                  About SPManchester
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/become-a-partner" className="hover:text-slate-900 hover:underline transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <a
                  href="https://spmanchester.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  Corporate Services
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-900 hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 hover:underline transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-slate-900 hover:underline transition-colors">
                  Tool Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-slate-900 hover:underline transition-colors">
                  Copyright & DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200/80 py-6 bg-white/50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} SPManchester Private Limited Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://wa.me/923064350580"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
