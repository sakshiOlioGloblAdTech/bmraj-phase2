'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categorydata } from '@/data/products';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';


const ProductCard = ({ name, image, slug, categorySlug, cardRef, isInView }) => {
  return (
    <Link href={`/${categorySlug}/${slug}`}>
      <div
        ref={cardRef}
        className={`flex flex-col overflow-hidden rounded-3xl shadow-soft transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-xl group cursor-pointer card-shine scroll-fade-up ${isInView ? 'in-view' : ''}`}
      >

        <div className="relative flex items-center justify-center bg-white overflow-hidden" style={{ height: '240px' }}>
          {/* Faint grid background with larger boxes */}
          <div
            className="absolute inset-0 z-0 opacity-20 bg-white"
            style={{
              backgroundImage:
                'linear-gradient(rgba(19, 156, 87, 1) 1px, transparent 1px), linear-gradient(to right, rgba(19, 156, 87, 1) 1px, transparent 1px)',
              backgroundSize: '5rem 5rem',
            }}
          ></div>

          <div className="absolute z-[5] h-40 w-40 rounded-full bg-[#E3EAD9] border border-stone-300/30"></div>

          {image && (
            <div className="absolute -bottom-4 z-10 flex items-end w-[380px] h-[400px]">
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="object-contain object-bottom"
                style={{ maxHeight: '100%' }}
              />
            </div>
          )}
        </div>

        <div className="p-5 text-center bg-[#EBEBE5] text-gray-900 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <h3 className="text-[18px] font-[600]">{name}</h3>
        </div>
      </div>
    </Link>
  );
};


const ProductLine = ({ productLineData, categorySlug }) => {
  // Use dynamic data if provided, otherwise fall back to static categorydata
  const title = productLineData?.title || 'Our Product Line';
  const description = productLineData?.description || 'As a leading plastic manufacturer in India, the BMRaj story began with a focus on solving complex packaging solutions challenges.';
  const products = productLineData?.categories || categorydata;

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { setRef, inViewStates } = useStaggeredAnimation(products.length, { staggerDelay: 100 });

  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: '#f9f7f3' }}
    >
      <div className="pad max mx-auto px-4">

        <div
          ref={headerRef}
          className={`mb-12 text-center md:mb-16 scroll-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="mb-4 text-2xl font-bold text-[#23322E] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-[16px] text-[#66726F] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id || product.slug}
              name={product.name}
              image={product.image}
              slug={product.slug}
              categorySlug={categorySlug}
              cardRef={setRef(index)}
              isInView={inViewStates[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLine;