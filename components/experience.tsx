"use client"

// Import ElementType from React
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react"; // <-- Use this consolidated line
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Palette, GitMerge, Waypoints, Blend, Plug } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiPython, SiReact } from "react-icons/si"; // Import specific icons used

// --- Icon Mapping (Use ElementType) ---
// Use React.ElementType as the value type for the map
const techIconMap: Record<string, ElementType> = {
    'nextjs': SiNextdotjs,
    'tailwindcss': SiTailwindcss,
    'python': SiPython,
    'react': SiReact,
    'sql': Database,
    'uidesign': Palette,
    'systemintegration': GitMerge,
    'datapipelines': Waypoints,
    'etl': Blend,
    'apiintegration': Plug,
    // Add any other necessary mappings
};

// Update the return type of the helper function
const getTechIcon = (tag: string): ElementType | null => {
    const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
    return techIconMap[normalizedTag] || null;
};
// -----------------------------------


export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Experience Data
  const experiences = [
    {
      title: "webmaster",
      company: "bishop's University",
      period: "september 2023 - april 2024",
      description: [
        "led management and maintainance of my university's SRC website.",
        "implemented custom UI components aligned with university brand guidelines.",
        "collaborated with departments to integrate events and organized systems.",
      ],
      skills: ["Next.js", "Tailwind CSS", "SQL", "UI Design", "System Integration"],
    },
    {
      title: "data science intern",
      company: "bytewise",
      period: "march 2023 - june 2023",
      description: [
        "developed JSON data pipelines processing API responses.",
        "automated ETL workflows using Python/SQL.",
      ],
      skills: ["Python", "SQL", "Data Pipelines", "ETL", "API Integration"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                professional experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              my journey in the tech industry, highlighting key roles and accomplishments.
            </p>
          </motion.div>

          {/* Experience Cards List */}
          <motion.div className="space-y-8 md:space-y-10" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                  <CardHeader className="p-6 md:p-8 pb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="mb-2 sm:mb-0">
                        <CardTitle className="text-xl md:text-2xl mb-1">{exp.title.toLowerCase()}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80">{exp.company.toLowerCase()}</CardDescription>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap w-fit text-sm font-normal">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 pt-0">
                    <ul className="list-disc pl-5 mb-5 space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="border-t border-border/50 pt-4">
                       <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">key skills used</h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                        {exp.skills.map((skill) => {
                            const IconComponent = getTechIcon(skill);
                            // Check if IconComponent exists before rendering
                            if (IconComponent) {
                              return (
                                // The component rendering remains the same
                                <div key={skill} title={skill} className="relative flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground transition-colors hover:text-foreground/80" />
                                </div>
                              );
                            }
                            return null; // Don't render anything if icon not found
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