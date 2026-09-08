import { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pinterest.spmanchester.com';
export const COMPANY_NAME = 'SPManchester Private Limited Company';
export const COMPANY_SHORT = 'SPManchester';
export const COMPANY_URL = 'https://spmanchester.com/';
export const COMPANY_PHONE = '+92 306 4350580';
export const COMPANY_EMAIL = 'info@spmanchester.com';

export function constructMetadata({
  title,
  description,
  canonicalUrl,
  ogImage = '/logo/spmanchester_logoo.png',
  noIndex = false,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const fullCanonical = canonicalUrl.startsWith('http') ? canonicalUrl : `${SITE_URL}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: fullCanonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: `Pinterest SEO & Content Toolkit by ${COMPANY_SHORT}`,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    alternateName: COMPANY_SHORT,
    url: COMPANY_URL,
    logo: `${SITE_URL}/logo/spmanchester_logoo.png`,
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    sameAs: [
      'https://www.facebook.com/spmanchester',
      'https://www.linkedin.com/company/spmanchester',
      'https://www.behance.net/spmanchester'
    ],
    description: 'SPManchester Private Limited Company provides IT support, cloud solutions, marketing, web development, AI, SEO, and eCommerce development services.'
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `All-in-One Pinterest SEO & Content Toolkit by ${COMPANY_SHORT}`,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/pinterest-trending-keywords-generator?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateToolSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${name} by ${COMPANY_SHORT}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
