"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy } from "lucide-react"
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
        "A modern, blockchain-based voting platform ensuring security, transparency, accessibility, and privacy in electoral processes.",
      fullDescription:
        "SmartBallot is a revolutionary blockchain-based voting system that achieved Runner-Up in the Eviden & Bishop's University SecureVote Hackathon 2024. It leverages modern cryptographic and blockchain tools to ensure vote integrity, voter anonymity, and system transparency while keeping the user experience simple and intuitive. The platform is designed to be secure, accessible, scalable, anonymous, and compliant with electoral regulations.",
      image: "/images/smartballot.jpeg?height=400&width=600",
      tags: ["Next.js", "NestJS", "Solidity", "Blockchain", "ZKP", "Hardhat", "Cerbos"],
      link: "https://github.com/junaydirfan/smartballot",
      github: "https://github.com/junaydirfan/smartballot",
      keyFeatures: [
        "User Authentication & Admin Management with Multi-Factor Authentication",
        "Real-time Voting with blockchain integration for immutability and trust",
        "Zero Knowledge Proofs to preserve voter privacy and verify eligibility",
        "External Voter Verification with secure APIs to government databases",
        "Comprehensive Accessibility Options for all eligible voters",
        "Data Protection & Privacy with cryptographic hashing and encryption",
        "Voter Assistance features for users needing help",
        "Compliance with electoral regulations and data protection laws",
      ],
      technicalDetails: [
        "Frontend built with Next.js (App Router) for a responsive, modern UI",
        "Backend developed with NestJS + TypeORM for robust data processing",
        "Smart Contracts implemented with Hardhat and Solidity",
        "SQLite database for efficient data storage and retrieval",
        "Cerbos for Policy-Based Access Control and authorization",
        "Zero Knowledge Proofs for voter eligibility verification without revealing identity",
        "HTTPS/TLS for data in transit and at-rest encryption for security",
        "Integration with external government databases for voter verification",
      ],
      architecture:
        "SmartBallot uses a three-tier architecture with a Next.js frontend, NestJS backend, and Ethereum blockchain for data storage. The system employs Zero-Knowledge Proofs to verify voter eligibility without revealing identity, and uses Cerbos for role-based access control. The app flow includes voter sign-in through MFA and verification APIs, eligibility verification via ZKPs, ballot display, ZKP generation off-chain, vote casting on-chain anonymously, and real-time result tallying via blockchain.",
      gallery: [
        "/images/smartballot/tttt1.png?height=400&width=600",
        "/images/smartballot/tttt.png?height=400&width=600",
        "/images/smartballot/smartcontract.png?height=400&width=600",
        "/images/smartballot/backend.png?height=400&width=600",
        "/images/smartballot/appflow.png?height=400&width=600",
      ],
      challenges: [
        {
          title: "Ensuring Voter Anonymity While Maintaining Verification",
          description:
            "One of the biggest challenges was ensuring that votes remained anonymous while still verifying that each voter was eligible and only voted once.",
          solution:
            "We implemented Zero-Knowledge Proofs (ZKP) that allowed us to verify voter eligibility without revealing their identity. This cryptographic approach ensured that votes could be verified as legitimate without connecting them to specific voters. Voters generate a ZKP off-chain, which proves eligibility, and then the vote is submitted on-chain, fully anonymized.",
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
            "We designed an intuitive user interface with accessibility in mind, following WCAG guidelines. We also implemented multiple authentication methods, provided clear instructions throughout the voting process, and added a voter assistance feature that allows users to request help via an in-app button, with trusted assistant options for physical help.",
        },
        {
          title: "Data Protection and Privacy Compliance",
          description:
            "Protecting voter data while maintaining compliance with electoral regulations presented significant challenges.",
          solution:
            "We implemented a comprehensive data protection strategy that included no storage of vote-candidate relationships, cryptographic hashing (SHA-256) of voter identities, and HTTPS/TLS for data in transit plus at-rest encryption. We also ensured minimal, lawful data retrieval for identity checks and enforced one vote per eligible voter through blockchain and ZKP mechanisms.",
        },
      ],
    },
    {
      id: "bulletin-board",
      title: "Bulletin Board Server",
      shortDescription:
        "A multi-threaded bulletin board server implemented in C that allows clients to write and read messages while ensuring data consistency across multiple instances.",
      fullDescription:
        "The Bulletin Board Server (bbserver) is a high-performance, multi-threaded server application designed to handle concurrent message posting and reading. It implements advanced synchronization techniques to ensure data integrity while maximizing throughput for multiple simultaneous users. The project provides a practical example of distributed systems and concurrent programming, with features like thread pools, readers-writers locks, and the two-phase commit protocol for distributed data synchronization.",
      image: "/images/bbserv.jpeg?height=400&width=600",
      tags: ["C", "Multi-threading", "Socket Programming", "Two-Phase Commit", "POSIX", "Distributed Systems"],
      link: "https://github.com/junaydirfan/bbserver",
      github: "https://github.com/junaydirfan/bbserver",
      keyFeatures: [
        "Multi-threaded architecture with thread pool for efficient resource utilization",
        "Client-server communication via sockets for network connectivity",
        "Readers-Writers lock implementation for concurrent data access",
        "Two-phase commit protocol for distributed data synchronization",
        "Configurable server settings through configuration files",
        "Daemon mode support for background operation",
        "Debug logging for troubleshooting and monitoring",
        "Signal handling for graceful shutdown and reconfiguration",
      ],
      technicalDetails: [
        "Implemented in C with POSIX threads (pthread.h) for maximum performance",
        "Used mutex and condition variables for thread synchronization",
        "Implemented a custom thread pool to manage worker threads efficiently",
        "Designed a socket-based communication protocol for client-server interaction",
        "Implemented the two-phase commit protocol for distributed consensus",
        "Created a configuration management system for flexible deployment",
        "Developed a logging system for debugging and monitoring",
        "Implemented signal handlers for process management",
      ],
      architecture:
        "The Bulletin Board Server uses a thread pool architecture where a fixed number of worker threads process client requests from a shared queue. It implements a Readers-Writers lock to allow multiple simultaneous readers while ensuring exclusive access for writers. The server uses a socket-based communication system and supports the two-phase commit protocol for distributed operations. The system is designed with a modular approach, separating concerns between network communication, thread management, data synchronization, and configuration handling.",
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
        {
          title: "Ensuring Data Consistency Across Distributed Instances",
          description:
            "Maintaining data consistency across multiple server instances in a distributed environment was challenging, especially with network failures and partitions.",
          solution:
            "We implemented a robust two-phase commit protocol with timeout mechanisms and recovery procedures. This ensured that all server instances maintained consistent data even in the presence of network issues or server failures. We also added transaction logging to enable recovery after system crashes.",
        },
        {
          title: "Managing System Resources Efficiently",
          description:
            "The server needed to efficiently manage system resources like file handles, memory, and network connections, especially during long-running operations.",
          solution:
            "We implemented resource pooling and cleanup mechanisms to prevent resource leaks. We also added monitoring capabilities to track resource usage and implemented graceful degradation when resources became constrained. Additionally, we created a daemon mode that allowed the server to run in the background with proper process management.",
        },
      ],
    },
    {
      id: "busrc-website",
      title: "BUSRC Website",
      shortDescription:
        "Served as webmaster for the Bishop's University SRC Website, managing content updates, site maintenance, and implementing new features.",
      fullDescription:
        "As the webmaster for the Bishop's University Student Representative Council (SRC) Website, I was responsible for maintaining and updating the site to ensure it effectively served the student body. This role involved collaborating with various teams to incorporate new content, revamping sections of the site, and implementing new features to enhance user experience. I managed the day-to-day operations of the website, ensuring it remained a reliable resource for students seeking information about campus events, services, and opportunities.",
      image: "/images/busrc1.png?height=400&width=600",
      tags: ["React", "JavaScript", "HTML/CSS", "Content Management", "Web Development"],
      link: "https://busrc.com/",
      github: "#",
      keyFeatures: [
        "Managed and updated website content in collaboration with various teams",
        "Implemented new features and revamped existing sections of the site",
        "Ensured consistent branding and user experience across all pages",
        "Maintained site performance and reliability",
        "Coordinated with stakeholders to align website with organizational goals",
      ],
      technicalDetails: [
        "Managed website content and structure",
        "Implemented responsive design elements",
        "Optimized site performance and user experience",
        "Coordinated with multiple teams for content updates",
        "Maintained site security and functionality",
      ],
      architecture:
        "The BUSRC Website serves as the central digital platform for the Bishop's University Student Representative Council, providing students with access to information about campus events, services, and opportunities. As webmaster, I managed the site's content and structure, ensuring it remained an effective communication tool for the SRC.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "socialsight",
      title: "SocialSight",
      shortDescription:
        "A modern web application that allows users to preview how their images will appear across different social media platforms.",
      fullDescription:
        "SocialSight is a modern web application that allows users to preview how their images will appear across different social media platforms. Built with Next.js and TypeScript, it provides a sleek, responsive interface with dark mode support. The application enables users to upload images and see how they would look on various social media platforms like YouTube, Facebook, Instagram, Twitter, and Reddit, helping them optimize their content for each platform.",
      image: "/images/socialsight.jpg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Responsive Design"],
      link: "https://v0-next-js-social-sight-app.vercel.app/",
      github: "https://github.com/junaydirfan/SocialSight",
      keyFeatures: [
        "Image Upload with drag and drop or click to upload (PNG, JPG, GIF)",
        "Dark Mode support with theme toggle",
        "Multi-Platform Previews for YouTube, Facebook, Instagram, Twitter, and Reddit",
        "Modern UI with clean, responsive design and smooth animations",
        "Real-time Preview updates when switching between platforms",
      ],
      technicalDetails: [
        "Built with Next.js 15.3.0 for modern React development",
        "TypeScript for type safety and better developer experience",
        "Tailwind CSS for responsive, utility-first styling",
        "Radix UI components for accessible and customizable UI elements",
        "Modern architecture with component-based design",
        "Optimized for performance and user experience",
        "Responsive design that works across all device sizes",
        "Dark mode implementation with system preference detection",
      ],
      architecture:
        "SocialSight uses a modern Next.js architecture with TypeScript for type safety. The application is built with a component-based approach, utilizing Radix UI for accessible components and Tailwind CSS for styling. The core functionality revolves around image processing and preview generation, with a responsive design that adapts to different screen sizes. The application features a dark mode toggle and system preference detection for optimal user experience.",
      gallery: [
      ],
      challenges: [
        {
          title: "Handling Image Processing and Preview Generation",
          description:
            "Processing images and generating accurate previews for different social media platforms required careful consideration of aspect ratios and platform-specific requirements.",
          solution:
            "We implemented a robust image processing system that handles various image formats and sizes, with platform-specific preview templates that accurately represent how images will appear on each social media platform. This included maintaining aspect ratios and implementing responsive preview containers.",
        },
        {
          title: "Implementing Dark Mode with System Preference Detection",
          description:
            "Creating a seamless dark mode experience that respects user preferences while maintaining consistent styling across the application was challenging.",
          solution:
            "We implemented a theme system using CSS variables and Tailwind's dark mode utilities, with automatic system preference detection. This allowed for smooth transitions between themes and ensured consistent styling across all components.",
        },
        {
          title: "Optimizing Performance for Image Processing",
          description:
            "Processing and previewing multiple images simultaneously could potentially impact performance, especially on lower-end devices.",
          solution:
            "We implemented lazy loading for images and optimized the preview generation process. We also added loading states and progressive enhancement to ensure a smooth user experience even on slower connections.",
        },
      ],
    },
    {
      id: "this-website",
      title: "This Site",
      shortDescription:
        "This website is a showcase of my technical skills and creative problem-solving abilities. It's so meta, it's recursively describing itself!",
      fullDescription:
        "This website is a showcase of my technical skills and creative problem-solving abilities. It's so meta, it's recursively describing itself! Like a function that calls itself, this portfolio keeps going deeper into its own description. A true example of recursion in action - the website that describes the website that describes the website... Built with Next.js 15 and Tailwind CSS, this modern, responsive portfolio website features static site generation for optimal performance, component-based architecture for maintainability, and smooth animations powered by Framer Motion.",
      image: "/images/thisite.jpg?height=400&width=600",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Radix UI", "EmailJS", "Geist Font"],
      link: "https://portfolio.10poundingpotatoes.org",
      github: "https://github.com/junaydirfan/portfolio",
      keyFeatures: [
        "Responsive Design optimized for all device sizes",
        "Static Site Generation for fast loading times and optimal performance",
        "Component-Based Architecture for modular and maintainable code",
        "Modern UI with clean design and smooth animations",
        "SEO Optimization with pre-configured metadata",
        "Comprehensive sections: Hero, About, Skills, Infrastructure, Projects, Experience, Education, Contact",
        "Self-hosted deployment on Proxmox with Nginx and SSL",
        "GitHub Actions CI/CD pipeline for automated deployment",
      ],
      technicalDetails: [
        "Built with Next.js 15 for modern React development and static site generation",
        "Styled with Tailwind CSS for responsive, utility-first design",
        "Implemented custom UI components using Radix UI primitives",
        "Added smooth animations with Framer Motion for enhanced user experience",
        "Used Geist Font for modern typography",
        "Integrated EmailJS for form handling and contact functionality",
        "Configured Nginx for production deployment with SSL security",
        "Set up GitHub Actions workflow for continuous integration and deployment",
      ],
      architecture:
        "This portfolio website uses a modern JAMstack architecture with Next.js for static site generation. It features a component-based structure with reusable UI components built on Radix UI primitives. The site is organized into distinct sections (Hero, About, Skills, etc.) that are composed of modular components. For deployment, the site is built as a static export and served through Nginx on a self-hosted Proxmox environment, with automated deployment via GitHub Actions.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      challenges: [
        {
          title: "Creating a Self-Referential Portfolio",
          description:
            "Designing a portfolio that describes itself while maintaining clarity and avoiding infinite recursion was a unique challenge.",
          solution:
            "We embraced the meta-nature of the project by incorporating recursion-themed elements in the design and content, while ensuring the actual implementation remained clean and maintainable. This approach created an engaging user experience that highlights both technical skills and creative thinking.",
        },
        {
          title: "Optimizing Performance with Static Generation",
          description:
            "Balancing rich interactive features with optimal performance required careful consideration of what to generate statically versus what to render dynamically.",
          solution:
            "We implemented Next.js static site generation for the core content while selectively using client-side rendering for interactive elements. This hybrid approach delivered fast initial page loads while maintaining the dynamic, engaging experience we wanted to create.",
        },
        {
          title: "Implementing Smooth Animations Without Compromising Performance",
          description:
            "Adding fluid animations to enhance the user experience without impacting performance or accessibility was challenging.",
          solution:
            "We used Framer Motion with careful performance optimization, implementing techniques like reduced motion preferences, lazy loading of animations, and hardware-accelerated transforms. This approach delivered smooth, engaging animations while maintaining excellent performance across devices.",
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
                    {project.id === "smartballot" && (
                      <div className="flex items-center gap-1.5 mt-1 mb-2">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-500">SecureVote Hackathon 2024 Runner-up</span>
                      </div>
                    )}
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
                    <div>
                      {project.id !== "busrc-website" && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
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

