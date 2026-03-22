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
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const hour = new Date().getHours()
    let g = "Hello"
    if (hour >= 5 && hour < 12) g = "good morning ☀️"
    else if (hour >= 12 && hour < 17) g = "good afternoon ⛅️"
    else if (hour >= 17 && hour < 20) g = "good evening 🌃"
    else g = "good night 🌙"
    setGreeting(g)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const baseSequence = useMemo(() => ([
    "hey 👋 i'm junaid!", 1200,
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
      {/* Subtle radial glow in top-left */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(258 60% 68% / 0.06) 0%, transparent 70%)"
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto w-full relative z-20"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Name + title */}
        <motion.div className="mb-16 md:mb-20" variants={itemVariants}>
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-3 leading-none"
          >
            junaid irfan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            web developer &amp; cloud engineer
          </motion.p>
        </motion.div>

        {/* Profile + greeting */}
        <motion.div
          className="mb-20 md:mb-28 flex flex-col md:flex-row items-start gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-20 h-20 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden ring-1 ring-border"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/images/IMG_522556.jpg"
              alt="Junaid Irfan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 112px"
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
                className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed"
                style={{ whiteSpace: 'pre-line' }}
              />
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className="mb-20 md:mb-28 max-w-3xl" variants={itemVariants}>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            a full-stack developer with a strong focus on front-end experiences. passionate about crafting modern web applications that look great and perform even better. beyond code, i dive into cinematography, videography, and motion design. blending creativity and technology to bring visually engaging ideas to life.
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          className="mb-16"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { Icon: Code, title: "Web Development", desc: "Modern, responsive web apps" },
              { Icon: Cloud, title: "Cloud Engineering", desc: "Scalable cloud infrastructure" },
              { Icon: Server, title: "DevOps", desc: "CI/CD and automation" },
              { Icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:shadow-card-hover"
                variants={cardVariants}
              >
                <div className="mb-3 p-2 w-fit rounded-lg bg-primary/10">
                  <skill.Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{skill.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div className="max-w-3xl" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">
            psst! this website is hosted on my home server — check out the{' '}
            <a href="#infrastructure" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
              infrastructure
            </a>{' '}
            section below to see how!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
