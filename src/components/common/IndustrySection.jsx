'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Some data sources use a short id (e.g. 'pesticides') that differs from the
// industry page slug. Map those to the correct /industries/<slug> route.
const industrySlugMap = {
  pesticides: 'pesticides-fertilizers',
}

export default function IndustrySection({
  title = "Trusted Across Industries",
  description = "Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges.",
  industries = [],
  autoScroll = true,
  className = "",
  align = "center"
}) {
  const isLeft = align === "left";
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Pause the auto-scroll whenever the pointer is over the carousel.
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Resume auto-scroll once the pointer leaves the carousel.
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    // Stop dragging but stay paused while still hovering; mouse-leave resumes.
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className={`overflow-hidden py-12 ${className}`}>
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`${isLeft ? 'text-left mx-0' : 'text-center mx-auto'} px-[5%] max-w-screen-xl scroll-fade-up ${headerInView ? 'in-view' : ''}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36PX] font-bold text-[#23322E]">
          {title}
        </h2>
        <p className={`text-[#687975] text-base md:text-[16px] lg:text-xl max-w-3xl ${isLeft ? 'mx-0' : 'mx-auto'}`}>
          {description}
        </p>
      </div>

      {/* Industry Cards Container */}
      {autoScroll ? (
        // Infinite auto-scroll version with mouse drag
        <div
          className="relative py-14 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex animate-infinite-scroll"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* First set of cards */}
            {industries.map((industry, index) => (
              <IndustryCard key={`set1-${index}`} industry={industry} />
            ))}
            {/* Duplicate set for seamless loop */}
            {industries.map((industry, index) => (
              <IndustryCard key={`set2-${index}`} industry={industry} />
            ))}
          </div>
        </div>
      ) : (
        // Static grid version
        <div className="px-[5%] max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// Industry Card Component with hover animations
const IndustryCard = ({ industry }) => {
  // Link to the industry page: explicit `link` wins, otherwise build from id.
  const slug = industrySlugMap[industry.id] || industry.id;
  const href = industry.link || (industry.id ? `/industries/${slug}` : null);

  const cardClassName =
    'group relative block w-[280px] md:w-[320px] h-[400px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 mx-2 md:mx-3 shadow-soft';

  const cardInner = (
    <>
      {/* Background Image with scale */}
      <div className="absolute inset-0">
        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Default Gradient Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        // style={{
        //   background: 'linear-gradient(180deg, rgba(19, 156, 87, 0) 0%, rgba(19, 156, 87, 0.3) 100%)'
        // }}
      />

      {/* Green Overlay on Hover */}
      <div className="absolute inset-0 bg-[#139C57] opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col transition-all duration-500 ease-out justify-end group-hover:justify-end">
        {/* Icon - Slides up on hover */}
        <div className="transition-all duration-500 ease-out">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4">
            {industry.icon}
          </div>
        </div>

        {/* Title - Slides up on hover */}
        <h3 className="text-white text-xl md:text-2xl font-[600] mb-0 group-hover:mb-4 transition-all duration-500 ease-out">
          {industry.title}
        </h3>

        {/* Description - Fades in and slides up on hover */}
        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="text-white text-sm md:text-base leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={cardClassName}>
      {cardInner}
    </Link>
  ) : (
    <div className={cardClassName}>{cardInner}</div>
  );
};
