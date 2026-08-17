// `next build`, so URLs stay in sync with the product/service data.
// See: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

import { productDetailData, productListingData, allCategoryData } from "@/data/products";
import { getAllServiceSlugs } from "@/data/services";

import { SITE_URL as BASE_URL } from "@/lib/site";

// Same list as in app/[category]/[product]/page.js
const DIRECT_DETAIL_CATEGORIES = new Set([
  "food-packaging",
  "crates",
  "blow-molding-accessories",
  "cosmetic-caps",
  "pharma",
]);

function url(path, { priority = 0.7, changeFrequency = "monthly" } = {}) {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const entries = [];

  // --- Static pages ---
  entries.push(url("/", { priority: 1.0, changeFrequency: "weekly" }));
  entries.push(url("/about-us", { priority: 0.8 }));
  entries.push(url("/team", { priority: 0.6 }));
  entries.push(url("/contact-us", { priority: 0.8 }));
  entries.push(url("/products", { priority: 0.9, changeFrequency: "weekly" }));
  entries.push(url("/services/contract-manufacturing", { priority: 0.8 }));

  // --- Service pages: /services/<slug> ---
  for (const slug of getAllServiceSlugs()) {
    entries.push(url(`/services/${slug}`, { priority: 0.7 }));
  }

  // --- Product categories + nested SKUs ---
  for (const categorySlug of Object.keys(allCategoryData)) {
    // Category landing page
    entries.push(url(`/${categorySlug}`, { priority: 0.8, changeFrequency: "weekly" }));

    if (DIRECT_DETAIL_CATEGORIES.has(categorySlug)) {
      // Direct-detail: /[category]/[product]
      const products = productDetailData[categorySlug] || {};
      for (const productSlug of Object.keys(products)) {
        entries.push(url(`/${categorySlug}/${productSlug}`, { priority: 0.6 }));
      }
    } else {
      // Normal: /[category]/[product] (listing) and /[category]/[product]/[detail]
      const products = productListingData[categorySlug] || {};
      for (const productSlug of Object.keys(products)) {
        entries.push(url(`/${categorySlug}/${productSlug}`, { priority: 0.7 }));

        const details = productDetailData[categorySlug]?.[productSlug] || {};
        for (const detailSlug of Object.keys(details)) {
          entries.push(
            url(`/${categorySlug}/${productSlug}/${detailSlug}`, { priority: 0.6 })
          );
        }
      }
    }
  }

  return entries;
}
