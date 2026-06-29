import IndustrySection from '@/components/common/IndustrySection'
import CategoryStats from '@/components/sections/ProductCategory/CategoryStats'
import IndustrialHero from '@/components/sections/ProductCategory/IndustrialHero'
import ProductLine from '@/components/sections/ProductCategory/ProductLineSection'
import React from 'react'
import WhyChooseSection from '@/components/sections/ProductCategory/WhyChoose'
import CertificationsCommanSection from '@/components/common/Certifications'
import { row1Items as defaultRow1Items, row2Items as defaultRow2Items, row3Items as defaultRow3Items } from "@/data";
// import BlogCommanSection from '@/components/common/Blog'
// import { blogPosts } from '@/data/blog'
import GlobalReachSection from '@/components/common/GlobalReachSection'
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked'
import { getProductCategoryData, getAllCategorySlugs } from '@/data/products'
import { notFound } from 'next/navigation'
import { getCategoryIndustries } from '@/data/products/categoryPageData'
import ExploreMoreProducts from '@/components/common/ExploreMoreProducts'
import { Header } from '@/components/layouts'


// Generate static params for all categories (SEO optimization)
export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();

  return categorySlugs.map((slug) => ({
    category: slug,
  }));
}


// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { category } = await params;
  const data = await getProductCategoryData(category);

  if (!data) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${data.name} | BMRAJ Plastics`,
    description: data.IndustrialHero.subtitle,
    openGraph: {
      title: data.IndustrialHero.title,
      description: data.IndustrialHero.subtitle,
      images: [data.IndustrialHero.image],
    },
  };
}


export default async function ProductCategory({ params }) {
  const { category } = await params;
  const data = await getProductCategoryData(category);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className='mt-20'>
        <IndustrialHero heroData={{ ...data.IndustrialHero, breadcrumbs: data.breadcrumbs }}/>
      <CategoryStats statsData={data.categoryStats} />
      <ProductLine
        productLineData={data.productLine}
        categorySlug={category}
      />
      <IndustrySection
        title={data.industrySection?.title || "Trusted Across Critical Sectors"}
        description={data.industrySection?.description || ""}
        industries={data.industrySection?.industries?.length > 0 ? data.industrySection.industries : getCategoryIndustries()}
        autoScroll={true}
      />
      <WhyChooseSection whyChooseData={data.whyChoose} />
      <CertificationsCommanSection
        title={data.certifications?.title || "Our Certifications"}
        certificationName={data.certifications?.certificationName || "ISO 9001 & MSME"}
        certificationIcon={data.certifications?.certificationIcon || "/zed-gold.png"}
        certificationText={data.certifications?.certificationText || "ZED Gold"}
        row1Items={data.certifications?.row1Items || defaultRow1Items}
        row2Items={data.certifications?.row2Items || defaultRow2Items}
        row3Items={data.certifications?.row3Items || defaultRow3Items}
      />
      {/* <BlogCommanSection
        title={data.blogSection?.title || "Expert Knowledge for Your Industry"}
        description={data.blogSection?.description || "Stay ahead with the latest insights on packaging trends, compliance standards, and best practices."}
        blogPosts={blogPosts}
        viewAllButtonText="View All Articles"
        customClass=""
      /> */}
      {data.exploreMoreProducts && (
        <ExploreMoreProducts
          title={data.exploreMoreProducts.title}
          subtitle={data.exploreMoreProducts.subtitle}
          products={data.exploreMoreProducts.products}
          currentCategorySlug={category}
        />
      )}
      <GlobalReachSection
        title={data.GlobalReachSection?.title || "Get Your Ideal Packaging Solution"}
        description={data.GlobalReachSection?.description || "Let's co-create a drum or barrel that gives you an unbeatable market advantage."}/>
      <FrequentlyAsked faqData={data.faq} />
      </main>
    </>
  )
}
