"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Palette, Code, Cloud, Server } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Only enable client-side effects after hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            ref={ref}
            initial="hidden"
            animate={isMounted && isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 className="text-3xl font-bold tracking-tighter mb-4" variants={itemVariants}>
              About Me
            </motion.h2>
            <motion.p className="text-muted-foreground mb-6" variants={itemVariants}>
              I'm a System & Web Integrator with over 2 years of experience in full-stack development and partner system
              integrations. Just about to graduate with my Master's in Computer Science at Bishop's University. I combine
              technical expertise with a <span className="text-primary font-medium">strong passion for design</span> and <span className="text-primary font-medium">cloud architecture</span>.
            </motion.p>
            <motion.p className="text-muted-foreground mb-6" variants={itemVariants}>
              My approach to development focuses on creating seamless, user-friendly experiences that not only function
              flawlessly but also engage users through thoughtful design. I believe that great software should be both
              powerful and beautiful.
            </motion.p>
            <motion.div className="grid grid-cols-2 gap-4 mt-8" variants={containerVariants}>
              <motion.div className="flex items-start gap-2" variants={itemVariants}>
                <Code className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Web Development</h3>
                  <p className="text-sm text-muted-foreground">Building modern, responsive web applications</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-2" variants={itemVariants}>
                <Cloud className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Cloud Engineering</h3>
                  <p className="text-sm text-muted-foreground">Designing scalable cloud infrastructure</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-2" variants={itemVariants}>
                <Server className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">DevOps</h3>
                  <p className="text-sm text-muted-foreground">Implementing CI/CD and automation</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-2" variants={itemVariants}>
                <Palette className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">UI/UX Design</h3>
                  <p className="text-sm text-muted-foreground">Creating intuitive and beautiful interfaces</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50"></div>
              <div className="relative aspect-square rounded-xl bg-muted overflow-hidden">
                <img
                  src="/images/image0.jpg?height=600&width=600"
                  alt="Junaid Irfan"
                  className="w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

