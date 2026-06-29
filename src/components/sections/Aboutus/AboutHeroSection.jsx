'use client'

import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import { generateAboutUsBreadcrumbs } from '@/utils/breadcrumbs'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'


export default function AboutHeroSection({ data }) {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="pad max">
      <div className="max-w-3xl py-12 lg:py-16">
        <Breadcrumbs items={generateAboutUsBreadcrumbs()} className="mb-8" />

        <div
          ref={contentRef}
          className={`space-y-4 scroll-fade-up ${contentInView ? 'in-view' : ''}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-[56px] font-[700] text-[#183F34] leading-tight">
            {data.title}{' '}<br/>
            <span className="text-[#139C57]">{data.titleHighlight}</span>
          </h1>

          <p className="text-base md:text-[18px] text-[#5D6865] leading-relaxed max-w-3xl">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {data.buttons.map((button, index) => (
              <Link key={index} href={button.link}>
                <button
                  className={`px-6 py-3 font-semibold rounded-2xl transition-all duration-300 btn-hover-lift ${
                    button.type === 'primary'
                      ? 'bg-[#183F34] text-white hover:bg-[#0f2920] btn-ripple'
                      : 'bg-[#D1EEAE] text-[#139C57] hover:bg-[#bde099] btn-shine'
                  }`}
                >
                  {button.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
