"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Predefined values for animations to prevent hydration mismatch
const backgroundElements = [
  {
    width: 546,
    height: 311,
    x: 87,
    y: 53,
    duration: 25
  },
  {
    width: 443,
    height: 579,
    x: 95,
    y: 6,
    duration: 20
  },
  {
    width: 350,
    height: 277,
    x: 68,
    y: 66,
    duration: 15
  },
  {
    width: 274,
    height: 518,
    x: 42,
    y: 54,
    duration: 30
  },
  {
    width: 469,
    height: 444,
    x: 41,
    y: 22,
    duration: 18
  }
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              x: `${element.x}%`,
              y: `${element.y}%`,
              opacity: 0.5,
            }}
            animate={{
              x: `${element.x}%`,
              y: `${element.y}%`,
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
            style={isMounted ? {
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY * 0.002,
            } : {}}
          >
            <span className="text-primary">Junaid Irfan</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-8"
            style={isMounted ? {
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY * 0.002,
            } : {}}
          >
            Software Developer & Designer
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

