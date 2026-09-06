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
].join("\n")

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
].join("\n")

export default function About() {
  return (
    <section id="about" className="pt-20 sm:pt-28 pb-14 sm:pb-18">
      <div className="flex flex-col gap-6">
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

              {/* Fully visible, seamless stacked ASCII banner - Centralized */}
              <div className="flex flex-col items-center justify-center py-2 overflow-x-auto custom-scrollbar w-full text-center">
                <pre
                  style={{
                    fontFamily: "Consolas, Monaco, 'Courier New', Courier, monospace",
                    letterSpacing: "0px",
                    lineHeight: "1.05",
                  }}
                  className="text-[8px] sm:text-[10px] md:text-[11px] text-white whitespace-pre select-none inline-block text-left"
                >
                  {asciiJunaid}
                </pre>
                <pre
                  style={{
                    fontFamily: "Consolas, Monaco, 'Courier New', Courier, monospace",
                    letterSpacing: "0px",
                    lineHeight: "1.05",
                  }}
                  className="text-[8px] sm:text-[10px] md:text-[11px] text-white whitespace-pre select-none inline-block text-left mt-1"
                >
                  {asciiIrfan}
                </pre>
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
                TypeScript · React · Next.js · Docker · AWS · Proxmox · LLM APIs
              </p>
            </div>

            {/* Command: cat /etc/tech-ecosystem.conf */}
            <div className="space-y-1.5">
              <p className="text-zinc-400">
                <span className="text-emerald-400">&gt;</span> cat /etc/tech-ecosystem.conf
              </p>
              <p className="pl-3 text-zinc-300 font-mono text-xs">
                web=true cloud=true automation=true self_hosted=true
              </p>
            </div>

            {/* Command: ./products --list */}
            <div className="space-y-1.5">
              <p className="text-zinc-400">
                <span className="text-emerald-400">$</span> ./products --list
              </p>
              <div className="pl-3 space-y-1 text-xs text-zinc-300">
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
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <span>github.com/junaydirfan</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto custom-scrollbar p-2 rounded bg-black/50 border border-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/4ade80/junaydirfan"
                  alt="GitHub contribution heatmap for junaydirfan"
                  loading="lazy"
                  className="block h-auto w-full min-w-[500px] opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 font-mono text-xs sm:text-sm border-t border-zinc-800/60">
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
          <a
            href="#experience"
            className="group inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span>View Experience</span>
            <span className="text-zinc-600">&darr;</span>
          </a>
        </div>

        {/* Location line */}
        <p className="flex items-center gap-2 text-xs text-zinc-500 font-mono -mt-2">
          <MapPin className="h-3.5 w-3.5 text-zinc-400" />
          <span>Based in Toronto, ON · Authorized to work in Canada</span>
        </p>
      </div>
    </section>
  )
}
