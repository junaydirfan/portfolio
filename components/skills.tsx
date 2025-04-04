"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
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
} from "react-icons/si"
import { Server } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skills = [
    { name: "TypeScript", icon: SiTypescript, category: "Languages" },
    { name: "JavaScript", icon: SiJavascript, category: "Languages" },
    { name: "Python", icon: SiPython, category: "Languages" },
    { name: "Java", icon: SiOpenjdk, category: "Languages" },
    { name: "C", icon: SiC, category: "Languages" },
    { name: "Solidity", icon: SiSolidity, category: "Languages" },
    { name: "React", icon: SiReact, category: "Frameworks" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frameworks" },
    { name: "Vue.js", icon: SiVuedotjs, category: "Frameworks" },
    { name: "Nest.js", icon: SiNestjs, category: "Frameworks" },
    { name: "Svelte", icon: SiSvelte, category: "Frameworks" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frameworks" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Databases" },
    { name: "MongoDB", icon: SiMongodb, category: "Databases" },
    { name: "MySQL", icon: SiMysql, category: "Databases" },
    { name: "Docker", icon: SiDocker, category: "Cloud & DevOps" },
    { name: "AWS", icon: SiAmazonwebservices, category: "Cloud & DevOps" },
    { name: "Proxmox", icon: Server, category: "Cloud & DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, category: "Cloud & DevOps" },
    { name: "Terraform", icon: SiTerraform, category: "Cloud & DevOps" },
    { name: "Ansible", icon: SiAnsible, category: "Cloud & DevOps" },
    { name: "GitHub Actions", icon: SiGithubactions, category: "Cloud & DevOps" },
    { name: "Jenkins", icon: SiJenkins, category: "Cloud & DevOps" },
    { name: "Git", icon: SiGit, category: "Cloud & DevOps" },
    { name: "Figma", icon: SiFigma, category: "Design & 3D" },
    { name: "After Effects", icon: SiAdobeaftereffects, category: "Design & 3D" },
    { name: "Photoshop", icon: SiAdobephotoshop, category: "Design & 3D" },
    { name: "Illustrator", icon: SiAdobeillustrator, category: "Design & 3D" },
    { name: "Premiere Pro", icon: SiAdobepremierepro, category: "Design & 3D" },
    { name: "Unreal Engine", icon: SiUnrealengine, category: "Design & 3D" },
    { name: "Unity", icon: SiUnity, category: "Design & 3D" },
    { name: "Blender", icon: SiBlender, category: "Design & 3D" },
  ]

  const categories = ["Languages", "Frameworks", "Databases", "Cloud & DevOps", "Design & 3D"]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 className="text-3xl font-bold tracking-tighter mb-4" variants={itemVariants}>
            Technical Skills
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            My toolkit includes a wide range of technologies that I've mastered to create exceptional digital
            experiences and robust cloud infrastructure.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <motion.h3 className="text-xl font-semibold mb-6" variants={itemVariants}>
                {category}
              </motion.h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                    >
                      <skill.icon className="h-8 w-8 mb-2 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

