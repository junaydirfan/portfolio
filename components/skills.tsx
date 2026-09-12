"use client"

import { TechIcon } from "@/components/tech-icon"

interface SkillGroup {
  category: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "DevOps & Cloud Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Azure DevOps",
      "Azure",
      "GCP",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "OpenShift",
      "Ansible",
      "SonarQube",
    ],
  },
  {
    category: "Backend & Systems Engineering",
    skills: [
      "Node.js",
      "Express.js",
      "Java Spring Boot",
      "Python",
      "Flask",
      "FastAPI",
      "NestJS",
      "RESTful APIs",
      "Microservices",
      "GraphQL",
      "POSIX / C",
    ],
  },
  {
    category: "AI & Platform Engineering",
    skills: [
      "MCP (Model Context Protocol)",
      "Multi-Agent Systems",
      "LLM Integration",
      "RAG",
      "n8n Automation",
      "Azure AI Foundry",
      "Ollama",
      "HuggingFace",
      "Prompt Engineering",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Angular",
      "HTML5 / CSS3",
      "Responsive UI",
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "SQLite",
      "Oracle SQL",
      "Neon Postgres",
      "Drizzle ORM",
    ],
  },
  {
    category: "Observability, Security & Tooling",
    skills: [
      "Dynatrace AI",
      "Prometheus",
      "Grafana",
      "PostHog",
      "Proxmox VE",
      "NetBird",
      "Tailscale",
      "Nginx",
      "ServiceNow",
      "Microsoft Planner",
      "Postman",
      "Kibana",
      "Figma",
      "Agile / Scrum",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            // Skills
          </h2>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 rounded-lg border border-zinc-800/70 bg-zinc-900/20 p-5"
            >
              <h3 className="font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    <TechIcon
                      name={skill}
                      className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-200 shrink-0 transition-colors"
                    />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
