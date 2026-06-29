'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useQuote } from '@/context/QuoteContext';

export default function GlobalReachSection({ title, description }) {
  const { openQuote } = useQuote();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: mapRef, isInView: mapInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="">
      <div className="relative overflow-hidden lg:min-h-[650px] flex flex-col lg:block">
        {/* Full-bleed India Map Background (desktop only) */}
        <div
          ref={mapRef}
          className={`hidden lg:block absolute inset-0 z-0 scroll-fade-right ${mapInView ? 'in-view' : ''}`}
        >
          <Image
            src="/final-india-map.png"
            alt="India Map"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>

        {/* Desktop-only dark gradient overlay to improve text legibility */}
        <div
          className="hidden lg:block absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#183F34]/85 via-[#183F34]/40 to-transparent"
          aria-hidden="true"
        />

        {/* Text Content - mobile: solid green bg; desktop: overlays the map */}
        <div
          ref={contentRef}
          className={`relative z-10 w-full lg:w-1/2 lg:min-h-[650px] bg-primary lg:bg-transparent px-5 sm:px-24 py-10 lg:py-0 flex flex-col justify-center scroll-fade-left ${contentInView ? 'in-view' : ''}`}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-[54px] font-[700] text-white mb-6 leading-[1.2]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
          >
            {title}
          </h2>
          <p
            className="text-[16px] text-white/90 mb-8 leading-relaxed"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openQuote}
              className="bg-[#183F34] text-white font-[600] py-4 px-8 rounded-2xl text-[16px] shadow-lg btn-hover-lift btn-shine btn-ripple neon-glow"
            >
              Get a Quote
            </button>
            <Link
              href="/products"
              className="bg-[#FFFF7B] text-primary font-[600] py-4 px-8 rounded-2xl text-[16px] shadow-lg flex items-center justify-center gap-2 btn-hover-lift btn-shine btn-ripple btn-arrow-slide"
            >
              Explore Products
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile-only map (shown below the text) */}
        <div className="relative w-full aspect-square bg-primary overflow-hidden lg:hidden">
          <Image
            src="/final-india-map.png"
            alt="India Map"
            fill
            className="object-cover"
            style={{ objectPosition: '85% center' }}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
