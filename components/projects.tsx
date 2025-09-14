"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy, Server, Lock, Hammer } from "lucide-react"; // Removed 'Icon as LucideIcon'
import { ProjectDetailModal } from "./project-detail-modal"
import type { ProjectType } from "@/types/project"
import {
  SiNextdotjs, SiNestjs, SiSolidity, SiC, SiReact, SiJavascript,
  SiHtml5, SiCss3, SiTypescript, SiTailwindcss, SiRadixui, SiFramer, SiPython,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiSqlite, SiDocker, SiAmazonwebservices,
  SiKubernetes, SiTerraform, SiAnsible, SiGithubactions, SiJenkins, SiGit, SiWireshark,
  SiHiveBlockchain, SiGnuprivacyguard, SiSocketdotio, SiApachekafka,
  SiWordpress, SiCodeigniter, SiMaterialdesign, SiMinutemailer, SiFontforge, SiVuedotjs, SiSvelte, SiOpenjdk,
  SiFigma, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,
  SiUnity, SiBlender
} from "react-icons/si"; // Keep necessary icon imports
import Image from "next/image";
import { useTheme } from "next-themes" // Add useTheme import

// --- Icon Mapping (from Step 1) ---
const techIconMap: Record<string, ElementType> = { // <-- Use ElementType
  'nextjs': SiNextdotjs,
  'nestjs': SiNestjs,
  'solidity': SiSolidity,
  'blockchain': SiHiveBlockchain,
  'zkp': SiGnuprivacyguard,
  'hardhat': Hammer,
  'cerbos': Lock,
  'c': SiC,
  'multithreading': SiCodeigniter,
  'socketprogramming': SiSocketdotio,
  'twophasecommit': SiGit,
  'posix': SiCodeigniter,
  'distributedsystems': SiApachekafka,
  'react': SiReact,
  'javascript': SiJavascript,
  'htmlcss': SiHtml5, // Combined key example
  'html': SiHtml5,   // Separate keys if needed
  'css': SiCss3,
  'contentmanagement': SiWordpress,
  'webdevelopment': SiCodeigniter,
  'typescript': SiTypescript,
  'tailwindcss': SiTailwindcss,
  'radixui': SiRadixui,
  'responsivedesign': SiMaterialdesign,
  'framermotion': SiFramer,
  'python': SiPython,
  'java': SiOpenjdk,
  'vuejs': SiVuedotjs,
  'svelte': SiSvelte,
  'postgresql': SiPostgresql,
  'mongodb': SiMongodb,
  'mysql': SiMysql,
  'redis': SiRedis,
  'sqlite': SiSqlite,
  'docker': SiDocker,
  'aws': SiAmazonwebservices,
  'proxmox': Server,
  'kubernetes': SiKubernetes,
  'terraform': SiTerraform,
  'ansible': SiAnsible,
  'githubactions': SiGithubactions,
  'jenkins': SiJenkins,
  'git': SiGit,
  'wireshark': SiWireshark,
  'emailjs': SiMinutemailer,
  'geistfont': SiFontforge,
  'figma': SiFigma,
  'aftereffects': SiAdobeaftereffects,
  'photoshop': SiAdobephotoshop,
  'illustrator': SiAdobeillustrator,
  'premierepro': SiAdobepremierepro,
  'unity': SiUnity,
  'blender': SiBlender,
};

const getTechIcon = (tag: string): ElementType | null => { // <-- Use ElementType
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techIconMap[normalizedTag] || null;
};
// -----------------------------------


export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme() // Add theme detection

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
      transition: { duration: 0.6, ease: "easeOut" as const }, // Added ease
    },
  }

  // --- Project Data (Keep your existing data here) ---
  const projects: ProjectType[] = [
    {
      id: "smartballot",
      title: "smartballot: blockchain voting system",
      shortDescription:
        "A modern, blockchain-based voting platform ensuring security, transparency, accessibility, and privacy in electoral processes.",
      fullDescription:
        "SmartBallot is a revolutionary blockchain-based voting system that achieved Runner-Up in the Eviden & Bishop's University SecureVote Hackathon 2024. It leverages modern cryptographic and blockchain tools to ensure vote integrity, voter anonymity, and system transparency while keeping the user experience simple and intuitive. The platform is designed to be secure, accessible, scalable, anonymous, and compliant with electoral regulations.",
      image: "/images/smartballot.jpeg?height=400&width=600",
      tags: ["Next.js", "NestJS", "Solidity", "Blockchain", "ZKP", "Hardhat", "Cerbos"],
      link: "https://github.com/junaydirfan/smartballot",
      github: "https://github.com/junaydirfan/smartballot",
      gallery: [], challenges: [], keyFeatures: [], technicalDetails: [], architecture: ""
    },
    {
      id: "bulletin-board",
      title: "bulletin board server",
      shortDescription:
        "A multi-threaded bulletin board server implemented in C that allows clients to write and read messages while ensuring data consistency across multiple instances.",
      fullDescription:
        "The Bulletin Board Server (bbserver) is a high-performance, multi-threaded server application designed to handle concurrent message posting and reading. It implements advanced synchronization techniques to ensure data integrity while maximizing throughput for multiple simultaneous users. The project provides a practical example of distributed systems and concurrent programming, with features like thread pools, readers-writers locks, and the two-phase commit protocol for distributed data synchronization.",
      image: "/images/bbserv.jpeg?height=400&width=600",
      tags: ["C", "Multi-threading", "Socket Programming", "Two-Phase Commit", "POSIX", "Distributed Systems"],
      link: "https://github.com/junaydirfan/bbserver",
      github: "https://github.com/junaydirfan/bbserver",
      gallery: [], challenges: [], keyFeatures: [], technicalDetails: [], architecture: ""
    },
    {
      id: "busrc-website",
      title: "busrc website",
      shortDescription:
        "Served as webmaster for the Bishop's University SRC Website, managing content updates, site maintenance, and implementing new features.",
      fullDescription:
        "As the webmaster for the Bishop's University Student Representative Council (SRC) Website, I was responsible for maintaining and updating the site to ensure it effectively served the student body. This role involved collaborating with various teams to incorporate new content, revamping sections of the site, and implementing new features to enhance user experience. I managed the day-to-day operations of the website, ensuring it remained a reliable resource for students seeking information about campus events, services, and opportunities.",
      image: "/images/busrc1.png?height=400&width=600",
      tags: ["React", "JavaScript", "HTML/CSS", "Content Management", "Web Development"],
      link: "https://busrc.com/",
      github: "#",
      gallery: [], challenges: [], keyFeatures: [], technicalDetails: [], architecture: ""
    },
    {
      id: "socialsight",
      title: "socialsight",
      shortDescription:
        "A modern web application that allows users to preview how their images will appear across different social media platforms.",
      fullDescription:
        "SocialSight is a modern web application that allows users to preview how their images will appear across different social media platforms. Built with Next.js and TypeScript, it provides a sleek, responsive interface with dark mode support. The application enables users to upload images and see how they would look on various social media platforms like YouTube, Facebook, Instagram, Twitter, and Reddit, helping them optimize their content for each platform.",
      image: "/images/socialsight.jpg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Responsive Design"],
      link: "https://v0-next-js-social-sight-app.vercel.app/",
      github: "https://github.com/junaydirfan/SocialSight",
      gallery: [], challenges: [], keyFeatures: [], technicalDetails: [], architecture: ""
    },
    {
      id: "this-website",
      title: "this site",
      shortDescription:
        "This website is a showcase of my technical skills and creative problem-solving abilities. It's so meta, it's recursively describing itself!",
      fullDescription:
        "This website is a showcase of my technical skills and creative problem-solving abilities. It's so meta, it's recursively describing itself! Like a function that calls itself, this portfolio keeps going deeper into its own description. A true example of recursion in action - the website that describes the website that describes the website... Built with Next.js 15 and Tailwind CSS, this modern, responsive portfolio website features static site generation for optimal performance, component-based architecture for maintainability, and smooth animations powered by Framer Motion.",
      image: "/images/thisite.jpg?height=400&width=600",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Radix UI", "EmailJS"],
      link: "https://portfolio.10poundingpotatoes.org",
      github: "https://github.com/junaydirfan/portfolio",
      gallery: [], challenges: [], keyFeatures: [], technicalDetails: [], architecture: ""
    },
    {
      id: "design-showcase",
      title: "design stuff",
      shortDescription:
        "Explore my creative work in motion graphics, graphic design, and cinematography. Available for freelance projects and full-time opportunities.",
      fullDescription:
        "I specialize in creating engaging motion graphics, stunning visual designs, and compelling cinematography. My work spans across various mediums including logo animations, brand identity design, and video production. With a keen eye for detail and a passion for storytelling, I help brands and individuals bring their vision to life through creative design solutions.",
      image: "/images/designstuff.png?height=400&width=600",
      tags: ["figma", "aftereffects", "photoshop", "illustrator", "premierepro", "unity", "blender"],
      link: "https://www.behance.net/junaydirfan",
      github: "https://www.fiverr.com/junaydirfan95",
      keyFeatures: [
        "Professional motion graphics and animations",
        "Brand identity and logo design",
        "Video editing and production",
        "Social media content creation",
        "Creative direction and consultation"
      ],
      technicalDetails: [
        "Adobe Creative Suite (After Effects, Photoshop, Illustrator, Premiere Pro)",
        "Motion graphics and animation techniques",
        "Color grading and visual effects",
        "Typography and layout design",
        "Video production and post-production"
      ]
    },
  ]
  // -------------------------------------------------


  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto'; // Restore background scroll
  }

  // Add effect to handle potential overflow issues if modal unmounts unexpectedly
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is restored on unmount
    };
  }, []);

  // Helper function to get the appropriate image based on theme
  const getImageSource = (imagePath: string) => {
    if (!imagePath) return "/placeholder.svg";
    
    // If we're in dark mode and the image has an extension
    if (theme === 'dark' && imagePath.includes('.')) {
      const [path, ext] = imagePath.split('.');
      return `${path}-darkmode.${ext}`;
    }
    
    return imagePath;
  };

  return (
    // Use background color consistent with theme
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto"> {/* Increased max-width */}
        <motion.div
          ref={ref}
          initial="hidden"
          // Animate only when mounted and in view
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                featured projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              a showcase of projects demonstrating key skills and problem-solving approaches.
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8" // Kept 2 cols, adjust gap
            variants={containerVariants} // Stagger children within the grid
           >
            {projects.map((project) => (
              // Animate each card item
              <motion.div key={project.id} variants={itemVariants} className="group flex"> {/* Added flex for equal height cards */}
                {/* Card Styling */}
                <Card className="h-full w-full flex flex-col overflow-hidden border border-border/50 bg-card shadow-md hover:shadow-lg hover:border-border/80 transition-all duration-300"> {/* Subtle hover, ensure full height */}
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-video border-b border-border/50">
                    {isMounted ? (
                      <Image
                        src={getImageSource(project.image || "/placeholder.svg")}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted animate-pulse"></div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-grow p-5"> {/* Use flex-grow for content */}
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-xl mb-1">{project.title.toLowerCase()}</CardTitle>
                       {/* Award/Highlight */}
                       {project.id === "smartballot" && (
                        <div className="flex items-center gap-1.5 text-xs text-amber-600 mb-2">
                          <Trophy className="h-3.5 w-3.5" />
                          <span className="font-medium">securevote hackathon 2024 runner-up</span>
                        </div>
                      )}
                      <CardDescription className="text-sm leading-relaxed">
                          {project.shortDescription.toLowerCase()}
                      </CardDescription>
                    </CardHeader>

                    {/* --- Tech Icons Section --- */}
                    <CardContent className="p-0 mt-auto pt-4"> {/* Push to bottom */}
                       <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">technologies used</h4>
                       <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                         {project.tags.map((tag) => {
                           const IconComponent = getTechIcon(tag);
                           if (IconComponent) {
                             return (
                               <div key={tag} title={tag} className="relative flex items-center justify-center"> {/* Tooltip via title */}
                                 <IconComponent className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground/80" />
                                 {/* Tooltip Component (optional, requires library like Radix)
                                 <TooltipProvider>
                                   <Tooltip>
                                     <TooltipTrigger asChild><span></span></TooltipTrigger>
                                     <TooltipContent><p>{tag}</p></TooltipContent>
                                   </Tooltip>
                                 </TooltipProvider>
                                 */}
                               </div>
                             );
                           }
                           // Optional Fallback for tags without icons:
                           // return <span key={tag} className="text-xs px-1.5 py-0.5 bg-muted rounded">{tag}</span>;
                           return null; // Or return null to show nothing
                         })}
                       </div>
                    </CardContent>
                    {/* ------------------------- */}
                  </div>


                  {/* Footer with Buttons */}
                  <CardFooter className="p-5 border-t border-border/50 mt-auto bg-muted/30"> {/* Ensure footer is at bottom */}
                     <div className="flex justify-between w-full items-center">
                        {/* Github Button */}
                        <div>
                            {project.id === "design-showcase" ? (
                                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Fiverr Profile">
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            ) : project.github && project.github !== "#" ? (
                                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                                        <Github className="h-4 w-4" />
                                    </a>
                                </Button>
                            ) : (
                                <div className="w-8 h-8"></div>
                            )}
                        </div>
                        {/* View Project / Live Demo Button */}
                        {project.id === "design-showcase" ? (
                            <Button variant="outline" size="sm" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Behance Portfolio">
                                    view portfolio
                                    <ExternalLink className="ml-2 h-3 w-3" />
                                </a>
                            </Button>
                        ) : (
                            <Button variant="outline" size="sm" onClick={() => handleOpenModal(project)}>
                                details
                                <ExternalLink className="ml-2 h-3 w-3" />
                            </Button>
                        )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal remains the same, but will use the updated getTechIcon function */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        getTechIcon={getTechIcon} // Pass the helper function to the modal
      />
    </section>
  )
}