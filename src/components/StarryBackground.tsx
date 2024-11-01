import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function StarryBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([])
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; angle: number; speed: number; tailLength: number }[]>([])
  const [comets, setComets] = useState<{ id: number; x: number; y: number; angle: number; speed: number; tailLength: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
      setStars(newStars)
    }

    generateStars()

    const shootingStarInterval = setInterval(() => {
      setShootingStars((prevStars) => {
        const newStars = prevStars.filter((star) => star.x < 110 && star.y < 110)
        if (newStars.length < 5) {
          newStars.push({
            id: Date.now(),
            x: Math.random() * 100,
            y: -10,
            angle: Math.random() * 30 + 60,
            speed: Math.random() * 1 + 0.5,
            tailLength: Math.random() * 15 + 10,
          })
        }
        return newStars.map((star) => ({
          ...star,
          x: star.x + Math.cos(star.angle * Math.PI / 180) * star.speed,
          y: star.y + Math.sin(star.angle * Math.PI / 180) * star.speed,
        }))
      })
    }, 1000)

    const cometInterval = setInterval(() => {
      setComets((prevComets) => {
        const newComets = prevComets.filter((comet) => comet.x < 110 && comet.y < 110)
        if (newComets.length < 2) {
          newComets.push({
            id: Date.now(),
            x: -10,
            y: Math.random() * 100,
            angle: Math.random() * 30 + 15,
            speed: Math.random() * 0.3 + 0.2,
            tailLength: Math.random() * 20 + 15,
          })
        }
        return newComets.map((comet) => ({
          ...comet,
          x: comet.x + Math.cos(comet.angle * Math.PI / 180) * comet.speed,
          y: comet.y + Math.sin(comet.angle * Math.PI / 180) * comet.speed,
        }))
      })
    }, 5000)

    return () => {
      clearInterval(shootingStarInterval)
      clearInterval(cometInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-green-200"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-green-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: 2,
            height: 2,
            boxShadow: `0 0 ${star.tailLength}px 1px rgba(134, 239, 172, 0.5)`,
            transform: `rotate(${star.angle}deg)`,
          }}
        />
      ))}
      {comets.map((comet) => (
        <motion.div
          key={comet.id}
          className="absolute bg-green-400"
          style={{
            left: `${comet.x}%`,
            top: `${comet.y}%`,
            width: 3,
            height: 3,
            boxShadow: `0 0 ${comet.tailLength}px 2px rgba(74, 222, 128, 0.7)`,
            transform: `rotate(${comet.angle}deg)`,
          }}
        />
      ))}
    </div>
  )
}