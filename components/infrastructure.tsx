"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Box, Shield, Cpu, Network, Layers, Activity, Database, Workflow, BarChart3, Container, Globe, Zap, Image, FileText, Brain } from "lucide-react"

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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">self-hosted infrastructure</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              this portfolio and other services are powered by my custom home server setup running on proxmox, with
              docker containers and tailscale for secure remote access from anywhere
            </p>
          </motion.div>

          {/* Bauhaus Component Cards Grid - Fixed responsiveness */}
          <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 md:mb-20">
            {infrastructureComponents.map((component, index) => (
              <motion.div key={index} variants={itemVariants} className="flex min-w-0">
                <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-foreground transition-colors min-w-0">
                  <CardHeader className="p-6 md:p-8 lg:p-10 pb-4 md:pb-6 min-w-0">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 min-w-0">
                      <div className="p-2 md:p-3 bg-muted border border-border flex-shrink-0">
                        <component.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="mb-2 text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide break-words">{component.title.toLowerCase()}</CardTitle>
                        <CardDescription className="text-sm md:text-base leading-relaxed break-words">{component.description.toLowerCase()}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 lg:p-10 pt-0 flex-grow flex flex-col min-w-0">
                     <div className="mt-auto border-t border-border pt-4 md:pt-6 min-w-0">
                       <h4 className="text-xs font-bold uppercase text-foreground mb-3 md:mb-4 tracking-wider">key aspects</h4>
                       <div className="flex flex-wrap gap-2 md:gap-3 md:gap-x-4 min-w-0">
                         {component.details.map((detail, detailIndex) => (
                           <div key={detailIndex} className="text-xs md:text-sm text-muted-foreground bg-muted px-2 md:px-3 py-1.5 md:py-2 border border-border break-words">
                             {detail}
                           </div>
                         ))}
                       </div>
                     </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bauhaus Live Services Section - Fixed responsiveness */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="border border-border bg-card hover:border-foreground transition-colors">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold uppercase tracking-wide mb-2 break-words">live services</CardTitle>
                <CardDescription className="text-sm md:text-base break-words">currently running services on my home server infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 lg:p-10 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                  {liveServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative min-w-0"
                    >
                      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 border border-border bg-muted/30 hover:bg-muted/50 transition-colors min-w-0">
                        <div className="flex-shrink-0">
                          <service.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                        </div>
                        <div className="flex-grow min-w-0 overflow-hidden">
                          <h4 className="text-xs md:text-sm font-bold text-foreground truncate uppercase tracking-wide">{service.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-2 h-2 bg-foreground animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-foreground animate-ping opacity-75"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Status Legend - Bauhaus style */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground animate-pulse"></div>
                      <span className="font-medium">live & operational</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-muted-foreground"></div>
                      <span className="font-medium">offline</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border border-border bg-card hover:border-foreground transition-colors">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-2 break-words">home server architecture</CardTitle>
                <CardDescription className="text-sm md:text-base break-words">
                  a simplified view of how my home server infrastructure powers this portfolio and other services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 lg:p-10 pt-0">
                <div className="relative bg-muted/30 border border-border p-6 md:p-8 lg:p-10">

                  <div className="relative z-10">
                    <div className="flex flex-col items-center">
                      {/* Architecture diagram */}
                      <div className="w-full max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-4 border border-border bg-background mb-3">
                              <Cpu className="h-7 w-7 text-foreground" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide mb-2">custom hardware</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              energy-efficient server with redundant storage
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-4 border border-border bg-background mb-3">
                              <Server className="h-7 w-7 text-foreground" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide mb-2">proxmox ve</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">virtualization platform</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-4 border border-border bg-background mb-3">
                              <Box className="h-7 w-7 text-foreground" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide mb-2">docker containers</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">portfolio and services</p>
                          </div>
                        </div>

                        {/* Connection lines - Bauhaus geometric */}
                        <div className="relative h-24 mb-10">
                          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
                          <div className="absolute left-1/4 right-1/4 top-1/2 h-0.5 bg-border"></div>
                          <div className="absolute left-1/4 top-1/2 bottom-0 w-0.5 bg-border"></div>
                          <div className="absolute right-1/4 top-1/2 bottom-0 w-0.5 bg-border"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-4 border border-border bg-background mb-3">
                              <Network className="h-7 w-7 text-foreground" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide mb-2">tailscale network</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">secure remote access</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-4 border border-border bg-background mb-3">
                              <Shield className="h-7 w-7 text-foreground" />
                            </div>
                            <h3 className="text-base font-bold uppercase tracking-wide mb-2">security layer</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">cloudflare protection and cdn</p>
                          </div>
                        </div>

                        {/* Final connection line */}
                        <div className="relative h-24 mt-10">
                          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-background border border-border p-3">
                            <Layers className="h-6 w-6 text-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <p className="text-base font-bold uppercase tracking-wide">applications & services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border border-border bg-card hover:border-foreground transition-colors max-w-4xl mx-auto">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-2 break-words">technical specifications</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 lg:p-10 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wide text-foreground mb-4">hardware</h4>
                    <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">custom-built server with AMD Ryzen processor</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">32GB ECC RAM for reliability</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">ZFS RAID for data redundancy</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">UPS backup power system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wide text-foreground mb-4">services & network</h4>
                    <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">Proxmox VE virtualization</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">Docker containers for all services</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">Tailscale for secure remote access</li>
                      <li className="before:content-['•'] before:mr-3 before:text-foreground">Cloudflare for DNS and CDN</li>
                    </ul>
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