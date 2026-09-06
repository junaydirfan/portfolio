"use client"

import { TechIcon } from "@/components/tech-icon"

interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: "FDM Group",
    role: "DevSecOps Engineer & Scrum Master",
    period: "July 2026 – Present",
    location: "Toronto, ON",
    bullets: [
      "Acted as Scrum Master for a cross-functional engineering team, facilitating Agile ceremonies (sprint planning, daily stand-ups, reviews, retrospectives) to optimize sprint velocity.",
      "Designed and implemented an AI-enabled IT Operations platform leveraging SRE, DevSecOps, Platform Engineering, Kubernetes, and cloud-native observability to boost reliability and operational efficiency.",
      "Integrated AI services to provide context-aware operational guidance using historical incident telemetry and enterprise documentation.",
      "Integrated MCP (Model Context Protocol) services to securely connect AI agents with internal operational tools and systems.",
      "Leveraged Dynatrace AI capabilities to automate event correlation and root cause analysis across enterprise environments.",
    ],
    tags: ["DevSecOps", "Kubernetes", "Dynatrace", "AI / MCP", "SRE", "Docker", "CI/CD", "Azure", "AWS"],
  },
  {
    company: "FDM Group",
    role: "IT Operations Consultant",
    period: "Apr 2026 – Present",
    location: "Toronto, ON",
    bullets: [
      "Utilized Agile methodologies and IT Service Management (ITSM) in ServiceNow for Change requests, Incident resolution, Knowledge Management, and Problem management.",
      "Automated operational workflows with Unix/Linux shell scripting; provisioned and managed cloud resources across AWS and GCP.",
      "Administered MySQL and Oracle SQL databases, executing queries, backups, user management, and performance monitoring.",
      "Automated infrastructure provisioning using Terraform and containerized services with Docker for consistent multi-environment deployments.",
      "Deployed and managed applications on Kubernetes and automated build/test/deployment pipelines with Jenkins.",
      "Built observability and monitoring layers using Dynatrace connected with GKE and AKS clusters.",
    ],
    tags: ["ServiceNow", "Unix/Linux", "Terraform", "Docker", "Kubernetes", "AKS", "AWS", "GCP", "Jenkins", "Dynatrace"],
  },
  {
    company: "Adventure Triangle",
    role: "DevOps Intern",
    period: "Jan 2026 – Apr 2026",
    location: "Toronto, ON",
    bullets: [
      "Managed and scaled cloud infrastructure on AWS (EC2, S3, RDS), ensuring 99.9% application uptime.",
      "Built and optimized CI/CD pipelines using GitHub Actions to automate testing and zero-downtime deployment for microservices.",
      "Containerized legacy applications using Docker, reducing deployment overhead and environment drift.",
      "Monitored system health with CloudWatch and integrated automated alerts for proactive incident response.",
    ],
    tags: ["AWS", "Docker", "GitHub Actions", "CI/CD", "CloudWatch"],
  },
  {
    company: "Bishop’s University SRC",
    role: "Webmaster",
    period: "Sep 2023 – Apr 2024",
    location: "Sherbrooke, QC",
    bullets: [
      "Developed and maintained responsive web applications, increasing user engagement by 30%.",
      "Designed and implemented modern UI interfaces in React and Next.js aligned with university branding guidelines.",
      "Identified and eliminated performance bottlenecks and participated in Agile sprints to ship updates on schedule.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Bytewise",
    role: "Software Developer",
    period: "Sep 2022 – Aug 2023",
    location: "Remote",
    bullets: [
      "Engineered full-stack applications using MEAN/MERN stacks with TypeScript, handling 1,000+ daily API requests.",
      "Developed RESTful APIs using Node.js and Java Spring Boot; optimized MongoDB queries to reduce response times by 40%.",
      "Implemented automated unit and integration tests using Jest, achieving 85% test coverage.",
    ],
    tags: ["TypeScript", "Node.js", "Java Spring Boot", "MongoDB", "React", "Jest"],
  },
  {
    company: "Self-Employed",
    role: "Freelance Web Designer & Developer",
    period: "Nov 2018 – Sep 2023",
    location: "Global",
    bullets: [
      "Delivered 25+ full-stack CMS websites for international clients with bespoke design systems.",
      "Created UI/UX wireframes, interactive frontend components, and motion graphics.",
      "Integrated third-party APIs and payment processors to automate business workflows.",
    ],
    tags: ["Web Design", "UI/UX", "Figma", "CMS", "API Integrations"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            // Experience
          </h2>
        </div>

        {/* Experience List - Clean, line-free modern layout */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <article
              key={`${exp.company}-${exp.role}-${idx}`}
              className="flex flex-col gap-3"
            >
              {/* Title and Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-zinc-400">
                    {exp.company} <span className="text-zinc-600">//</span> {exp.location}
                  </div>
                </div>
                <div className="font-mono text-xs text-zinc-500 whitespace-nowrap pt-1 sm:pt-0">
                  {exp.period}
                </div>
              </div>

              {/* Bullet Points with minimal prompt marker */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-zinc-600 select-none pt-0.5 font-mono">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800/80"
                  >
                    <TechIcon name={tag} className="h-3 w-3 text-zinc-500 shrink-0" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
