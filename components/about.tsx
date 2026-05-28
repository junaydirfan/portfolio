"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, MapPin, Briefcase, ChevronRight } from "lucide-react"
import Image from "next/image"
import LastFmStatus from "./lastfm-status"
import InstagramFeed from "./instagram-feed"
export default function About() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full relative z-20 flex flex-col gap-12 lg:gap-20"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* --- Top Section: Typography --- */}
        <motion.div className="flex flex-col gap-8" variants={itemVariants}>

          <div className="flex flex-col gap-4">
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              <span>Hi, <span className="text-muted-foreground">I&apos;m</span></span>
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary/20 inline-block align-middle transform -translate-y-1">
                <Image
                  src="/images/IMG_522556.webp"
                  alt="Junaid Irfan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 112px"
                  priority
                />
              </div>
              <span>Junaid Irfan!</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-muted-foreground leading-tight tracking-tight">
              I&apos;m a <span className="text-foreground font-semibold">Full-Stack Developer</span> <br className="hidden sm:block" />
              specializing in <span className="text-primary font-bold">DevOps.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)] focus-visible:outline-none"
            >
              <span>Book a call</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all pointer-events-none" />
            </a>
            <p className="text-base text-muted-foreground font-medium max-w-sm">
              Feel free to explore my portfolio and reach out! I&apos;d love to connect
            </p>
          </div>
        </motion.div>

        {/* --- Bottom Section: Bento Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {/* Box 1: Experience */}
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col gap-6 hover:border-primary/50 transition-colors shadow-sm min-h-[300px]">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </div>
            <div className="flex flex-col gap-6 flex-1 relative mt-2">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-4 w-[2px] bg-border rounded-full" />

              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_hsl(var(--primary))]" />
                <h4 className="text-sm font-bold text-foreground">IT Operations Consultant</h4>
                <p className="text-xs text-muted-foreground mt-1">FDM Group • 2026 - Present</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-muted-foreground ring-4 ring-background" />
                <h4 className="text-sm font-bold text-foreground">DevOps Intern</h4>
                <p className="text-xs text-muted-foreground mt-1">Adventure Triangle • 2026</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-muted-foreground ring-4 ring-background" />
                <h4 className="text-sm font-bold text-foreground">Webmaster</h4>
                <p className="text-xs text-muted-foreground mt-1">Bishop&apos;s University • 2023 - 2024</p>
              </div>
            </div>
            <a href="#experience" className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto pt-4">
              View full experience <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Box 2: Currently Learning */}
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col relative overflow-hidden hover:border-primary/50 transition-colors shadow-sm min-h-[300px] group">
            <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <Code className="w-4 h-4" />
              <span>Currently Learning</span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Dynatrace</h3>
                <p className="text-xs text-muted-foreground">Advanced observability & application performance monitoring.</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors delay-75">LLM Training</h3>
                <p className="text-xs text-muted-foreground">Fine-tuning, prompt engineering, and deploying language models.</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors delay-150">Infrastructures</h3>
                <p className="text-xs text-muted-foreground">Scaling cloud architectures, CI/CD pipelines, and DevOps automation.</p>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Box 3: Instagram Feed (Life & Lens) */}
          <InstagramFeed />
        </motion.div>

      </motion.div>
    </section>
  )
}
