"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const QuoteIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
    <path d="M10.5597 -0.000688553L5.95169 14.9753H10.8477V25.8233H-0.000312328V16.3193L5.75969 -0.000688553H10.5597ZM26.3997 -0.000688553L21.7917 14.9753H26.6877V25.8233H15.8397V16.3193L21.5997 -0.000688553H26.3997Z" fill="#139C57"/>
  </svg>
);

export default function TestimonialCarousel({ testimonials, className = "" }) {
  // Set up Embla. We want it to loop and align slides to the center.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const contentRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, right: 0 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // --- Sync active slide index ---
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  // --- Calculate button positions to avoid overlap ---
  useEffect(() => {
    const updateButtonPosition = () => {
      if (contentRef.current) {
        const containerWidth = contentRef.current.offsetWidth;
        const contentWidth = containerWidth * 0.7; // 70% for mobile, adjusts based on screen
        const gap = (containerWidth - contentWidth) / 1.2;

        // Dynamic positioning based on available space
        if (window.innerWidth < 768) {
          // Mobile: buttons closer to edges
          setButtonPosition({ left: 8, right: 8 });
        } else if (window.innerWidth < 1024) {
          // Tablet: moderate spacing
          setButtonPosition({ left: Math.max(16, gap - 60), right: Math.max(16, gap - 60) });
        } else {
          // Desktop: more spacing
          setButtonPosition({ left: Math.max(52, gap - 80), right: Math.max(32, gap - 80) });
        }
      }
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section ref={contentRef} className={`relative mx-auto py-12 px-4 ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_70%] md:flex-[0_0_60%] min-w-0 pl-4 transition-all duration-300 ease-in-out"
              style={{
                opacity: index === selectedIndex ? 1 : 0.4,
                transform: `scale(${index === selectedIndex ? 1 : 0.95})`,
              }}
            >
              <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-12">
                <QuoteIcon className="text-[#3a5a40]" />
                <p className="text-lg md:text-[24px] leading-relaxed text-[#23322E] mt-5">
                  {testimonial.quote}
                </p>

                <p className="mt-6 font-semibold text-[24px] text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#66726F]">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/1 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#23322E] text-white hover:bg-gray-800 transition-all duration-300 shadow-lg z-10 hover:scale-110"
        style={{ left: `${buttonPosition.left}px` }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/1 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#23322E] text-white hover:bg-gray-800 transition-all duration-300 shadow-lg z-10 hover:scale-110"
        style={{ right: `${buttonPosition.right}px` }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </section>
  );
}
