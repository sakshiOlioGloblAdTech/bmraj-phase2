"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

export default function FacilitiesHero({ data }) {
  const { title, subtitle, heroImage, buttons } = data;
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { openQuote } = useQuote();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Green gradient overlay (green on the left, fading toward the image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#139C57] via-[#139C57]/85 to-[#139C57]/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full pt-24 pb-16 md:pt-20 md:pb-24">
        <div className="pad max mx-auto">
          <div
            ref={contentRef}
            className={`max-w-2xl space-y-6 scroll-fade-up ${contentInView ? 'in-view' : ''}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-[700] text-white leading-[1.15]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/90 text-[16px] md:text-[18px] font-[400] leading-relaxed max-w-lg">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
