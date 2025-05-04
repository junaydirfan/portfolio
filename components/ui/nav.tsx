"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Show nav when scrolled past hero section (100vh)
      setIsVisible(latest > window.innerHeight)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-6 left-0 right-0 z-50 mx-auto px-4 w-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <motion.nav 
            className={cn(
              "px-8 py-4 rounded-full w-fit min-w-[600px]",
              "bg-background/60 backdrop-blur-xl border border-border/50",
              "shadow-lg shadow-background/5"
            )}
          >
            <ul className="flex items-center justify-center gap-12">
              {["Skills", "Projects", "Experience", "Infrastructure", "Contact"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 