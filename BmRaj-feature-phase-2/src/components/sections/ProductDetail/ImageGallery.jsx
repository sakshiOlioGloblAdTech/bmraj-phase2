'use client'

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div>
    <div className="bg-white rounded-3xl p-8 mb-6">
      {/* Main Image */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <Image
          src={images[selectedImage]}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
          className="w-10 h-10 rounded-full bg-[#183F34] text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-4 overflow-x-auto">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-20 rounded-lg border-2 bg-white overflow-hidden flex-shrink-0 transition-all ${
                selectedImage === index ? 'border-primary' : 'border-gray-200'
              }`}
            >
              <Image
                src={img}
                alt={`${title} view ${index + 1}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setSelectedImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
          className="w-10 h-10 rounded-full bg-[#183F34] text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
   
    </div>
  );
}