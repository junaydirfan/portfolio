"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [year, setYear] = useState("2024")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {year} junaid irfan. built with care.
          </p>

          <div className="flex items-center gap-1">
            {[
              { href: "https://github.com/junaydirfan", Icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/junaydirfan", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:hello@junaidirfan.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
