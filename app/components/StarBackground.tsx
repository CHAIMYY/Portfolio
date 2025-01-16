'use client'

import { useEffect, useState } from 'react'

export default function StarBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; duration: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3,
        opacity: Math.random(),
        duration: 3 + Math.random() * 4
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s infinite`
          }}
        />
      ))}
    </div>
  )
}

