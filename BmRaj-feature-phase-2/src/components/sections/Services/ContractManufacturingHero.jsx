"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

export default function ContractManufacturingHero({ data }) {
  const { title, heroImage, buttons } = data;
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { openQuote } = useQuote();

  return (
    <>
      {/* Green Hero Section */}
      <section className="relative bg-[rgba(19,156,87,1)]">
        {/* Hero Content */}
        <div className="relative pt-30 lg:pt-40">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-30">
            {/* Text Content */}
            <div ref={contentRef} className={`text-center space-y-6 scroll-fade-up ${contentInView ? 'in-view' : ''}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.15]">
                {title.line1}
                <br />
                {title.line2}
                <br />
                {title.line3}
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                {buttons.map((button, index) => (
                  button.type === "primary" ? (
                    <button
                      key={index}
                      onClick={openQuote}
                      className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-7 py-3.5 rounded-2xl font-semibold text-[16px] transition-all shadow-sm hover:shadow-md btn-hover-lift btn-ripple"
                    >
                      {button.text}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      href={button.link}
                      className="inline-flex items-center justify-center bg-[#D1EEAE] border-2 border-[#D1EEAE] text-[#139C57] hover:bg-[#D1EEAE] hover:text-[#139C57] px-7 py-3.5 rounded-2xl font-semibold text-[16px] transition-all btn-hover-lift btn-shine"
                    >
                      {button.text}
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image - Full width edge-to-edge, below content */}
          <div className="relative w-full mt-6 md:-mt-24 z-10">
            <Image
              src={heroImage}
              alt="Contract Manufacturing - Plastic Packaging Factory"
              width={1920}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
