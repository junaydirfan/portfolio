"use client"

import { ArrowUpRight, ShieldCheck } from "lucide-react"

interface CertificationItem {
  title: string
  issuer: string
  status: string
  focus: string
  url?: string
}

const certifications: CertificationItem[] = [
  {
    title: "Cybersecurity Defense Analyst Career Path",
    issuer: "Cisco Networking Academy",
    status: "Verified",
    focus: "Network defense, threat analysis, incident response, and security operations center workflows.",
    url: "https://www.credly.com/badges/7b0a661d-7f48-4660-9e21-f0583b73044b/public_url",
  },
  {
    title: "Developing Secure Software (LFD121)",
    issuer: "The Linux Foundation",
    status: "Verified",
    focus: "Secure software design, vulnerability prevention, attack surface mitigation, and defensive coding.",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/f7d5af97-0c46-4c29-abe6-348cc64a3d7c-junaid-junaid-ccefaea3-05f2-4844-bc7e-2ede2add37a7-certificate.pdf",
  },
  {
    title: "Intro to DevOps & Site Reliability Engineering (LFS162)",
    issuer: "The Linux Foundation",
    status: "Verified",
    focus: "DevOps practices, SRE principles, continuous delivery, and reliability engineering.",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/f7d5af97-0c46-4c29-abe6-348cc64a3d7c-junaid-irfan-f80f498b-c6a5-41ac-b76c-99ba5cfd2d68-certificate.pdf",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
    focus: "Resilient architectures, high-performing compute, secure applications, and cost-optimized storage.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            // 05. credentials
          </div>
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            Licenses &amp; Credentials
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Industry credentials and verified learning paths in cybersecurity, SRE, and cloud architecture.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                    {cert.issuer}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      cert.status === "Verified" ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    ● {cert.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              {cert.url && (
                <div className="pt-2 border-t border-zinc-800/60 font-mono text-xs">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
