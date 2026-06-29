"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useQuote } from '@/context/QuoteContext';

export default function HeroSection() {
  const { openQuote } = useQuote();
  const { ref: badgeRef, isInView: badgeInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: descRef, isInView: descInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative pt-38 pb-12">
      <div className="flex flex-col gap-8 max pad">

        <div className="space-y-6 text-center">

          <div
            ref={badgeRef}
            className={`inline-flex items-center gap-2 bg-secondary rounded-xl px-3 py-1 scroll-fade-down ${badgeInView ? 'in-view' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <g clipPath="url(#clip0_584_2195)">
                <path d="M14.5976 3.19227C14.5976 3.00197 14.4826 2.83051 14.3066 2.75818L7.67829 0.0351965C7.56402 -0.0117322 7.4359 -0.0117322 7.32163 0.0351965L0.693302 2.75818C0.51729 2.83048 0.402344 3.00197 0.402344 3.19227V11.8077C0.402344 11.998 0.51726 12.1695 0.693302 12.2418L7.32163 14.9648C7.43467 15.0112 7.56173 15.0122 7.6777 14.9648C7.68336 14.9629 7.43241 15.0658 14.3066 12.2418C14.4827 12.1695 14.5976 11.998 14.5976 11.8077V3.19227ZM7.49996 5.44737L5.05767 4.44406L10.3357 2.14159L12.9413 3.21201L7.49996 5.44737ZM1.34092 3.93186L3.44805 4.79749V7.23966C3.44805 7.49883 3.65817 7.70895 3.91733 7.70895C4.1765 7.70895 4.38662 7.49883 4.38662 7.23966V5.18307L7.03067 6.26927V13.8306L1.34092 11.4932V3.93186ZM7.49996 0.976616L9.1268 1.64494L3.84876 3.94741L2.05858 3.21198L7.49996 0.976616ZM7.96925 6.26927L13.659 3.93186V11.4932L7.96925 13.8306V6.26927Z" fill="#139C57"/>
              </g>
              <defs>
                <clipPath id="clip0_584_2195">
                  <rect width="15" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Plastic Solutions & Services
            </span>
          </div>


          <h1
            ref={titleRef}
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#183F34] leading-[1.1] px-4 scroll-fade-up stagger-1 ${titleInView ? 'in-view' : ''}`}
          >
            Your Packaging Partner: Delivering{' '}
            <span className="text-[#139C57] block mt-1">Quality at Scale</span>
          </h1>


          <p
            ref={descRef}
            className={`text-sm sm:text-base text-[#5D6865] text-center max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-4 scroll-fade-up stagger-2 ${descInView ? 'in-view' : ''}`}
          >
          BMRAJ delivers compliant, durable, and design-perfect storage and packaging for industries and brands worldwide.
          </p>


          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 pt-2 justify-center scroll-fade-up stagger-3 ${buttonsInView ? 'in-view' : ''}`}
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center bg-[#D1EEAE] text-[#139C57] px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all shadow-sm btn-hover-lift btn-shine btn-ripple btn-arrow-slide"
            >
              Explore Prodcuts
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
            <button
              onClick={openQuote}
              className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all shadow-sm btn-hover-lift btn-shine btn-ripple neon-glow"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Image Section - Bottom */}
        <div
          ref={imageRef}
          className={`relative px-4 sm:px-8 md:px-[8%] scroll-scale-up stagger-4 ${imageInView ? 'in-view' : ''}`}
        >
          <div className="relative w-full h-[80px] sm:h-[250px]">

            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/mask-group-line.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <Image
              src="/bmraj-hero-image.png"
              alt="Plastic products showcase"
              fill
              sizes="100vw"
              className="object-cover sm:object-contain"
              priority
            />
          </div>
        </div>

      </div>
      <section className='floatText moving-text bg-[#EDEDDE] overflow-hidden py-4 w-full'>
        <div className="inline-flex gap-8 animate-scroll whitespace-nowrap text-sm md:text-base lg:text-lg font-semibold text-[#5D686599]">
          <span>Injection Molding</span>
          <span>•</span>
          <span>Blow Molding</span>
          <span>•</span>
          <span>Jerrycans & Polycans</span>
          <span>•</span>
          <span>Drums  & Barrels</span>
          <span>•</span>
          <span>Small Bottles</span>
          <span>•</span>
          <span>Injection Molding</span>
          <span>•</span>
          <span>Blow Molding</span>
          <span>•</span>
          <span>Jerrycans & Polycans</span>
          <span>•</span>
          <span>Drums  & Barrels</span>
          <span>•</span>
          <span>Small Bottles</span>
          <span>•</span>
        </div>
      </section>
    </section>
  );
}
