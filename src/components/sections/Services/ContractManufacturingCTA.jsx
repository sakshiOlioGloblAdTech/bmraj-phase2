"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContractManufacturingCTA({ data }) {
  const { title, description, buttonText } = data;
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-[#F6F6EF] py-16 md:py-20">
      <div className="pad max px-4 sm:px-6 lg:px-8">
        <div ref={ctaRef} className={`relative rounded-3xl overflow-hidden scroll-scale-up ${ctaInView ? 'in-view' : ''}`}>
          {/* Main Green Background */}
          <div className="bg-[#139C57] px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.2] mb-4">
                  {title.line1}
                  <br />
                  {title.line2}
                </h2>
                <p className="text-white/90 text-[16px] md:text-[17px] leading-[1.6]">
                  {description}
                </p>
              </div>

              {/* Right Button Area with curved background */}
              <div className="flex-shrink-0 relative z-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-[#183F34] hover:bg-[#0f2a22] text-white px-8 py-4 rounded-2xl font-semibold text-[16px] transition-all shadow-sm hover:shadow-md btn-hover-lift btn-ripple"
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>

          {/* Curved dark green section on the right */}
          <div className="absolute top-0 right-0 h-full w-[100%] hidden lg:block overflow-hidden">
            <div
              className="absolute top-0 right-0 h-full w-full bg-[#0E7B46]"
              style={{
                clipPath: 'ellipse(40% 100% at 100% 50%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
