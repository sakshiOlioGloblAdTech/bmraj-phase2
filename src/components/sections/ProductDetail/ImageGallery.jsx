'use client'

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { imageSrc, imageLabel } from '@/lib/images';


export default function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  const gallery = Array.isArray(images) ? images : [];
  if (gallery.length === 0) return null;

  const current = gallery[selectedImage];
  const currentLabel = imageLabel(current);

  return (
    <div>
    <div className="bg-white rounded-3xl p-8 mb-6">
      {/* Main Image */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <Image
          src={imageSrc(current)}
          alt={currentLabel ? `${title} — ${currentLabel}` : title}
          fill
          className="object-contain"
        />

        {/* Badge for photos that aren't the product itself, so a related shot
            (e.g. a blown bottle on a preform page) can't be mistaken for it. */}
        {currentLabel && (
          <span className="absolute top-0 left-0 bg-[#139C57] text-white text-[12px] font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {currentLabel}
          </span>
        )}
      </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : gallery.length - 1))}
          className="w-10 h-10 rounded-full bg-[#183F34] text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-4 overflow-x-auto">
          {gallery.map((img, index) => {
            const label = imageLabel(img);
            return (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                title={label || undefined}
                className={`relative w-20 h-20 rounded-lg border-2 bg-white overflow-hidden flex-shrink-0 transition-all ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <Image
                  src={imageSrc(img)}
                  alt={label ? `${title} — ${label}` : `${title} view ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
                {/* Marks the thumbnail too, so the distinction is visible
                    before the image is opened. */}
                {label && (
                  <span className="absolute bottom-0 inset-x-0 bg-[#139C57] text-white text-[9px] font-semibold leading-tight py-0.5 text-center">
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setSelectedImage(prev => (prev < gallery.length - 1 ? prev + 1 : 0))}
          className="w-10 h-10 rounded-full bg-[#183F34] text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
