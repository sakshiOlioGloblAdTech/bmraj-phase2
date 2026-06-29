'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Accept full YouTube URL, Shorts URL, short youtu.be, embed URL, or bare ID.
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/shorts\/([^?]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ];
  for (const re of patterns) {
    const match = url.match(re);
    if (match) return match[1];
  }
  return /^[\w-]{6,}$/.test(url) ? url : null;
}

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white opacity-90"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const SlideCard = ({ slide }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = slide.hasVideo ? extractYouTubeId(slide.videoUrl) : null;
  const canPlay = !!videoId;

  return (
    <div className="relative w-full h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-md group">
      {isPlaying && canPlay ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={slide.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.src = 'https://placehold.co/450x450/ccc/666?text=Error'; }}
          />

          {/* Dark overlay for better text contrast, especially on the "300 Tons" slide */}
          {slide.hasOverlay && (
            <div className="absolute inset-0 bg-black/40"></div>
          )}

          {/* Video Play Button */}
          {canPlay && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play video"
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30 cursor-pointer"
              >
                <PlayIcon />
              </button>
            </div>
          )}

          {/* Special text for the "300 Tons" slide */}
          {slide.specialText && (
            <div className="absolute top-1/2 -translate-y-1/2 left-6 text-white z-10">
              <h3 className="text-3xl font-bold leading-tight">
                {slide.specialText.line1}
                <br />
                {slide.specialText.line2}
              </h3>
            </div>
          )}

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 z-10">
            <p className="text-[#183F34] text-[16px] font-medium">{slide.title}</p>
          </div>
        </>
      )}
    </div>
  );
};



const defaultSlides = [
  {
    id: 1,
    imageUrl: "/thumnail/short/Blow-Molding.png",
    title: "Blow Molding Plant",
    hasVideo: true,
    videoUrl: "https://youtube.com/shorts/58wk21X8Z-E",
    hasOverlay: false,
  },
  {
    id: 2,
    imageUrl: "/thumnail/short/Injection-Molding.png",
    title: "Injection Molding Plant",
    hasVideo: true,
    videoUrl: "https://youtube.com/shorts/65GIkq-9MyI",
    hasOverlay: false,
  },
  {
    id: 3,
    imageUrl: "/thumnail/short/Printing.png",
    title: "Printing Unit",
    hasVideo: true,
    videoUrl: "https://youtube.com/shorts/mclWB1npzF8",
    hasOverlay: false,
  },
  {
    id: 4,
    imageUrl: "/thumnail/short/QC-testing.png",
    title: "QA & Testing Unit",
    hasVideo: true,
    videoUrl: "https://youtube.com/shorts/8Dp9JophzZo",
    hasOverlay: false,
  },
];

const defaultTitle = (
  <>
    Manufacturing Expertise with{" "}
    <span className="text-[#139C57]">Fail-Proof Quality</span>
  </>
);

export default function ManufacturingExpertiseSlider({
  title = defaultTitle,
  description = "Fully Equipped & Quality Driven Facilities for High-Precision Plastic Products",
  slides = defaultSlides,
}) {
  const slidesData = slides;


  const scrollContainerRef = React.useRef(null);

  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  const [gap, setGap] = React.useState(24); 

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const updateGap = () => {
      if (window.innerWidth < 640) setGap(16); // sm
      else if (window.innerWidth < 1024) setGap(20); // md
      else setGap(24); // lg
    };
    updateGap();
    window.addEventListener('resize', updateGap);
    
    const timer = setTimeout(() => setIsReady(true), 0);
    
    return () => {
      window.removeEventListener('resize', updateGap);
      clearTimeout(timer);
    };
  }, []);


  const handleNext = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.children[0].offsetWidth;
      // Scroll by one slide width + one gap
      scrollContainerRef.current.scrollBy({ 
        left: slideWidth + gap, 
        behavior: 'smooth' 
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.children[0].offsetWidth;
      scrollContainerRef.current.scrollBy({ 
        left: -(slideWidth + gap), 
        behavior: 'smooth' 
      });
    }
  };


  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      
      if (scrollWidth <= clientWidth) {
        setScrollProgress(100);
        return;
      }

      // Calculate progress based on total content width
      const progress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
      
      // We might slightly exceed 100 due to rounding, so cap it
      setScrollProgress(Math.min(progress, 100));
    }
  };
  
  // Effect to set the initial state of the progress bar
  // This will run once `isReady` is true
  React.useEffect(() => {
    if (isReady) {
      // Run onces to set initial fill
      handleScroll();
    }
  }, [isReady]);


  return (

      <section className="bg-[#F4F4F0] w-full py-12 overflow-hidden">
        <div className="pad max mx-auto">
          
          {/* Header Section (Same as before) */}
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#183F34]">
                {title}
              </h2>
              <p className="text-[#687975] mt-3 text-lg">
                {description}
              </p>
            </div>
            <Link
              href="/services/contract-manufacturing"
              className="flex-shrink-0 bg-transparent border border-[#2F855A] text-[#2F855A] font-semibold py-3 px-6 rounded-xl transition-all hover:bg-[#2F855A] hover:text-white transition-all btn-hover-lift btn-fill self-start md:self-center"
            >
              Know More
            </Link>
          </div>

          {/* Slider Section */}
          <div className="relative">
            
            <div
              className="slider-container gap-2 md:gap-3 lg:gap-4 overflow-x-hidden"
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {/* Slides are mapped here */}
              {slidesData.map((slide) => (
                <div
                  className="slide-item w-[calc(100%-2rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
                  key={slide.id}
                >
                  <SlideCard slide={slide} />
                </div>
              ))}
            </div>

        
            {/* Progress bar — only useful when there are more slides than fit on screen.
                Hidden at lg if <=4 slides (lg shows 4 per row), md if <=3, sm if <=2. */}
            {slidesData.length > 1 && (
              <div
                className={`items-center justify-center mt-8 max-w-sm mx-auto ${
                  slidesData.length > 2 ? "flex" : "hidden"
                } ${slidesData.length <= 3 ? "md:hidden" : ""} ${
                  slidesData.length <= 4 ? "lg:hidden" : ""
                }`}
              >
                <div className="w-full max-w-xs mx-4 h-1 bg-[#D9E9D4] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#2F855A] rounded-full transition-all duration-100"
                    style={{
                      width: `${scrollProgress}%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/* Arrows — same visibility rules as the progress bar. */}
            {slidesData.length > 1 && (
              <>
                <button
                  aria-label="Previous slide"
                  onClick={handlePrev}
                  className={`absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-12 h-12 bg-[#23322E] rounded-full items-center justify-center transition-all ${
                    slidesData.length > 2 ? "flex" : "hidden"
                  } ${slidesData.length <= 3 ? "md:hidden" : ""} ${
                    slidesData.length <= 4 ? "lg:hidden" : ""
                  }`}
                >
                  <LeftArrowIcon />
                </button>
                <button
                  aria-label="Next slide"
                  onClick={handleNext}
                  className={`absolute top-1/2 -translate-y-1/2 -right-5 z-20 w-12 h-12 bg-[#23322E] rounded-full items-center justify-center transition-all ${
                    slidesData.length > 2 ? "flex" : "hidden"
                  } ${slidesData.length <= 3 ? "md:hidden" : ""} ${
                    slidesData.length <= 4 ? "lg:hidden" : ""
                  }`}
                >
                  <RightArrowIcon />
                </button>
              </>
            )}

          </div>

        </div>
      </section>

  );
}


