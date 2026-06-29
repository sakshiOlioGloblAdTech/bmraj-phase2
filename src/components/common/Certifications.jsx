"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
    <rect width="31" height="31" rx="15.5" fill="#139C57"/>
    <path d="M9 15.5C11.5 17 12.1994 19.9022 12.4905 19.8175C12.7798 19.7333 16 13.5 22 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


const CertificationPill = ({ text }) => (
  <div className="flex items-center bg-[#26584A] rounded-2xl px-5 py-2.5 mx-3 whitespace-nowrap shadow-md">
    <CheckIcon />
    <span className="text-white text-[16px] font-[500] ml-2">{text}</span>
  </div>
);


const ScrollingRow = ({ items, direction = 'left', duration = 40 }) => {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    // relative + overflow-x-hidden creates the "mask" for the marquee
    <div className="relative flex overflow-x-hidden w-full group">
      <div
        className={`flex ${animationClass} py-1`}
        style={{ animationDuration: `${duration}s` }}
        aria-hidden="true"
      >
        {/* Render the list of items twice for a seamless loop */}
        {[...items, ...items].map((text, i) => (
          <CertificationPill key={`${text}-${i}`} text={text} />
        ))}
      </div>
    </div>
  );
};


const CertificationsCommanSection = ({
    title,
    certificationName,
    certificationIcon,
    certificationText,
    row1Items,
    row2Items,
    row3Items,
  }) => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
    const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation({ threshold: 0.3 });

    return (
      <div className="relative flex flex-col items-center justify-center bg-[#183F34] text-white mt-6 mb-16 py-24 font-sans overflow-hidden">
        <div className="w-full mx-auto flex flex-col items-center text-center z-20">
          <div
            ref={headerRef}
            className={`scroll-fade-up ${headerInView ? 'in-view' : ''}`}
          >
            <span className="text-[16px] text-[#FFFFFF] mb-5 block">{title}</span>
            <h1 className="text-2xl sm:text-3xl md:text-[54px] font-bold">{certificationName}</h1>

            <div className="flex items-center justify-center text-4xl md:text-[54px] font-bold mb-12 flex-wrap">
              <span className="text-primary mr-1">{certificationText}</span>

              <div className="flex-shrink-0 w-16 h-16 bg-[#FBBF24] rounded-full flex items-center justify-center mx-1 my-1 shadow-lg">
                <Image alt={`${certificationName} icon`} src={certificationIcon} width={200} height={200} />
              </div>

              <span className="ml-1 text-primary">Certified</span>
            </div>
          </div>

          {/* Scrolling Rows */}
          <div className="w-full flex flex-col space-y-1 mb-16">
            <ScrollingRow items={row1Items} direction="right" duration={50} />
            <ScrollingRow items={row2Items} direction="left" duration={45} />
            <ScrollingRow items={row3Items} direction="right" duration={55} />
          </div>

          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 scroll-fade-up stagger-2 ${buttonsInView ? 'in-view' : ''}`}
          >
            <Link
              href="/contact-us"
              className="bg-[#D1EEAE] text-primary font-[600] py-3 px-6 rounded-2xl text-[16px] shadow-lg btn-hover-lift btn-shine btn-ripple pop-elastic"
            >
              Connect With Us
            </Link>
            <Link
              href="/about-us"
              className="bg-transparent border-2 border-white/50 text-white font-bold py-3 px-6 rounded-2xl text-[16px] btn-hover-lift btn-ripple glass-card"
            >
              About us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
          <Image alt="bg-layer" src='/certificate-rounded.png' fill className="object-contain object-bottom" />
        </div>
      </div>
    );
  };
  
  export default CertificationsCommanSection;
  