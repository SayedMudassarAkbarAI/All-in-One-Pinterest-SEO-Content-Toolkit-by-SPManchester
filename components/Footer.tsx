import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03070d] border-t border-slate-800 text-slate-400 text-sm mt-24">
      {/* Company Services Teaser Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-red-500">
                Developed & Operated By
              </p>
              <h4 className="text-white text-lg font-bold mt-1">
                SPManchester Private Limited Company
              </h4>
              <p className="text-xs text-slate-400 max-w-2xl mt-1">
                A digital technology firm providing IT support, cloud solutions, marketing, web & mobile development, AI, SEO, eCommerce, and enterprise consulting.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://spmanchester.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs py-2 px-4 rounded-lg"
              >
                Visit SPManchester.com →
              </a>
              <Link
                href="/become-a-partner"
                className="btn btn-primary text-xs py-2 px-4 rounded-lg"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/spmanchester_logoo.png"
                alt="SPManchester"
                width={180}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier free-first Pinterest SEO & Content Generation Toolkit. Discover breakout trends, generate ranking keywords, craft viral pin titles, and download public media in high-definition quality.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Official Company:</strong> SPManchester Private Limited Company
              </p>
              <p>
                <strong className="text-slate-300">Phone:</strong> +92 306 4350580
              </p>
              <p>
                <strong className="text-slate-300">Email:</strong> info@spmanchester.com
              </p>
              <p>
                <strong className="text-slate-300">Headquarters:</strong> spmanchester.com
              </p>
            </div>
          </div>

          {/* Pinterest SEO Tools */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Pinterest SEO
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/pinterest-trending-keywords-generator" className="hover:text-red-400 transition-colors">
                  Trending Keywords Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-seo-keywords" className="hover:text-red-400 transition-colors">
                  Pinterest SEO Keywords
                </Link>
              </li>
              <li>
                <Link href="/pinterest-hashtag-generator" className="hover:text-red-400 transition-colors">
                  Hashtag Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-title-generator" className="hover:text-red-400 transition-colors">
                  Pin Title Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-description-generator" className="hover:text-red-400 transition-colors">
                  Pin Description Generator
                </Link>
              </li>
              <li>
                <Link href="/pinterest-pin-ideas" className="hover:text-red-400 transition-colors">
                  Pin Ideas Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Trends & Utilities */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Trends & Downloader
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/pinterest-trends" className="hover:text-red-400 transition-colors">
                  Pinterest Trends Explorer
                </Link>
              </li>
              <li>
                <Link href="/seasonal-pinterest-trends" className="hover:text-red-400 transition-colors">
                  Seasonal Trends Calendar
                </Link>
              </li>
              <li>
                <Link href="/compare-keywords" className="hover:text-red-400 transition-colors">
                  Compare Pinterest Keywords
                </Link>
              </li>
              <li>
                <Link href="/pinterest-downloader" className="hover:text-red-400 transition-colors">
                  All-in-One Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-video-downloader" className="hover:text-red-400 transition-colors">
                  Video Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-image-downloader" className="hover:text-red-400 transition-colors">
                  Image Downloader
                </Link>
              </li>
              <li>
                <Link href="/pinterest-gif-downloader" className="hover:text-red-400 transition-colors">
                  GIF Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about-sp-manchester" className="hover:text-red-400 transition-colors">
                  About SPManchester
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/become-a-partner" className="hover:text-red-400 transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-red-400 transition-colors">
                  Tool Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-red-400 transition-colors">
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} SPManchester Private Limited Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/spmanchester"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://wa.me/923064350580"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
