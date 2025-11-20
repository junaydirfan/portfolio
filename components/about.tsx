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
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
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
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:px-6 overflow-hidden bg-black"
      ref={ref}
    >
      {/* Subtle Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2
        }}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(40, 40, 70, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 50% 100%, rgba(30, 40, 60, 0.4) 0%, transparent 60%),
            linear-gradient(180deg, rgba(15, 15, 25, 0.6) 0%, rgba(8, 8, 15, 0.8) 100%),
            #000000
          `
        }}
      />
      
      {/* Animated Upper Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ 
          opacity: 0,
          scale: 1.1,
          y: -20
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{ 
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3
        }}
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(40, 40, 70, 0.5) 0%, transparent 60%)`,
          pointerEvents: 'none'
        }}
      />
      
      {/* Animated Lower Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ 
          opacity: 0,
          scale: 1.1,
          y: 20
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{ 
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.4
        }}
        style={{
          background: `radial-gradient(ellipse 60% 80% at 50% 100%, rgba(30, 40, 60, 0.4) 0%, transparent 60%)`,
          pointerEvents: 'none'
        }}
      />
      
      <motion.div
        className="container max-w-4xl mx-auto text-center relative z-20"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" 
        >
          junaid irfan
        </motion.h1>


        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 font-medium" 
        >
          web developer
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm rounded-full px-5 py-3 max-w-lg mb-12 mx-auto shadow-lg border border-white/30"
          variants={bubbleVariants}
        >
          <motion.div
            className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0 border-2 border-white/50"
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

          <div className="text-left flex-1 min-w-0">
            {greeting !== null && (
              <TypeAnimation
                key={`seq-${greeting}`}
                sequence={textSequence}
                wrapper="p"
                cursor={true}
                repeat={0}
                speed={55}
                className="text-sm md:text-base text-white font-mono tracking-wide" 
                style={{ 
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-jetbrains-mono)',
                  letterSpacing: '0.05em'
                }}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4 max-w-2xl mx-auto" 
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
        >
          <motion.p className="text-base md:text-lg text-gray-300" variants={itemVariants}> 
          a full-stack developer with a strong focus on front-end experiences. passionate about crafting modern web applications that look great and perform even better. beyond code, i dive into cinematography, videography, and motion design blending creativity and technology to bring visually engaging ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { Icon: Code, title: "web development", desc: "modern, responsive web apps" },
              { Icon: Cloud, title: "cloud engineering", desc: "scalable cloud infrastructure" },
              { Icon: Server, title: "devops", desc: "ci/cd and automation" },
              { Icon: Palette, title: "ui/ux design", desc: "intuitive, beautiful interfaces" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-5 bg-black/40 backdrop-blur-md rounded-xl shadow-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5, 
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <skill.Icon className="h-8 w-8 text-white mb-3" />
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-white mb-1">{skill.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
            className="mt-16 max-w-2xl mx-auto"
            variants={itemVariants} 
            >
          <p className="text-xs md:text-sm text-gray-400 italic">
            psst! this website is hosted on my home server. check out the{' '}
            <a href="#infrastructure" className="text-white underline hover:text-gray-200 transition-colors duration-200">
              infrastructure
            </a>{' '}
            section below to see how!
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}