import type { Metadata } from "next"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Infrastructure from "@/components/infrastructure"

export const metadata: Metadata = {
  title: "junaid irfan | web & cloud developer",
  description:
    "portfolio of junaid irfan, a software developer specializing in web development, cloud, and UI/UX design.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Infrastructure />
      <Contact />
      <Footer />
    </main>
  )
}