// Single source of truth for the site's public URL and identity.
//
// Previously the sitemap hardcoded the domain while layout.js read it from an
// env var, so the two could disagree. Everything now goes through here.
//
// NEXT_PUBLIC_SITE_URL is inlined at build time, so changing it needs a rebuild
// rather than just a restart.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bmraj.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'BMRAJ Industries';
export const SITE_LOGO = '/bmraj-logo.png';

export const ORGANISATION = {
  legalName: 'BMRAJ Industries',
  foundingDate: '1998',
  telephone: '+91-9377115444',
  email: 'info@bmraj.co.in',
  address: {
    street:
      'Plot No. 4 & 5, Survey No.113/2/4 & 5, Tirupati Ind. Estate, 66 KVA Road, Amli',
    locality: 'Silvassa',
    region: 'Dadra and Nagar Haveli & Daman & Diu',
    postalCode: '396230',
    country: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/bmraj-industries-a6654a1b2/',
    'https://www.instagram.com/bmrajindustries/',
    'https://www.facebook.com/bmrajindustries',
  ],
};

/** Absolute URL for a route path, e.g. absoluteUrl('/about-us'). */
export function absoluteUrl(route = '/') {
  if (!route || route === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${route.startsWith('/') ? route : `/${route}`}`;
}
