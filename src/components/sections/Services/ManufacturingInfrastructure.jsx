"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Play Icon Component
const PlayIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Chevron Icon
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Accept full YouTube URL, short youtu.be, embed URL, or bare ID.
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
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

const AccordionItem = ({ item, isOpen, onToggle, isLast }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-4 text-left transition-colors duration-200 border-b border-gray-200 ${
          isOpen ? "text-[#139C57]" : "text-[#183F34]"
        }`}
      >
        <span className="text-[16px] md:text-[17px] font-semibold px-4 md:px-8">{item.title}</span>
        <span className="px-4 md:px-6">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        className="grid transition-all duration-500 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className={`px-4 md:px-8 py-4 ${!isLast ? "border-b border-gray-200" : ""}`}>
            <ul className="space-y-2">
              {item.content.map((contentItem, index) => (
                <li key={index} className="text-[14px] md:text-[15px] leading-[1.6]">
                  {contentItem.label && (
                    <span className="text-[#183F34] font-medium">{contentItem.label}:{" "}</span>
                  )}
                  <span className="text-[#687975]">{contentItem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ thumbnailUrl, videoUrl, isPlaying, onPlay }) => {
  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) return null;

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const fallbackPoster = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-full bg-black">
      {isPlaying ? (
        <iframe
          key={videoId}
          src={embedSrc}
          title="BMRAJ Manufacturing"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Play video"
        >
          <Image
            src={thumbnailUrl || fallbackPoster}
            alt="Video thumbnail"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 65vw, 100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg text-[#183F34]">
              <PlayIcon size={32} />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default function ManufacturingInfrastructure({ data }) {
  const { title, description, buttonText, buttonLink, accordionItems } = data;
  const [openAccordion, setOpenAccordion] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });

  const handleAccordionToggle = (id) => {
    // If clicking the already-open item, collapse it. Otherwise switch to it
    // and reset the player to its thumbnail state so the new video shows poster first.
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
      setIsPlaying(false);
    }
  };

  const activeItem =
    accordionItems.find((item) => item.id === openAccordion) || accordionItems[0];

  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-start md:justify-between mb-10 scroll-fade-up ${headerInView ? 'in-view' : ''}`}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-[#183F34] leading-[1.2] mb-2">
              {title}
            </h2>
            <p className="text-[#687975] text-[16px] md:text-[17px]">
              {description}
            </p>
          </div>
          <Link
            href={buttonLink}
            className="mt-4 md:mt-0 inline-flex items-center justify-center border-2 border-primary text-[#183F34] hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-semibold text-[14px] transition-all btn-hover-lift"
          >
            {buttonText}
          </Link>
        </div>

        {/* Content Grid - 30/70 split */}
        <div ref={contentRef} className={`flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8 scroll-fade-up ${contentInView ? 'in-view' : ''}`}>
          {/* Left - Accordion (35%) */}
          <div className="w-full lg:w-[35%] bg-white rounded-2xl py-2 shadow-soft">
            <div>
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openAccordion === item.id}
                  onToggle={() => handleAccordionToggle(item.id)}
                  isLast={index === accordionItems.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right - Video (65%) */}
          <div className="w-full lg:w-[65%] h-[280px] sm:h-[320px] lg:h-[450px]">
            <VideoPlayer
              thumbnailUrl={activeItem.thumbnailUrl}
              videoUrl={activeItem.videoUrl}
              isPlaying={isPlaying}
              onPlay={() => setIsPlaying(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
