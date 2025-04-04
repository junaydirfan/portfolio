"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isMounted, setIsMounted] = useState(false)

  // Only enable client-side effects after hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const experiences = [
    {
      title: "Webmaster",
      company: "Bishop's University",
      period: "September 2023 - April 2024",
      description: [
        "Led full-stack management of SRC website (BUSRC.com) using modern web stack (Next.js + Tailwind CSS)",
        "Implemented 15+ custom UI components aligned with university brand guidelines",
        "Configured SQL database schemas to handle 5000+ monthly user interactions",
        "Collaborated with 5 departments to integrate event calendars and reservation systems",
      ],
      skills: ["Next.js", "Tailwind CSS", "SQL", "UI Design", "System Integration"],
    },
    {
      title: "Data Science Intern",
      company: "Bytewise",
      period: "March 2023 - June 2023",
      description: [
        "Developed JSON data pipelines processing 10K+ daily API responses",
        "Automated ETL workflows using Python/SQL with 98% accuracy",
      ],
      skills: ["Python", "SQL", "Data Pipelines", "ETL", "API Integration"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div ref={ref} initial="hidden" animate={isMounted && isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in the tech industry has equipped me with valuable skills and experiences.
            </p>
          </motion.div>

          <motion.div className="space-y-8" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
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

