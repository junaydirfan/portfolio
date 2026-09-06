import type { Metadata } from "next"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Junaid Irfan — Full-Stack & DevSecOps Engineer",
  description:
    "Portfolio of Junaid Irfan, Full-Stack & DevSecOps Engineer specializing in cloud infrastructure, Kubernetes, platform engineering, and AI operations.",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-8">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Footer />
    </main>
  )
}
