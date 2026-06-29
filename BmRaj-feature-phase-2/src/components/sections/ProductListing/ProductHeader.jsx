'use client';

import React from 'react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


export default function ProductHeader({ title, description, breadcrumbs }) {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-10" />
      <header
        ref={headerRef}
        className={`mb-8 scroll-fade-up ${headerInView ? 'in-view' : ''}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#183F34] mb-4">
          {title}
        </h1>
        <p className="text-[16px] text-[#5D6865] max-w-3xl">
          {description}
        </p>
      </header>
    </>
  );
}
