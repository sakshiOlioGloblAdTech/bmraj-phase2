"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ManufacturePlasticProducts({ data }) {
  const { title, description, image, buttonText, buttonLink } = data;
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div ref={leftRef} className={`relative scroll-fade-left ${leftInView ? 'in-view' : ''}`}>
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="Plastic Manufacturing Process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef} className={`space-y-6 scroll-fade-right ${rightInView ? 'in-view' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-[#1a1a1a] leading-[1.2]">
              {title.line1}
              <br />
              {title.line2}{" "}
              <span className="text-[#139C57]">{title.highlight}</span>
            </h2>

            <p
              className="text-[#4a4a4a] text-[16px] md:text-[17px] leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="pt-2">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center border-2 border-primary text-[#183F34] hover:bg-primary hover:text-white px-8 py-3.5 rounded-2xl font-semibold text-[15px] transition-all btn-hover-lift"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
