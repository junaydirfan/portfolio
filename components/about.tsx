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
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 md:px-6 overflow-hidden"
      ref={ref}
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Rain Background */}
      <div className="absolute inset-0 z-0">
        <style jsx>{`
          .rain-container::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            background-image: radial-gradient(
              ellipse 1.5px 2px at 1.5px 50%,
              #0000 0,
              #0000 90%,
              #000 100%
            );
            background-size: 25px 8px;
          }

          .rain-container {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000;
            background-image: radial-gradient(4px 100px at 0px 235px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 235px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 117.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 252px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 252px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 126px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 150px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 150px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 75px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 253px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 253px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 126.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 204px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 204px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 102px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 134px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 134px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 67px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 179px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 179px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 89.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 299px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 299px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 149.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 215px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 215px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 107.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 281px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 281px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 140.5px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 158px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 158px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 79px, var(--rain-color) 100%, #0000 150%),
              radial-gradient(4px 100px at 0px 210px, var(--rain-color), #0000),
              radial-gradient(4px 100px at 300px 210px, var(--rain-color), #0000),
              radial-gradient(1.5px 1.5px at 150px 105px, var(--rain-color) 100%, #0000 150%);
            background-size:
              300px 235px, 300px 235px, 300px 235px,
              300px 252px, 300px 252px, 300px 252px,
              300px 150px, 300px 150px, 300px 150px,
              300px 253px, 300px 253px, 300px 253px,
              300px 204px, 300px 204px, 300px 204px,
              300px 134px, 300px 134px, 300px 134px,
              300px 179px, 300px 179px, 300px 179px,
              300px 299px, 300px 299px, 300px 299px,
              300px 215px, 300px 215px, 300px 215px,
              300px 281px, 300px 281px, 300px 281px,
              300px 158px, 300px 158px, 300px 158px,
              300px 210px, 300px 210px, 300px 210px;
            animation: rainfall 150s linear infinite;
          }

          @keyframes rainfall {
            0% {
              background-position:
                0px 220px, 3px 220px, 151.5px 337.5px,
                25px 24px, 28px 24px, 176.5px 150px,
                50px 16px, 53px 16px, 201.5px 91px,
                75px 224px, 78px 224px, 226.5px 350.5px,
                100px 19px, 103px 19px, 251.5px 121px,
                125px 120px, 128px 120px, 276.5px 187px,
                150px 31px, 153px 31px, 301.5px 120.5px,
                175px 235px, 178px 235px, 326.5px 384.5px,
                200px 121px, 203px 121px, 351.5px 228.5px,
                225px 224px, 228px 224px, 376.5px 364.5px,
                250px 26px, 253px 26px, 401.5px 105px,
                275px 75px, 278px 75px, 426.5px 180px;
            }
            100% {
              background-position:
                0px 6800px, 3px 6800px, 151.5px 6917.5px,
                25px 13632px, 28px 13632px, 176.5px 13758px,
                50px 5416px, 53px 5416px, 201.5px 5491px,
                75px 17175px, 78px 17175px, 226.5px 17301.5px,
                100px 5119px, 103px 5119px, 251.5px 5221px,
                125px 8428px, 128px 8428px, 276.5px 8495px,
                150px 9876px, 153px 9876px, 301.5px 9965.5px,
                175px 13391px, 178px 13391px, 326.5px 13540.5px,
                200px 14741px, 203px 14741px, 351.5px 14848.5px,
                225px 18770px, 228px 18770px, 376.5px 18910.5px,
                250px 5082px, 253px 5082px, 401.5px 5161px,
                275px 6375px, 278px 6375px, 426.5px 6480px;
            }
          }
        `}</style>
        <div 
          className="rain-container" 
          style={{ '--rain-color': '#fff' } as React.CSSProperties}
        />
        {/* Dark Overlay for Better Readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        />
        {/* Edge Fade Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, transparent 40%, hsl(var(--background)) 100%),
              linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%),
              linear-gradient(to right, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)
            `
          }}
        />
      </div>
      
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
                variants={itemVariants}
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