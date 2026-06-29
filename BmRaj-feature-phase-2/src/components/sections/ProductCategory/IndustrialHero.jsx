"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import Image from "next/image";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

// const WhatsAppIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     xmlns="http://www.w3.org/2000/svg"
//     className="mr-2"
//   >
//     <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.43 16.88L2.06 21.94L7.31 20.6C8.8 21.38 10.39 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM17.8 16.39C17.54 17.08 16.32 17.68 15.7 17.74C15.17 17.8 14.28 17.83 13.66 17.65C12.89 17.42 11.89 17.11 10.73 16.09C9.35 14.84 8.41 13.26 8.18 12.8C7.95 12.34 7.34 11.45 7.34 10.5C7.34 9.55 7.9 9.03 8.13 8.8C8.36 8.57 8.7 8.49 8.96 8.49C9.22 8.49 9.46 8.49 9.67 8.53C9.91 8.57 10.13 9.04 10.3 9.55C10.48 10.06 10.73 10.66 10.82 10.84C10.91 11.02 10.82 11.25 10.64 11.43C10.46 11.61 10.27 11.75 10.13 11.9C9.99 12.04 9.85 12.16 10.03 12.44C10.21 12.72 10.78 13.61 11.69 14.44C12.79 15.43 13.58 15.79 13.86 15.93C14.14 16.07 14.37 16.02 14.55 15.84C14.77 15.62 15.14 15.14 15.42 14.77C15.69 14.4 15.96 14.31 16.28 14.4C16.6 14.49 17.6 15.02 17.88 15.3C18.16 15.58 18.07 15.75 17.8 16.39Z" />
//   </svg>
// );

function IndustrialHeroSection({ title, description, imageUrl, breadcrumbs, openQuote }) {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-[#F6F6EF] pad max">
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`flex flex-col justify-between h-full scroll-fade-left ${contentInView ? 'in-view' : ''}`}
          >
          <Breadcrumbs items={breadcrumbs} className="mb-10" />
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-[#183F34] leading-[1.2] mb-6">
                { title }
              </h1>

              <p className="text-base md:text-lg text-[#5D6865] leading-relaxed mb-8 max-w-lg">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openQuote} className="px-8 py-3 bg-green-950 text-white font-[600] rounded-2xl shadow-md hover:bg-green-900 transition-all duration-300 btn-hover-lift btn-ripple focus:outline-none focus:ring-2 focus:ring-green-950 focus:ring-opacity-50">
                  Request a Quote
                </button>
                {/* <button className="flex items-center justify-center px-6 py-3 bg-[#D1EEAE] text-primary font-[600] rounded-2xl hover:bg-lime-300 transition-all duration-300 btn-hover-lift btn-shine focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-opacity-50">
                  <WhatsAppIcon />
                  Get Catalogue on WhatsApp
                </button> */}
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`flex items-center justify-center scroll-fade-right ${imageInView ? 'in-view' : ''}`}
          >
            <Image
              src={imageUrl}
              alt="Forklift moving industrial drums in a warehouse"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[450px] hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
        </div>
      </div>
      </section>
  );
}

const defaultFloatingItems = [
  "Injection Molding",
  "Blow Molding",
  "Jerrycans & Polycans",
  "Drums  & Barrels",
  "Innovation & Excellence",
  "Injection Molding",
  "Blow Molding",
  "Jerrycans & Polycans",
  "Drums  & Barrels",
  "Innovation & Excellence",
];

function FloatingText({ items = defaultFloatingItems, bgColor = "#EDEDDE", textColor = "#5D686599" }) {
    const renderItems = () => {
      return items.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          <span>•</span>
        </React.Fragment>
      ));
    };

    return (
      <section className="w-full rounded-2xl pb-12 pad max">
        <div
          className="floatText moving-text overflow-hidden py-4 rounded-2xl"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="inline-flex gap-8 animate-scroll whitespace-nowrap text-sm md:text-base lg:text-lg font-semibold"
            style={{ color: textColor }}
          >
            {renderItems()}
            {renderItems()}
          </div>
        </div>
      </section>
    );
}

const defaultDurableData = {
  titleHighlight: "Durable & Secure Containers",
  titleNormal: "for Industrial Applications",
  description: "Our comprehensive range of drums and barrels provides secure and efficient solutions for storing and transporting a wide variety of materials, including hazardous chemicals, lubricants, agro-products, and food-grade goods."
};

function DurableSecureSection({ data = defaultDurableData }) {
    const { titleHighlight, titleNormal, description } = data;
    const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation({ threshold: 0.3 });

    return (
      <section className="py-12 flex flex-col justify-center items-center pad max">
        <div
          ref={sectionRef}
          className={`text-center scroll-fade-up ${sectionInView ? 'in-view' : ''}`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] leading-[1.2] mb-6">
            <span className="text-primary">{titleHighlight}</span>
            <br />
            <span className="text-[#183F34]">{titleNormal}</span>
          </h1>

          <p className="text-[16px] text-[#66726F] leading-relaxed mb-8 max-w-xl w-full">
            {description}
          </p>
        </div>
      </section>
  );
}


export default function IndustrialHero({ heroData }) {
    const { openQuote } = useQuote();

    return (
        <>
        <IndustrialHeroSection
          title={heroData.title}
          description={heroData.subtitle}
          imageUrl={heroData.image}
          breadcrumbs={heroData.breadcrumbs}
          openQuote={openQuote}
        />
        <FloatingText
          items={heroData.floatingItems}
          bgColor={heroData.floatingBgColor}
          textColor={heroData.floatingTextColor}
        />
        <DurableSecureSection data={heroData.durableSection} />
        </>
    );
}