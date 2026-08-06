// Generates /robots.txt at build time.
// See: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The form endpoints have nothing to index and shouldn't be crawled.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
