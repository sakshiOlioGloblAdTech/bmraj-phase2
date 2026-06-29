"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicePartnerSection({ data }) {
  const { title, description, image, buttonText, buttonLink, statCard } = data;
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ threshold: 0.2 });
  const isQuoteButton = buttonLink === "/quote" || buttonText?.toLowerCase().includes("quote");

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image with Stat Card */}
          <div ref={leftRef} className={`relative scroll-fade-left ${leftInView ? 'in-view' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`${title.line1} ${title.highlight} ${title.line2}`}
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />

              {/* Stat Card Overlay */}
              {statCard && (
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:bottom-6 md:w-[280px] float-animation">
                  <div className="bg-[#183F34] text-white p-6 rounded-2xl shadow-xl">
                    <p className="text-[18px] md:text-[20px] font-semibold mb-2">
                      {statCard.value}
                    </p>
                    <p className="text-[#FFFFFF9E] text-[14px]">
                      {statCard.label}
                    </p>
                    <div className="w-12 h-1 bg-[#A5CE37] mt-4 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef} className={`space-y-6 scroll-fade-right ${rightInView ? 'in-view' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.15]">
              <span className="text-[#183F34]">{title.line1} </span>
              <span className="text-[#139C57]">{title.highlight}</span>
              <br />
              <span className="text-[#183F34]">{title.line2}</span>
            </h2>

            <p
              className="text-[#687975] text-[16px] leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <Link
              href={isQuoteButton ? "/contact-us" : buttonLink}
              className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-[#183F34] hover:bg-primary hover:text-white px-7 py-3.5 rounded-2xl font-semibold text-[16px] transition-all btn-hover-lift"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
