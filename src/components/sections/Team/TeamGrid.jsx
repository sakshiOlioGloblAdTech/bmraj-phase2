"use client";

import Image from "next/image";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export default function TeamGrid({ members }) {
  const { setRef, inViewStates } = useStaggeredAnimation(members.length, {
    staggerDelay: 120,
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
      {members.map((member, index) => (
        <article
          ref={setRef(index)}
          key={member.id}
          className={`group bg-white rounded-2xl overflow-hidden shadow-soft scroll-fade-up ${
            inViewStates[index] ? "in-view" : ""
          }`}
        >
          {/* Portrait — fixed 3:4 frame so mismatched source crops still line up */}
          <div className="relative w-full aspect-[3/4] bg-[#D8D8C8] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-3 sm:p-4 lg:p-5 text-left">
            <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-[600] text-[#183F34] leading-tight mb-0.5 sm:mb-1">
              {member.name}
            </h3>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-[400] text-[#139C57] leading-tight">
              {member.designation}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
