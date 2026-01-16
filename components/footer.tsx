"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [year, setYear] = useState("2024")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0">
            <p className="text-base text-muted-foreground font-medium">
              © {year} developed with{" "}
              <span>❤️</span>{" "}
              by junaid
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/junaydirfan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/junaydirfan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:junaid.irfan@hotmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

