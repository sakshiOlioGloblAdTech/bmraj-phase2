
// Category name mapping (slug to display name)
const categoryNames = {
  'drums-and-barrels': 'Drums & Barrels',
  'jerrycans-polycans': 'Jerrycans & Polycans',
  'plastic-buckets-and-pails': 'Plastic Buckets & Pails',
  'small-bottles-containers': 'Small Bottles & Containers',
  'pet-bottles-preforms': 'PET Bottles & Preforms',
  'food-packaging': 'Food Packaging',
  'crates': 'Industrial Crates',
  'blow-molding-accessories': 'Blow Molding Accessories',
  'cosmetic-caps': 'Cosmetic Caps'
};

// Product name mapping (slug to display name)
const productNames = {
  'full-open-top-drums': 'Full Open Top Drums',
  'wide-narrow-mouth-drum': 'Wide/Narrow Mouth Drum',
  'rocket-drums': 'Rocket Drums',
  'oil-grease-containers': 'Oil & Grease Containers',
  'barrels': 'Barrels',
  'hdpe-jerrycans': 'HDPE Jerrycans',
  'polycans': 'Polycans (Mousers)',
  'grease-plastic-pail-containers': 'Grease Plastic Pail Containers',
  'lubricant-oil-pail-buckets': 'Lubricant Oil Pail Buckets',
  // Small Bottles & Containers
  'small-bottles': 'Small Bottles (HDPE / PET)',
  'multipurpose-containers': 'Multipurpose Containers',
  'containers-for-lubricants': 'Containers for Lubricants',
  'lubricating-oil-plastic-bottle': 'Lubricating Oil Plastic Bottle',
  'lube-oil-bottle': 'Lube Oil Bottle',
  'plastic-jerry-can': 'Plastic Jerry Can',
  'plastic-barrels-drums': 'Plastic Barrels & Drums',
  'open-top-drums': 'Full Open Top (FOT) Drum',
  '50-ltr-narrow-mouth-drums': '50 LTR Narrow Mouth Drum',
  '1-ltr-oil-jar': '1 LTR Oil Jar (PET)',
  '500-ml-preform-agro-pet-bottles': 'Preform for Agro PET Bottles',
  '1-ltr-preform-oil-bottle': '1 LTR Preform for Oil Bottle',
  // PET Bottles & Preforms
  'pet-bottles': 'PET Bottles',
  'preforms': 'Preforms (PET)',
  // Food Packaging (direct detail pages)
  '200-gms-cheese-spread-container-with-lid': '200 gms Cheese Spread Container with Lid (HDPE/PP)',
  '400-gms-dahi-masti-cup': '400 gms Dahi Masti Cup',
  '500-gms-sweet-box': '500 gms Sweet Box',
  '1-kg-sweet-box': '1 kg Sweet Box',
  '1-5-ltr-cake-magic-box': '1.5 LTR Cake Magic Box',
  'shrikhand-container': 'Shrikhand Container',
  // Industrial Crates
  'milk-crate': 'Milk Crate',
  'vegetable-fruit-crate': 'Vegetable & Fruit Crate',
  // Blow Molding Accessories
  'mouser-inner-plugs': 'Mouser & Inner Plugs',
  'bottle-caps-inner-plugs': 'Bottle Caps & Inner Plugs',
  '6-inch-caps-inner-plugs': '6-Inch Caps & Inner Plugs',
  '10-inch-caps-clamps': '10-Inch Caps & Clamps',
  '2-inch-caps-inner-plugs': '2-Inch Caps & Inner Plugs',
  '1-4-inch-caps': '1.4-Inch Caps',
  'lugs': 'Lugs',
  'handles-pin-assemblies': 'Handles & Pin Assemblies',
};

// Page routes mapping (slug to display name and path)
const pageRoutes = {
  'home': { label: 'Home', href: '/' },
  'about-us': { label: 'About Us', href: '/about-us' },
  'contact': { label: 'Contact', href: '/contact' },
  'products': { label: 'Products', href: '/products' },
  'services': { label: 'Services', href: '/services' },
  'blog': { label: 'Blog', href: '/blog' },
  'team': { label: 'Our Team', href: '/team' },
};


export const generateCategoryBreadcrumbs = (categorySlug) => {
  const categoryName = categoryNames[categorySlug] || categorySlug;

  return [
    { label: 'Home', href: '/' },
    { label: categoryName, href: `/${categorySlug}` },
  ];
};

/**
 * Generate breadcrumbs for listing page
 * @param {string} categorySlug - The category slug (e.g., 'drums-and-barrels')
 * @param {string} productSlug - The product slug (e.g., 'full-open-top-drums')
 * @returns {Array<Object>} Array of breadcrumb items with {label, href}
 */
export const generateListingBreadcrumbs = (categorySlug, productSlug) => {
  const categoryName = categoryNames[categorySlug] || categorySlug;
  const productName = productNames[productSlug] || productSlug;

  return [
    { label: 'Home', href: '/' },
    { label: categoryName, href: `/${categorySlug}` },
    { label: productName, href: `/${categorySlug}/${productSlug}` }
  ];
};

/**
 * Generate breadcrumbs for detail page
 * @param {string} categorySlug - The category slug (e.g., 'drums-and-barrels')
 * @param {string} productSlug - The product slug (e.g., 'full-open-top-drums')
 * @param {string} detailName - The detail product name (e.g., '30-35 LTR DRUM')
 * @param {string} detailSlug - The detail product slug (e.g., '30-35-ltr-drum')
 * @returns {Array<Object>} Array of breadcrumb items with {label, href}
 */
export const generateDetailBreadcrumbs = (categorySlug, productSlug, detailName, detailSlug) => {
  const categoryName = categoryNames[categorySlug] || categorySlug;
  const productName = productNames[productSlug] || productSlug;

  return [
    { label: 'Home', href: '/' },
    { label: categoryName, href: `/${categorySlug}` },
    { label: productName, href: `/${categorySlug}/${productSlug}` },
    { label: detailName, href: `/${categorySlug}/${productSlug}/${detailSlug}` }
  ];
};

/**
 * Get category display name from slug
 * @param {string} slug - The category slug
 * @returns {string} Display name
 */
export const getCategoryName = (slug) => {
  return categoryNames[slug] || slug;
};

/**
 * Get product display name from slug
 * @param {string} slug - The product slug
 * @returns {string} Display name
 */
export const getProductName = (slug) => {
  return productNames[slug] || slug;
};

// Generate breadcrumbs for any page

export const generateBreadcrumbs = (path) => {
  if (!Array.isArray(path)) return [];

  return path.map((item) => {
    // If item is already an object with label, return it
    if (typeof item === 'object' && item.label) {
      return item;
    }

    // If item is a string slug, look it up in pageRoutes
    if (typeof item === 'string') {
      const route = pageRoutes[item];
      if (route) {
        return route;
      }

      // If not found in pageRoutes, create a basic breadcrumb
      return {
        label: item.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        href: `/${item}`
      };
    }

    return { label: 'Unknown', href: '#' };
  });
};

/**
 * Generate breadcrumbs for About Us page
 * @param {string} subPage - Optional sub-page (e.g., 'team', 'history')
 * @returns {Array<Object>} Array of breadcrumb items
 */
export const generateAboutUsBreadcrumbs = (subPage = null) => {
  const breadcrumbs = [
    pageRoutes.home,
    pageRoutes['about-us']
  ];

  if (subPage) {
    breadcrumbs.push({
      label: subPage.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      href: `/about-us/${subPage}`
    });
  }

  return breadcrumbs;
};

/**
 * Generate breadcrumbs for Contact page
 * @returns {Array<Object>} Array of breadcrumb items
 */
export const generateContactBreadcrumbs = () => {
  return [
    pageRoutes.home,
    pageRoutes.contact
  ];
};

/**
 * Generate breadcrumbs for the Team page
 * @returns {Array<Object>} Array of breadcrumb items
 */
export const generateTeamBreadcrumbs = () => {
  return [
    pageRoutes.home,
    pageRoutes.team
  ];
};

/**
 * Generate breadcrumbs for Blog page
 * @param {string} slug - Optional blog post slug
 * @param {string} title - Optional blog post title
 * @returns {Array<Object>} Array of breadcrumb items
 */
export const generateBlogBreadcrumbs = (slug = null, title = null) => {
  const breadcrumbs = [
    pageRoutes.home,
    pageRoutes.blog
  ];

  if (slug && title) {
    breadcrumbs.push({
      label: title,
      href: `/blog/${slug}`
    });
  }

  return breadcrumbs;
};
