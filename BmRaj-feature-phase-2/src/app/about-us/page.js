import React from "react";
import {
  AboutHeroSection,
  VideoSection,
  ManufacturerStory,
  TimelineSlider,
  MissionSection,
  WhatMakeDifferent,
  VisionSection,
  LeadershipTeam,
  AboutTestimonials,
  CertificationsStandards,
} from "@/components/sections/Aboutus";
import { AboutHeroData } from "@/data/Aboutus";
import StatsSection from "@/components/common/StatsSection";
import GlobalReachSection from '@/components/common/GlobalReachSection';
import IndustrySection from '@/components/common/IndustrySection';
import CompanyLogoCarousel from "@/components/common/CompanyLogoCarousel";
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked'
import { getIndustries } from "@/data/industries";
import { Header } from "@/components/layouts";

// Generate metadata for SEO
export const metadata = {
  title: "About Us | BMRAJ Plastics",
  description:
    "Learn about BMRAJ Plastics, a leading manufacturer of high-quality plastic packaging solutions. Discover our journey, mission, and commitment to excellence.",
  openGraph: {
    title: "About Us | BMRAJ Plastics",
    description:
      "Learn about BMRAJ Plastics, a leading manufacturer of high-quality plastic packaging solutions.",
  },
};

// Main About Us Page
export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="bg-[#F6F6EF] mt-20">
      <AboutHeroSection data={AboutHeroData.AboutHero} />
      <VideoSection data={AboutHeroData.VideoSection} />
      <ManufacturerStory data={AboutHeroData.ManufacturerStory} />
      <TimelineSlider data={AboutHeroData.Timeline} />
      <MissionSection />
      <WhatMakeDifferent />
      <IndustrySection
        title={
          <>
            Plastic Products & Packaging{' '}
            <span className="lg:block">Solutions for <span className="text-[#139C57]">Key Sectors</span></span>
          </>
        }
        description=""
        industries={getIndustries()}
        autoScroll={true}
      />
      <StatsSection stats={AboutHeroData.AboutStats} />
      <VisionSection />
      {/* <LeadershipTeam data={AboutHeroData.LeadershipTeam} /> */}
      {/* <AboutTestimonials data={AboutHeroData.AboutTestimonials} /> */}
      {/* <CompanyLogoCarousel logos={AboutHeroData.CompanyLogos} /> */}
      {/* <CertificationsStandards /> */}
      <GlobalReachSection title="Looking for a Reliable Plastic Manufacturer or Packaging Supplier?"
        description="Let's discuss your product needs. Request a design and manufacturing quote today."/>
      <FrequentlyAsked faqData={AboutHeroData.faq} />
      </main>
    </>
  );
}
