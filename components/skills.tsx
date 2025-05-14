"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef, RefObject } from "react"
import { IconType } from "react-icons"
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNestjs,
  SiSvelte,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPython,
  SiOpenjdk,
  SiC,
  SiSolidity,
  SiGit,
  SiFigma,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiDocker,
  SiAmazonwebservices,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiWireshark,
  SiRedis,
  SiSqlite,
} from "react-icons/si"
import { Server } from "lucide-react"

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
                  <motion.div
                    style={{ x: x[category.id] }}
                    className="absolute flex gap-12 items-center" // Original classes
                  >
                    {[
                        ...skills[category.id],
                        ...skills[category.id],
                        ...skills[category.id] 
                    ].map((skill, index) => (
                      <motion.div
                        key={`${skill.name}-${index}`} // Original key structure
                        className="flex flex-col items-center gap-2" // Original classes
                        initial={{ opacity: 0, scale: 0.8 }} // Original animation
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                         {/* Original icon rendering and classes */}
                        <skill.icon className="h-20 w-20 md:h-55 md:w-55 text-primary hover:text-primary/80 transition-colors" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}