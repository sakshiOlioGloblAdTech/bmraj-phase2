"use client";

import TestimonialCarousel from '@/components/common/TestimonialCarousel';

export default function AboutTestimonials({ data }) {
  if (!data) return null;

  return (
    <section className="bg-[#F6F6EF]">
      <div className="max pad mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#183F34] mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-[#687975] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div> */}

        {/* Testimonial Carousel */}
        <TestimonialCarousel testimonials={data.testimonials} />
      </div>
    </section>
  );
}
