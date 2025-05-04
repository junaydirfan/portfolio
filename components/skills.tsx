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

type CategoryId = 'languages' | 'frameworks' | 'databases' | 'cloud' | 'design'

interface Skill {
  name: string
  icon: IconType
}

interface Category {
  id: CategoryId
  title: string
}

export default function Skills() {
  const containerRefs: Record<CategoryId, RefObject<null>> = {
    languages: useRef(null),
    frameworks: useRef(null),
    databases: useRef(null),
    cloud: useRef(null),
    design: useRef(null)
  }

  const scrollProgress: Record<CategoryId, { scrollYProgress: MotionValue<number> }> = {
    languages: useScroll({
      target: containerRefs.languages,
      offset: ["start end", "end start"]
    }),
    frameworks: useScroll({
      target: containerRefs.frameworks,
      offset: ["start end", "end start"]
    }),
    databases: useScroll({
      target: containerRefs.databases,
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

  // --- ADJUSTED TRANSFORM RANGE ---
  // Now scrolls through 2/3 of the total width (which is 3x the original)
  const x: Record<CategoryId, MotionValue<string>> = {
    languages: useTransform(scrollProgress.languages.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    frameworks: useTransform(scrollProgress.frameworks.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    databases: useTransform(scrollProgress.databases.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    cloud: useTransform(scrollProgress.cloud.scrollYProgress, [0, 1], ["0%", "-66.666%"]),
    design: useTransform(scrollProgress.design.scrollYProgress, [0, 1], ["0%", "-66.666%"])
  }
  // ---------------------------------

  const skills: Record<CategoryId, Skill[]> = {
    languages: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "C", icon: SiC },
      { name: "Solidity", icon: SiSolidity },
    ],
    frameworks: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Svelte", icon: SiSvelte },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    databases: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis},
      { name: "SQLite", icon: SiSqlite},
    ],
    cloud: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Proxmox", icon: Server },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Git", icon: SiGit },
      { name: "Wireshark", icon: SiWireshark },
    ],
    design: [
      { name: "Figma", icon: SiFigma },
      { name: "After Effects", icon: SiAdobeaftereffects },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "Unreal Engine", icon: SiUnrealengine },
      { name: "Unity", icon: SiUnity },
      { name: "Blender", icon: SiBlender },
    ]
  }

  const categories: Category[] = [
    { id: "languages", title: "Languages" },
    { id: "frameworks", title: "Frameworks" },
    { id: "databases", title: "Databases" },
    { id: "cloud", title: "Cloud & DevOps" },
    { id: "design", title: "Design & 3D" }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolkit includes a wide range of technologies that I've mastered to create exceptional digital
            experiences and robust cloud infrastructure.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-xl font-semibold text-center">{category.title}</h3>
              <div className="relative overflow-hidden">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-24 h-full bg-gradient-to-r from-muted/30 from-white z-10" />

                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-24 h-full bg-gradient-to-l from-muted/30 from-white z-10" />

                <div ref={containerRefs[category.id]} className="relative h-[120px] overflow-hidden">
                  <motion.div
                    style={{ x: x[category.id] }}
                    className="absolute flex gap-12 items-center"
                  >
                    {/* --- TRIPLICATED ARRAY --- */}
                    {[
                        ...skills[category.id],
                        ...skills[category.id],
                        ...skills[category.id] // Added third repetition
                    ].map((skill, index) => (
                    // ---------------------------
                      <motion.div
                        key={`${skill.name}-${index}`}
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Remember to fix the monochrome color here if needed */}
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