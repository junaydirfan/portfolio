// components/ui/nav.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "infrastructure", href: "#infrastructure" },
  { label: "contact", href: "#contact" },
]

export function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Show nav after scrolling down a bit
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-6 left-0 right-0 z-50 mx-auto px-6 md:px-8 w-full flex justify-between md:justify-center items-center pointer-events-none"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Desktop Navigation (Pill) */}
            <motion.nav
              className={cn(
                "pointer-events-auto",
                "hidden md:flex items-center gap-1",
                "px-2 py-2",
                "bg-background/70 backdrop-blur-xl",
                "border border-border/50",
                "rounded-full",
                "shadow-lg shadow-black/30"
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 flex items-center justify-center shadow-lg shadow-black/30 text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * i, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-4xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="h-2 w-12 bg-primary rounded-full group-hover:block hidden"
                  />
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact / Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8 right-8 flex flex-col gap-2"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Say Hello</span>
              <a href="mailto:junaid.irfan@example.com" className="text-base text-foreground font-medium hover:text-primary transition-colors">
                Let's work together
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
