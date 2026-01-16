// components/ui/nav.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Nav() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > window.innerHeight)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-8 left-0 right-0 z-50 mx-auto px-8 w-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <motion.nav 
            className={cn(
              "px-6 py-3 w-auto max-w-max", // Bauhaus: no rounded corners
              "bg-background border border-border",
              "flex items-center justify-center gap-6 md:gap-8",
              "overflow-x-auto"
            )}
          >
            {/* Navigation Links - Bauhaus style */}
            <ul className="flex items-center justify-center gap-6 md:gap-8 min-w-max"> 
              {[
                "skills",
                "projects",
                "experience",
                "infrastructure",
                "contact",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="whitespace-nowrap"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm md:text-base font-bold text-foreground hover:text-muted-foreground transition-colors uppercase tracking-wide relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
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