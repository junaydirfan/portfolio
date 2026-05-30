"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const certifications = [
    {
      title: "Cybersecurity Defense Analyst Career Path",
      issuer: "Cisco Networking Academy",
      image: "/images/cybersecurity-defense-analyst-career-path.png",
      credentialUrl: "https://www.credly.com/badges/7b0a661d-7f48-4660-9e21-f0583b73044b/public_url",
      status: "verified",
      focus: "network defense, threat analysis, security operations",
    },
    {
      title: "Developing Secure Software (LFD121)",
      issuer: "The Linux Foundation",
      image: "/images/LFD121-Course-Badge-1-300x300.avif",
      credentialUrl: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/f7d5af97-0c46-4c29-abe6-348cc64a3d7c-junaid-junaid-ccefaea3-05f2-4844-bc7e-2ede2add37a7-certificate.pdf",
      status: "verified",
      focus: "secure coding practices, software risk reduction, vulnerability prevention",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.02 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  return (
    <section id="certifications" className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_62%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-8 md:px-16 lg:px-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <Award className="h-4 w-4 text-sky-300" />
              credentials
            </div>
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">certifications</h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              verified learning paths and technical credentials that support my work across infrastructure, security, and software systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4">
            {certifications.map((cert) => (
              <Card key={cert.title} className="overflow-hidden border border-border bg-card/80 transition-all duration-300 hover:border-sky-300/35 hover:shadow-card-hover">
                <CardContent className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-[132px_1fr] sm:items-center md:p-6">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} credential`}
                    className="group mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl border border-border bg-background/70 p-2 transition-colors hover:border-sky-300/45 sm:mx-0"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} badge`}
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                      sizes="128px"
                    />
                  </a>

                  <div className="min-w-0 text-center sm:text-left">
                    <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      <Badge className="border-sky-300/20 bg-sky-300/10 text-sky-200">
                        <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                        {cert.status}
                      </Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground">
                        {cert.issuer}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-foreground md:text-2xl">{cert.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cert.focus}</p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-sky-200 transition-colors hover:text-sky-100"
                    >
                      view credential
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
