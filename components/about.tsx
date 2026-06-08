"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Briefcase, ChevronRight, Terminal } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import LastFmStatus from "./lastfm-status"
import InstagramFeed from "./instagram-feed"
export default function About() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }

  const terminalCommands = [
    {
      prompt: "junaid@root:~$",
      command: "whoami",
      output: [
        "     ▄█ ███    █▄  ███▄▄▄▄      ▄████████  ▄█  ████████▄        ▄█     ▄████████    ▄████████    ▄████████ ███▄▄▄▄   ",
        "    ███ ███    ███ ███▀▀▀██▄   ███    ███ ███  ███   ▀███      ███    ███    ███   ███    ███   ███    ███ ███▀▀▀██▄ ",
        "    ███ ███    ███ ███   ███   ███    ███ ███▌ ███    ███      ███▌   ███    ███   ███    █▀    ███    ███ ███   ███ ",
        "    ███ ███    ███ ███   ███   ███    ███ ███▌ ███    ███      ███▌  ▄███▄▄▄▄██▀  ▄███▄▄▄       ███    ███ ███   ███ ",
        "    ███ ███    ███ ███   ███ ▀███████████ ███▌ ███    ███      ███▌ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ▀███████████ ███   ███ ",
        "    ███ ███    ███ ███   ███   ███    ███ ███  ███    ███      ███  ▀███████████   ███          ███    ███ ███   ███ ",
        "    ███ ███    ███ ███   ███   ███    ███ ███  ███   ▄███      ███    ███    ███   ███          ███    ███ ███   ███ ",
        "█▄ ▄███ ████████▀   ▀█   █▀    ███    █▀  █▀   ████████▀       █▀     ███    ███   ███          ███    █▀   ▀█   █▀  ",
        "▀▀▀▀▀▀                                                                ███    ███                                     ",
        "Full-stack developer specializing in DevOps, AI products, and self-hosted infrastructure.",
      ],
    },
    {
      prompt: "$",
      command: "deploy-ai-infrastructure --optimize=true --scale=auto",
      output: ["status: optimized", "scale: auto", "observability: enabled"],
    },
    {
      prompt: "$",
      command: "grep -r \"expertise\" /var/log/career.log",
      output: ["TypeScript · React · Next.js · Docker · AWS · Proxmox · LLM APIs"],
    },
    {
      prompt: ">",
      command: "cat /etc/tech-ecosystem.conf",
      output: ["web=true  cloud=true  automation=true  self_hosted=true"],
    },
  ]

  const terminalProducts = [
    "OneApply - LaTeX resume generation, management, ATS analysis, and browser-assisted applications.",
    "CampusThrive — privacy-first student wellness tracker.",
    "ultimate-selfhosted-homelab — documented home server stack and services.",
  ]

  const githubHighlights = [
    {
      name: "ultimate-selfhosted-homelab",
      href: "https://github.com/junaydirfan/ultimate-selfhosted-homelab",
      description: "home server docs",
    },
    {
      name: "portfolio",
      href: "https://github.com/junaydirfan/portfolio",
      description: "this Next.js site",
    },
    {
      name: "campus-thrive",
      href: "https://github.com/junaydirfan/campus-thrive",
      description: "privacy-first wellness app",
    },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full relative z-20 flex flex-col gap-12 lg:gap-20"
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* --- Top Section: Typography --- */}
        <motion.div className="flex flex-col gap-8" variants={itemVariants}>

          <div className="flex flex-col gap-4">
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              <span>Hi, <span className="text-muted-foreground">I&apos;m</span></span>
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary/20 inline-block align-middle transform -translate-y-1">
                <Image
                  src="/images/IMG_522556.webp"
                  alt="Junaid Irfan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 112px"
                  priority
                />
              </div>
              <span>Junaid Irfan!</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-muted-foreground leading-tight tracking-tight">
              I&apos;m a <span className="text-foreground font-semibold">Full-Stack Developer</span> <br className="hidden sm:block" />
              specializing in <span className="text-primary font-bold">DevOps.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)] focus-visible:outline-none"
            >
              <span>Book a call</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all pointer-events-none" />
            </a>
            <p className="text-base text-muted-foreground font-medium max-w-sm">
              Feel free to explore my portfolio and reach out! I&apos;d love to connect
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-2xl border border-border/70 bg-[#05050a]/85 shadow-[0_24px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
        >
          <div className="border-b border-border/70 p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                <Terminal className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">hero@portfolio:~/system</span>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {terminalCommands.map((entry) => (
                <div key={entry.command} className="space-y-1.5">
                  <p className="break-words text-primary">
                    <span className="text-sky-300/90">{entry.prompt}</span> {entry.command}
                  </p>
                  <div className="space-y-1 pl-3 text-muted-foreground">
                    {entry.command === "whoami" ? (
                      <>
                        <div className="overflow-x-auto custom-scrollbar pb-1">
                          <pre className="min-w-max whitespace-pre text-[8px] leading-[1.05] text-foreground/80 sm:text-[9px]">
                            {entry.output.slice(0, -1).join("\n")}
                          </pre>
                        </div>
                        <p className="break-words leading-relaxed">{entry.output[entry.output.length - 1]}</p>
                      </>
                    ) : (
                      entry.output.map((line) => (
                        <p key={line} className="break-words leading-relaxed">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}

              <div className="space-y-1.5">
                <p className="text-primary"><span className="text-sky-300/90">$</span> ./products --list</p>
                <div className="space-y-1 pl-3 text-muted-foreground">
                  {terminalProducts.map((product) => (
                    <p key={product} className="break-words leading-relaxed">&gt; {product}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-5 p-4 sm:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.12),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(56,189,248,0.07),transparent_38%)]" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <FaGithub className="h-4 w-4 text-primary" />
                  github activity
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  live contribution heatmap for github.com/junaydirfan
                </p>
              </div>
              <a
                href="https://github.com/junaydirfan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                open github
              </a>
            </div>

            <div className="relative z-10 overflow-hidden rounded-xl border border-border/70 bg-background/60 p-2 sm:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/9a85e8/junaydirfan"
                alt="GitHub contribution heatmap for junaydirfan"
                loading="lazy"
                className="block h-auto w-full max-w-full opacity-90 [filter:saturate(0.95)_brightness(0.92)]"
              />
            </div>

            <div className="relative z-10 rounded-xl border border-border/70 bg-background/45 p-3">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-primary">
                  <span className="text-sky-300/90">$</span> git remote -v
                </p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-200">
                  public work
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {githubHighlights.map((repo) => (
                  <a
                    key={repo.href}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-w-0 rounded-lg border border-border/60 bg-muted/25 p-3 transition-colors hover:border-primary/35 hover:bg-primary/10"
                  >
                    <p className="truncate font-mono text-[11px] font-semibold text-foreground group-hover:text-primary">
                      {repo.name}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{repo.description}</p>
                  </a>
                ))}
              </div>
              <p className="mt-3 border-t border-border/60 pt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                <span className="text-sky-300/90">$</span> git status --short&nbsp;
                <span className="text-emerald-300/90">shipping</span>
                <span className="mx-2 text-border">|</span>
                ai products · homelab docs · portfolio polish
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Bottom Section: Bento Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {/* Box 1: Experience */}
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col gap-6 hover:border-primary/50 transition-colors shadow-sm min-h-[300px]">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </div>
            <div className="flex flex-col gap-6 flex-1 relative mt-2">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-4 w-[2px] bg-border rounded-full" />

              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_hsl(var(--primary))]" />
                <h4 className="text-sm font-bold text-foreground">IT Operations Consultant</h4>
                <p className="text-xs text-muted-foreground mt-1">FDM Group • 2026 - Present</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-muted-foreground ring-4 ring-background" />
                <h4 className="text-sm font-bold text-foreground">DevOps Intern</h4>
                <p className="text-xs text-muted-foreground mt-1">Adventure Triangle • 2026</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-muted-foreground ring-4 ring-background" />
                <h4 className="text-sm font-bold text-foreground">Webmaster</h4>
                <p className="text-xs text-muted-foreground mt-1">Bishop&apos;s University • 2023 - 2024</p>
              </div>
            </div>
            <a href="#experience" className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto pt-4">
              View full experience <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Box 2: Currently Learning */}
          <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col relative overflow-hidden hover:border-primary/50 transition-colors shadow-sm min-h-[300px] group">
            <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <Code className="w-4 h-4" />
              <span>Currently Learning</span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Dynatrace</h3>
                <p className="text-xs text-muted-foreground">Advanced observability & application performance monitoring.</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors delay-75">LLM Training</h3>
                <p className="text-xs text-muted-foreground">Fine-tuning, prompt engineering, and deploying language models.</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors delay-150">Infrastructures</h3>
                <p className="text-xs text-muted-foreground">Scaling cloud architectures, CI/CD pipelines, and DevOps automation.</p>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Box 3: Instagram Feed (Life & Lens) */}
          <InstagramFeed />
        </motion.div>

      </motion.div>
    </section>
  )
}
