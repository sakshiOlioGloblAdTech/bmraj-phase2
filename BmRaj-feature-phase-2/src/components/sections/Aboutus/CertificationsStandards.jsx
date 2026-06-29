'use client'

import Image from 'next/image'

const certifications = [
  {
    year: "2025",
    title: "Best Lorem Ipsum Dolor",
    description: "BMRAJ awarded for best Lorem Ipsum Dolor is a text",
    image: "/about/certification-award.png"
  },
  {
    year: "2025",
    title: "Best Lorem Ipsum Dolor",
    description: "BMRAJ awarded for best Lorem Ipsum Dolor is a text",
    image: "/about/certification-award.png"
  },
  {
    year: "2025",
    title: "Best Lorem Ipsum Dolor",
    description: "BMRAJ awarded for best Lorem Ipsum Dolor is a text",
    image: "/about/certification-award.png"
  },
  {
    year: "2025",
    title: "Best Lorem Ipsum Dolor",
    description: "BMRAJ awarded for best Lorem Ipsum Dolor is a text",
    image: "/about/certification-award.png"
  },
  {
    year: "2025",
    title: "Best Lorem Ipsum Dolor",
    description: "BMRAJ awarded for best Lorem Ipsum Dolor is a text",
    image: "/about/certification-award.png"
  },
];

export default function CertificationsStandards() {
  return (
    <section className="bg-[#F6F6EF] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] text-[#23322E] mb-4">
            Certifications & Standards
          </h2>
          <p className="text-[#66726F] text-base md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Our leadership team brings decades of experience in plastic engineering, manufacturing operations, and global supply chain management, guiding our vision for quality and innovation.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 animate-infinite-scroll">
            {/* First set of cards */}
            {certifications.map((cert, index) => (
              <CertificationCard key={`set1-${index}`} certification={cert} />
            ))}
            {/* Duplicate set for seamless loop */}
            {certifications.map((cert, index) => (
              <CertificationCard key={`set2-${index}`} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CertificationCard = ({ certification }) => {

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer">
      {/* Card Container */}
      <div className={`relative rounded-3xl h-[280px] md:h-[320px] flex flex-col items-center justify-center`}>
        {/* Image/Icon - visible by default, hidden on hover */}
        <div className="flex items-center justify-center">
            <Image
              src={certification.image}
              alt={certification.title}
              width={400}
              height={400}
              className="object-contain"
            />
         
        </div>

        <div className="pt-1 translate-y-4">
          <p className="text-[16px] text-primary font-[500] mb-2">
            {certification.year} | {certification.title}
          </p>
          <p className="text-[16px] text-[#66726F] pt-1">
            {certification.description}
          </p>
        </div>
      </div>
    </div>
  );
};
