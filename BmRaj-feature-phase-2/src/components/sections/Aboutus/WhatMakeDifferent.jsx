'use client'

import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const accordionData = [
  {
    title: "Expertise in Blow molding & Injection molding",
    content:
      "Mastery of core plastic manufacturing processes for durable, precise, and high-volume production.",
  },
  {
    title: "End-to-End Custom Manufacturing",
    content:
      "Your single-source partner for custom plastic products, from mould design and product development to full-scale production.",
  },
  {
    title: "Integrated Sustainable Solutions",
    content:
      "Leader in sustainable packaging using recyclable materials to reduce carbon footprint.",
  },
  {
    title: "Quality & Compliance Assured",
    content:
      "All products meet rigorous international standards and certifications, ensuring safety and performance.",
  },
  {
    title: "Scalable Production Capacity",
    content:
      "State-of-the-art manufacturing facility equipped to handle both large-scale and specialized contract manufacturing projects.",
  },
];

export default function WhatMakeDifferent() {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardRef, isInView: cardInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="bg-[#f6f6ef]">
      <div className="pad max py-12">
        <div className="relative flex grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={contentRef}
            className={`w-full md:flex-1 scroll-fade-left ${contentInView ? 'in-view' : ''}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#183F34] mb-8">
              What makes us Different <br />{" "}
              {/* <span className="text-primary gradient-text">Lorem Ipsum Dolor</span> */}
            </h2>

            <div className="space-y-2">
              <Accordion data={accordionData} />
            </div>
          </div>

          <div
            ref={imageRef}
            className={`relative scroll-fade-right ${imageInView ? 'in-view' : ''}`}
          >
            <div className="relative rounded-3xl rounded-lg w-full h-[500px] shadow-2xl">
              <Image
                src="/plastic-manufacturing-machine.png"
                alt="Plastic manufacturing facility"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
            <div
              ref={cardRef}
              className={`absolute bottom-8 left-8 bg-[#183F34] rounded-2xl p-8 shadow-2xl max-w-[230px] float-animation scroll-scale-up ${cardInView ? 'in-view' : ''}`}
            >
              <div className="mb-4">
                <svg
                  className="mb-4"
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
                <h3 className="text-3xl font-semi-bold text-[#A5CE37] mb-2">
                  25+
                </h3>
              </div>

              <p className="text-[#FFFFFF9E] text-[16px] leading-relaxed mb-6">
              Years as a Tier-1 Supplier to Major Industry Leaders 
              </p>

              <div className="w-full bg-[#D9D9D930] rounded-full h-2">
                <div
                  className="bg-[#A5CE37] h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
