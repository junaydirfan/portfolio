"use client"

import { ArrowUpRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"

interface ProjectItem {
  title: string
  badge?: string
  description: string
  details?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: ProjectItem[] = [
  {
    title: "Flicket — Enterprise Multi-Agent & Operations Platform",
    badge: "Enterprise",
    description:
      "An enterprise-grade internal platform developed at FDM Group to automate operational workflows and ticketing through multi-agent orchestration, MCP server integrations, and containerized services.",
    details:
      "Served as Lead DevSecOps Engineer and Scrum Master: maintained automated CI/CD pipelines in Azure DevOps, orchestrated container workloads on Kubernetes, maintained user stories and sprints in Microsoft Planner, integrated full-stack observability with Dynatrace, Prometheus, and Grafana, and delivered technical presentations to clients and stakeholders.",
    tags: [
      "Flask",
      "Python",
      "Kubernetes",
      "Docker",
      "Azure AI Foundry",
      "MCP Servers",
      "Multi-Agent Systems",
      "Azure DevOps",
      "CI/CD",
      "Dynatrace",
      "Prometheus",
      "Grafana",
      "Microsoft Planner",
      "Scrum Master",
    ],
  },
  {
    title: "OneApply — AI-Powered Job Application Manager",
    badge: "SaaS / Production",
    description:
      "A full-stack SaaS platform that streamlines job applications with AI-powered resume tailoring, ATS keyword analysis, role-specific cover letters, and LaTeX document compilation.",
    details:
      "Features Manifest V3 browser extensions for Chromium and Firefox for one-click job capture directly from job boards into a unified dashboard. Built with Neon Postgres and Drizzle ORM.",
    tags: ["Next.js", "TypeScript", "LaTeX", "Neon Postgres", "Drizzle ORM", "Manifest V3", "Stripe", "LLM APIs"],
    liveUrl: "https://www.oneapply.app",
  },
  {
    title: "SmartBallot — Blockchain Voting System",
    badge: "Hackathon Winner",
    description:
      "A secure, blockchain-based voting application leveraging Zero-Knowledge Proofs (ZKPs) for voter anonymity and system transparency in electoral processes.",
    details:
      "Won Bishop’s University SecureVote Hackathon as a solo developer; audited by cybersecurity firm Eviden.",
    tags: ["NestJS", "React", "Solidity", "Web3.js", "ZKP", "MongoDB", "Hardhat"],
    githubUrl: "https://github.com/junaydirfan/smartballot",
  },
  {
    title: "Self-Hosted Infrastructure & Homelab",
    badge: "65+ GitHub Stars",
    description:
      "A documented private cloud homelab running Proxmox VE and LXC containers with automated routing, local DNS, and hardened network security.",
    details:
      "Configured NetBird for encrypted zero-trust mesh remote access and Nginx Proxy Manager for reverse proxying and automated SSL management.",
    tags: ["Proxmox", "LXC", "NetBird", "Nginx Proxy Manager", "Linux", "Docker"],
    githubUrl: "https://github.com/junaydirfan/ultimate-selfhosted-homelab",
  },
  {
    title: "CampusThrive — Student Wellness Tracker",
    badge: "Hackathon Winner '25",
    description:
      "A privacy-focused Progressive Web App for 4-dimensional mood and wellness tracking (Valence, Energy, Focus, Stress) storing 100% of data locally.",
    details:
      "Built with client-side analytical trend dashboards, 14-day baseline scoring, and complete offline PWA capability.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PWA", "Privacy-First"],
    liveUrl: "https://junaydirfan.github.io/campus-thrive/",
    githubUrl: "https://github.com/junaydirfan/campus-thrive",
  },
  {
    title: "Bulletin Board Server",
    badge: "Distributed Systems",
    description:
      "A multi-threaded concurrent server written in C featuring readers-writers locks and thread pools for high-throughput message posting and retrieval.",
    details:
      "Implements the two-phase commit protocol for distributed data consistency across multiple server nodes.",
    tags: ["C", "Multi-Threading", "Socket Programming", "Two-Phase Commit", "POSIX"],
    githubUrl: "https://github.com/junaydirfan/bbserver",
  },
  {
    title: "Hoor Charms — E-Commerce Storefront",
    badge: "Live Client Store",
    description:
      "A lightweight e-commerce storefront for a handmade jewelry brand, focused on fast load times, automated email receipts, and low operational overhead.",
    details:
      "Powered by Sanity CMS for product and order models, Resend for transactional emails, and direct WhatsApp customer handoff.",
    tags: ["Next.js", "Sanity CMS", "Tailwind CSS", "Resend", "WhatsApp", "Vercel"],
    liveUrl: "https://www.hoorcharms.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            // Projects
          </h2>
        </div>

        {/* Project List (Text-first, no images) */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              {/* Title, Badge, and Action Links */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* External Links */}
                <div className="flex items-center gap-4 font-mono text-xs pt-1 sm:pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3 w-3 text-zinc-500 group-hover:text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3 w-3 text-zinc-500 group-hover:text-zinc-200" />
                    </a>
                  )}
                </div>
              </div>

              {/* Descriptions */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              {project.details && (
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.details}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                  >
                    <TechIcon name={tag} className="h-3 w-3 text-zinc-500 shrink-0" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
