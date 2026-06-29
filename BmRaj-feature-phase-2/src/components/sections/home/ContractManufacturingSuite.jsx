'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'

// SVG icon for the right arrow on the button
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transform transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// SVG icon for the placeholder image on inactive cards
const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

// Reusable Service Card component
const ServiceCard = ({ service, cardRef, isInView }) => {
  const { title, description, number, imageUrl, rotationClass, href } = service;

  return (
    <Link href={href}><div
      ref={cardRef}
      className={`group rounded-3xl p-6 md:p-8 transition-all duration-500 ease-out relative min-h-[300px] md:min-h-[320px] flex flex-col shadow-sm bg-white text-gray-800 hover:bg-[#139C57] hover:text-white hover:scale-[1.03] hover:shadow-xl z-20 scroll-fade-up ${rotationClass} ${isInView ? 'in-view' : ''}`}
    >

      <div className="flex-grow">
        <div className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <ImageIcon />
          )}
        </div>

        <div className='flex justify-between items-center mb-5'>
        <h3 className="text-[20px] font-bold text-[#183F34] group-hover:text-white transition-colors duration-500 ease-out">
            {title.split(" ").slice(0, 2).join(" ")}<br />
            {title.split(" ").slice(2).join(" ")}
            </h3>

            <span
                className="text-md font-semi-bold mt-1">
                {number}
            </span>
        </div>
        <p className="text-[16px] text-[#66726F] group-hover:text-[#FFFFFF] transition-colors duration-500 ease-out">
          {description}
        </p>
      </div>
    </div></Link>
  );
};


export default function ContractManufacturingSuite() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation({ threshold: 0.3 });
  const { setRef, inViewStates } = useStaggeredAnimation(3, { staggerDelay: 150 });

  const services = [
    {
      id: 1,
      title: "Plastic Injection Molding",
      description: "Quality manufacturing of pail containers, IML (In-Mould Label) packaging, and caps & closures.",
      number: "01",
      imageUrl: "/services/injection-moulding.png",
      rotationClass: "hover:!rotate-0 rotate-3",
      href: "/services/plastic-injection-moulding",
    },
    {
      id: 2,
      title: "Plastic Blow Molding",
      description: "High-volume production of drums, bottles, and containers with consistent wall thickness, durability, and compliance.",
      number: "02",
      imageUrl: '/services/blow-moulding.png',
      rotationClass: "hover:!rotate-0 -rotate-2",
      href: "/services/plastic-blow-moulding",
    },
    {
      id: 3,
      title: "End-to-End Manufacturing",
      description: "Integrated assembly services that combine components, closures, and packaging elements into ready-to-ship final products.",
      number: "03",
      imageUrl: '/services/assembly.png',
      rotationClass: "hover:!rotate-0 rotate-3",
      href: "/services/end-to-end-assembly",
    },
  ];

  return (

      <section className="px-8 md:px-16 py-12 relative overflow-hidden">

        {/* Background Text Animation Wrapper */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-[70px] md:text-[96px] font-extrabold text-green-800 opacity-[0.08] mx-12 select-none">Manufacturing for Commerical Products</span>
              <span className="text-[70px] md:text-[96px] font-extrabold text-green-800 opacity-[0.08] mx-12 select-none">Manufacturing for Commerical Products</span>
            </div>
          </div>
        </div>


        <div className="relative z-10 max-w-6xl mx-auto">

          <h1
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-16 md:mb-20 scroll-fade-up ${titleInView ? 'in-view' : ''}`}
          >
            <span className="text-[#183F34]">Combining Tech </span>
            <span className="text-primary"> and Talent <br /> for Plastic</span>
            <span className="text-[#183F34]"> Perfection</span>
          </h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                cardRef={setRef(index)}
                isInView={inViewStates[index]}
              />
            ))}
          </div>

          {/* Connecting Lines Container */}
          <div className="relative h-24 w-full max-w-6xl mx-auto -mt-4 hidden md:block">
            {/* Line from Card 1 (1/6 = 16.66%) */}
            <div className="absolute left-[16.66%] top-4 w-px h-18 bg-gray-300 rounded-full"></div>

            {/* Line from Card 2 (1/2 = 50%) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 w-px h-18 bg-gray-300 rounded-full"></div>

            {/* Line from Card 3 (5/6 = 83.33%) */}
            <div className="absolute right-[16.66%] top-4 w-px h-20 bg-gray-300 rounded-full"></div>

            {/* Horizontal Connector Line */}
            <div className="absolute left-[16.66%] right-[16.66%] top-24 h-px bg-gray-300 rounded-full">
                {/* Explore Button */}
                <div
                  ref={buttonRef}
                  className={`flex justify-center -mt-[25px] relative z-10 scroll-scale-up ${buttonInView ? 'in-view' : ''}`}
                >
                    <Link
                      href="/services/contract-manufacturing"
                      className="bg-[#D1EEAE] text-green-800 font-semibold py-3 px-6 rounded-xl flex items-center gap-2.5 group transition-all btn-hover-lift btn-shine btn-arrow-slide"
                    >
                    Explore Contract Manufaturing
                    <ArrowIcon />
                    </Link>
                </div>
            </div>
          </div>

          {/* Fallback line for mobile (simpler, just one line down) */}
          <div className="relative h-24 w-full -mt-4 md:hidden">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 bg-gray-300 rounded-full"></div>
          </div>


        </div>
      </section>

  );
}
