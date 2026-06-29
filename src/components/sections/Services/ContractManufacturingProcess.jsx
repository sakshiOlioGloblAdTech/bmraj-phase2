"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);


const ProcessCard = ({ step, openQuote }) => {
  return (
    <div className="bg-white rounded-2xl p-6 h-full flex flex-col min-h-[320px] shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Header - Title and Number */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[18px] md:text-[20px] font-bold text-[#183F34] leading-tight pr-4">
          {step.title}
        </h3>
        <span className="text-[#139C57] text-[20px] font-bold flex-shrink-0">
          {step.number}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#687975] text-[16px] leading-[1.6] mb-6 flex-grow">
        {step.description}
      </p>

      {/* Bottom - Button or Icon */}
      <div className="mt-auto">
        {step.hasButton ? (
          <button
            onClick={openQuote}
            className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-8 py-3.5 rounded-2xl font-semibold text-[15px] transition-all w-full btn-hover-lift btn-ripple"
          >
            Get Started
          </button>
        ) : (
          <div className="flex justify-end">
            <Image
              src={step.icon}
              alt={step.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default function ContractManufacturingProcess({ data }) {
  const { title, description, steps } = data;
  const { openQuote } = useQuote();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  const scrollContainerRef = React.useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [gap, setGap] = React.useState(24);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const updateGap = () => {
      if (window.innerWidth < 640) setGap(16);
      else if (window.innerWidth < 1024) setGap(20);
      else setGap(24);
    };
    updateGap();
    window.addEventListener("resize", updateGap);

    const timer = setTimeout(() => setIsReady(true), 0);

    return () => {
      window.removeEventListener("resize", updateGap);
      clearTimeout(timer);
    };
  }, []);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.children[0].offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: slideWidth + gap,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.children[0].offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: -(slideWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = el;

      if (scrollWidth <= clientWidth) {
        setScrollProgress(100);
        return;
      }

      const progress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  };

  React.useEffect(() => {
    if (isReady) {
      handleScroll();
    }
  }, [isReady]);

  return (
    <section className="bg-[#F6F6EF] w-full py-16 md:py-20 overflow-hidden">
      <div className="pad max mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className={`text-center mb-12 scroll-fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#183F34] mb-4">
            {title}
          </h2>
          <p className="text-[#687975] text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          {/* Green connecting line behind cards */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-3 bg-[#139C57] z-0"></div>

          <div
            className="slider-container gap-4 md:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide relative z-10"
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              display: "flex",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {steps.map((step) => (
              <div
                className="slide-item flex-shrink-0 w-[280px] sm:w-[300px] md:w-[280px] lg:w-[300px]"
                key={step.id}
                style={{ scrollSnapAlign: "start" }}
              >
                <ProcessCard step={step} openQuote={openQuote} />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center mt-10 max-w-sm mx-auto">
            <div className="w-full max-w-xs mx-4 h-1 bg-[#D9E9D4] rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#139C57] rounded-full transition-all duration-100"
                style={{
                  width: `${scrollProgress}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-5 z-20 w-12 h-12 bg-[#23322E] rounded-full flex items-center justify-center transition-all hover:bg-[#183F34]"
          >
            <LeftArrowIcon />
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-5 z-20 w-12 h-12 bg-[#23322E] rounded-full flex items-center justify-center transition-all hover:bg-[#183F34]"
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
