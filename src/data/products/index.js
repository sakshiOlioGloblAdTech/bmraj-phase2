// Central export file for all product data

import { productDetailData } from './detailPageData';
import { getCategoryName } from '@/utils/breadcrumbs';

// Category Page Data
export {
  allCategoryData,
  getAllCategorySlugs,
  getProductCategoryData
} from './categoryPageData';

// Listing Page Data
export {
  productListingData,
  getProductListingData,
  getAllProductSlugsForCategory
} from './listingPageData';

// Detail Page Data
export {
  productDetailData,
  getProductDetailData,
  getAllProductDetailSlugs,
  getDirectDetailData,
  getAllDirectDetailSlugs
} from './detailPageData';

// Flat list of every SKU as form-dropdown options, grouped by category.
// Shape: [{ category: 'Drums & Barrels', items: [{ label, value }, ...] }, ...]
// `value` is the SKU's display title (what gets emailed), not a slug.
export function getAllProductOptions() {
  const groups = [];
  for (const [categorySlug, categoryContent] of Object.entries(productDetailData)) {
    const items = [];
    for (const productEntry of Object.values(categoryContent)) {
      if (productEntry && typeof productEntry === 'object') {
        if (productEntry.title) {
          // Direct-detail SKU (food-packaging, crates, blow-molding-accessories, etc.)
          items.push({ label: productEntry.title, value: productEntry.title });
        } else {
          // Nested product → detail SKUs
          for (const detailEntry of Object.values(productEntry)) {
            if (detailEntry && detailEntry.title) {
              items.push({ label: detailEntry.title, value: detailEntry.title });
            }
          }
        }
      }
    }
    if (items.length > 0) {
      groups.push({ category: getCategoryName(categorySlug), items });
    }
  }
  return groups;
}

// Legacy export for backward compatibility (used in ProductLineSection)
export const categorydata = [
  {
    id: 1,
    name: 'Full Open Top Drums',
    image: '/category/drum.png',
    slug: 'full-open-top-drums',
    parentCategory: 'drums-and-barrels'
  },
  {
    id: 2,
    name: 'Wide/Narrow Mouth Drum',
    image: '/category/mouth-drum.png',
    slug: 'wide-narrow-drum',
    parentCategory: 'drums-and-barrels'
  },
  {
    id: 3,
    name: 'Rocket Drums',
    image: '/category/drum.png',
    slug: 'rocket-drums',
    parentCategory: 'drums-and-barrels'
  },
  {
    id: 4,
    name: 'Oil & Grease Containers',
    image: '/category/mouth-drum.png',
    slug: 'oil-grease-containers',
    parentCategory: 'drums-and-barrels'
  },
  {
    id: 5,
    name: 'Barrels',
    image: '/category/drum.png',
    slug: 'barrels',
    parentCategory: 'drums-and-barrels'
  },
];
