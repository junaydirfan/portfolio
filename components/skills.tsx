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
  SiDavinciresolve,
} from "react-icons/si"
import { Server, ChevronLeft, ChevronRight } from "lucide-react"

// Custom GSAP Icon Component - Official GSAP Logo
const SiGsap = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 82 30"
    fill="currentColor"
    {...props}
  >
    <path fill="currentColor" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
    <path fill="currentColor" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
    <path fill="currentColor" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
    <path fill="currentColor" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
  </svg>
)

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
  const hoverSpeed = 180 // px per second for hover scrolling (faster)

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
  }, [stepPx])

  const applyWrappedOffset = useCallback((categoryId: CategoryId, next: number) => {
    const widthPerSet = (skills[categoryId]?.length || 1) * stepPx
    const wrapped = ((next % widthPerSet) + widthPerSet) % widthPerSet
    return wrapped === 0 ? 0 : wrapped - widthPerSet
  }, [stepPx])

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
      const currentRafMap = rafIdsRef.current
      ;(["development","cloud","design"] as CategoryId[]).forEach((cat) => {
        const id = currentRafMap[cat]
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
    cloud: useTransform(scrollProgress.cloud.scrollYProgress, [0, 1], ["-66.666%", "0%"]), // Reverse direction for cloud
    design: useTransform(scrollProgress.design.scrollYProgress, [0, 1], ["0%", "-66.666%"])
  }

  // --- Skills Data ---
  const skills: Record<CategoryId, Skill[]> = useMemo(() => ({
    development: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "GSAP", icon: SiGsap },
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
      { name: "DaVinci Resolve", icon: SiDavinciresolve },
    ]
  }), [])

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