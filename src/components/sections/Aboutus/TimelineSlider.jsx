'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function TimelineSlider({ data }) {
  if (!data || data.length === 0) return null

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: false
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [progress, setProgress] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  // Auto-slide functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoSlideTimer = setInterval(() => {
      scrollNext()
    }, 3000)

    return () => clearInterval(autoSlideTimer)
  }, [emblaApi, scrollNext])

  // Progress bar animation - adjusted for 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + (100 / 30) // 3000ms / 100ms = 30 steps
      })
    }, 100)

    return () => clearInterval(interval)
  }, [selectedIndex])

  return (
    <section className="py-12 lg:py-16 bg-[#F6F6EF]">
      <div className="max pad mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading + manual nav */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#183F34] leading-[1.2]">
            A Legacy of <span className="text-[#139C57]">Quality Products</span>.
          </h2>

          <div className="flex gap-3 flex-shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#183F34] text-[#183F34] flex items-center justify-center transition-all hover:bg-[#183F34] hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#183F34] text-[#183F34] flex items-center justify-center transition-all hover:bg-[#183F34] hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden -ml-px" ref={emblaRef}>
          <div className="flex">
            {data.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_40%]"
                >
 <div className={`bg-[#F6F6EF] h-full flex flex-col px-6 ${selectedIndex == index ? '' : 'border-l border-gray-300'}`}>
                    {/* Image - Small size on top left */}
                    <div className="mb-6">
                      <div className="relative w-42 h-32 bg-gray-100 rounded overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        {/* Green accent line on image */}
                        {/* <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#00A86B]"></div> */}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Year */}
                      <h3 className="text-5xl sm:text-6xl font-bold text-[#00A86B] mb-4 leading-tight">
                        {item.year}
                      </h3>

                      {/* Title */}
                      <h4 className="text-2xl sm:text-3xl font-semibold text-[#183F34] mb-4 leading-snug">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-base text-[#5D6865] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Progress Bars - Bottom slider lines */}
        <div className="flex gap-3 mt-8 justify-start ml-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="w-16 sm:w-20 h-1 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className="h-full bg-[#00A86B] transition-all duration-100 ease-linear"
                style={{
                  width: selectedIndex === index ? `${progress}%` : selectedIndex > index ? '100%' : '0%'
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
