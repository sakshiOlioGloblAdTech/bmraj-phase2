"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 'plastic-blow-moulding',
    title: 'Plastic Blow Molding',
    image: '/services/blow-moulding.png',
    href: '/services/plastic-blow-moulding'
  },
  {
    id: 'plastic-injection-moulding',
    title: 'Plastic Injection Molding',
    image: '/services/injection-moulding.png',
    href: '/services/plastic-injection-moulding'
  },
  {
    id: 'end-to-end-assembly',
    title: 'End To End Assembly',
    image: '/services/assembly.png',
    href: '/services/end-to-end-assembly'
  }
];

const ServiceCard = ({ service, onClose }) => (
  <Link
    href={service.href}
    onClick={onClose}
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all group"
  >
    <div className="w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0 grayscale">
      <Image
        src={service.image}
        alt={service.title}
        width={60}
        height={60}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-[16px] font-[600] text-[#183F34] group-hover:text-primary">
        {service.title}
      </h3>
      <p className="text-[14px] font-[400] text-[#5D6865]">
        View Service
      </p>
    </div>
  </Link>
);

const ServicesMegaMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}>
        <div className="absolute top-2 right-3 border border-gray-300 bg-secondary rounded-lg cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className="fixed top-[70px] md:top-[80px] left-0 right-0 bg-[#F6F6EF] shadow-2xl z-50 max-w-[1200px] mx-2 md:mx-4 lg:mx-auto border border-[#DFDFD3] rounded-[5px] transition-all duration-300 ease-out overflow-y-auto"
        style={{
          animation: isOpen ? "slideDown 0.3s ease-out" : "none",
          transformOrigin: "top",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-6 md:gap-8">
          {/* Left Section - Title and CTA */}
          <div className="lg:w-[280px] flex flex-col justify-center">
            <h2 className="text-[24px] font-[700] text-[#183F34] mb-4">
              Contract Manufacturing Services
            </h2>
            <Link
              href="/services/contract-manufacturing"
              onClick={onClose}
              className="inline-flex items-center justify-center w-fit px-6 py-3 border-2 border-primary text-[#183F34] rounded-2xl font-[600] text-[16px] hover:bg-primary hover:text-white transition-all"
            >
              Know More
            </Link>
          </div>

          {/* Right Section - Services Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClose={onClose}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMegaMenu;
