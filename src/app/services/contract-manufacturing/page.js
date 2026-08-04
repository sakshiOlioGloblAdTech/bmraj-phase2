import {
  ContractManufacturingHero,
  ManufacturePlasticProducts,
  ContractManufacturingProcess,
  ManufacturingInfrastructure,
  WhyChooseContractManufacturing,
  ContractManufacturingServices,
  ContractManufacturingCTA
} from '@/components/sections/Services';
import IndustrySection from '@/components/common/IndustrySection';
import StatsSection from '@/components/common/StatsSection';
// import BlogCommanSection from '@/components/common/Blog';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import { getIndustries } from '@/data/industries';
import ContractManufacturingData from '@/data/contractManufacturing';
import { withSeoMeta } from '@/data/seoMeta';

export const metadata = withSeoMeta('/services/contract-manufacturing', {
  title: 'Contract Manufacturing - BMRAJ Industries',
  description: 'End-to-End Contract Manufacturing for Plastic Packaging & Containers. BMRAJ delivers compliant, durable, and design-perfect storage and packaging solutions.',
});

export default function ContractManufacturingPage() {
  const industries = getIndustries();
  const data = ContractManufacturingData;

  return (
    <main className="min-h-screen">
      <ContractManufacturingHero data={data.hero} />
      <ManufacturePlasticProducts data={data.manufacturePlasticProducts} />
      <ContractManufacturingProcess data={data.processSteps} />
      <ManufacturingInfrastructure data={data.manufacturingInfrastructure} />
      <ContractManufacturingServices data={data.services} />
      <ContractManufacturingCTA data={data.cta} />
      <WhyChooseContractManufacturing data={data.whyChoose} />
      <IndustrySection
        title={data.industrySection.title}
        description={data.industrySection.description}
        industries={industries}
        className="bg-[#F6F6EF]"
      />
      <StatsSection
        stats={data.stats}
        containerClassName="bg-[#F6F6EF] mx-auto pad max py-12"
      />
      {/* <BlogCommanSection
        title={data.blogSection.title}
        description={data.blogSection.description}
        blogPosts={data.blogSection.blogPosts}
        viewAllButtonText={data.blogSection.viewAllButtonText}
      /> */}
      <GlobalReachSection
        title={data.globalReach.title}
        description={data.globalReach.description}
      />
      <FrequentlyAsked faqData={data.faq} />
    </main>
  );
}
