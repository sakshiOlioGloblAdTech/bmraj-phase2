"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="31" height="31" rx="15.5" fill="#139C57" />
    <path
      d="M9 15.5C11.5 17 12.1994 19.9022 12.4905 19.8175C12.7798 19.7333 16 13.5 22 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

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

export default function FacilityQualityTesting({ title, checklistTitle, checklist = [], image, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const videoId = extractYouTubeId(videoUrl);

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max mx-auto">
        {/* Centered Title */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-10 scroll-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15]">
            <span className="text-[#183F34]">{title.line1}</span>
            <span className="text-[#139C57]">{title.highlight1}</span>
            <br />
            <span className="text-[#183F34]">{title.line2}</span>
            <span className="text-[#139C57]">{title.highlight2}</span>
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-soft p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Title + Checklist */}
            <div>
              {checklistTitle && (
                <h3 className="text-2xl md:text-[28px] font-bold text-[#183F34] mb-6 leading-[1.2]">
                  {checklistTitle}
                </h3>
              )}
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#F6F6EF] rounded-xl px-4 py-3"
                  >
                    <CheckIcon />
                    <p className="text-[14px] md:text-[15px] text-[#183F34] font-medium leading-[1.5]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Media */}
            <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden bg-black">
              {videoId && isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={checklistTitle || "Quality Testing"}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={image || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "")}
                    alt={checklistTitle || "Quality Testing"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {videoId && (
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                      aria-label="Play video"
                    >
                      <span className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#183F34] shadow-lg transition-all hover:scale-110">
                        <PlayIcon />
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
