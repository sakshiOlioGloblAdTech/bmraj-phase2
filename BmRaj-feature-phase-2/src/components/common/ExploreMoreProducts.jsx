"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const defaultExploreProducts = [
  {
    id: 1,
    title: "Drums & Barrels",
    slug: 'drums-and-barrels',
    image: "/product-image/drum-barrel.png",
    bgColor: "#C8E6F5",
    description:
      "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
  },
  {
    id: 2,
    title: "Jerrycans & Polycans",
    slug: "jerrycans-polycans",
    image: "/product-image/food-pharma.png",
    bgColor: "#E8F5E9",
    description:
      "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
  },
  {
    id: 3,
    title: "Plastic Buckets & Pails",
    slug: "plastic-buckets-and-pails",
    image: "/product-image/drum-barrel.png",
    bgColor: "#D1EEAE",
    description:
      "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
  },
  {
    id: 4,
    title: "Food Packaging",
    slug: "food-packaging",
    image: "/product-image/food-pharma.png",
    bgColor: "#FFF9C4",
    description:
      "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
  },
];

export default function ExploreMoreProducts({
  title = "Explore More Products",
  subtitle = "Browse our complete range of industrial storage and packaging solutions.",
  products = defaultExploreProducts,
  currentCategorySlug = ""
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Filter out the current category from the list
  const filteredProducts = products.filter(
    (product) => product.slug !== currentCategorySlug
  );

  const showArrows = filteredProducts.length > 4;

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [filteredProducts]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section className="relative py-12 animate-fade-up">
      <div className="max pad">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#183F34] mb-2">
              {title}
            </h2>
            <p className="text-[16px] text-[#687975]">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="hidden md:inline-flex items-center justify-center border-2 border-[#139C57] text-[#139C57] hover:bg-[#139C57] hover:text-white px-6 py-3 rounded-xl font-semibold text-[15px] transition-all"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Products Grid or Scroll Container */}
        <div className="relative">
          {/* Left Arrow - only show if more than 4 products */}
          {showArrows && (
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-12 h-12 rounded-full border-2 items-center justify-center transition-all bg-white shadow-lg ${
                canScrollLeft
                  ? 'border-[#139C57] text-[#139C57] hover:bg-[#139C57] hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow - only show if more than 4 products */}
          {showArrows && (
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-12 h-12 rounded-full border-2 items-center justify-center transition-all bg-white shadow-lg ${
                canScrollRight
                  ? 'border-[#139C57] text-[#139C57] hover:bg-[#139C57] hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scrollable container - always shows 4 cards on desktop */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              showArrows
                ? 'lg:flex lg:overflow-x-auto lg:scrollbar-hide lg:pb-4'
                : 'lg:grid-cols-4'
            }`}
            style={showArrows ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          >
            {filteredProducts.map((item) => (
              <Link
                href={`/${item.slug}`}
                key={item.id}
                className={showArrows ? "flex-shrink-0 lg:w-[calc(25%-18px)]" : ""}
              >
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center border-2 border-[#139C57] text-[#139C57] hover:bg-[#139C57] hover:text-white px-6 py-3 rounded-xl font-semibold text-[15px] transition-all"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

// Extracted ProductCard component for reuse
const ProductCard = ({ item }) => (
  <div className="group relative bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer h-[260px] max-h-[300px] overflow-hidden">
    <div className="absolute left-0 right-0 top-6 h-48 flex items-center justify-center">
      <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[0.6] group-hover:-translate-y-12">
        <div
          aria-hidden
          className="absolute rounded-full"
          style={{
            backgroundColor: '#E3EAD9',
            width: 110,
            height: 110,
          }}
        />
        <div className="relative z-10 w-[150px] h-[170px] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    </div>

    <div className="absolute left-6 right-6 bottom-3 text-center transition-transform duration-500 group-hover:-translate-y-0">
      <h3 className="text-lg font-bold text-[#183F34] transition-colors duration-300 group-hover:text-[#139C57]">
        {item.title}
      </h3>

      <div className="overflow-hidden max-h-0 transition-all duration-500 group-hover:max-h-32 group-hover:mt-2">
        <p className="text-[15px] text-[#5D6865] leading-relaxed opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);
