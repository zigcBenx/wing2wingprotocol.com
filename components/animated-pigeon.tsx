"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AnimatedPigeon() {
  const pigeonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pigeon = pigeonRef.current
    if (!pigeon) return

    // Smoother, more natural movement animation
    const animate = () => {
      // Create a sequence of smooth movements
      const sequence = [
        () => {
          pigeon.style.transform = "translate(5px, -3px) rotate(2deg)"
          pigeon.style.transition = "transform 1.8s ease-in-out"
        },
        () => {
          pigeon.style.transform = "translate(-3px, 2px) rotate(-1deg)"
          pigeon.style.transition = "transform 2s ease-in-out"
        },
        () => {
          pigeon.style.transform = "translate(0px, -5px) rotate(0deg)"
          pigeon.style.transition = "transform 1.5s ease-in-out"
        },
        () => {
          pigeon.style.transform = "translate(2px, 0px) rotate(1deg)"
          pigeon.style.transition = "transform 1.7s ease-in-out"
        },
      ]

      let currentStep = 0

      const performNextStep = () => {
        sequence[currentStep]()
        currentStep = (currentStep + 1) % sequence.length
        setTimeout(performNextStep, 2000) // Smooth transition between movements
      }

      performNextStep()
    }

    // Start animation after a short delay
    const timeout = setTimeout(animate, 500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      ref={pigeonRef}
      className="hidden xl:block absolute -right-16 top-0 z-20 transition-transform duration-1000 ease-in-out"
      style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))" }}
    >
      <Image
        src="/pigeonlogo.png"
        alt="Animated Pigeon"
        width={70}
        height={70}
        className="animate-wing"
      />
      <style jsx global>{`
        @keyframes wing {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.02) rotate(-1deg); }
          50% { transform: scale(1) rotate(0deg); }
          75% { transform: scale(1.02) rotate(1deg); }
        }
        .animate-wing {
          animation: wing 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}
