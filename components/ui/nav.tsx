// components/ui/nav.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "infrastructure", href: "#infrastructure" },
  { label: "contact", href: "#contact" },
]

export function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > window.innerHeight * 0.6)
    })
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    )

    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-6 left-0 right-0 z-50 mx-auto px-8 w-full flex justify-center pointer-events-none"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.nav
            className={cn(
              "pointer-events-auto",
              "px-2 py-2",
              "bg-background/70 backdrop-blur-xl",
              "border border-border/50",
              "rounded-full",
              "shadow-lg shadow-black/30",
              "flex items-center gap-1"
            )}
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    "hover:text-foreground",
                    isActive
                      ? "text-foreground bg-primary/15"
                      : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/15"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              )
            })}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
