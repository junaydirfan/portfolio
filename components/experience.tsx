"use client"

// Import ElementType from React
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react"; // <-- Use this consolidated line
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Palette, GitMerge, Waypoints, Blend, Plug } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiPython, SiReact, SiWordpress, SiFigma, SiAdobephotoshop, SiPostman, SiMongodb, SiTypescript } from "react-icons/si"; // Import specific icons used

// --- Icon Mapping (Use ElementType) ---
// Use React.ElementType as the value type for the map
const techIconMap: Record<string, ElementType> = {
    'nextjs': SiNextdotjs,
    'tailwindcss': SiTailwindcss,
    'python': SiPython,
    'react': SiReact,
    'typescript': SiTypescript,
    'mernstack': SiReact,
    'sql': Database,
    'uidesign': Palette,
    'systemintegration': GitMerge,
    'datapipelines': Waypoints,
    'etl': Blend,
    'apiintegration': Plug,
    'wordpress': SiWordpress,
    'photoshop': SiAdobephotoshop,
    'figma': SiFigma,
    'postman': SiPostman,
    'mongodb': SiMongodb,
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
          {/* Bauhaus Section Header - left aligned */}
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              professional experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              my journey in the tech industry, highlighting key roles and accomplishments
            </p>
          </motion.div>

          {/* Bauhaus Experience Cards - geometric, no rounded corners */}
          <motion.div className="space-y-12 md:space-y-16" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border border-border bg-card hover:border-foreground transition-colors">
                  <CardHeader className="p-8 md:p-10 pb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="mb-2 sm:mb-0">
                        <CardTitle className="text-2xl md:text-3xl mb-2 font-bold uppercase tracking-wide">{exp.title.toLowerCase()}</CardTitle>
                        <CardDescription className="text-lg font-bold text-foreground">{exp.company.toLowerCase()}</CardDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="whitespace-nowrap w-fit text-sm font-bold border-border">
                          {exp.period}
                        </Badge>
                        {exp.duration && (
                          <Badge className="whitespace-nowrap w-fit text-xs font-bold bg-foreground text-background border-foreground">
                            {exp.duration}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 md:p-10 pt-0">
                    <ul className="list-none mb-6 space-y-2 text-muted-foreground text-base md:text-lg leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="before:content-['•'] before:mr-3 before:text-foreground">{item}</li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-6">
                       <h4 className="text-xs font-bold uppercase text-foreground mb-4 tracking-wider">key skills used</h4>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                        {exp.skills.map((skill) => {
                            const IconComponent = getTechIcon(skill);
                            if (IconComponent) {
                              return (
                                <div key={skill} title={skill} className="relative flex items-center justify-center">
                                  <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-muted-foreground transition-colors hover:text-foreground" />
                                </div>
                              );
                            }
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