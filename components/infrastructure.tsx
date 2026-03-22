"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, type ElementType } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Box, Shield, Cpu, Network, Layers, Activity, Database, Workflow, BarChart3, Container, Globe, Zap, Image, FileText, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

// ── Diagram primitives ──────────────────────────────────────────────────────

function Arrow() {
  return (
    <div className="flex justify-center my-0.5">
      <div className="relative h-8 flex flex-col items-center">
        <div className="w-px flex-1 bg-border" />
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-border" />
      </div>
    </div>
  )
}

function DiagramNode({
  Icon,
  label,
  desc,
  wide = false,
  leaf = false,
  highlight = false,
  muted = false,
}: {
  Icon: ElementType
  label: string
  desc: string
  wide?: boolean
  leaf?: boolean
  highlight?: boolean
  muted?: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors",
        wide && "w-full",
        leaf && "flex-col items-center text-center gap-1.5 px-3 py-3",
        highlight
          ? "border-primary/40 bg-primary/5"
          : muted
            ? "border-border/40 bg-transparent"
            : "border-border bg-card shadow-card"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 rounded-lg p-2",
          muted ? "bg-muted/40" : highlight ? "bg-primary/15" : "bg-primary/10"
        )}
      >
        <Icon className={cn("h-4 w-4", muted ? "text-muted-foreground" : "text-primary")} />
      </div>
      <div className={cn("min-w-0", leaf && "text-center")}>
        <p className={cn("text-xs font-semibold leading-tight", muted ? "text-muted-foreground" : "text-foreground")}>
          {label}
        </p>
        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────

export default function Infrastructure() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Only enable client-side effects after hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  const infrastructureComponents = [
    {
      title: "proxmox virtualization",
      description:
        "self-hosted proxmox server running on custom hardware, enabling efficient resource allocation for multiple virtual machines and containers.",
      icon: Server,
      details: [
        "bare-metal hypervisor",
        "resource optimization",
        "VM & container management",
        "high availability setup",
      ],
    },
    {
      title: "docker ecosystem",
      description:
        "containerized applications using Docker and Docker Compose for consistent deployment, including this portfolio website and various other services.",
      icon: Box,
      details: ["isolated environments", "easy service updates", "resource efficiency", "simplified management"],
    },
    {
      title: "tailscale network",
      description:
        "secure remote access to the entire infrastructure from anywhere using Tailscale's WireGuard-based mesh network with zero configuration.",
      icon: Network,
      details: ["end-to-end encryption", "zero-config VPN", "multi-device access", "access control policies"],
    },
  ]

  // Live services data
  const liveServices = [
    {
      name: "Grafana",
      description: "Monitoring & analytics dashboard",
      icon: BarChart3,
      status: "live",
      category: "monitoring"
    },
    {
      name: "Docker Portainer",
      description: "Container management interface",
      icon: Container,
      status: "live",
      category: "management"
    },
    {
      name: "n8n",
      description: "Workflow automation platform",
      icon: Workflow,
      status: "live",
      category: "automation"
    },
    {
      name: "Nextcloud",
      description: "Self-hosted file sharing",
      icon: Database,
      status: "live",
      category: "storage"
    },
    {
      name: "Pi-hole",
      description: "Network-wide ad blocking",
      icon: Shield,
      status: "live",
      category: "network"
    },
    {
      name: "Home Assistant",
      description: "Smart home automation",
      icon: Zap,
      status: "live",
      category: "automation"
    },
    {
      name: "Uptime Kuma",
      description: "Service monitoring",
      icon: Activity,
      status: "live",
      category: "monitoring"
    },
    {
      name: "Portfolio Website",
      description: "This website",
      icon: Globe,
      status: "live",
      category: "web"
    },
    {
      name: "Immich",
      description: "Self-hosted photo management",
      icon: Image,
      status: "live",
      category: "storage"
    },
    {
      name: "Paperless-ngx",
      description: "Document management system",
      icon: FileText,
      status: "live",
      category: "storage"
    },
    {
      name: "Ollama",
      description: "Local AI & LLM platform",
      icon: Brain,
      status: "live",
      category: "ai"
    }
  ]

  return (
    <section id="infrastructure" className="py-24 md:py-32 bg-background">
      <div className="container px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={isMounted && isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">self-hosted infrastructure</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              this portfolio and other services are powered by my custom home server setup running on proxmox, with
              docker containers and tailscale for secure remote access from anywhere.
            </p>
          </motion.div>

          {/* Component Cards */}
          <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-16">
            {infrastructureComponents.map((component, index) => (
              <motion.div key={index} variants={itemVariants} className="flex min-w-0">
                <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 min-w-0">
                  <CardHeader className="p-6 pb-3 min-w-0">
                    <div className="flex items-start gap-3 mb-2 min-w-0">
                      <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        <component.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="mb-1 text-lg font-bold break-words">{component.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed break-words">{component.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col min-w-0">
                    <div className="mt-auto border-t border-border pt-4 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">key aspects</p>
                      <div className="flex flex-wrap gap-2 min-w-0">
                        {component.details.map((detail, detailIndex) => (
                          <span key={detailIndex} className="text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md border border-border break-words">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Live Services */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="border border-border bg-card hover:border-primary/20 transition-all duration-300">
              <CardHeader className="p-6 md:p-8">
                <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-1">live services</CardTitle>
                <CardDescription className="text-sm">currently running on my home server infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {liveServices.map((service, index) => (
                    <motion.div key={index} variants={itemVariants} className="min-w-0">
                      <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors min-w-0">
                        <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10">
                          <service.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-grow min-w-0 overflow-hidden">
                          <h4 className="text-xs font-semibold text-foreground truncate">{service.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                        </div>
                        <div className="flex-shrink-0 relative">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>live & operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span>offline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Architecture */}
          <motion.div variants={itemVariants} className="mt-8">
            <Card className="border border-border bg-card hover:border-primary/20 transition-all duration-300">
              <CardHeader className="p-6 md:p-8">
                <CardTitle className="text-xl md:text-2xl font-bold mb-1">server architecture</CardTitle>
                <CardDescription className="text-sm">
                  how my home server infrastructure powers this portfolio and other services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0">
                <div className="rounded-lg bg-muted/20 border border-border p-6 md:p-8 overflow-x-auto">
                  <div className="min-w-[480px]">

                    {/* ── Row 1: Two entry points ── */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                      <DiagramNode Icon={Globe} label="Public Traffic" desc="Browser requests" muted />
                      <DiagramNode Icon={Network} label="Remote Admin" desc="Tailscale client" muted />
                    </div>

                    {/* ── Arrows down from both ── */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                      <Arrow />
                      <Arrow />
                    </div>

                    {/* ── Row 2: Edge layer ── */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                      <DiagramNode Icon={Shield} label="Cloudflare" desc="DNS · CDN · DDoS protection" />
                      <DiagramNode Icon={Network} label="Tailscale VPN" desc="WireGuard mesh · zero-config" />
                    </div>

                    {/* ── Merge two arrows into one ── */}
                    <div className="relative h-10 max-w-md mx-auto">
                      {/* left vertical */}
                      <div className="absolute left-1/4 top-0 h-1/2 w-px bg-border" />
                      {/* right vertical */}
                      <div className="absolute right-1/4 top-0 h-1/2 w-px bg-border" />
                      {/* horizontal bridge */}
                      <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-border" />
                      {/* center vertical down */}
                      <div className="absolute left-1/2 top-1/2 bottom-0 w-px bg-border" />
                      {/* arrowhead */}
                      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-border" />
                    </div>

                    {/* ── Row 3: Physical hardware ── */}
                    <div className="max-w-md mx-auto">
                      <DiagramNode
                        Icon={Cpu}
                        label="Custom Hardware"
                        desc="AMD Ryzen · 32GB ECC RAM · ZFS RAID · UPS"
                        wide
                        highlight
                      />
                    </div>

                    <div className="max-w-md mx-auto"><Arrow /></div>

                    {/* ── Row 4: Hypervisor ── */}
                    <div className="max-w-md mx-auto">
                      <DiagramNode Icon={Server} label="Proxmox VE" desc="Bare-metal hypervisor · VM & LXC management" wide />
                    </div>

                    <div className="max-w-md mx-auto"><Arrow /></div>

                    {/* ── Row 5: Containers ── */}
                    <div className="max-w-md mx-auto">
                      <DiagramNode Icon={Box} label="Docker Engine" desc="Containerised services · Docker Compose" wide />
                    </div>

                    {/* ── Fan out to services ── */}
                    <div className="relative h-10 max-w-2xl mx-auto">
                      {/* center vertical up */}
                      <div className="absolute left-1/2 top-0 h-1/2 w-px bg-border" />
                      {/* horizontal bar */}
                      <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px bg-border" />
                      {/* verticals down to each leaf */}
                      {["12.5%", "37.5%", "62.5%", "87.5%"].map((l) => (
                        <div key={l} className="absolute top-1/2 bottom-0 w-px bg-border" style={{ left: l }} />
                      ))}
                    </div>

                    {/* ── Row 6: Running services ── */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                      <DiagramNode Icon={Globe} label="This Portfolio" desc="Next.js · Docker" leaf />
                      <DiagramNode Icon={Workflow} label="n8n / Home Asst." desc="Automation" leaf />
                      <DiagramNode Icon={Database} label="Nextcloud" desc="Storage · Immich" leaf />
                      <DiagramNode Icon={Activity} label="Monitoring" desc="Grafana · Kuma" leaf />
                    </div>

                  </div>
                </div>

                {/* Specs */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  {[
                    {
                      title: "Hardware",
                      items: [
                        "Custom-built with AMD Ryzen processor",
                        "32GB ECC RAM for reliability",
                        "ZFS RAID for data redundancy",
                        "UPS backup power system",
                      ]
                    },
                    {
                      title: "Services & Network",
                      items: [
                        "Proxmox VE virtualization",
                        "Docker containers for all services",
                        "Tailscale for secure remote access",
                        "Cloudflare for DNS and CDN",
                      ]
                    }
                  ].map(({ title, items }) => (
                    <div key={title}>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{title}</p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}