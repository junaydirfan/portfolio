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
          {/* Bauhaus Section Header - left aligned */}
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              education
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              my academic journey providing a strong foundation in computer science theory and practice.
            </p>
          </motion.div>

          {/* Bauhaus Education Cards - geometric, no rounded corners */}
          <motion.div variants={itemVariants} className="max-w-5xl">
            <Card className="overflow-hidden border border-border bg-card hover:border-foreground transition-colors">
              <CardHeader className="p-8 md:p-10 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="h-7 w-7 text-foreground flex-shrink-0" />
                    <CardTitle className="text-2xl md:text-3xl text-foreground font-bold uppercase tracking-wide">m.sc. computer science</CardTitle>
                  </div>
                   <div className="flex flex-col items-start sm:items-end gap-2">
                     <CardDescription className="text-base sm:text-right text-foreground font-medium">
                       bishop&apos;s university • sherbrooke, qc <br/>
                       september, 2023 - april, 2025
                     </CardDescription>
                     <Badge className="whitespace-nowrap text-sm font-bold bg-foreground text-background border-foreground">grade: 89.79</Badge>
                   </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 md:p-10 pt-0">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-6 w-6 text-foreground" />
                    <h3 className="font-bold text-xl text-foreground uppercase tracking-wide">relevant coursework</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {courses.map((course, index) => (
                      <Badge key={index} variant="outline" className="font-medium text-sm px-4 py-2 border-border">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bachelor Card - Bauhaus style */}
          <motion.div variants={itemVariants} className="max-w-5xl mt-8">
            <Card className="overflow-hidden border border-border bg-card hover:border-foreground transition-colors">
              <CardHeader className="p-8 md:p-10 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="h-7 w-7 text-foreground flex-shrink-0" />
                    <CardTitle className="text-2xl md:text-3xl text-foreground font-bold uppercase tracking-wide">b.sc. computer science</CardTitle>
                  </div>
                  <CardDescription className="text-base sm:text-right text-foreground font-medium">
                    comsats university islamabad • islamabad, pakistan <br/>
                    september, 2018 - september, 2022
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8 md:p-10 pt-0">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">foundational studies in computer science with emphasis on algorithms, data structures, databases, mobile app development, and software engineering</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}