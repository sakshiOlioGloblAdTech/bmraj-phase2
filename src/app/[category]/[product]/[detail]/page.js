import React from 'react';
import { getProductDetailData, getAllCategorySlugs, getAllProductSlugsForCategory, getAllProductDetailSlugs } from '@/data/products';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layouts';
import ProductDetailClient from '@/components/sections/ProductDetail/ProductDetailClient';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import IdealRangeSection from '@/components/sections/ProductListing/IdealRangeSection';
import { withSeoMeta } from '@/data/seoMeta';
import JsonLd from '@/components/common/JsonLd';
import { productSchema } from '@/lib/schema';
import { imageSrcList, productImageList } from '@/lib/images';

// Generate static params for all product details (SEO optimization)
export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  const params = [];

  for (const categorySlug of categorySlugs) {
    const productSlugs = getAllProductSlugsForCategory(categorySlug);

    for (const productSlug of productSlugs) {
      const detailSlugs = getAllProductDetailSlugs(categorySlug, productSlug);

      for (const detailSlug of detailSlugs) {
        params.push({
          category: categorySlug,
          product: productSlug,
          detail: detailSlug,
        });
      }
    }
  }

  return params;
}


// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { category, product, detail } = await params;
  const data = await getProductDetailData(category, product, detail);

  if (!data) {
    return {
      title: 'Product Not Found',
    };
  }

  return withSeoMeta(`/${category}/${product}/${detail}`, {
    title: `${data.title} | BMRAJ Plastics`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: imageSrcList(data.images),
    },
  });
}


export default async function ProductDetailPage({ params }) {
  const { category, product, detail } = await params;
  const data = await getProductDetailData(category, product, detail);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <JsonLd
        data={productSchema({
          title: data.title,
          description: data.description,
          images: productImageList(data.images),
          route: `/${category}/${product}/${detail}`,
          material: data.specifications?.find((s) => s.label === 'Material')?.value,
        })}
      />
      <div className="bg-[#F6F6EF] mt-20">
        <div className="max pad mx-auto p-4 md:p-8 lg:p-12">
        <ProductDetailClient data={data} />
      </div>
      {data.idealRange && (
                <IdealRangeSection
                  title={data.idealRange.title}
                  applications={data.idealRange.applications}
                />
                )}
      <GlobalReachSection
        title={data.GlobalReachSection.title}
        description={data.GlobalReachSection.description}/>
      <FrequentlyAsked faqData={data.faq} />
      </div>
    </>
  );
}
