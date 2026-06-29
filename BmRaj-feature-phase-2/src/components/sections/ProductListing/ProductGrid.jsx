'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useQuote } from '@/context/QuoteContext';


export default function ProductGrid({ products, categorySlug, productSlug }) {
  const { setRef, inViewStates } = useStaggeredAnimation(products?.length || 0, { staggerDelay: 80 });
  const { openQuote } = useQuote();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No products available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          capacity={product.capacity}
          material={product.material}
          features={product.features}
          slug={product.slug}
          href={product.href}
          categorySlug={categorySlug}
          productSlug={productSlug}
          cardRef={setRef(index)}
          isInView={inViewStates[index]}
          openQuote={openQuote}
        />
      ))}
    </div>
  );
}


const ProductCard = ({ title, imageUrl, capacity, material, features, slug, href, categorySlug, productSlug, cardRef, isInView, openQuote }) => {
  // Use an explicit per-product href when provided (e.g. cards that link to a
  // detail page in a different category); otherwise build the default path.
  const detailHref = href || `/${categorySlug}/${productSlug}/${slug}`;

  return (
  <div
    ref={cardRef}
    className={`rounded-2xl overflow-hidden flex flex-col cursor-pointer shadow-soft hover:shadow-xl transition-all duration-500 ease-out scroll-fade-up ${isInView ? 'in-view' : ''}`}
  >
    {/* Image container - clickable to detail page */}
    <Link href={detailHref}>
      <div className={`relative w-full h-[280px] md:h-[300px] p-4 bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 group`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes='100%'
          className="object-contain object-center transition-transform duration-500 group-hover:scale-105" />
      </div>
    </Link>

    {/* Content container */}
    <div className="p-4">
      <Link href={detailHref}>
        <h3 className="font-semibold text-gray-800 mb-2 truncate hover:text-[#183F34] transition-colors">
          {title}
        </h3>
      </Link>

      {/* {capacity && (
        <p className="text-sm text-gray-600 mb-1">Capacity: {capacity}</p>
      )} */}

      {/* {material && (
        <p className="text-sm text-gray-600 mb-2">Material: {material}</p>
      )} */}

      {/* {features && features.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {features.map((feature, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
      )} */}

      <div className="flex items-center space-x-2">
        <button onClick={openQuote} className="bg-[#183F34] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-all duration-300 btn-hover-lift flex-grow sm:flex-grow-0 justify-center">
          Get a Quote
        </button>
        <Link href={detailHref}>
          <button className="bg-[#D1EEAE] text-[#4caf50] p-2 rounded-full hover:bg-green-200 transition-all duration-300 pop-elastic">
            <Eye className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};
