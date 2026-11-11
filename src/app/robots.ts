import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/shared/config/site';

// Требуется при output: 'export' — иначе Next не может отдать статический файл
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: 'dnikulshin.ru',
  };
}
