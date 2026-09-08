import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  SITE_URL,
  COMPANY_NAME,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  themeColor: '#050a12',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'All-in-One Pinterest SEO & Content Toolkit by SPManchester',
    template: '%s | SPManchester',
  },
  description:
    'Free Pinterest SEO keywords, trending topics, hashtags, title & description generator, and public media downloader tools by SPManchester Private Limited Company.',
  keywords: [
    'Pinterest SEO',
    'Pinterest Keywords',
    'Pinterest Trends',
    'Pinterest Hashtag Generator',
    'Pinterest Downloader',
    'Pinterest Pin Ideas',
    'SPManchester',
    'Pinterest Marketing 2026',
  ],
  authors: [{ name: COMPANY_NAME, url: 'https://spmanchester.com/' }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  icons: {
    icon: '/favicon.ico',
    apple: '/logo/spmanchester_logoo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `Pinterest SEO & Content Toolkit by SPManchester`,
    images: [
      {
        url: '/logo/spmanchester_logoo.png',
        width: 1200,
        height: 630,
        alt: 'All-in-One Pinterest SEO & Content Toolkit by SPManchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@spmanchester',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-[#050a12] text-slate-100 min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
