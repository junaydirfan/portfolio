"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy, Server, Lock, Hammer, BarChart3 } from "lucide-react"; // Removed 'Icon as LucideIcon'
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
  SiUnity, SiBlender, SiGithubpages
} from "react-icons/si"; // Keep necessary icon imports
import Image from "next/image";
import { useTheme } from "next-themes" // Add useTheme import

// Custom GSAP Icon Component - Official GSAP Logo
const SiGsap = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 82 30"
    fill="currentColor"
    {...props}
  >
    <path fill="currentColor" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
    <path fill="currentColor" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
    <path fill="currentColor" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
    <path fill="currentColor" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
  </svg>
)

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
  'gsap': SiGsap,
  'githubpages': SiGithubpages,
  'recharts': BarChart3,
  'hooks': Hammer,
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
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const }, // Added ease
    },
  }

  // --- Project Data (Keep your existing data here) ---
  const projects: ProjectType[] = [
    {
      id: "campusthrive",
      title: "campusthrive: student wellness tracker",
      shortDescription:
        "A comprehensive, privacy-focused student wellness tracking web application built with Next.js, TypeScript, and Tailwind CSS. CampusThrive prioritizes student privacy by storing all data locally in the browser's localStorage.",
      fullDescription:
        "CampusThrive is a comprehensive, privacy-focused student wellness tracking web application that prioritizes student privacy by storing all data locally in the browser's localStorage. The application features 4-dimensional mood tracking (Valence, Energy, Focus, Stress), intelligent scoring systems with 14-day baseline comparison, AI-powered coaching with 50+ contextual tips, and advanced analytics including trends dashboard, success compass, and power hours heatmap. Built as a Progressive Web App with complete offline capability, CampusThrive ensures no personal information is sent to external servers while providing powerful insights into student wellness patterns.",
      image: "/vercel.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PWA", "Privacy-First"],
      link: "#",
      github: "#",
      keyFeatures: [
        "🚧 Project in development - features being implemented",
        "Privacy-first architecture with 100% local storage",
        "4-Dimensional mood tracking system (planned)",
        "AI-powered coaching with contextual tips (planned)",
        "Advanced analytics dashboard (planned)",
        "Progressive Web App with offline capability (planned)"
      ],
      technicalDetails: [
        "🚧 Currently in development phase",
        "Next.js 15+ with App Router and TypeScript",
        "Tailwind CSS with custom design system",
        "Recharts for data visualizations (planned)",
        "Custom React hooks for state management",
        "PWA support and responsive design (planned)"
      ],
      challenges: [],
      gallery: [],
      architecture: "Client-side architecture with localStorage persistence, no backend services required. All calculations and data processing happen in the browser for complete privacy and offline capability."
    },
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
      id: "tayyab-portfolio",
      title: "tayyab portfolio",
      shortDescription:
        "A clean, modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark/light theme support for a friend's professional showcase.",
      fullDescription:
        "A minimalist portfolio website created for a friend, showcasing their professional experience as a Senior Software Engineer. The site features a clean, modern design with strategic use of whitespace and the Geist font. Built with Next.js 15 and TypeScript, it includes responsive layout, seamless dark/light mode switching, and smooth scroll-triggered animations powered by GSAP. The website is deployed on GitHub Pages and demonstrates expertise in modern web development practices.",
      image: "/images/tayyab.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "GSAP", "GitHub Pages", "Tailwind CSS"],
      link: "https://junaydirfan.github.io/tayyab-portfolio/",
      github: "https://github.com/junaydirfan/tayyab-portfolio",
      keyFeatures: [
        "Minimalist design with clean typography",
        "Responsive mobile-first layout",
        "Seamless dark/light theme switching",
        "Smooth scroll-triggered animations",
        "Professional portfolio showcase",
        "GitHub Pages deployment"
      ],
      technicalDetails: [
        "Next.js 15 with TypeScript for type safety",
        "GSAP for smooth animations and transitions",
        "Tailwind CSS for responsive styling",
        "Geist font for modern typography",
        "GitHub Pages for static site hosting",
        "Component-based architecture"
      ]
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
    
    // Skip dark mode variants for certain images (logos, icons, etc.)
    const skipDarkModeImages = ['/next.svg', '/vercel.svg', '/window.svg', '/globe.svg', '/file.svg'];
    if (skipDarkModeImages.some(img => imagePath.includes(img))) {
      return imagePath;
    }
    
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
                        className={`transition-transform duration-300 group-hover:scale-105 ${
                          project.id === "campusthrive" 
                            ? `object-contain p-12 bg-muted/20 ${theme === 'light' ? 'brightness-0' : ''}` 
                            : "object-cover"
                        }`}
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
                        ) : project.id === "campusthrive" ? (
                            <Button variant="outline" size="sm" disabled className="opacity-60">
                                🚧 in progress
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