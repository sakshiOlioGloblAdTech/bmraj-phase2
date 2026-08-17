import { Header } from '@/components/layouts';
import { HeroSection } from '@/components/sections/home';
// import BlogSection from '@/components/sections/home/BlogSection';
import BmrajLeadersection from '@/components/sections/home/BmrajLeadersection';
import CertificationsSection from '@/components/sections/home/CertificationsSection';
// import CompanyLogoCarousel from '@/components/sections/home/CompanyLogoCarousel';
import ContractManufacturingSuite from '@/components/sections/home/ContractManufacturingSuite';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import ManufacturingExpertiseSlider from '@/components/sections/home/ManufacturingExpertiseSlider';
import PackagingSolutionsSection from '@/components/sections/home/PackagingSolutionsSection';
import PETPreformsHero from '@/components/sections/home/PETPreformsHero';
// import TestimonialCarousel from '@/components/sections/home/TestimonialCarousel';
import StatatsTrustSection from '@/components/sections/home/TrustSection';
import { withSeoMeta } from '@/data/seoMeta';

export const metadata = withSeoMeta('/');

export default function Home() {
  return (
    <>
      <Header transparent />
      <main>
      <HeroSection />
      <PackagingSolutionsSection />
      <BmrajLeadersection />
      <ContractManufacturingSuite />
      <PETPreformsHero />
      <ManufacturingExpertiseSlider />
      <StatatsTrustSection />
      {/* <TestimonialCarousel /> */}
      {/* <CompanyLogoCarousel /> */}
      <CertificationsSection />
      {/* <BlogSection /> */}
      <GlobalReachSection
      title="Engineered for Protection, Designed for Presentation"
       description="Wherever your market is, we provide the reliable, compliant plastic solutions (custom-engineered moulds and packaging) your business needs"/>
      </main>
    </>
  );
}
