"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectDetailModal } from "./project-detail-modal"
import type { ProjectType } from "@/types/project"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const projects: ProjectType[] = [
    {
      id: "smartballot",
      title: "SmartBallot: Blockchain Voting System",
      shortDescription:
        "A secure and anonymous e-voting application utilizing blockchain and Zero-Knowledge Proofs (ZKP) for vote integrity.",
      fullDescription:
        "SmartBallot is a revolutionary blockchain-based voting system that achieved Runner-Up in the secureVote Hackathon at Bishop's University. It addresses the critical challenges of electronic voting by ensuring vote integrity, voter anonymity, and system transparency through advanced cryptographic techniques and blockchain technology.",
      image: "/images/smartballot.jpeg?height=400&width=600",
      tags: ["Next.js", "Nest.js", "Solidity", "Blockchain", "ZKP"],
      link: "#",
      github: "#",
      keyFeatures: [
        "Secure and anonymous voting through blockchain and Zero-Knowledge Proofs",
        "Real-time voter verification through integration with external government databases",
        "Role-based access control with Cerbos for enhanced security",
        "Data encryption and anonymization to protect voter information",
        "Transparent vote counting with cryptographic verification",
      ],
      technicalDetails: [
        "Implemented Solidity smart contracts for vote storage and verification",
        "Used Zero-Knowledge Proofs to ensure voter anonymity while maintaining verification",
        "Built a responsive front-end with Next.js and Tailwind CSS",
        "Developed a robust back-end API with Nest.js for data processing",
        "Integrated with external voter databases using secure API connections",
      ],
      architecture:
        "SmartBallot uses a three-tier architecture with a Next.js frontend, Nest.js backend, and Ethereum blockchain for data storage. The system employs Zero-Knowledge Proofs to verify voter eligibility without revealing identity, and uses Cerbos for role-based access control.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      challenges: [
        {
          title: "Ensuring Voter Anonymity While Maintaining Verification",
          description:
            "One of the biggest challenges was ensuring that votes remained anonymous while still verifying that each voter was eligible and only voted once.",
          solution:
            "We implemented Zero-Knowledge Proofs (ZKP) that allowed us to verify voter eligibility without revealing their identity. This cryptographic approach ensured that votes could be verified as legitimate without connecting them to specific voters.",
        },
        {
          title: "Scaling the Blockchain Solution",
          description:
            "Traditional blockchain solutions often face scaling issues with high transaction volumes, which could be problematic during peak voting periods.",
          solution:
            "We implemented a layer-2 scaling solution with optimistic rollups to handle the transaction volume efficiently. This allowed us to process thousands of votes per minute while maintaining the security guarantees of the Ethereum blockchain.",
        },
        {
          title: "Ensuring Accessibility for All Voters",
          description:
            "Electronic voting systems must be accessible to users with varying levels of technical expertise and abilities.",
          solution:
            "We designed an intuitive user interface with accessibility in mind, following WCAG guidelines. We also implemented multiple authentication methods and provided clear instructions throughout the voting process.",
        },
      ],
    },
    {
      id: "bulletin-board",
      title: "Bulletin Board Server",
      shortDescription:
        "A multi-threaded bulletin board server with thread pool architecture, implementing Readers-Writers lock for concurrent data access.",
      fullDescription:
        "The Bulletin Board Server is a high-performance, multi-threaded server application designed to handle concurrent message posting and reading. It implements advanced synchronization techniques to ensure data integrity while maximizing throughput for multiple simultaneous users.",
      image: "/images/bbserv.jpeg?height=400&width=600",
      tags: ["C", "Multi-threading", "Socket Programming", "Two-Phase Commit"],
      link: "#",
      github: "#",
      keyFeatures: [
        "Thread pool architecture for efficient resource utilization",
        "Readers-Writers lock implementation for concurrent data access",
        "Two-phase commit protocol for distributed synchronization",
        "Socket-based client-server communication system",
        "Configurable settings and daemon mode support",
      ],
      technicalDetails: [
        "Implemented in C with POSIX threads for maximum performance",
        "Used mutex and condition variables for thread synchronization",
        "Implemented a custom thread pool to manage worker threads efficiently",
        "Designed a socket-based communication protocol for client-server interaction",
        "Implemented the two-phase commit protocol for distributed consensus",
      ],
      architecture:
        "The Bulletin Board Server uses a thread pool architecture where a fixed number of worker threads process client requests from a shared queue. It implements a Readers-Writers lock to allow multiple simultaneous readers while ensuring exclusive access for writers. The server uses a socket-based communication system and supports the two-phase commit protocol for distributed operations.",
      gallery: ["/images/bbserv.jpeg?height=400&width=600", "/images/bbserv.jpeg?height=400&width=600"],
      challenges: [
        {
          title: "Preventing Deadlocks in Concurrent Access",
          description:
            "With multiple threads accessing shared resources, deadlocks were a significant risk that could freeze the entire system.",
          solution:
            "We implemented a resource hierarchy and timeout-based deadlock detection. By ensuring resources were always acquired in the same order and implementing timeouts for lock acquisitions, we effectively prevented deadlocks.",
        },
        {
          title: "Optimizing Performance Under High Load",
          description: "The server needed to maintain performance even with hundreds of simultaneous connections.",
          solution:
            "We implemented an adaptive thread pool that could dynamically adjust the number of worker threads based on the current load. This, combined with efficient connection pooling and request batching, allowed the server to handle high loads effectively.",
        },
      ],
    },
    {
      id: "busrc-website",
      title: "BUSRC Website",
      shortDescription:
        "Led full-stack management of SRC website using modern web stack. Implemented custom UI components aligned with university brand guidelines.",
      fullDescription:
        "The BUSRC Website is a comprehensive web platform for Bishop's University Student Representative Council. It features a modern, responsive design with custom UI components that adhere to university brand guidelines. The site handles 5000+ monthly user interactions and integrates with various university systems.",
      image: "/images/busrc1.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "SQL", "UI Design"],
      link: "https://busrc.com",
      github: "#",
      keyFeatures: [
        "Responsive design optimized for all devices",
        "Custom UI components aligned with university brand guidelines",
        "Integration with university event calendars and reservation systems",
        "User authentication and role-based access",
        "Content management system for easy updates",
      ],
      technicalDetails: [
        "Built with Next.js for server-side rendering and optimal performance",
        "Used Tailwind CSS for consistent styling and rapid development",
        "Implemented SQL database schemas for efficient data storage and retrieval",
        "Designed RESTful APIs for integration with other university systems",
        "Implemented automated testing and CI/CD pipelines",
      ],
      architecture:
        "The BUSRC Website uses a modern JAMstack architecture with Next.js for server-side rendering and static site generation. It features a headless CMS for content management, SQL databases for structured data, and RESTful APIs for integration with other university systems.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      challenges: [
        {
          title: "Integrating with Legacy University Systems",
          description:
            "The website needed to integrate with several legacy university systems that had limited API capabilities.",
          solution:
            "We developed custom integration adapters that could communicate with the legacy systems through their available interfaces. Where direct integration wasn't possible, we implemented scheduled data synchronization processes.",
        },
        {
          title: "Ensuring Consistent Branding Across Components",
          description:
            "Maintaining consistent branding across all UI components while allowing for flexibility was challenging.",
          solution:
            "We created a design system with Tailwind CSS that encoded the university's brand guidelines into reusable components and utility classes. This ensured visual consistency while allowing for component-specific customizations.",
        },
      ],
    },
    {
      id: "opensource-contributions",
      title: "Open Source Contributions",
      shortDescription:
        "Contributed to various open source projects, including React, Tailwind CSS, and Next.js.",
      fullDescription:
        "I've contributed to various open source projects, including React, Tailwind CSS, and Next.js.",
      image: "/images/opensource.png?height=400&width=600",
      tags: ["Next.js", "React", "Tailwind CSS", "XML"],
      link: "#",
      github: "#",
      keyFeatures: [
        "Dynamic form generation based on XML configurations",
        "Customizable UI components for different partner needs",
        "Role-based access control for secure partner management",
        "Automated validation and error handling",
        "Integration with partner APIs and systems",
      ],
      technicalDetails: [
        "Built with Next.js and React for a responsive, modern UI",
        "Implemented XML parsing and transformation for dynamic form generation",
        "Used Tailwind CSS for consistent, customizable styling",
        "Implemented client-side and server-side validation for data integrity",
        "Designed a plugin architecture for extensibility",
      ],
      architecture:
        "The Partner Admin Portal uses a component-based architecture with Next.js and React. It features a core engine that parses XML configurations to generate dynamic forms and UI components. The system uses a modular approach with plugins for different functionality, allowing for easy extension and customization.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      challenges: [
        {
          title: "Supporting Diverse Partner Requirements",
          description:
            "Different partners had vastly different requirements for their administration interfaces, making a one-size-fits-all approach impractical.",
          solution:
            "We designed an XML-based configuration system that allowed us to define custom forms, validation rules, and UI components for each partner without changing the codebase. This approach reduced partner onboarding time by 35%.",
        },
        {
          title: "Ensuring Consistent Performance with Dynamic Components",
          description:
            "Dynamically generated UI components based on XML configurations posed performance challenges, especially for complex forms.",
          solution:
            "We implemented a caching system for parsed configurations and used React.memo and useMemo hooks to optimize rendering performance. We also implemented code splitting to ensure only the necessary components were loaded for each partner.",
        },
      ],
    },
  ]

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div ref={ref} initial="hidden" animate={isMounted && isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving abilities.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="group">
                <Card className="h-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    {isMounted && (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" onClick={() => handleOpenModal(project)}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}

