"use client"

// Import ElementType from React
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react"; // <-- Use this consolidated line
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Plug, ArrowRightLeft } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiPython, SiReact, SiWordpress, SiFigma, SiAdobephotoshop, SiPostman, SiMongodb, SiTypescript } from "react-icons/si"; // Import specific icons used

const techIconMap: Record<string, ElementType> = {
  'nextjs': SiNextdotjs,
  'tailwindcss': SiTailwindcss,
  'python': SiPython,
  'react': SiReact,
  'typescript': SiTypescript,
  'mernstack': SiReact,
  'sql': Database,
  'uidesign': SiFigma,
  'systemintegration': Plug,
  'datapipelines': ArrowRightLeft,
  'etl': Database,
  'apiintegration': SiPostman,
  'wordpress': SiWordpress,
  'photoshop': SiAdobephotoshop,
  'figma': SiFigma,
  'postman': SiPostman,
  'mongodb': SiMongodb,
};

const techColorMap: Record<string, string> = {
  'nextjs': '#ffffff',
  'tailwindcss': '#06b6d4',
  'python': '#3776ab',
  'react': '#61dafb',
  'typescript': '#3178c6',
  'mernstack': '#61dafb',
  'sql': '#336791',
  'uidesign': '#f24e1e',
  'systemintegration': '#a78bfa',
  'datapipelines': '#38bdf8',
  'etl': '#336791',
  'apiintegration': '#ef5b25',
  'wordpress': '#21759b',
  'photoshop': '#31a8ff',
  'figma': '#f24e1e',
  'postman': '#ef5b25',
  'mongodb': '#47a248',
};

const getTechIcon = (tag: string): ElementType | null => {
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techIconMap[normalizedTag] || null;
};

const getTechColor = (tag: string): string => {
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techColorMap[normalizedTag] || 'currentColor';
};


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
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  // Experience Data
  const experiences = [
    {
      title: "webmaster",
      company: "bishop's University",
      period: "september 2023 - april 2024",
      duration: "1 yr",
      description: [
        "led management and maintainance of my university's SRC website",
        "developed and maintained web application features",
        "implemented custom UI components aligned with university brand guidelines",
        "optimized website performance and accessibility for better user experience",
        "collaborated with departments to integrate events and organized systems",
        "solved complex integration challenges by designing and implementing custom solutions connecting frontend interfaces with APIs",
        "collaborated closely with non-technical stakeholders from departments, clearly communicating technical details and solutions to ensure alignment with requirements",
      ],
      skills: ["Next.js", "Tailwind CSS", "SQL", "UI Design", "System Integration", "WordPress", "Photoshop", "Figma"],
    },
    {
      title: "software developer",
      company: "bytewise",
      period: "september 2022 - august 2023",
      duration: "1 yr",
      description: [
        "developed full-stack features using the MERN stack with a strong focus on TypeScript for type-safe, maintainable code",
        "designed and integrated RESTful APIs, tested endpoints with Postman, and optimized data handling in MongoDB for performance and scalability",
        "collaborated with cross-functional teams to deliver web applications on schedule, translating requirements into reliable technical implementations",
        "improved user experience by building reusable React components and implementing state management solutions",
      ],
      skills: ["React", "TypeScript", "SQL", "Data Pipelines", "ETL", "API Integration", "Postman", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">
              experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              my journey in the tech industry, highlighting key roles and accomplishments
            </p>
          </motion.div>

          <motion.div className="space-y-6 md:space-y-8" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                  <CardHeader className="p-6 md:p-8 pb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl mb-1 font-bold">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-semibold text-foreground/70">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant="outline" className="whitespace-nowrap text-xs font-medium border-border text-muted-foreground">
                          {exp.period}
                        </Badge>
                        {exp.duration && (
                          <Badge className="whitespace-nowrap text-xs font-semibold bg-primary/15 text-primary border-primary/20">
                            {exp.duration}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 pt-0">
                    <ul className="mb-6 space-y-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">stack</p>
                      <div className="flex flex-wrap items-center gap-4">
                        {exp.skills.map((skill) => {
                          const IconComponent = getTechIcon(skill)
                          if (IconComponent) {
                            return (
                              <div key={skill} title={skill} className="flex items-center justify-center">
                                <IconComponent
                                  className="h-5 w-5 transition-opacity opacity-75 hover:opacity-100"
                                  style={{ color: getTechColor(skill) }}
                                />
                              </div>
                            )
                          }
                          return null
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