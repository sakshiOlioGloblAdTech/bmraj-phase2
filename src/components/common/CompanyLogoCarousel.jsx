"use client";

import React from 'react';
import Image from 'next/image';

// Every logo is rendered at the same optical area rather than the same width or
// the same height. Sizing on width alone makes a square mark tower over a wide
// wordmark; sizing on height alone does the reverse. Matching area makes them
// carry equal visual weight whatever their shape.
const TARGET_AREA = 4900; // px², i.e. about 70x70 for a square logo
const MIN_HEIGHT = 38;    // keeps wide wordmarks legible
const MAX_HEIGHT = 80;    // stops tall logos dominating the strip
const MAX_WIDTH = 205;    // keeps the track from getting too sparse

// Fall back to a square if a logo is ever passed in without intrinsic dimensions.
//
// `scale` is an optional per-logo nudge for marks that read smaller than the
// area calculation suggests — typically dense two-line wordmarks, where the
// second line is what suffers.
function opticalSize(logo, scale = 1) {
  const ratio = logo?.width && logo?.height ? logo.width / logo.height : 1;

  let height = Math.sqrt(TARGET_AREA / ratio);
  if (height < MIN_HEIGHT) height = MIN_HEIGHT;
  if (height > MAX_HEIGHT) height = MAX_HEIGHT;

  height *= scale;
  let width = height * ratio;

  if (width > MAX_WIDTH) {
    width = MAX_WIDTH;
    height = width / ratio;
  }
  if (height > MAX_HEIGHT) {
    height = MAX_HEIGHT;
    width = height * ratio;
  }

  return { width: Math.round(width), height: Math.round(height) };
}

export default function CompanyLogoCarousel({ logos, className = "" }) {
  if (!logos || logos.length === 0) return null;

  const renderLogo = (company, key) => {
    const { width, height } = opticalSize(company.logo, company.scale);

    return (
      <div
        key={key}
        className="w-[210px] h-[80px] flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
      >
        <Image
          src={company.logo}
          alt={company.alt}
          width={width}
          height={height}
          style={{ width, height }}
          className="object-contain"
        />
      </div>
    );
  };

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Logo Track */}
          <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll">
            {/* First set of logos */}
            {logos.map((company, index) => renderLogo(company, `logo-1-${index}`))}
            {/* Duplicate set for seamless loop */}
            {logos.map((company, index) => renderLogo(company, `logo-2-${index}`))}
          </div>
        </div>
      </div>
    </section>
  );
}
