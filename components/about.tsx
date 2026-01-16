"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, useMemo } from "react"
import { Palette, Code, Cloud, Server } from "lucide-react"
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";

export default function About() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [greeting, setGreeting] = useState<string | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const hour = new Date().getHours()
    let g = "Hello"
    if (hour >= 5 && hour < 12) g = "good morning! ☀️"
    else if (hour >= 12 && hour < 17) g = "good afternoon! ⛅️"
    else if (hour >= 17 && hour < 20) g = "good evening! 🌃"
    else g = "good night! 🌙"
    setGreeting(g)
  }, [])

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.02 },
      },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };
  const bubbleVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 30 },
      visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 25, duration: 0.3, delay: 0.1 },
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
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden bg-background"
      ref={ref}
    >
      <motion.div
        className="max-w-5xl mx-auto w-full relative z-20"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Bauhaus-style header - left aligned, bold, large */}
        <motion.div
          className="mb-16 md:mb-24"
          variants={itemVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-none" 
          >
            junaid irfan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium mb-12" 
          >
            web developer
          </motion.p>
        </motion.div>

        {/* Profile section - simplified, left-aligned */}
        <motion.div
          className="mb-20 md:mb-32 flex flex-col md:flex-row items-start gap-8"
          variants={bubbleVariants}
        >
          <motion.div
            className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-2 border-foreground"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/images/IMG_522556.jpg"
              alt="Junaid Irfan Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              priority
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            {greeting !== null && (
              <TypeAnimation
                key={`seq-${greeting}`}
                sequence={textSequence}
                wrapper="p"
                cursor={true}
                repeat={0}
                speed={55}
                className="text-base md:text-lg text-foreground font-medium leading-relaxed" 
                style={{ 
                  whiteSpace: 'pre-line',
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Description - left-aligned, generous spacing */}
        <motion.div
          className="mb-20 md:mb-32 max-w-3xl" 
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
        >
          <motion.p className="text-lg md:text-xl text-foreground leading-relaxed" variants={itemVariants}> 
            a full-stack developer with a strong focus on front-end experiences. passionate about crafting modern web applications that look great and perform even better. beyond code, i dive into cinematography, videography, and motion design blending creativity and technology to bring visually engaging ideas to life.
          </motion.p>
        </motion.div>

        {/* Skills grid - simplified, geometric */}
        <motion.div
          className="mb-16"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { Icon: Code, title: "web development", desc: "modern, responsive web apps" },
              { Icon: Cloud, title: "cloud engineering", desc: "scalable cloud infrastructure" },
              { Icon: Server, title: "devops", desc: "ci/cd and automation" },
              { Icon: Palette, title: "ui/ux design", desc: "intuitive, beautiful interfaces" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col border border-border p-6 hover:bg-muted/50 transition-colors"
                variants={cardVariants}
              >
                <skill.Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground mb-4" />
                <div>
                  <h3 className="font-bold text-sm md:text-base text-foreground mb-2 uppercase tracking-wide">{skill.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer note - minimal, left-aligned */}
        <motion.div
            className="max-w-3xl"
            variants={itemVariants} 
            >
          <p className="text-sm md:text-base text-muted-foreground">
            psst! this website is hosted on my home server. check out the{' '}
            <a href="#infrastructure" className="text-foreground underline hover:text-muted-foreground transition-colors">
              infrastructure
            </a>{' '}
            section below to see how!
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}