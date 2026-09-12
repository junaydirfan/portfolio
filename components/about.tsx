"use client"

import { ArrowUpRight, MapPin } from "lucide-react"

const asciiJunaid = [
  "     ▄█ ███    █▄  ███▄▄▄▄      ▄████████  ▄█  ████████▄   ",
  "    ███ ███    ███ ███▀▀▀██▄   ███    ███ ███  ███   ▀███  ",
  "    ███ ███    ███ ███   ███   ███    ███ ███▌ ███    ███  ",
  "    ███ ███    ███ ███   ███   ███    ███ ███▌ ███    ███  ",
  "    ███ ███    ███ ███   ███ ▀███████████ ███▌ ███    ███  ",
  "    ███ ███    ███ ███   ███   ███    ███ ███  ███    ███  ",
  "    ███ ███    ███ ███   ███   ███    ███ ███  ███   ▄███  ",
  "█▄ ▄███ ████████▀   ▀█   █▀    ███    █▀  █▀   ████████▀   ",
  "▀▀▀▀▀▀                                                     ",
]

const asciiIrfan = [
  "     ▄█     ▄████████    ▄████████    ▄████████ ███▄▄▄▄   ",
  "    ███    ███    ███   ███    ███   ███    ███ ███▀▀▀██▄ ",
  "    ███▌   ███    ███   ███    █▀    ███    ███ ███   ███ ",
  "    ███▌  ▄███▄▄▄▄██▀  ▄███▄▄▄       ███    ███ ███   ███ ",
  "    ███▌ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ▀███████████ ███   ███ ",
  "    ███  ▀███████████   ███          ███    ███ ███   ███ ",
  "    ███    ███    ███   ███          ███    ███ ███   ███ ",
  "    █▀     ███    ███   ███          ███    █▀   ▀█   █▀  ",
  "           ███    ███                                     ",
]

// Convert block characters to exact vector paths once at module load
// Guarantees 100% pixel-perfect rendering across all OS/devices (Android, iOS, PC, CJK locales)
function buildAsciiSvgPath(lines: string[], startX = 0, startY = 0, cellW = 6, cellH = 10) {
  const parts: string[] = []
  lines.forEach((line, row) => {
    const y = startY + row * cellH
    for (let col = 0; col < line.length; col++) {
      const char = line[col]
      const x = startX + col * cellW
      if (char === "█") {
        parts.push(`M${x} ${y}h${cellW}v${cellH}h-${cellW}z`)
      } else if (char === "▄") {
        parts.push(`M${x} ${y + cellH / 2}h${cellW}v${cellH / 2}h-${cellW}z`)
      } else if (char === "▀") {
        parts.push(`M${x} ${y}h${cellW}v${cellH / 2}h-${cellW}z`)
      } else if (char === "▌") {
        parts.push(`M${x} ${y}h${cellW / 2}v${cellH}h-${cellW / 2}z`)
      }
    }
  })
  return parts.join("")
}

const asciiJunaidPath = buildAsciiSvgPath(asciiJunaid, 0, 0, 6, 10)
const asciiIrfanPath = buildAsciiSvgPath(asciiIrfan, 3, 98, 6, 10)

export default function About() {
  return (
    <section id="about" className="pt-20 sm:pt-28 pb-14 sm:pb-18">
      <div className="flex flex-col gap-6">
        {/* Top Centered Quick Bar & Location */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 font-mono text-xs sm:text-[13px] text-zinc-400 text-center">
          <a
            href="mailto:hello@junaidirfan.com"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>hello@junaidirfan.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://github.com/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>
          <span className="inline-flex items-center gap-1 text-zinc-400">
            <MapPin className="h-3.5 w-3.5 text-zinc-400" />
            <span>Toronto</span>
          </span>
          <a
            href="#experience"
            className="group inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span>View Experience</span>
            <span className="text-zinc-600">&darr;</span>
          </a>
        </div>

        {/* Central Terminal Window */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden">
          {/* Terminal Window Controls Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/60 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">junaid@root:~ (zsh)</span>
            <span className="text-[10px] text-zinc-500 font-mono">utf-8</span>
          </div>

          <div className="p-4 sm:p-6 space-y-5 font-mono text-xs sm:text-[13px] leading-relaxed">
            {/* Command: whoami with JUNAID IRFAN ASCII art */}
            <div className="space-y-2">
              <p className="text-zinc-400">
                <span className="text-emerald-400">junaid@root:~$</span> whoami
              </p>

              {/* Responsive & 100% Cross-Device Pixel-Perfect ASCII Art Banner */}
              <div className="flex flex-col items-center justify-center py-2 w-full text-center">
                <svg
                  viewBox="0 0 354 190"
                  className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] h-auto text-white fill-current select-none pointer-events-none"
                  shapeRendering="crispEdges"
                  role="img"
                  aria-label="JUNAID IRFAN"
                >
                  <title>JUNAID IRFAN</title>
                  <path d={asciiJunaidPath} />
                  <path d={asciiIrfanPath} />
                </svg>
                {/* Accessible text fallback for SEO and screen readers */}
                <span className="sr-only">JUNAID IRFAN</span>
              </div>

              {/* Role Title inside the terminal directly under whoami - Left-aligned */}
              <div className="w-full text-left pt-1">
                <p className="text-zinc-200 font-mono text-sm sm:text-base font-semibold">
                  <span className="text-emerald-400 mr-2">&gt;</span>
                  Full-Stack &amp; DevSecOps Engineer
                </p>
              </div>
            </div>

            {/* Command: grep expertise */}
            <div className="space-y-1.5">
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span> grep -r &quot;expertise&quot; /var/log/career.log
              </p>
              <p className="pl-3 text-zinc-300 text-xs sm:text-sm">
                TypeScript · Next.js · Python · Java · Docker · Kubernetes · Terraform · Jenkins · AWS · Azure AI Foundry · Proxmox · MCP Servers · ServiceNow
              </p>
            </div>

            {/* Command: cat /etc/tech-ecosystem.conf */}
            <div className="space-y-1.5">
              <p className="text-zinc-400">
                <span className="text-emerald-400">&gt;</span> cat /etc/tech-ecosystem.conf
              </p>
              <p className="pl-3 text-zinc-300 font-mono text-xs">
                web=true cloud=true automation=true infrastructure=true ai=true
              </p>
            </div>

            {/* Command: ./products --list */}
            <div className="space-y-1.5">
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span> ./products --list
              </p>
              <div className="pl-3 space-y-1 text-xs text-zinc-300">
                <p>&gt; <span className="text-white font-medium">Flicket</span> &mdash; enterprise operations platform with multi-agent orchestration, MCP servers, and Kubernetes CI/CD.</p>
                <p>&gt; <span className="text-white font-medium">OneApply</span> &mdash; LaTeX resume generation, management, ATS analysis, and browser-assisted applications.</p>
                <p>&gt; <span className="text-white font-medium">CampusThrive</span> &mdash; privacy-first student wellness tracker.</p>
                <p>&gt; <span className="text-white font-medium">ultimate-selfhosted-homelab</span> &mdash; documented home server stack and services.</p>
              </div>
            </div>

            {/* Live GitHub Contributions */}
            <div className="pt-3 border-t border-zinc-800/70 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span className="text-emerald-400">$</span>
                  <span>git log --activity --heatmap</span>
                </div>
                <a
                  href="https://github.com/junaydirfan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors shrink-0"
                >
                  <span className="hidden sm:inline">github.com/junaydirfan</span>
                  <span className="sm:hidden">github</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto custom-scrollbar p-2 rounded bg-black/50 border border-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/4ade80/junaydirfan"
                  alt="GitHub contribution heatmap for junaydirfan"
                  loading="lazy"
                  className="block h-auto w-full max-w-full opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
