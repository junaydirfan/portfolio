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
        staggerChildren: 0.2,
        delayChildren: 0.1, // Slight delay for children
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 }, // Slightly increased distance
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Added ease
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
    // Use consistent background, adjust padding
    <section id="education" className="py-16 md:py-24 bg-background">
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
                education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              my academic journey providing a strong foundation in computer science theory and practice.
            </p>
          </motion.div>

          {/* Education Card Container - Increased width */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            {/* Card Styling - Added border, adjusted shadow and padding */}
            <Card className="overflow-hidden border border-border/50 shadow-lg bg-card">
              <CardHeader className="p-6 md:p-8 pb-4"> {/* Increased padding */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    {/* Icon Styling - Changed color */}
                    <GraduationCap className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                    <CardTitle className="text-xl md:text-2xl text-foreground">m.sc. computer science</CardTitle>
                  </div>
                   {/* University/Date Info */}
                   <CardDescription className="text-sm sm:text-right text-muted-foreground mt-1 sm:mt-0">
                     bishop&apos;s university • sherbrooke, qc <br/>
                     september, 2023 - april, 2025
                   </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-4"> {/* Increased padding */}
                <div>
                  {/* Coursework Header */}
                  <div className="flex items-center gap-2 mb-4">
                    {/* Icon Styling - Changed color */}
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-semibold text-lg text-foreground">relevant coursework</h3> {/* Increased size */}
                  </div>
                  {/* Coursework Badges */}
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      // Use Badge component for styling
                      <Badge key={index} variant="secondary" className="font-normal text-sm px-3 py-1">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}