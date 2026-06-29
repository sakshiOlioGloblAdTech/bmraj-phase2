'use client';

import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

function ApplicationCard({ title, description, cardRef, isInView }) {
  return (
    <div
      ref={cardRef}
      className={`bg-[#F6F6EF] rounded-2xl border border-[#DFDFD3] p-6 hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 scroll-fade-up ${isInView ? 'in-view' : ''}`}
    >
      <div className="w-2 h-2 bg-[#139C57] rounded-full mb-4"></div>
      <h3 className="text-[#183F34] font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#66726F] text-[16px] leading-relaxed">{description}</p>
    </div>
  );
}

export default function IdealRangeSection({ title, applications }) {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
  const { setRef, inViewStates } = useStaggeredAnimation(applications?.length || 0, { staggerDelay: 100 });

  if (!applications || applications.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <h2
        ref={titleRef}
        className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#183F34] mb-8 scroll-fade-up ${titleInView ? 'in-view' : ''}`}
      >
        {title || "Ideal for a Range of Industrial Applications"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <ApplicationCard
            key={index}
            title={app.title}
            description={app.description}
            cardRef={setRef(index)}
            isInView={inViewStates[index]}
          />
        ))}
      </div>
    </section>
  );
}
