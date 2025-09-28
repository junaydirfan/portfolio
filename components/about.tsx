"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, useMemo } from "react"
import { Palette, Code, Cloud, Server, Workflow, Bot } from "lucide-react"
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import { ThemeToggle } from "./ui/theme-toggle"

export default function About() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [greeting, setGreeting] = useState<string | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 }) // Slightly lower amount

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Compute greeting based on local visitor time (client-side only)
  useEffect(() => {
    const hour = new Date().getHours()
    let g = "Hello"
    if (hour >= 5 && hour < 12) g = "good morning! ☀️"
    else if (hour >= 12 && hour < 17) g = "good afternoon! ⛅️"
    else if (hour >= 17 && hour < 20) g = "good evening! 🌃"
    else g = "good night! 🌙"
    setGreeting(g)
  }, [])

  // --- Animation Variants (Keep existing variants) ---
  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1, y: 0,
        transition: { type: "spring" as const, stiffness: 110, damping: 16, duration: 0.5 },
    },
  };
  const bubbleVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 30 },
      visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { type: "spring" as const, stiffness: 170, damping: 22, duration: 0.45, delay: 0.3 },
      },
  };
  const baseSequence = useMemo(() => ([
      "hey 👋 im junaid!", 1200,
      "i craft solutions that scale...", 1300,
      "proficient in Next.js & React ecosystem", 1500
  ]), [])
  const textSequence = useMemo(() => (
    greeting ? [greeting, 1000, ...baseSequence] : baseSequence
  ), [greeting, baseSequence])

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:px-6 bg-background overflow-hidden" // Changed py, bg-secondary -> bg-background
      ref={ref}
    >
      { <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(theme(colors.border)_/_0.5px,transparent_0.5px)] [background-size:16px_16px]"></div>}
      
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10" // Ensure content is above background elements
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2" 
        >
          junaid irfan
        </motion.h1>

        {/* Theme Toggle Button */}
        <motion.div
          variants={itemVariants}
          className="absolute top-6 right-6"
        >
          <ThemeToggle />
        </motion.div>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          // Muted foreground provides good contrast without being pure white
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 font-medium" 
        >
          web developer
        </motion.p>

        {/* Animated Bubble Introduction */}
        <motion.div
          // Use card background (slightly lighter than main bg)
          // Softer border using border color with opacity
          className="flex items-center justify-center gap-4 bg-card rounded-full px-5 py-3 max-w-lg mb-12 mx-auto shadow-lg dark:shadow-neutral-800/60 border border-border/50" // Adjusted border, mb, shadow
          variants={bubbleVariants}
        >
          <motion.div
            // Use a slightly more prominent border
            className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0 border-2 border-border" // Kept border-border
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/images/IMG_522556.jpg"
              alt="Junaid Irfan Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50px, 100px"
              priority
            />
          </motion.div>

          {/* Typing Animation */}
          <div className="text-left flex-1 min-w-0">
            {greeting !== null && (
              <TypeAnimation
                key={`seq-${greeting}`}
                sequence={textSequence}
                wrapper="p"
                cursor={true}
                repeat={0}
                speed={55}
                className="text-sm md:text-base text-card-foreground font-mono tracking-wide" 
                style={{ 
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-jetbrains-mono)',
                  letterSpacing: '0.05em'
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Subsequent Paragraphs */}
        <motion.div
          className="space-y-4 max-w-2xl mx-auto" 
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
        >
           {/* Use muted-foreground for less emphasis than main headings */}
          <motion.p className="text-base md:text-lg text-muted-foreground" variants={itemVariants}> 
          a full-stack developer with a strong focus on front-end experiences. passionate about crafting modern web applications that look great and perform even better. beyond code, i dive into cinematography, videography, and motion design blending creativity and technology to bring visually engaging ideas to life.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mt-16" // Increased spacing
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { Icon: Code, title: "web development", desc: "modern, responsive web apps" },
              { Icon: Cloud, title: "cloud engineering", desc: "scalable cloud infrastructure" },
              { Icon: Server, title: "devops", desc: "ci/cd and automation" },
              { Icon: Palette, title: "ui/ux design", desc: "intuitive, beautiful interfaces" },
              { Icon: Workflow, title: "n8n", desc: "workflow automation" },
              { Icon: Bot, title: "chatgpt api", desc: "ai integration" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                // Use secondary background (lighter than card) for skills
                // Subtle border, enhanced hover effect with background change/glow
                className="flex flex-col items-center text-center p-5 bg-secondary rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-border/50 dark:hover:bg-accent" // Adjusted padding, bg, rounding, border, hover
                variants={itemVariants}
                whileHover={{
                  scale: 1.03, // Slightly less aggressive scale
                  y: -5, 
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                {/* Use primary color for icons for better accent */}
                <skill.Icon className="h-8 w-8 text-primary mb-3" /> {/* Increased size/margin */}
                <div>
                  {/* Use secondary-foreground (slightly dimmer) for title */}
                  <h3 className="font-semibold text-sm md:text-base text-secondary-foreground mb-1">{skill.title}</h3>
                   {/* Use muted-foreground for description */}
                  <p className="text-xs md:text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Home Server Note */}
        <motion.div
            className="mt-16 max-w-2xl mx-auto" // Increased spacing
            variants={itemVariants} 
            >
          {/* Use muted-foreground, link uses primary */}
          <p className="text-xs md:text-sm text-muted-foreground italic">
            psst! this website is hosted on my home server. check out the{' '}
            <a href="#infrastructure" className="text-primary/90 underline hover:text-primary transition-colors duration-200">
              infrastructure
            </a>{' '}
            section below to see how!
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}