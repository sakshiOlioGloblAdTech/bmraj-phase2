"use client";

import Image from "next/image";
import Accordion from "@/components/ui/Accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BoxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M23.6587 5.32045C23.6587 5.00328 23.4671 4.71751 23.1738 4.59696L12.1266 0.0586609C11.9361 -0.0195536 11.7226 -0.0195536 11.5321 0.0586609L0.48493 4.59696C0.191577 4.71746 0 5.00328 0 5.32045V19.6796C0 19.9967 0.191528 20.2825 0.48493 20.403L11.5321 24.9413C11.7205 25.0187 11.9323 25.0204 12.1256 24.9413C12.135 24.9382 11.7168 25.1097 23.1738 20.403C23.4672 20.2825 23.6587 19.9967 23.6587 19.6796V5.32045ZM11.8294 9.07895L7.75888 7.40677L16.5556 3.56932L20.8983 5.35334L11.8294 9.07895ZM1.56429 6.55311L5.07617 7.99582V12.0661C5.07617 12.498 5.42638 12.8483 5.85832 12.8483C6.29026 12.8483 6.64046 12.498 6.64046 12.0661V8.63845L11.0472 10.4488V23.0509L1.56429 19.1553V6.55311ZM11.8294 1.62769L14.5408 2.74157L5.74403 6.57901L2.76039 5.3533L11.8294 1.62769ZM12.6115 10.4488L22.0944 6.55311V19.1553L12.6115 23.0509V10.4488Z"
      fill="#A5CE37"
    />
  </svg>
);

export default function WhyChooseContractManufacturing({ data }) {
  const { title, image, statCards, accordionItems } = data;
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with Stats */}
          <div ref={leftRef} className={`relative scroll-fade-left ${leftInView ? 'in-view' : ''}`}>
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="Why Choose BMRAJ for Contract Manufacturing"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Stat Card */}
            {statCards?.[0] && (
              <div className="absolute -top-4 -right-4 md:-top-6 md:right-4 lg:-right-6 bg-[#183F34] rounded-2xl p-5 shadow-xl min-w-[200px] float-animation">
                <div className="flex gap-3 items-center mt-3 mb-1">
                  <BoxIcon />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#A5CE37]">
                    {statCards[0].value}
                  </h3>
                </div>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  {statCards[0].label}
                </p>
              </div>
            )}

            {/* Bottom Left Stat Card */}
            {statCards?.[1] && (
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:left-6 lg:-left-6 bg-[#183F34] rounded-2xl p-5 shadow-xl min-w-[160px] float-animation" style={{ animationDelay: '0.5s' }}>
                <div className="flex gap-3 items-center mt-3 mb-1">
                  <BoxIcon />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#A5CE37]">
                    {statCards[1].value}
                  </h3>
                </div>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  {statCards[1].label}
                </p>
              </div>
            )}
          </div>

          {/* Right - Content & Accordion */}
          <div ref={rightRef} className={`scroll-fade-right ${rightInView ? 'in-view' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] mb-8">
              <span className="text-[#183F34]">{title.line1}</span>
              <br />
              <span className="text-[#139C57]">{title.line2}</span>
            </h2>

            <div>
              <Accordion data={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
