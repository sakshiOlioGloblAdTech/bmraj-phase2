"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuote } from "@/context/QuoteContext";

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-[#139C57] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export default function ServiceWhyChoose({ data }) {
  const { title, description, checklistTitle, buttonText, buttonLink, checklist } = data;
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ threshold: 0.1 });
  const { openQuote } = useQuote();
  const isQuoteButton = buttonLink === "/quote" || buttonText?.toLowerCase().includes("quote");

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Title and Button */}
          <div ref={leftRef} className={`justify-between h-full items-start flex flex-col w-full gap-6 scroll-fade-left ${leftInView ? 'in-view' : ''}`}>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] leading-[1.15]">
                <span className="text-[#183F34]">{title.line1}</span>
                <br />
                <span className="text-[#183F34]">{title.line2} </span>
                <span className="text-[#139C57]">{title.highlight}</span>
              </h2>

              {description && (
                <p className="text-[#687975] text-[16px] leading-[1.7]">{description}</p>
              )}
            </div>

            {buttonText && (
              isQuoteButton ? (
                <button
                  onClick={openQuote}
                  className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-7 py-3.5 rounded-2xl font-semibold text-[16px] transition-all shadow-sm hover:shadow-md btn-hover-lift btn-ripple"
                >
                  {buttonText}
                </button>
              ) : (
                <Link
                  href={buttonLink}
                  className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-7 py-3.5 rounded-2xl font-semibold text-[16px] transition-all shadow-sm hover:shadow-md btn-hover-lift btn-ripple"
                >
                  {buttonText}
                </Link>
              )
            )}
          </div>

          {/* Right - Checklist */}
          <div ref={rightRef} className={`space-y-3 ${rightInView ? 'stagger-children' : ''}`}>
            {checklistTitle && (
              <h3 className="text-[18px] md:text-[20px] font-[700] text-[#183F34] mb-2">
                {checklistTitle}
              </h3>
            )}
            {checklist.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-soft hover:shadow-md transition-all duration-300 scroll-fade-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckIcon />
                <p className="text-[#183F34] text-[15px] md:text-[16px] font-[600] leading-[1.6]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
