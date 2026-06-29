"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Arrow Icons
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

// Reusable BlogCard Component
const BlogCard = ({ imageUrl, altText, title, slug, width = 600, height = 400, className = "" }) => {
  const card = (
    <div className={`flex flex-col space-y-4 transition-transform duration-300 hover:-translate-y-2 ${className}`}>
      <div className="overflow-hidden rounded-2xl card-img-zoom">
        <Image
          src={imageUrl}
          alt={altText}
          layout="responsive"
          width={width}
          height={height}
          className="w-full h-auto object-cover aspect-[3/2]"
        />
      </div>
      <h3 className="text-[20px] font-[600] text-[#183F34] leading-tight group-hover:text-primary transition-colors">{title}</h3>
    </div>
  );

  // Link to the blog detail page when a slug is available.
  return slug ? (
    <Link href={`/blogs/${slug}`} className="group block">
      {card}
    </Link>
  ) : (
    card
  );
};

// Reusable BlogSection Component
const BlogCommanSection = ({
  eyebrow = "",
  title = "Blogs & Product Solutions",
  description = "Drums, Containers, Lorem, Bottles and more packaging solutions.",
  blogPosts = [],
  viewAllButtonText = "View All",
  customClass = "",
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation({ threshold: 0.1 });

  // Check if we need slider (more than 2 blog posts since we show 2 in grid alongside title card)
  const needsSlider = blogPosts.length > 2;

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    if (needsSlider) {
      checkScrollButtons();
      window.addEventListener("resize", checkScrollButtons);
      return () => window.removeEventListener("resize", checkScrollButtons);
    }
  }, [needsSlider]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 24,
        behavior: "smooth",
      });
    }
  };

  // If 2 or fewer blog posts, use original grid layout
  if (!needsSlider) {
    return (
      <section ref={sectionRef} className={`py-12 ${customClass} bg-[#F6F6EF]`}>
        <div className={`pad max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-fade-up ${sectionInView ? 'in-view' : ''}`}>
          <div className="bg-[#E3EAD9] rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              {eyebrow && (
                <span className="text-[16px] font-[500] text-[#139C57] mb-3 block">
                  {eyebrow}
                </span>
              )}
              <h5 className="text-[36px] font-[700] text-[#183F34] mb-3 leading-[1.2]">
                {title}
              </h5>
              <p className="text-[16px] text-[#687975]">{description}</p>
            </div>
            <Link
              href="/blogs"
              className="mt-8 w-max px-6 py-3 bg-transparent border-2 border-primary text-[#183F34] rounded-2xl text-lg font-semibold btn-hover-lift btn-fill btn-ripple"
            >
              {viewAllButtonText}
            </Link>
          </div>

          {blogPosts.map((blog, index) => (
            <div key={`blog-${index}`}>
              <BlogCard
                imageUrl={blog.imageUrl}
                altText={blog.altText}
                title={blog.title}
                slug={blog.slug}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Slider layout for more than 2 blog posts
  return (
    <section ref={sectionRef} className={`py-12 ${customClass} bg-[#F6F6EF]`}>
      <div className={`pad max mx-auto relative scroll-fade-up ${sectionInView ? 'in-view' : ''}`}>
        {/* Left Arrow - on the left edge of first card */}
        <button
          aria-label="Previous slide"
          onClick={handlePrev}
          className={`absolute left-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all hidden lg:flex ${
            canScrollLeft
              ? "bg-[#23322E] hover:bg-[#183F34]"
              : "bg-[#23322E]/40 cursor-not-allowed"
          }`}
          disabled={!canScrollLeft}
        >
          <LeftArrowIcon />
        </button>

        {/* Right Arrow - on the right edge of last card */}
        <button
          aria-label="Next slide"
          onClick={handleNext}
          className={`absolute right-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center transition-all hidden lg:flex ${
            canScrollRight
              ? "bg-[#23322E] hover:bg-[#183F34]"
              : "bg-[#23322E]/40 cursor-not-allowed"
          }`}
          disabled={!canScrollRight}
        >
          <RightArrowIcon />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {/* Title Card */}
            <div
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="bg-[#E3EAD9] rounded-2xl p-8 flex flex-col justify-between min-h-[300px] h-full">
                <div>
                  {eyebrow && (
                    <span className="text-[16px] font-[500] text-[#139C57] mb-3 block">
                      {eyebrow}
                    </span>
                  )}
                  <h5 className="text-[28px] sm:text-[32px] md:text-[36px] font-[700] text-[#183F34] mb-3 leading-[1.2]">
                    {title}
                  </h5>
                  <p className="text-[16px] text-[#687975]">{description}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/blogs"
                    className="w-max px-6 py-3 bg-transparent border-2 border-primary text-[#183F34] rounded-2xl text-lg font-semibold btn-hover-lift btn-fill btn-ripple inline-block"
                  >
                    {viewAllButtonText}
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Cards */}
            {blogPosts.map((blog, index) => (
              <div
                key={`blog-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <BlogCard
                  imageUrl={blog.imageUrl}
                  altText={blog.altText}
                  title={blog.title}
                  slug={blog.slug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
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
};

export default BlogCommanSection;
