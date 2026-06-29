"use client";

import Image from "next/image";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export default function LeadershipTeam({ data }) {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { setRef, inViewStates } = useStaggeredAnimation(data?.team?.length || 0, { staggerDelay: 150 });

  if (!data) return null;

  return (
    <section className="bg-[#F6F6EF] py-12 lg:py-16">
      <div className="max pad mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] text-[#23322E] mb-4">
            {data.title.start}{" "}
            <span className="text-[#139C57]">{data.title.highlight}</span>{" "}
            {data.title.end}
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#183F34] mb-6">
            {data.subtitle}
          </h3>
          <p className="text-[#66726F] text-base md:text-[16px] font-[400] max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.team.map((member, index) => (
            <div
              ref={setRef(index)}
              key={member.id}
              className={`group cursor-pointer scroll-fade-up ${inViewStates[index] ? 'in-view' : ''}`}
            >
              {/* Image Card */}
              <div className="relative bg-[#D8D8C8] rounded-3xl overflow-hidden h-[290px] shadow-soft hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.title}
                  width={500}
                  height={500}
                  className="object-cover object-center"
                />

                {/* Green Overlay - shows on hover with fade-up animation */}
                <div className="absolute inset-0 bg-[#139C57] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Description - Hidden initially, fades up on hover */}
                <div className="absolute inset-0 flex items-center justify-center p-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-[16px] leading-relaxed text-[#FFFFFF] text-center">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Title and Designation - Below the card */}
              <div className="mt-4 text-left">
                <h4 className="text-xl font-semibold mb-1 text-[#139C57]">
                  {member.title}
                </h4>
                <p className="text-sm text-[#687975]">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
