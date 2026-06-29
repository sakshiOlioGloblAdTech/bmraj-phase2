"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

const ServiceCard = ({ service, index, openQuote }) => {
  const { title, description, number, imageUrl, isHighlighted, url } = service;

  return (
    <div
      className={`rounded-3xl p-6 md:p-8 flex flex-col min-h-[380px] md:min-h-[420px] scroll-fade-up shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isHighlighted
          ? "bg-[#139C57] text-white"
          : "bg-white text-[#183F34] border border-gray-100"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="w-24 h-24 rounded-2xl mb-6 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={96}
          height={96}
          className="w-full h-full object-cover rounded-2xl grayscale"
        />
      </div>

      {/* Title and Number */}
      <div className="flex justify-between items-start mb-4">
        <h3
          className={`text-[20px] md:text-[22px] font-bold leading-tight ${
            isHighlighted ? "text-white" : "text-[#183F34]"
          }`}
        >
          {title.split(" ").slice(0, 2).join(" ")}
          <br />
          {title.split(" ").slice(2).join(" ")}
        </h3>
        <span
          className={`text-[16px] font-semibold ${
            isHighlighted ? "text-white/80" : "text-[#687975]"
          }`}
        >
          {number}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-[15px] leading-[1.6] mb-6 flex-grow ${
          isHighlighted ? "text-white/90" : "text-[#687975]"
        }`}
      >
        {description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between gap-3 mt-auto">
        <button
          onClick={openQuote}
          className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-[16px] transition-all btn-hover-lift btn-ripple ${
            isHighlighted
              ? "bg-[#183F34] text-white hover:bg-[#0f2a22]"
              : "bg-[#183F34] text-white hover:bg-[#0f2a22]"
          }`}
        >
          Get Quote
        </button>
        <Link
          href={url || "/services/contract-manufacturing"}
          className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-[16px] transition-all border-2 btn-hover-lift ${
            isHighlighted
              ? "border-white text-white hover:bg-white hover:text-[#139C57]"
              : "border-primary text-[#183F34] hover:bg-primary hover:text-white"
          }`}
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default function ContractManufacturingServices({ data }) {
  const { title, items } = data;
  const { openQuote } = useQuote();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="bg-[#F6F6EF] py-12 relative overflow-hidden">
      {/* Background Text Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-[70px] md:text-[96px] font-extrabold text-[#183F34] opacity-[0.06] mx-12 select-none">
              Manufacturing for Commercial Products
            </span>
            <span className="text-[70px] md:text-[96px] font-extrabold text-[#183F34] opacity-[0.06] mx-12 select-none">
              Manufacturing for Commercial Products
            </span>
          </div>
        </div>
      </div>

      <div className="pad max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 scroll-fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[52px] font-bold leading-[1.15]">
            <span className="text-[#183F34]">{title.part1} </span>
            <span className="text-[#139C57]">{title.highlight1}</span>
            <br />
            <span className="text-[#139C57]">{title.highlight2} </span>
            <span className="text-[#183F34]">{title.part2}</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${cardsInView ? 'stagger-children' : ''}`}>
          {items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} openQuote={openQuote} />
          ))}
        </div>
      </div>
    </section>
  );
}
