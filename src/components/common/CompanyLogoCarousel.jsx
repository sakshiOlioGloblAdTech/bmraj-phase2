"use client";

import React from 'react';
import Image from 'next/image';

export default function CompanyLogoCarousel({ logos, className = "" }) {
  if (!logos || logos.length === 0) return null;

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Logo Track */}
          <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll">
            {/* First set of logos */}
            {logos.map((company, index) => (
              <div
                key={`logo-1-${index}`}
                className="w-[150px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((company, index) => (
              <div
                key={`logo-2-${index}`}
                className="w-[150px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
