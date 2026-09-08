import { MetadataRoute } from 'next';
import { TOOLS } from '@/data/tools';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Root & Company Pages
  const staticPages = [
    '',
    '/about-sp-manchester',
    '/contact',
    '/become-a-partner',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/copyright',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }));

  // Tool SEO Pages
  const toolPages = TOOLS.map((tool) => ({
    url: `${SITE_URL}/${tool.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: tool.popular ? 0.9 : 0.8,
  }));

  return [...staticPages, ...toolPages];
}
