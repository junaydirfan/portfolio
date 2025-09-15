"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef, RefObject, useState, useMemo, useCallback, useEffect } from "react"
import { IconType } from "react-icons"
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiUnity,
  SiBlender,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiWireshark,
  SiSqlite,
  SiWordpress,
  SiShopify,
  SiWebflow,
} from "react-icons/si"
import { Server, ChevronLeft, ChevronRight } from "lucide-react"

type CategoryId = 'development' | 'cloud' | 'design'

interface Skill {
  name: string
  icon: IconType
}

interface Category {
  id: CategoryId
  title: string
}

export default function Skills() {
  // --- Refs ---
  const containerRefs: Record<CategoryId, RefObject<null>> = {
    development: useRef(null),
    cloud: useRef(null),
    design: useRef(null)
  }

  // --- Manual Offsets (for arrow controls) ---
  const [manualOffsetByCategory, setManualOffsetByCategory] = useState<Record<CategoryId, number>>({
    development: 0,
    cloud: 0,
    design: 0
  })
  const stepPx = 160 // Approx width per skill (icon + gap)
  const hoverSpeed = 120 // px per second for hover scrolling

  // RAF management for hover-based smooth scrolling per category
  const rafIdsRef = useRef<Record<CategoryId, number | null>>({ development: null, cloud: null, design: null })
  const lastTsRef = useRef<Record<CategoryId, number | null>>({ development: null, cloud: null, design: null })
  const velocityRef = useRef<Record<CategoryId, number>>({ development: 0, cloud: 0, design: 0 })

  const handleShift = useCallback((categoryId: CategoryId, direction: -1 | 1) => {
    setManualOffsetByCategory((prev) => {
      const widthPerSet = (skills[categoryId]?.length || 1) * stepPx
      const next = prev[categoryId] + direction * -stepPx
      // Wrap within one cycle to avoid drifting into blank space
      const wrapped = ((next % widthPerSet) + widthPerSet) % widthPerSet
      // Shift to negative domain [ -widthPerSet, 0 ) for intuitive left/right
      const negativeDomain = wrapped === 0 ? 0 : wrapped - widthPerSet
      return { ...prev, [categoryId]: negativeDomain }
    })
  }, [])

  const applyWrappedOffset = useCallback((categoryId: CategoryId, next: number) => {
    const widthPerSet = (skills[categoryId]?.length || 1) * stepPx
    const wrapped = ((next % widthPerSet) + widthPerSet) % widthPerSet
    return wrapped === 0 ? 0 : wrapped - widthPerSet
  }, [])

  const tick = useCallback((categoryId: CategoryId, ts: number) => {
    const last = lastTsRef.current[categoryId]
    if (last == null) {
      lastTsRef.current[categoryId] = ts
      rafIdsRef.current[categoryId] = requestAnimationFrame((t) => tick(categoryId, t))
      return
    }
    const dt = Math.min(0.05, (ts - last) / 1000) // cap dt to avoid jumps
    lastTsRef.current[categoryId] = ts
    const v = velocityRef.current[categoryId]
    if (v === 0) {
      // stop loop
      const id = rafIdsRef.current[categoryId]
      if (id != null) cancelAnimationFrame(id)
      rafIdsRef.current[categoryId] = null
      lastTsRef.current[categoryId] = null
      return
    }
    setManualOffsetByCategory((prev) => {
      const next = prev[categoryId] + v * dt
      return { ...prev, [categoryId]: applyWrappedOffset(categoryId, next) }
    })
    rafIdsRef.current[categoryId] = requestAnimationFrame((t) => tick(categoryId, t))
  }, [applyWrappedOffset])

  const startHoverScroll = useCallback((categoryId: CategoryId, direction: -1 | 1) => {
    velocityRef.current[categoryId] = direction * -hoverSpeed
    if (rafIdsRef.current[categoryId] == null) {
      rafIdsRef.current[categoryId] = requestAnimationFrame((t) => tick(categoryId, t))
    }
  }, [tick])

  const stopHoverScroll = useCallback((categoryId: CategoryId) => {
    velocityRef.current[categoryId] = 0
    // tick will stop itself next frame
  }, [])

  useEffect(() => {
    return () => {
      ;(["development","cloud","design"] as CategoryId[]).forEach((cat) => {
        const id = rafIdsRef.current[cat]
        if (id != null) cancelAnimationFrame(id)
      })
    }
  }, [])

  // --- Scroll Progress ---
  const scrollProgress: Record<CategoryId, { scrollYProgress: MotionValue<number> }> = {
    development: useScroll({
      target: containerRefs.development,
      offset: ["start end", "end start"]
    }),
    cloud: useScroll({
      target: containerRefs.cloud,
      offset: ["start end", "end start"]
    }),
    design: useScroll({
      target: containerRefs.design,
      offset: ["start end", "end start"]
    })
  }

  // --- Transform ---
  const x: Record<CategoryId, MotionValue<string>> = {
    development: useTransform(scrollProgress.development.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    cloud: useTransform(scrollProgress.cloud.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    design: useTransform(scrollProgress.design.scrollYProgress, [0, 1], ["0%", "-66.666%"])
  }

  // --- Skills Data ---
  const skills: Record<CategoryId, Skill[]> = {
    development: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLite", icon: SiSqlite},
      { name: "WordPress", icon: SiWordpress },
      { name: "Shopify", icon: SiShopify },
      { name: "Webflow", icon: SiWebflow },
    ],
    cloud: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Proxmox", icon: Server },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
      { name: "Wireshark", icon: SiWireshark },
    ],
    design: [
      { name: "Figma", icon: SiFigma },
      { name: "After Effects", icon: SiAdobeaftereffects },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "Unity", icon: SiUnity },
      { name: "Blender", icon: SiBlender },
    ]
  }

  // --- Categories Data ---
  const categories: Category[] = [
    { id: "development", title: "Development & Databases" },
    { id: "cloud", title: "Cloud & DevOps" },
    { id: "design", title: "Design & 3D" }
  ]

  return (
    // --- Section --- (Original classes)
    <section id="skills" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
           {/* Original heading and paragraph */}
          <h2 className="text-3xl font-bold tracking-tighter mb-4"> 
            technical skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            my toolkit includes a wide range of technologies that i&apos;ve mastered to create exceptional digital
            experiences and robust cloud infrastructure.
          </p>
        </div>

        {/* --- Categories Loop --- (Original structure) */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-xl font-semibold text-center">{category.title.toLowerCase()}</h3>
              <div className="relative overflow-hidden"> {/* Outer overflow-hidden as originally placed */}
                
                {/* --- GRADIENT INTENSITY INCREASED FURTHER --- */}
                {/* Left fade gradient: Wider (w-32) and starts fade later (from-60%) */}
                <div className="absolute left-0 top-0 bottom-0 w-32 h-full bg-gradient-to-r from-background from-20% to-transparent z-10 pointer-events-none" />
                {/* Changed w-24 to w-32 AND from-50% to from-60% */}

                {/* Right fade gradient: Wider (w-32) and starts fade later (from-60%) */}
                <div className="absolute right-0 top-0 bottom-0 w-32 h-full bg-gradient-to-l from-background from-20% to-transparent z-10 pointer-events-none" />
                {/* Changed w-24 to w-32 AND from-50% to from-60% */}
                {/* --- END GRADIENT CHANGE --- */}

                {/* --- Scroll Container --- (Original structure and classes) */}
                <div ref={containerRefs[category.id]} className="relative h-[120px] overflow-hidden"> 
                  <motion.div style={{ x: manualOffsetByCategory[category.id] }} className="absolute">
                    <motion.div
                      style={{ x: x[category.id] }}
                      className="flex gap-12 items-center" // Original classes
                    >
                      {[
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id],
                          ...skills[category.id]
                      ].map((skill, index) => (
                        <motion.div
                          key={`${skill.name}-${index}`} // Original key structure
                          className="group relative flex flex-col items-center gap-2" // Original classes + group for tooltip
                          initial={{ opacity: 0, scale: 0.8 }} // Original animation
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                           {/* Icon with native title tooltip for hover */}
                          <skill.icon
                            className="h-20 w-20 md:h-55 md:w-55 text-primary hover:text-primary/80 transition-colors focus:outline-none"
                            title={skill.name}
                            aria-label={skill.name}
                            tabIndex={0}
                          />
                          {/* Custom tooltip/label on hover or focus */}
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-[10px] leading-none text-popover-foreground shadow opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                            {skill.name}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Arrow Controls */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between z-20">
                    <button
                      type="button"
                      aria-label={`Previous ${category.title}`}
                      className="pointer-events-auto ml-1 md:ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/80 shadow backdrop-blur hover:bg-background transition"
                      onClick={() => handleShift(category.id, -1)}
                      onMouseEnter={() => startHoverScroll(category.id, -1)}
                      onMouseLeave={() => stopHoverScroll(category.id)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Next ${category.title}`}
                      className="pointer-events-auto mr-1 md:mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/80 shadow backdrop-blur hover:bg-background transition"
                      onClick={() => handleShift(category.id, 1)}
                      onMouseEnter={() => startHoverScroll(category.id, 1)}
                      onMouseLeave={() => stopHoverScroll(category.id)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}