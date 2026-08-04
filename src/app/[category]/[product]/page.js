import React from 'react';
import { getProductListingData, getAllCategorySlugs, getAllProductSlugsForCategory, getDirectDetailData, getAllDirectDetailSlugs } from '@/data/products';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layouts';
import ProductHeader from '@/components/sections/ProductListing/ProductHeader';
import ProductGrid from '@/components/sections/ProductListing/ProductGrid';
import ProductSidebar from '@/components/sections/ProductListing/ProductSidebar';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import IdealRangeSection from '@/components/sections/ProductListing/IdealRangeSection';
import ProductDetailClient from '@/components/sections/ProductDetail/ProductDetailClient';
import { withSeoMeta } from '@/data/seoMeta';

// Categories that have direct detail pages (no listing page)
const DIRECT_DETAIL_CATEGORIES = ['food-packaging', 'crates', 'blow-molding-accessories', 'cosmetic-caps'];

// Generate static params for all products (SEO optimization)
export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  const params = [];

  for (const categorySlug of categorySlugs) {
    // Check if this is a direct detail category
    if (DIRECT_DETAIL_CATEGORIES.includes(categorySlug)) {
      const detailSlugs = getAllDirectDetailSlugs(categorySlug);
      for (const detailSlug of detailSlugs) {
        params.push({
          category: categorySlug,
          product: detailSlug,
        });
      }
    } else {
      // Normal listing page category
      const productSlugs = getAllProductSlugsForCategory(categorySlug);
      for (const productSlug of productSlugs) {
        params.push({
          category: categorySlug,
          product: productSlug,
        });
      }
    }
  }

  return params;
}


// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { category, product } = await params;

  // Check if this is a direct detail category
  if (DIRECT_DETAIL_CATEGORIES.includes(category)) {
    const data = await getDirectDetailData(category, product);
    if (!data) {
      return {
        title: 'Product Not Found',
      };
    }
    return withSeoMeta(`/${category}/${product}`, {
      title: `${data.title} | BMRAJ Plastics`,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: data.images,
      },
    });
  }

  // Normal listing page
  const data = await getProductListingData(category, product);

  if (!data) {
    return {
      title: 'Product Not Found',
    };
  }

  return withSeoMeta(`/${category}/${product}`, {
    title: `${data.title} | BMRAJ Plastics`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  });
}


export default async function ListingPage({ params }) {
  const { category, product } = await params;

  // Check if this is a direct detail category (e.g., food-packaging)
  if (DIRECT_DETAIL_CATEGORIES.includes(category)) {
    const data = await getDirectDetailData(category, product);

    if (!data) {
      notFound();
    }

    // Render detail page layout for direct detail categories
    return (
      <>
        <Header />
        <div className="bg-[#F6F6EF]">
          <div className="max pad mx-auto p-4 md:p-8 lg:p-12">
            <ProductDetailClient data={data} />

            {data.idealRange && (
            <IdealRangeSection
              title={data.idealRange.title}
              applications={data.idealRange.applications}
            />
          )}
          </div>
         
          <GlobalReachSection
            title={data.GlobalReachSection?.title || 'Get Your Ideal Packaging Solution'}
            description={data.GlobalReachSection?.description || ''}
          />
          <FrequentlyAsked faqData={data.faq} />
        </div>
      </>
    );
  }

  // Normal listing page
  const data = await getProductListingData(category, product);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="bg-[#F6F6EF] mt-20">
        <div className="max pad mx-auto pt-4 md:pt-8 lg:pt-12">
        <ProductHeader
          title={data.title}
          description={data.description}
          breadcrumbs={data.breadcrumbs}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content (Grid) */}
          <main className="flex-1">
            <ProductGrid
              products={data.products}
              categorySlug={data.parentCategory}
              productSlug={data.slug}
            />
          </main>

          {/* Sidebar */}
          <ProductSidebar
            relatedProducts={data.relatedProducts}
            otherCategories={data.otherCategories}
            parentCategory={data.parentCategory}
          />
        </div>

      {data.idealRange && (
          <IdealRangeSection
            title={data.idealRange.title}
            applications={data.idealRange.applications}
          />
        )}

      </div>
      <GlobalReachSection
        title={data.GlobalReachSection.title} description={data.GlobalReachSection.description}/>
      <FrequentlyAsked faqData={data.faq} />
      </div>
    </>
  );
}
