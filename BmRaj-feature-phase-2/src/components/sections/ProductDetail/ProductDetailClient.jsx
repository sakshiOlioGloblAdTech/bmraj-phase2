'use client'

import React from 'react';

import { ImageGallery, ProductInfo} from '@/components/sections/ProductDetail';
import Breadcrumbs from '@/components/common/Breadcrumbs';


export default function ProductDetailClient({ data }) {
  return (
    <div>
      <Breadcrumbs items={data.breadcrumbs} />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Image Gallery - 45% on large screens */}
        <div className="w-full lg:w-[45%]">
          <ImageGallery images={data.images} title={data.title} />
        </div>

        {/* Right: Product Info - 55% on large screens */}
        <div className="w-full lg:w-[55%]">
          <ProductInfo data={data} />
        </div>
      </div>
    </div>
  );
}