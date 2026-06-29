'use client'

import React from 'react'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'

export default function ManufacturerStory({ data }) {
  const { ref: storyRef, isInView: storyInView } = useScrollAnimation({ threshold: 0.2 })
  const { setRef, inViewStates } = useStaggeredAnimation(data?.achievements?.length || 0, { staggerDelay: 100 })

  if (!data) return null

  return (
    <section className="py-12 lg:py-16 bg-[#F6F6EF]">
      <div className="max pad mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Story Text */}
          <div
            ref={storyRef}
            className={`lg:col-span-9 scroll-fade-left ${storyInView ? 'in-view' : ''}`}
          >
            <p className="text-lg lg:text-[32px] font-[600] leading-relaxed text-[#183F34]">
              {data.content.map((segment, index) => (
                <span
                  key={index}
                  className={segment.highlight ? 'text-[#00A86B] font-medium' : ''}
                >
                  {segment.text}
                </span>
              ))}
            </p>
          </div>

          {/* Right Column - Achievements */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-2">
              {data.achievements.map((achievement, index) => (
                <div
                  ref={setRef(index)}
                  key={index}
                  className={`flex items-start gap-2 p-2 border-b border-[#D8D8D8] scroll-fade-right ${inViewStates[index] ? 'in-view' : ''}`}
                >
                  {/* Achievement Text */}
                  <div className="flex-1">
                    <p className="text-[16px] font-[500] text-[#5D6865]">
                      {achievement.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
