'use client'

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MissionSection() {
  const missionText = "To empower brands with world-class plastic packaging and products, engineered for quality, innovation, and a greener future.";
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max pad mx-auto">
        <section
          ref={sectionRef}
          className={`relative w-full bg-[#139C57] rounded-[32px] shadow-lg overflow-hidden scroll-scale-up ${sectionInView ? 'in-view' : ''}`}
        >
          {/* Large circle decoration on right side - partially visible due to overflow hidden */}
          <div
            className="absolute -right-32 top-1/2 -translate-y-1/2 w-[50%] h-[400px] bg-[#34B876] rounded-full opacity-40"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 py-12 px-8 sm:py-16 sm:px-12 lg:py-20 lg:px-16">
            <h2 className='text-white mb-3 text-center text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold'>Mission</h2>
            <p className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-relaxed max-w-5xl mx-auto">
              {missionText}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}