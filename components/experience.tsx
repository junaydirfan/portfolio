"use client"

// Import ElementType from React
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ElementType } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Plug, ArrowRightLeft, Briefcase, Calendar, Clock, Building2, MapPin, Award, CheckCircle, Bot, Sparkles, Activity, ShieldCheck } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiReact,
  SiWordpress,
  SiFigma,
  SiPostman,
  SiMongodb,
  SiTypescript,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiRedhat,
  SiDynatrace,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGooglecloud,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

// Custom ServiceNow Icon SVG
const SiServicenow = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.14 2.1 7.79 5.31 9.94l2.42-3.13C5.69 17.37 4.5 14.83 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5c0 2.83-1.19 5.37-3.23 6.81l2.42 3.13C21.9 19.79 24 16.14 24 12 0-6.63-5.37-12-12-12zm-3.5 12c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5z" />
  </svg>
);

const techIconMap: Record<string, ElementType> = {
  'nextjs': SiNextdotjs,
  'tailwindcss': SiTailwindcss,
  'python': SiPython,
  'react': SiReact,
  'typescript': SiTypescript,
  'mernstack': SiReact,
  'sql': Database,
  'uidesign': SiFigma,
  'systemintegration': Plug,
  'datapipelines': ArrowRightLeft,
  'etl': Database,
  'apiintegration': SiPostman,
  'aws': FaAws,
  'ec2': FaAws,
  's3': FaAws,
  'rds': FaAws,
  'cloudwatch': FaAws,
  'docker': SiDocker,
  'githubactions': SiGithubactions,
  'cicd': SiGithubactions,
  'linux': SiLinux,
  'unixlinux': SiLinux,
  'unix': SiLinux,
  'redhat': SiRedhat,
  'wordpress': SiWordpress,
  'photoshop': TbBrandAdobePhotoshop,
  'figma': SiFigma,
  'postman': SiPostman,
  'mongodb': SiMongodb,
  'dynatrace': SiDynatrace,
  'azure': VscAzure,
  'aks': VscAzure,
  'kubernetes': SiKubernetes,
  'terraform': SiTerraform,
  'jenkins': SiJenkins,
  'gcp': SiGooglecloud,
  'googlecloud': SiGooglecloud,
  'servicenow': SiServicenow,
  'ai': SiOpenai,
  'openai': SiOpenai,
  'mcp': Bot,
  'devsecops': ShieldCheck,
  'sre': Activity,
  'observability': Activity,
};

const techColorMap: Record<string, string> = {
  'nextjs': '#ffffff',
  'tailwindcss': '#06b6d4',
  'python': '#3776ab',
  'react': '#61dafb',
  'typescript': '#3178c6',
  'mernstack': '#61dafb',
  'sql': '#336791',
  'uidesign': '#f24e1e',
  'systemintegration': '#a78bfa',
  'datapipelines': '#38bdf8',
  'etl': '#336791',
  'apiintegration': '#ef5b25',
  'aws': '#ff9900',
  'ec2': '#ff9900',
  's3': '#ff9900',
  'rds': '#ff9900',
  'cloudwatch': '#ff9900',
  'docker': '#2496ed',
  'githubactions': '#2088ff',
  'cicd': '#2088ff',
  'linux': '#fcc624',
  'unixlinux': '#fcc624',
  'unix': '#fcc624',
  'redhat': '#ee0000',
  'wordpress': '#21759b',
  'photoshop': '#31a8ff',
  'figma': '#f24e1e',
  'postman': '#ef5b25',
  'mongodb': '#47a248',
  'dynatrace': '#1496ff',
  'azure': '#0078d4',
  'aks': '#0078d4',
  'kubernetes': '#326ce5',
  'terraform': '#844fba',
  'jenkins': '#d33833',
  'gcp': '#4285f4',
  'googlecloud': '#4285f4',
  'servicenow': '#81b5a1',
  'ai': '#10a37f',
  'openai': '#10a37f',
  'mcp': '#a855f7',
  'devsecops': '#22c55e',
  'sre': '#22c55e',
  'observability': '#1496ff',
};

const getTechIcon = (tag: string): ElementType | null => {
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techIconMap[normalizedTag] || null;
};

const getTechColor = (tag: string): string => {
  const normalizedTag = tag.toLowerCase().replace(/[\s./-]/g, '');
  return techColorMap[normalizedTag] || 'currentColor';
};

import { FloatingIconsBackground } from "./floating-icons-background"

interface RoleItem {
  title: string
  employmentType?: string
  period: string
  duration?: string
  mode?: string
  description: string[]
  skills: string[]
}

interface ExperienceItem {
  company: string
  location?: string
  period?: string
  duration?: string
  title?: string
  employmentType?: string
  mode?: string
  description?: string[]
  skills?: string[]
  roles?: RoleItem[]
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  // Experience Data
  const experiences: ExperienceItem[] = [
    {
      company: "fdm group",
      location: "toronto, on",
      roles: [
        {
          title: "devsecops engineer",
          employmentType: "Permanent Full-time",
          period: "jul 2026 - present",
          duration: "2 mos",
          mode: "hybrid",
          description: [
            "acted as scrum master for a cross-functional engineering team, facilitating agile ceremonies (sprint planning, daily stand-ups, sprint reviews, and retrospectives) to drive continuous improvement and optimize sprint velocity",
            "designed and implemented a modern ai-enabled it operations platform leveraging sre, devsecops, platform engineering, kubernetes, cloud-native technologies, observability, and automation to improve reliability, security, scalability, and operational efficiency across enterprise environments",
            "integrated ai services to provide context-aware operational guidance using historical incidents and documentation",
            "integrated mcp (model context protocol) services to connect ai agents with operational systems and tooling",
            "collaborated with development and operations teams to ensure secure application delivery practices",
            "leveraged dynatrace ai capabilities to automate event correlation and root cause analysis",
          ],
          skills: ["DevSecOps", "SRE", "Kubernetes", "Dynatrace", "AI", "MCP", "Docker", "CI/CD", "Linux", "Azure", "AWS"],
        },
        {
          title: "it operations consultant",
          employmentType: "Contract Full-time",
          period: "apr 2026 - present",
          duration: "5 mos",
          mode: "remote",
          description: [
            "utilized agile methodologies (scrum, kanban etc) and it service management practices in servicenow to create change requests, resolve incidents, create knowledge articles for knowledge management and convert incidents to problems",
            "utilized commands and shell scripting to automate tasks, and to administer and maintain reliability of unix/linux systems",
            "engineered advanced sql queries incorporating complex joins and multi-row subqueries—to optimize data extraction and operational analysis",
            "architected and deployed containerized environments utilizing docker and kubernetes, including provisioning an azure kubernetes service (aks) project with robust load balancing for high-availability workloads",
            "provisioned and managed scalable cloud resources on aws utilizing terraform to standardize and automate environment deployments",
            "designed continuous integration and deployment pipelines using jenkins, github actions, and gcp; integrated github webhooks to streamline automated delivery workflows",
            "established system observability frameworks leveraging gcp logging to track application health, accelerate troubleshooting, and maintain service uptime",
          ],
          skills: ["ServiceNow", "Unix/Linux", "SQL", "Docker", "Kubernetes", "AKS", "AWS", "Terraform", "Jenkins", "GitHub Actions", "GCP"],
        },
      ],
    },
    {
      title: "devops intern",
      company: "adventure triangle",
      location: "toronto, on",
      period: "january 2026 - april 2026",
      duration: "4 mo",
      description: [
        "leveraged aws (ec2, s3, rds) to manage and scale cloud infrastructure, ensuring 99.9% application uptime",
        "built and optimized ci/cd pipelines using github actions to automate testing and deployment for microservices",
        "containerized legacy applications using docker, reducing deployment overhead and improving environment consistency across development and staging",
        "monitored system health and performance using cloudwatch and integrated automated alerts for proactive incident response",
      ],
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "CloudWatch"],
    },
    {
      title: "webmaster",
      company: "bishop's university",
      location: "sherbrooke, qc",
      period: "september 2023 - april 2024",
      duration: "1 yr",
      description: [
        "led management and maintainance of my university's SRC website",
        "developed and maintained web application features",
        "implemented custom UI components aligned with university brand guidelines",
        "optimized website performance and accessibility for better user experience",
        "collaborated with departments to integrate events and organized systems",
        "solved complex integration challenges by designing and implementing custom solutions connecting frontend interfaces with APIs",
        "collaborated closely with non-technical stakeholders from departments, clearly communicating technical details and solutions to ensure alignment with requirements",
      ],
      skills: ["Next.js", "Tailwind CSS", "SQL", "UI Design", "System Integration", "WordPress", "Photoshop", "Figma"],
    },
    {
      title: "software developer",
      company: "bytewise",
      location: "remote, pk",
      period: "september 2022 - august 2023",
      duration: "1 yr",
      description: [
        "developed full-stack features using the MERN stack with a strong focus on TypeScript for type-safe, maintainable code",
        "designed and integrated RESTful APIs, tested endpoints with Postman, and optimized data handling in MongoDB for performance and scalability",
        "collaborated with cross-functional teams to deliver web applications on schedule, translating requirements into reliable technical implementations",
        "improved user experience by building reusable React components and implementing state management solutions",
      ],
      skills: ["React", "TypeScript", "SQL", "Data Pipelines", "ETL", "API Integration", "Postman", "MongoDB"],
    },
  ]

  const experienceIcons = [
    { icon: Briefcase, color: "#a8b9cc" },
    { icon: Calendar, color: "#a8b9cc" },
    { icon: Clock, color: "#a8b9cc" },
    { icon: Building2, color: "#a8b9cc" },
    { icon: MapPin, color: "#a8b9cc" },
    { icon: Award, color: "#a8b9cc" },
    { icon: CheckCircle, color: "#a8b9cc" },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <FloatingIconsBackground icons={experienceIcons} count={20} accentColor="#94a3b8" />
      <div className="container px-8 md:px-16 lg:px-24 max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">
              experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              my journey in the tech industry, highlighting key roles and accomplishments
            </p>
          </motion.div>

          <motion.div className="space-y-6 md:space-y-8" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                  {/* Multi-role Company Card */}
                  {exp.roles ? (
                    <>
                      <CardHeader className="p-6 md:p-8 pb-5 border-b border-border/50 bg-secondary/5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0 shadow-inner">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                                {exp.company}
                              </CardTitle>
                              {exp.location && (
                                <CardDescription className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                  <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                  {exp.location}
                                </CardDescription>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6 md:p-8 pt-8">
                        <div className="relative">
                          {exp.roles.map((role, rIndex) => {
                            const isCurrent = rIndex === 0;
                            const isLast = rIndex === exp.roles!.length - 1;
                            return (
                              <div
                                key={rIndex}
                                className={`relative pl-8 sm:pl-10 ${!isLast ? "pb-10 sm:pb-12" : ""}`}
                              >
                                {/* Continuous connecting line between nodes */}
                                {!isLast && (
                                  <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-border to-border/50" />
                                )}

                                {/* Timeline Node */}
                                <div className="absolute left-0 top-1.5 flex items-center justify-center w-4 h-4 z-10">
                                  {isCurrent ? (
                                    <div className="relative flex items-center justify-center">
                                      <span className="absolute w-4 h-4 rounded-full bg-primary/25 animate-ping opacity-75" />
                                      <span className="relative w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-card shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
                                    </div>
                                  ) : (
                                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/60 ring-4 ring-card" />
                                  )}
                                </div>

                                <div className="space-y-4">
                                  {/* Role Title & Badges */}
                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2.5">
                                    <div>
                                      <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                                        {role.title}
                                      </h3>
                                      <div className="flex flex-wrap items-center gap-2 mt-1">
                                        {role.employmentType && (
                                          <span className="text-xs font-medium text-muted-foreground">
                                            {role.employmentType}
                                          </span>
                                        )}
                                        {role.mode && (
                                          <>
                                            <span className="text-muted-foreground/40 text-xs">•</span>
                                            <span className="text-xs font-medium text-muted-foreground capitalize">
                                              {role.mode}
                                            </span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      <Badge variant="outline" className="whitespace-nowrap text-xs font-medium border-border text-muted-foreground uppercase tracking-wider">
                                        {role.period}
                                      </Badge>
                                      {role.duration && (
                                        <Badge className="whitespace-nowrap text-xs font-semibold bg-primary/15 text-primary border-primary/20 uppercase tracking-wider">
                                          {role.duration}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>

                                  {/* Role Bullet Points */}
                                  <ul className="space-y-2.5 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                                    {role.description.map((item, i) => (
                                      <li key={i} className="flex items-start gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                                        <span className="flex-1">{item}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Role Stack */}
                                  {role.skills && role.skills.length > 0 && (
                                    <div className="border-t border-border/40 pt-4 mt-4">
                                      <p className="text-[11px] font-semibold text-muted-foreground/80 mb-2.5 uppercase tracking-wider">stack</p>
                                      <div className="flex flex-wrap items-center gap-2.5">
                                        {role.skills.map((skill) => {
                                          const IconComponent = getTechIcon(skill)
                                          if (IconComponent) {
                                            return (
                                              <div
                                                key={skill}
                                                title={skill}
                                                className="flex items-center justify-center p-1.5 rounded-md bg-secondary/25 hover:bg-secondary/50 border border-border/40 transition-colors"
                                              >
                                                <IconComponent
                                                  className="h-4 w-4 transition-all opacity-80 hover:opacity-100 hover:scale-110"
                                                  style={{ color: getTechColor(skill) }}
                                                />
                                              </div>
                                            )
                                          }
                                          return null
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    /* Single Role Card */
                    <>
                      <CardHeader className="p-6 md:p-8 pb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div>
                            <CardTitle className="text-xl md:text-2xl mb-1 font-bold">{exp.title}</CardTitle>
                            <CardDescription className="text-base font-semibold text-foreground/70">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                            {exp.location && (
                              <CardDescription className="text-sm sm:text-right text-muted-foreground sm:pr-2.0">
                                {exp.location}
                              </CardDescription>
                            )}
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="whitespace-nowrap text-xs font-medium border-border text-muted-foreground uppercase tracking-wider">
                                {exp.period}
                              </Badge>
                              {exp.duration && (
                                <Badge className="whitespace-nowrap text-xs font-semibold bg-primary/15 text-primary border-primary/20 uppercase tracking-wider">
                                  {exp.duration}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 md:p-8 pt-0">
                        {exp.description && (
                          <ul className="mb-6 space-y-2.5 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {exp.skills && exp.skills.length > 0 && (
                          <div className="border-t border-border/40 pt-4">
                            <p className="text-[11px] font-semibold text-muted-foreground/80 mb-2.5 uppercase tracking-wider">stack</p>
                            <div className="flex flex-wrap items-center gap-2.5">
                              {exp.skills.map((skill) => {
                                const IconComponent = getTechIcon(skill)
                                if (IconComponent) {
                                  return (
                                    <div
                                      key={skill}
                                      title={skill}
                                      className="flex items-center justify-center p-1.5 rounded-md bg-secondary/25 hover:bg-secondary/50 border border-border/40 transition-colors"
                                    >
                                      <IconComponent
                                        className="h-4 w-4 transition-all opacity-80 hover:opacity-100 hover:scale-110"
                                        style={{ color: getTechColor(skill) }}
                                      />
                                    </div>
                                  )
                                }
                                return null
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

