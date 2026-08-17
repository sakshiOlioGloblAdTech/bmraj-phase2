"use client";

import TestimonialCarousel from '@/components/common/TestimonialCarousel';

const testimonials = [
  {
    quote:
      "“BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed. BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed.”",
    author: "John Doe",
    designation: "Designation",
  },
  {
    quote:
      "“BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed. BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed.”",
    author: "John Doe",
    designation: "Designation",
  },
  {
    quote:
      "“BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed. BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed.”",
    author: "John Doe",
    designation: "Designation",
  },
  {
    quote:
      "“BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed. BMRAJ helped us redesign our personal care packaging with custom bottles that balanced compliance and consumer appeal. They delivered on time and gave us the shelf presence we needed.”",
    author: "John Doe",
    designation: "Designation",
  },
];

export default function HomeTestimonialCarousel() {
  return <TestimonialCarousel testimonials={testimonials} />;
}
