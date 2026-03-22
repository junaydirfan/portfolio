"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"; // Import Badge
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 }) // Slightly adjusted amount
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  const courses = [
    "database software design",
    "web development patterns",
    "big data management & analytics",
    "data visualization",
    "software engineering",
    "pattern recognition",
    "distributed systems",
    "advanced algorithms", 
  ]

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">
              education
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              my academic journey providing a strong foundation in computer science theory and practice.
            </p>
          </motion.div>

          <div className="max-w-5xl space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-foreground font-bold">M.Sc. Computer Science</CardTitle>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <CardDescription className="text-sm sm:text-right text-muted-foreground">
                        Bishop&apos;s University · Sherbrooke, QC<br/>
                        Sep 2023 – Apr 2025
                      </CardDescription>
                      <Badge className="text-xs font-semibold bg-primary/15 text-primary border-primary/20">
                        GPA: 89.79
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Relevant Coursework</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <Badge key={index} variant="outline" className="font-medium text-xs px-3 py-1.5 border-border text-muted-foreground hover:text-foreground transition-colors">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-foreground font-bold">B.Sc. Computer Science</CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-right text-muted-foreground">
                      COMSATS University · Islamabad, PK<br/>
                      Sep 2018 – Sep 2022
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Foundational studies in computer science with emphasis on algorithms, data structures, databases, mobile app development, and software engineering.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}