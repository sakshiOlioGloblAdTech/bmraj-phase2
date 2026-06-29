"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BmrajLeadersection() {
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardRef, isInView: cardInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-12">
      <div className="max pad mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with Overlay Card */}
          <div className="relative">
            <div
              ref={imageRef}
              className={`relative rounded-3xl rounded-lg w-full h-[500px] shadow-2xl scroll-fade-left ${imageInView ? 'in-view' : ''}`}
            >
                 <Image
                    src='/plastic-manufacturing-machine.png'
                    alt='Plastic manufacturing facility'
                    fill
                    className="object-cover rounded-xl"
                    priority
                />
            </div>


            <div
              ref={cardRef}
              className={`absolute bottom-8 left-8 bg-[#183F34] rounded-2xl p-8 shadow-2xl max-w-[280px] scroll-scale-up stagger-3 float-animation ${cardInView ? 'in-view' : ''}`}
            >
              <div className="mb-4">
              <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M23.6587 5.32045C23.6587 5.00328 23.4671 4.71751 23.1738 4.59696L12.1266 0.0586609C11.9361 -0.0195536 11.7226 -0.0195536 11.5321 0.0586609L0.48493 4.59696C0.191577 4.71746 0 5.00328 0 5.32045V19.6796C0 19.9967 0.191528 20.2825 0.48493 20.403L11.5321 24.9413C11.7205 25.0187 11.9323 25.0204 12.1256 24.9413C12.135 24.9382 11.7168 25.1097 23.1738 20.403C23.4672 20.2825 23.6587 19.9967 23.6587 19.6796V5.32045ZM11.8294 9.07895L7.75888 7.40677L16.5556 3.56932L20.8983 5.35334L11.8294 9.07895ZM1.56429 6.55311L5.07617 7.99582V12.0661C5.07617 12.498 5.42638 12.8483 5.85832 12.8483C6.29026 12.8483 6.64046 12.498 6.64046 12.0661V8.63845L11.0472 10.4488V23.0509L1.56429 19.1553V6.55311ZM11.8294 1.62769L14.5408 2.74157L5.74403 6.57901L2.76039 5.3533L11.8294 1.62769ZM12.6115 10.4488L22.0944 6.55311V19.1553L12.6115 23.0509V10.4488Z" fill="#A5CE37"/>
                </svg>
                <h3 className="text-3xl font-semi-bold text-[#A5CE37] mb-2">25+ Years</h3>
              </div>

              <p className="text-[#FFFFFF9E] text-[16px] leading-relaxed mb-6">
                For over two decades, BMRAJ has been a global leader in industrial plastic packaging and storage solutions.
              </p>


              <div className="w-full bg-[#D9D9D930] rounded-full h-2">
                <div className="bg-[#A5CE37] h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>


          <div
            ref={contentRef}
            className={`space-y-6 scroll-fade-right ${contentInView ? 'in-view' : ''}`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183F34] leading-tight">
              Plastic Manufacturing Partner <span className="text-primary block mt-1">for Global Brands</span>
              
            </h1>

            <p className="text-[#687975] text-md leading-[1.7]">
              BMRAJ's legacy is built on engineering excellence, unwavering reliability, and a commitment to delivering top-tier plastic quality.
              </p>
              <p className="text-[#687975] text-md leading-[1.7]">
              We collaborate with manufacturers, exporters, and consumer brands to solve complex packaging challenges with solutions that meet the highest global standards for safety, durability, and market impact.
            </p>
            <ul className="text-[#687975] text-md leading-[1.7] list-disc list-inside">
              <li>ISO 9001 Certified </li>
              <li>Eco-Conscious Manufacturing</li>
              <li>Global Supply Partnerships</li>
            </ul>

            <Link
              href="/about-us"
              className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl btn-hover-lift btn-fill btn-ripple"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
