import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/shared/config/site';

// Требуется при output: 'export' — иначе Next не может отдать статический файл
export const dynamic = 'force-static';

/**
 * Карта сайта собирается при билде, поэтому адреса всегда совпадают
 * с metadataBase и canonical. Статический public/sitemap.xml удалён:
 * в нём оставались github.io и дата 2025 года.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
