"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      title: "tilscale Network",
      description:
        "secure remote access to the entire infrastructure from anywhere using Tailscale's WireGuard-based mesh network with zero configuration.",
      icon: Network,
      details: ["end-to-end encryption", "zero-config VPN", "multi-device access", "access control policies"],
    },
  ]

  return (
    <section id="infrastructure" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={isMounted && isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">self-hosted infrastructure</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              this portfolio and other services are powered by my custom home server setup running on proxmox, with
              docker containers and tailscale for secure remote access from anywhere.
            </p>
          </motion.div>

          {/* Component Cards Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-12 md:mb-16">
            {infrastructureComponents.map((component, index) => (
              // Use motion on the direct child of the staggered container
              <motion.div key={index} variants={itemVariants} className="flex"> {/* Use flex for equal height */}
                {/* Consistent Card Styling */}
                <Card className="h-full w-full flex flex-col border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                  {/* Card Header with improved icon presentation */}
                  <CardHeader className="p-6 pb-4"> {/* Adjusted padding */}
                    <div className="flex items-start gap-4 mb-2"> {/* Increased gap */}
                      {/* Monochrome icon background */}
                      <div className="p-2 rounded-lg bg-muted border border-border/50 mt-1 flex-shrink-0">
                         {/* Monochrome icon color */}
                        <component.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="mb-1 text-lg md:text-xl">{component.title.toLowerCase()}</CardTitle>
                        <CardDescription className="text-sm justify-center">{component.description.toLowerCase()}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {/* Card Content with improved details list */}
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col"> {/* Use flex-grow */}
                     <div className="mt-auto border-t border-border/50 pt-4"> {/* Push details to bottom */}
                       <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">key aspects</h4>
                       <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                         {component.details.map((detail, detailIndex) => (
                           // Use simple styled divs instead of list items
                           <div key={detailIndex} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md border border-transparent">
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

          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border-0 shadow-md overflow-hidden">
              <CardHeader>
                <CardTitle>home server architecture</CardTitle>
                <CardDescription>
                  a simplified view of how my home server infrastructure powers this portfolio and other services
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
                            <h3 className="text-sm font-medium">custom hardware</h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              energy-efficient server with redundant storage
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Server className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">proxmox ve</h3>
                            <p className="text-xs text-muted-foreground mt-1">virtualization platform</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Box className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">docker containers</h3>
                            <p className="text-xs text-muted-foreground mt-1">portfolio and services</p>
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
                            <h3 className="text-sm font-medium">tailscale network</h3>
                            <p className="text-xs text-muted-foreground mt-1">secure remote access</p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-background shadow-md mb-2">
                              <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-sm font-medium">security layer</h3>
                            <p className="text-xs text-muted-foreground mt-1">cloudflare protection and cdn</p>
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
                        <p className="text-sm font-medium">applications & services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-card border-0 shadow-md rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-medium mb-4">technical specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">hardware</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• custom-built server with AMD Ryzen processor</li>
                    <li>• 32GB ECC RAM for reliability</li>
                    <li>• ZFS RAID for data redundancy</li>
                    <li>• UPS backup power system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">services & network</h4>
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

