// JSON-LD structured data builders.
//
// Each returns a plain object that gets rendered by <JsonLd /> into a
// <script type="application/ld+json"> tag. Keep these factual — structured
// data that contradicts the visible page is worse than none at all.
import { SITE_URL, SITE_NAME, SITE_LOGO, ORGANISATION, absoluteUrl } from '@/lib/site';

/** Organisation details, emitted once site-wide from the root layout. */
export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: ORGANISATION.legalName,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(SITE_LOGO),
    foundingDate: ORGANISATION.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANISATION.address.street,
      addressLocality: ORGANISATION.address.locality,
      addressRegion: ORGANISATION.address.region,
      postalCode: ORGANISATION.address.postalCode,
      addressCountry: ORGANISATION.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORGANISATION.telephone,
      email: ORGANISATION.email,
      contactType: 'sales',
      areaServed: 'Worldwide',
    },
    sameAs: ORGANISATION.sameAs,
  };
}

/** Site-level entry, emitted once from the root layout. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * Breadcrumb trail.
 * @param {Array<{label: string, href?: string}>} items
 */
export function breadcrumbSchema(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      // The final crumb is the current page and carries no link.
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

/**
 * A product detail page.
 * No `offers` block: we don't publish prices, and inventing one would be worse
 * than omitting it.
 */
export function productSchema({ title, description, images, route, material }) {
  if (!title) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    ...(description ? { description } : {}),
    ...(Array.isArray(images) && images.length
      ? { image: images.map((src) => absoluteUrl(src)) }
      : {}),
    ...(material ? { material } : {}),
    url: absoluteUrl(route),
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * FAQ block.
 * @param {Array<{title: string, content: string}>} faqs
 */
export function faqSchema(faqs) {
  const valid = (faqs || []).filter((f) => f && f.title && f.content);
  if (valid.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map((f) => ({
      '@type': 'Question',
      name: f.title,
      acceptedAnswer: { '@type': 'Answer', text: f.content },
    })),
  };
}
