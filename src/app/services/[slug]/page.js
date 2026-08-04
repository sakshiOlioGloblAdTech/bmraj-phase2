import React from 'react';
import { notFound } from 'next/navigation';
import { getServiceData, getAllServiceSlugs } from '@/data/services';
import ServiceHero from '@/components/sections/Services/ServiceHero';
import ServicePartnerSection from '@/components/sections/Services/ServicePartnerSection';
import ServiceCapabilities from '@/components/sections/Services/ServiceCapabilities';
import ServiceWhyChoose from '@/components/sections/Services/ServiceWhyChoose';
import IndustrySection from '@/components/common/IndustrySection';
// import BlogCommanSection from '@/components/common/Blog';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import { getIndustriesWithIcons } from '@/data/services/industryIcons';
import { withSeoMeta } from '@/data/seoMeta';

// Generate static params for all services (SEO optimization)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getServiceData(slug);

  if (!data) {
    return {
      title: 'Service Not Found',
    };
  }

  return withSeoMeta(`/services/${slug}`, {
    title: `${data.hero.title.line1} ${data.hero.title.line2} | BMRAJ Plastics`,
    description: data.hero.subtitle,
    openGraph: {
      title: `${data.hero.title.line1} ${data.hero.title.line2}`,
      description: data.hero.subtitle,
    },
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = getServiceData(slug);

  if (!data) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <ServiceHero data={data.hero} />

      {/* Partner Section */}
      <ServicePartnerSection data={data.partnerSection} />

      {/* Capabilities Section */}
      <ServiceCapabilities data={data.capabilities} />

      {/* Why Choose Section */}
      <ServiceWhyChoose data={data.whyChoose} />

      {/* Industry Section */}
      <IndustrySection
        title={data.industrySection.title}
        description={data.industrySection.description}
        industries={getIndustriesWithIcons(data.industrySection.industries)}
        autoScroll={true}
      />

      {/* Global Reach Section */}
      <GlobalReachSection
        title={data.globalReach.title}
        description={data.globalReach.description}
      />

      {/* FAQ Section */}
      <FrequentlyAsked faqData={data.faq} />
    </div>
  );
}
