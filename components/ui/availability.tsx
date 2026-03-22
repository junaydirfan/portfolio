"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { Copy, Check, ChevronUp, MapPin, Clock } from "lucide-react"

export function Availability() {
  const [time, setTime] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const email = "hello@junaidirfan.com"

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Toronto',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
      setTime(new Intl.DateTimeFormat('en-US', options).format(date))
    }

    updateTime()
    const interval = setInterval(updateTime, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleToggleExpand = () => {
    const nextExpanded = !isExpanded
    if (nextExpanded) {
      x.set(0)
      y.set(0)
    }
    setIsExpanded(nextExpanded)
  }

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: [0.3, 0, 0.8, 1] as const },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.25, ease: [0.2, 0, 0.1, 1] as const },
    },
  }

  return (
    <motion.div
      drag={!isExpanded}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      style={{ x, y }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
      className="fixed bottom-5 left-5 z-50 cursor-grab active:cursor-grabbing"
      onDragStart={() => { document.body.style.userSelect = 'none' }}
      onDragEnd={() => { document.body.style.userSelect = 'auto' }}
    >
      <motion.div
        layout
        onClick={handleToggleExpand}
        className={`
          bg-card/90 backdrop-blur-xl border border-border/60 rounded-2xl shadow-lg shadow-black/30
          hover:border-border transition-colors duration-200
          ${!isExpanded ? 'cursor-grab' : 'cursor-pointer'}
        `}
        style={{ padding: isExpanded ? '1rem' : '0.625rem 0.875rem' }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0.1, 1] }}
      >
        <div className="flex flex-col gap-2.5">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-shrink min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-medium text-foreground whitespace-nowrap overflow-hidden"
                  >
                    available for work
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="expanded-content"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Ontario, Canada</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{time} EST</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center justify-center p-1.5 rounded-md bg-muted hover:bg-border transition-colors duration-150"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground truncate max-w-[160px]">{email}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
