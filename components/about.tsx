"use client"

import { ArrowUpRight, MapPin, Sparkles } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="flex flex-col gap-8">
        {/* Name and Tagline */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
              Junaid Irfan
            </h1>
            <div className="flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE // AVAILABLE</span>
            </div>
          </div>
          <p className="text-base sm:text-lg text-zinc-300 font-mono">
            &gt; Full-Stack &amp; DevSecOps Engineer
          </p>
        </div>

        {/* Bio Paragraphs inspired by Alex Murashko & Alessandro Agozar */}
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-400">
          <p>
            I engineer scalable cloud infrastructure, automated CI/CD pipelines, and secure full-stack software systems. With a Master&apos;s in Computer Science from Bishop&apos;s University, I focus on building reliable platforms that solve real-world operational and developer workflow challenges.
          </p>
          <p>
            Currently a <span className="text-zinc-200 font-medium">DevSecOps Engineer &amp; Scrum Master</span> at <span className="text-zinc-200 font-medium">FDM Group</span>, designing AI-enabled IT operations platforms and integrating MCP (Model Context Protocol) tooling. Previously at <span className="text-zinc-200 font-medium">Adventure Triangle</span> and <span className="text-zinc-200 font-medium">Bishop&apos;s University</span>.
          </p>
          <p className="flex items-center gap-2 text-sm text-zinc-500 font-mono pt-1">
            <MapPin className="h-4 w-4 text-zinc-400" />
            <span>Based in Toronto, ON · Authorized to work in Canada</span>
          </p>
        </div>

        {/* Quick Links Row (Alex Murashko style) */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 font-mono text-sm border-t border-zinc-800/60">
          <a
            href="mailto:hello@junaidirfan.com"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>hello@junaidirfan.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://github.com/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span>View Experience</span>
            <span className="text-zinc-600">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
