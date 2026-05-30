import type { Metadata } from "next"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Infrastructure from "@/components/infrastructure"

export const metadata: Metadata = {
  title: "junaid's site",
  description:
    "portfolio of junaid irfan, a software developer specializing in web development, cloud, and UI/UX design.",
}

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Infrastructure />
      <Contact />
      <Footer />
    </main>
  )
}
