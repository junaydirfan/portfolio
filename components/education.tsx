"use client"

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string
  coursework?: string[]
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science, Computer Science",
    institution: "Bishop's University",
    location: "Sherbrooke, QC",
    period: "Sep 2023 – Apr 2025",
    gpa: "89.79%",
    coursework: [
      "Advanced Algorithms",
      "Software Engineering",
      "Database Systems",
      "Network Security",
      "Distributed Systems",
      "Big Data Analytics",
    ],
  },
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "COMSATS University Islamabad",
    location: "Islamabad, PK",
    period: "Sep 2018 – Aug 2022",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Design",
      "Computer Networks",
      "OOP",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            // 04. education
          </div>
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            Academic Background
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Graduate and undergraduate foundations in computer science theory, systems, and security.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-zinc-400">
                    {edu.institution} <span className="text-zinc-600">·</span> {edu.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                  {edu.gpa && (
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      GPA: {edu.gpa}
                    </span>
                  )}
                  <span>{edu.period}</span>
                </div>
              </div>

              {edu.coursework && (
                <div className="pt-2">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                    Key Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
