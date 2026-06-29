'use client'

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VisionSection() {
  const missionText = "To be the most trusted partner in the packaging industry, leading the transition to eco-conscious, intelligent, and forward-thinking solutions.";
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="w-full pad max py-12 lg:py-16 bg-[#F6F6EF]">
      <div className="mx-auto">
        <section
          ref={sectionRef}
          className={`relative w-full bg-[#E3EAD9] rounded-[32px] shadow-lg overflow-hidden scroll-scale-up ${sectionInView ? 'in-view' : ''}`}
        >
          {/* Right side rounded decoration with lighter green */}
          <div
            className="absolute -right-32 top-1/2 -translate-y-1/2 w-[50%] h-[400px] bg-[#9f9f9f] rounded-full opacity-20"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 py-12 px-8 sm:py-16 sm:px-12 lg:py-20 lg:px-16">
            <h3 className='text-[#183F34] mb-3 text-center text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold'>Vision</h3>
            <p className="text-[#183F34] text-center text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-relaxed max-w-5xl mx-auto">
              {missionText}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}