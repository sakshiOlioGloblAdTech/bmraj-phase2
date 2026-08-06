// page.js for /products is a client component, so its metadata has to be
// declared here instead.
import { withSeoMeta } from '@/data/seoMeta';

export const metadata = withSeoMeta('/products', {
  title: 'Our Products | BMRAJ Industries',
  description:
    'Explore the full BMRAJ range — HDPE drums and barrels, jerrycans and polycans, buckets and pails, small bottles, PET bottles and preforms, food packaging, crates, cosmetic caps and blow moulding accessories.',
});

export default function ProductsLayout({ children }) {
  return children;
}
