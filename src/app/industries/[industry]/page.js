import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layouts';
import ProductHeader from '@/components/sections/ProductListing/ProductHeader';
import ProductGrid from '@/components/sections/ProductListing/ProductGrid';
import ProductSidebar from '@/components/sections/ProductListing/ProductSidebar';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import IndustrySection from '@/components/common/IndustrySection';
import ManufacturingExpertiseSlider from '@/components/sections/home/ManufacturingExpertiseSlider';
import StatsSection from '@/components/common/StatsSection';
import CompanyLogoCarousel from '@/components/common/CompanyLogoCarousel';
import CertificationsCommanSection from '@/components/common/Certifications';
import BlogCommanSection from '@/components/common/Blog';
import { blogPosts } from '@/data/blog';
import { row1Items, row2Items, row3Items } from '@/data';
import { getTrustStats } from '@/data/stats';
import { getIndustryPageData, getAllIndustryPageSlugs } from '@/data/industriesPageData';

// Brand logos for the scrolling trust strip (same set used on the home page).
const companyLogos = [
  { name: 'Amul', logo: '/company-logos/amul-cm-logo.png', alt: 'Amul Logo' },
  { name: 'Bharat Petroleum', logo: '/company-logos/bharatP-cm-logo.png', alt: 'Bharat Petroleum Logo' },
  { name: 'BL', logo: '/company-logos/bl-cm-logo.png', alt: 'BL Logo' },
  { name: 'GACL', logo: '/company-logos/gacl-cm-logo.png', alt: 'GACL Logo' },
  { name: 'Gujarat', logo: '/company-logos/gujarat-cm-logo.png', alt: 'Gujarat Logo' },
  { name: 'Igloo', logo: '/company-logos/iglooD-cm-logo.png', alt: 'Igloo Logo' },
  { name: 'Jeetsons', logo: '/company-logos/jeetsons-cm-logo.png', alt: 'Jeetsons Logo' },
  { name: 'NPL', logo: '/company-logos/npl-cm-logo.png', alt: 'NPL Logo' },
  { name: 'Payal', logo: '/company-logos/payal.g-cm-logo.png', alt: 'Payal Logo' },
  { name: 'RCG', logo: '/company-logos/rcg-cm-logo.png', alt: 'RCG Logo' },
  { name: 'Rossari', logo: '/company-logos/rossari-cm-logo.png', alt: 'Rossari Logo' },
  { name: 'SG', logo: '/company-logos/sg-cm-logo.png', alt: 'SG Logo' },
];


// Generate static params for all industry pages (SEO optimization)
export async function generateStaticParams() {
  return getAllIndustryPageSlugs().map((industry) => ({ industry }));
}


// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { industry } = await params;
  const data = getIndustryPageData(industry);

  if (!data) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: `${data.title} | BMRAJ Plastics`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
}


export default async function IndustryPage({ params }) {
  const { industry } = await params;
  const data = getIndustryPageData(industry);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="bg-[#F6F6EF] mt-20">
        <div className="max pad mx-auto pt-4 md:pt-8 lg:pt-12 py-12">
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
                categorySlug={data.productCategorySlug}
                productSlug={data.productParentSlug}
              />
            </main>

            {/* Sidebar */}
            <ProductSidebar
              relatedProducts={data.relatedProducts}
              otherCategories={data.otherCategories}
              parentCategory={data.parentCategory}
              relatedTitle={data.sidebarTitle}
            />
          </div>
        </div>

        {data.industrySection && (
          <IndustrySection
            title={data.industrySection.title}
            description={data.industrySection.description}
            industries={data.industrySection.industries}
            autoScroll={true}
            align="left"
          />
        )}

        {data.manufacturingExpertise && (
          <ManufacturingExpertiseSlider
            title={data.manufacturingExpertise.title}
            description={data.manufacturingExpertise.description}
            slides={data.manufacturingExpertise.slides}
          />
        )}

        <StatsSection stats={getTrustStats()} />

        <CompanyLogoCarousel logos={companyLogos} />

        <CertificationsCommanSection
          title="Our Certifications"
          certificationName="ISO 9001 & MSME"
          certificationIcon="/zed-gold.png"
          certificationText="ZED Gold"
          row1Items={row1Items}
          row2Items={row2Items}
          row3Items={row3Items}
        />

        <BlogCommanSection
          eyebrow={data.blog?.eyebrow || 'Resources and Blogs'}
          title={data.blog?.title || 'Knowledge is Growth: Explore Our Blog'}
          description={
            data.blog?.description ||
            'Read short insights on polymer selection for automotive fluids, leak-proof closures, and packaging durability best practices.'
          }
          blogPosts={blogPosts}
          viewAllButtonText="View All"
          customClass="mt-16"
        />

        <GlobalReachSection
          title={data.GlobalReachSection.title}
          description={data.GlobalReachSection.description}
        />
        <FrequentlyAsked faqData={data.faq} />
      </div>
    </>
  );
}
