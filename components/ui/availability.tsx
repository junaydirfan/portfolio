"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion" // Import useMotionValue
import { Copy, Check, ChevronUp } from "lucide-react"

export function Availability() {
  const [time, setTime] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const email = "junaid.irfan@hotmail.com"

  // --- Draggable State ---
  // Create motion values to control the position for dragging and resetting
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  // ---------------------

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

  // --- Toggle Expand and Reset Position ---
  const handleToggleExpand = () => {
    const nextExpanded = !isExpanded;
    if (nextExpanded) {
      // If expanding, reset the dragged position
      x.set(0);
      y.set(0);
    }
    setIsExpanded(nextExpanded);
  };
  // -------------------------------------

  const buttonClasses = "flex items-center justify-center p-1.5 rounded-md bg-muted hover:bg-input transition-colors duration-150"

  const contentVariants = {
    // ... (variants remain the same)
    collapsed: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.2, ease: [0.3, 0, 0.8, 1] },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1] },
    },
  };

  return (
    // Outermost container handles dragging and positioning
    <motion.div
      // --- Drag Props ---
      drag={!isExpanded ? true : false} // Enable dragging only when collapsed (true enables both x and y)
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Basic constraints relative to parent (viewport for fixed)
      dragElastic={0.1} // Allows slight overdrag
      dragMomentum={false} // Stops immediately on drag end
      style={{ x, y }} // Apply motion values to control position
      // ------------------
      initial={{ opacity: 0 }} // Removed y offset from initial animation
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-5 left-5 z-50 cursor-grab active:cursor-grabbing" // Add grab cursors
      // components/ui/availability.tsx
      // Prevent text selection while dragging
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onDragStart={(event, info) => {
        document.body.style.userSelect = 'none';
      }}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onDragEnd={(event, info) => {
        document.body.style.userSelect = 'auto';
      }}
      >
      {/* Interactive card - triggers expand/collapse but NOT drag */}
      <motion.div
        layout // Animate layout changes (padding)
        onClick={handleToggleExpand} // Use the handler that resets position
        className={`bg-card/80 backdrop-blur-md border border-border/40 rounded-xl shadow-md
          transition-colors duration-200 hover:border-border/60
          ${!isExpanded ? 'cursor-grab' : 'cursor-pointer'}`} // Grab cursor only when draggable
        style={{ padding: isExpanded ? '1rem' : '0.75rem' }}
        transition={{ duration: 0.3, ease: [0.2, 0, 0.1, 1] }}
      >
        {/* Inner content structure remains largely the same */}
        <div className="flex flex-col gap-2.5">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3">
            {/* Status dot & Text */}
            <div className="flex items-center gap-2 flex-shrink min-w-0">
               <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
               <AnimatePresence>
                 {isExpanded && (
                    <motion.span
                       initial={{ opacity: 0, width: 0 }}
                       animate={{ opacity: 1, width: 'auto' }}
                       exit={{ opacity: 0, width: 0 }}
                       transition={{ duration: 0.2 }}
                       className="text-xs text-muted-foreground whitespace-nowrap overflow-hidden"
                     >
                       Available for new opportunities
                     </motion.span>
                 )}
               </AnimatePresence>
             </div>
             {/* Chevron */}
             <motion.div
               animate={{ rotate: isExpanded ? 180 : 0 }}
               transition={{ duration: 0.3 }}
               className="flex-shrink-0"
             >
               <ChevronUp className="w-4 h-4 text-muted-foreground" />
             </motion.div>
           </div>

          {/* Expanded Content Area */}
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
                <div className="flex flex-col gap-2 pt-1.5">
                  {/* Location and Time */}
                  <div className="flex items-center">
                    <span className="text-xs text-muted-foreground">
                      {time} EST • Quebec, Canada
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className={buttonClasses}
                      title="Copy Email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}