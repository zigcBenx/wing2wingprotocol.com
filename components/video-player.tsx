"use client"

import { useState, useRef } from "react"
import { Maximize2, Minimize2 } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const toggleExpand = () => {
    if (!isFullscreen) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-sky-900/10 transition-all duration-500 ${
        isExpanded ? "scale-105 z-10" : ""
      } ${isFullscreen ? "fullscreen-video" : ""}`}
    >
      <div className="absolute -top-1 left-0 right-0 h-6 bg-slate-800 flex items-center px-3 rounded-t-lg z-10">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400 mx-auto">{title}</div>
      </div>

      <video ref={videoRef} className="w-full h-auto object-contain" autoPlay loop muted playsInline poster={poster}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-800/80 text-sky-400 hover:bg-slate-700 hover:text-sky-300 transition-all z-10"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>

      <div className="absolute inset-0 cursor-pointer z-0" onClick={toggleExpand} aria-hidden="true"></div>
    </div>
  )
}
