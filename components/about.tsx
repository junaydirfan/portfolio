"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Palette, Code, Cloud, Server } from "lucide-react"
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image"; // <-- Add this import


export default function Hero() { // Or About
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // --- Animation Variants (Unchanged) ---

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        duration: 0.8
      },
    },
  }

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
        delay: 0.5,
      },
    },
  }

  // Text for the typing animation (Unchanged)
  const textSequence = [
    "Hey 👋 I'm Junaid, but you can call me Nade.",
    1000,
    "Cloud & Web developer...",
    1000,
    "Proficient in the Next.js ecosystem.",
    1500
  ];

  // --- Component Return ---
  return (
    <section
      id="about"
      // Use a light gray background instead of gradient
      className="min-h-screen flex flex-col justify-center items-center px-4 py-12 md:px-6 bg-gray-100 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          // Darker text for primary heading
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
        >
          Junaid Irfan
        </motion.h1>

        {/* Title - Use a gray shade */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 font-medium" // Changed from text-blue-700
        >
          Cloud & Web Developer
        </motion.p>

        {/* Animated Bubble Introduction */}
        <motion.div
          className="flex items-center justify-center gap-4 bg-white rounded-full px-5 py-3 max-w-lg mb-10 mx-auto shadow-md" // bg-white is monochrome
          variants={bubbleVariants}
        >
          <motion.div
            className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0 border-2 border-gray-300" // Changed border color from border-blue-200
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            {/* Profile picture remains in color */}
            <Image
              src="/images/image0.jpg" // Ensure path is correct
              alt="Junaid Irfan Profile"
              fill // Use fill to cover the container
              className="object-cover" // Keep object-cover
              sizes="(max-width: 768px) 50px, 100px" // Provide sizes hint
            />
          </motion.div>

          {/* Typing Animation - Use gray text */}
          <div className="text-left flex-1 min-w-0">
            <TypeAnimation
              sequence={textSequence}
              wrapper="p"
              cursor={true}
              repeat={0}
              speed={55}
              className="text-sm md:text-base text-gray-700" // Adjusted shade slightly if needed
              style={{ whiteSpace: 'pre-line' }}
            />
          </div>
        </motion.div>

        {/* Subsequent Paragraphs - Use gray text */}
        <motion.div
          // This container remains centered
          className="space-y-4 max-w-2xl mx-auto" 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } }
          }}
        >
          <motion.p 
            // Remove text-center for left alignment (default)
            className="text-base md:text-sm text-gray-600" 
            variants={itemVariants}
          >
            Seamlessly transitioning from crafting websites to developing robust web applications.
          </motion.p>
          <motion.p 
            // Remove text-center
            className="text-base md:text-sm text-gray-600" 
            variants={itemVariants}
          >
            Passionate about creative solutions and building apps from scratch, perfecting both backend and frontend.
          </motion.p>
          <motion.p 
            // Remove text-center
            className="text-base md:text-sm text-gray-600" 
            variants={itemVariants}
          >
            Currently working as a sole developer, freelancing from time-to-time and building my own products.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mt-12"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 1.8 } }
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { Icon: Code, title: "Web Development", desc: "Modern, responsive web apps" },
              { Icon: Cloud, title: "Cloud Engineering", desc: "Scalable cloud infrastructure" },
              { Icon: Server, title: "DevOps", desc: "CI/CD and automation" },
              { Icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                // Use semi-transparent white or light gray for card background
                className="flex flex-col items-center text-center p-4 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" // Slightly adjusted alpha
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                {/* Use gray for icons */}
                <skill.Icon className="h-7 w-7 text-gray-700 mb-2" /> {/* Changed from text-blue-600 */}
                <div>
                  {/* Darker gray/black for titles */}
                  <h3 className="font-semibold text-sm md:text-base text-gray-800">{skill.title}</h3>
                   {/* Lighter gray for descriptions */}
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Home Server Note */}
        <motion.div
            className="mt-12 max-w-2xl mx-auto"
            variants={itemVariants}
            transition={{ delay: 2.4 }}
            >
          <p className="text-xs md:text-sm text-gray-500 italic">
            Psst! This website is hosted on my home server. Check out the{' '}
            {/* Use standard dark text underline for link */}
            <a href="#infrastructure" className="text-gray-800 underline hover:text-gray-600 transition-colors duration-200">
              Infrastructure
            </a>{' '}
            section below to see how!
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}