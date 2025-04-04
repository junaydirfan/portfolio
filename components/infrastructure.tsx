"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Box, Shield, Cpu, Network, Layers } from "lucide-react"

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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const infrastructureComponents = [
    {
      title: "Proxmox Virtualization",
      description:
        "Self-hosted Proxmox VE server running on custom hardware, enabling efficient resource allocation for multiple virtual machines and containers.",
      icon: Server,
      details: [
        "Bare-metal hypervisor",
        "Resource optimization",
        "VM & container management",
        "High availability setup",
      ],
    },
    {
      title: "Docker Ecosystem",
      description:
        "Containerized applications using Docker and Docker Compose for consistent deployment, including this portfolio website and various other services.",
      icon: Box,
      details: ["Isolated environments", "Easy service updates", "Resource efficiency", "Simplified management"],
    },
    {
      title: "Tailscale Network",
      description:
        "Secure remote access to the entire infrastructure from anywhere using Tailscale's WireGuard-based mesh network with zero configuration.",
      icon: Network,
      details: ["End-to-end encryption", "Zero-config VPN", "Multi-device access", "Access control policies"],
    },
  ]

  return (
    <section id="infrastructure" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div ref={ref} initial="hidden" animate={isMounted && isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Self-Hosted Infrastructure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This portfolio and other services are powered by my custom home server setup running on Proxmox, with
              Docker containers and Tailscale for secure remote access from anywhere.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {infrastructureComponents.map((component, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <component.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>{component.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {component.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <Badge variant="outline" className="h-1.5 w-1.5 p-0 rounded-full bg-primary" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border-0 shadow-md overflow-hidden">
              <CardHeader>
                <CardTitle>Home Server Architecture</CardTitle>
                <CardDescription>
                  A simplified view of how my home server infrastructure powers this portfolio and other services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-card rounded-lg p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col items-center">
                      {/* Architecture diagram */}
                      <div className="w-full max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Cpu className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">Custom Hardware</h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              Energy-efficient server with redundant storage
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Server className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">Proxmox VE</h3>
                            <p className="text-xs text-muted-foreground mt-1">Virtualization platform</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Box className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">Docker Containers</h3>
                            <p className="text-xs text-muted-foreground mt-1">Portfolio and services</p>
                          </div>
                        </div>

                        {/* Connection lines */}
                        <div className="relative h-20 mb-8">
                          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                          <div className="absolute left-1/4 right-1/4 top-1/2 h-0.5 bg-primary/20"></div>
                          <div className="absolute left-1/4 top-1/2 bottom-0 w-0.5 bg-primary/20"></div>
                          <div className="absolute right-1/4 top-1/2 bottom-0 w-0.5 bg-primary/20"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Network className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">Tailscale Network</h3>
                            <p className="text-xs text-muted-foreground mt-1">Secure remote access</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">Security Layer</h3>
                            <p className="text-xs text-muted-foreground mt-1">Cloudflare protection and CDN</p>
                          </div>
                        </div>

                        {/* Final connection line */}
                        <div className="relative h-20 mt-8">
                          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-background shadow-md rounded-full p-2">
                            <Layers className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <p className="text-sm font-medium">Applications & Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-card border-0 shadow-md rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">Hardware</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Custom-built server with AMD Ryzen processor</li>
                    <li>• 32GB ECC RAM for reliability</li>
                    <li>• ZFS RAID for data redundancy</li>
                    <li>• UPS backup power system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">Services & Network</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Proxmox VE virtualization</li>
                    <li>• Docker containers for all services</li>
                    <li>• Tailscale for secure remote access</li>
                    <li>• Cloudflare for DNS and CDN</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

