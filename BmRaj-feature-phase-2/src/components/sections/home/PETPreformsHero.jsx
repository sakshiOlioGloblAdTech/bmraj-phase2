'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useQuote } from '@/context/QuoteContext'

export default function PETPreformsHero() {
  const { openQuote } = useQuote()
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className='mx-auto pad max py-12 mt-5'>
      <div
        ref={sectionRef}
        className={`relative w-full h-[500px] sm:h-[400px] md:h-[420px] lg:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden scroll-scale-up ${sectionInView ? 'in-view' : ''}`}
      >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#2047A8]">
        <Image
          src="/pet-bottles-bg.png"
          alt="PET Bottles Background"
          fill
          className="object-cover object-right md:object-contain md:object-right"
          priority
        />
        {/* Gradient Overlay - Full width on mobile, 50% on desktop */}
        <div
          className="absolute inset-0 md:inset-y-0 md:left-0 md:w-[50%]"
          style={{
            background: 'linear-gradient(to right, #2047A8 0%, #2047A8 60%, rgba(32, 71, 168, 0.7) 80%, rgba(32, 71, 168, 0) 100%)'
          }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center p-6 sm:p-8 md:p-10 lg:p-16">
        <div
          ref={contentRef}
          className={`w-full md:w-[80%] lg:w-[50%] xl:w-[45%] max-w-2xl scroll-fade-left stagger-2 ${contentInView ? 'in-view' : ''}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Looking for Reliable
            <br />
            PET Preforms?
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 md:text-white mb-6 md:mb-8">
            We manufacture highly efficient bottle preforms that meet your specification
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/pet-bottles-preforms/preforms"
              className="bg-[#D1EEAE] text-[#183F34] font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base btn-hover-lift btn-shine"
            >
              Know More
            </Link>
            <button
              onClick={openQuote}
              className="bg-[#183F34] text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base btn-hover-lift btn-shine"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
