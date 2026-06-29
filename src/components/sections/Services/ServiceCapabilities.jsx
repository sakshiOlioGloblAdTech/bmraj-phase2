"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CapabilityCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 h-full min-h-[180px] shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
      <h3 className="text-[18px] md:text-[20px] font-bold text-[#183F34] mb-3">
        {item.title}
      </h3>
      <p className="text-[#183F34] text-[14px] md:text-[15px] font-[400] leading-[1.6]">
        {item.description}
      </p>
    </div>
  );
};

// Arrow Icons
const LeftArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ServiceCapabilities({ data }) {
  const { title, buttonText, buttonLink, items } = data;
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  // Calculate card width for 4 cards at a time
  const getScrollAmount = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      // Scroll by one card width + gap
      return (containerWidth / 4) + 24;
    }
    return 300;
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max mx-auto relative">
        {/* Header */}
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 scroll-fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold leading-[1.15]">
            <span className="text-[#183F34]">{title.line1} </span>
            <span className="text-[#139C57]">{title.highlight}</span>
          </h2>

          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-[#183F34] hover:bg-primary hover:text-white px-6 py-3 rounded-2xl font-semibold text-[14px] transition-all w-fit"
          >
            {buttonText}
          </Link>
        </div>

        {/* Cards Grid - 4 cards at a time */}
        <div className="relative">
          {/* Left Arrow - half on card edge, half outside */}
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all hidden lg:flex ${
              canScrollLeft
                ? "bg-[#23322E] hover:bg-[#183F34]"
                : "bg-[#23322E]/40 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
          >
            <LeftArrowIcon />
          </button>

          {/* Right Arrow - half on card edge, half outside */}
          <button
            aria-label="Next slide"
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all hidden lg:flex ${
              canScrollRight
                ? "bg-[#23322E] hover:bg-[#183F34]"
                : "bg-[#23322E]/40 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
          >
            <RightArrowIcon />
          </button>

          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollButtons}
              className="grid grid-flow-col auto-cols-[calc(100%-16px)] sm:auto-cols-[calc(50%-12px)] md:auto-cols-[calc(33.333%-16px)] lg:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <CapabilityCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-3 mt-4 justify-center lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              canScrollLeft
                ? "bg-[#23322E] hover:bg-[#183F34]"
                : "bg-[#23322E]/40 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
          >
            <LeftArrowIcon />
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNext}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              canScrollRight
                ? "bg-[#23322E] hover:bg-[#183F34]"
                : "bg-[#23322E]/40 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
