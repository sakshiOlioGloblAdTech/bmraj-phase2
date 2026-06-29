'use client'

import React, { useState } from 'react'
import Image from 'next/image'

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
)

// Accept full YouTube URL, short youtu.be, embed URL, or bare ID.
function extractYouTubeId(url) {
  if (!url) return null
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ]
  for (const re of patterns) {
    const match = url.match(re)
    if (match) return match[1]
  }
  return /^[\w-]{6,}$/.test(url) ? url : null
}

export default function VideoSection({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!data?.videoUrl) return null

  const videoId = extractYouTubeId(data.videoUrl)
  if (!videoId) return null

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  const fallbackPoster = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <section className="py-12 bg-[#F6F6EF]">
      <div className="max pad mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black w-full h-auto md:h-[600px]">
          {isPlaying ? (
            <iframe
              src={embedSrc}
              title="BMRAJ Industries"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer"
              aria-label="Play video"
            >
              <Image
                src={data.thumbnailUrl || fallbackPoster}
                alt="Video thumbnail"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg text-[#183F34]">
                  <PlayIcon size={40} />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
