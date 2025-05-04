"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconType } from "react-icons"; // Import IconType
import { SiNextdotjs, SiTailwindcss, SiPython, SiReact, SiSqlite, SiPostgresql, SiMysql } from "react-icons/si"; // Import specific icons used
import { Database, Palette, GitMerge, Waypoints, Blend, Plug, Icon as LucideIcon } from "lucide-react"; // Import Lucide icons used


// --- Icon Mapping and Helper Function (from Step 1) ---
const techIconMap: Record<string, IconType | LucideIcon> = {
  'nextjs': SiNextdotjs,
  'tailwindcss': SiTailwindcss,
  'python': SiPython,
  'react': SiReact, // Example if needed
  'sql': Database,
  'uidesign': Palette,
  'systemintegration': GitMerge,
  'datapipelines': Waypoints,
  'etl': Blend,
  'apiintegration': Plug,
};

const getTechIcon = (tag: string): IconType | LucideIcon | null => {
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techIconMap[normalizedTag] || null;
};
// -----------------------------------


export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 }) // Adjusted amount
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation Variants (Can add ease)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Added ease
    },
  }

  // Experience Data (Keep your data)
  const experiences = [
    {
      title: "Webmaster",
      company: "Bishop's University",
      period: "September 2023 - April 2024",
      description: [
        "Led full-stack management of SRC website (BUSRC.com) using modern web stack (Next.js + Tailwind CSS).",
        "Implemented 15+ custom UI components aligned with university brand guidelines.",
        "Configured SQL database schemas to handle 5000+ monthly user interactions.",
        "Collaborated with 5 departments to integrate event calendars and reservation systems.",
      ],
      skills: ["Next.js", "Tailwind CSS", "SQL", "UI Design", "System Integration"],
    },
    {
      title: "Data Science Intern",
      company: "Bytewise",
      period: "March 2023 - June 2023",
      description: [
        "Developed JSON data pipelines processing 10K+ daily API responses.",
        "Automated ETL workflows using Python/SQL with 98% accuracy.",
      ],
      skills: ["Python", "SQL", "Data Pipelines", "ETL", "API Integration"],
    },
  ]

  return (
    // Use consistent background, adjust padding
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto"> {/* Adjusted max-width if needed */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Professional Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              My journey in the tech industry, highlighting key roles and accomplishments.
            </p>
          </motion.div>

          {/* Experience Cards List */}
          <motion.div className="space-y-8 md:space-y-10" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                {/* Card Styling - Added border, shadow, increased padding */}
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                  {/* Card Header */}
                  <CardHeader className="p-6 md:p-8 pb-4"> {/* Increased padding */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      {/* Title and Company */}
                      <div className="mb-2 sm:mb-0">
                        <CardTitle className="text-xl md:text-2xl mb-1">{exp.title}</CardTitle>
                        {/* Company Name - Changed color */}
                        <CardDescription className="text-base font-medium text-foreground/80">{exp.company}</CardDescription>
                      </div>
                      {/* Period Badge */}
                      <Badge variant="outline" className="whitespace-nowrap w-fit text-sm font-normal">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {/* Card Content */}
                  <CardContent className="p-6 md:p-8 pt-0"> {/* Increased padding, removed top padding */}
                    {/* Description List */}
                    <ul className="list-disc pl-5 mb-5 space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed"> {/* Improved list styling */}
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {/* Skills Icons */}
                    <div className="border-t border-border/50 pt-4"> {/* Separator */}
                       <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Key Skills Used</h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-3"> {/* Adjusted gap */}
                        {exp.skills.map((skill) => {
                            const IconComponent = getTechIcon(skill);
                            if (IconComponent) {
                            return (
                                <div key={skill} title={skill} className="relative flex items-center justify-center">
                                <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground transition-colors hover:text-foreground/80" /> {/* Slightly larger icons */}
                                </div>
                            );
                            }
                            // Fallback for skills without icons (optional)
                            // return <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>;
                            return null;
                        })}
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}