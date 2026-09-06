"use client"

import { ArrowUpRight, Mail, MapPin, Calendar } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-zinc-800/60">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            // 06. connect
          </div>
          <h2 className="font-pixel text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            I am always open to discussing new engineering opportunities, infrastructure challenges, AI platform architecture, or consulting projects.
          </p>
        </div>

        {/* Minimal Connect Links (Alex Murashko / Alessandro Agozar style) */}
        <div className="flex flex-col gap-3 font-mono text-sm">
          <div className="flex items-center justify-between border-b border-zinc-800/60 py-3">
            <span className="text-zinc-500">Email</span>
            <a
              href="mailto:hello@junaidirfan.com"
              className="inline-flex items-center gap-1 text-zinc-200 hover:text-white transition-colors"
            >
              <span>hello@junaidirfan.com</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="flex items-center justify-between border-b border-zinc-800/60 py-3">
            <span className="text-zinc-500">LinkedIn</span>
            <a
              href="https://linkedin.com/in/junaydirfan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-200 hover:text-white transition-colors"
            >
              <span>linkedin.com/in/junaydirfan</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="flex items-center justify-between border-b border-zinc-800/60 py-3">
            <span className="text-zinc-500">GitHub</span>
            <a
              href="https://github.com/junaydirfan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-200 hover:text-white transition-colors"
            >
              <span>github.com/junaydirfan</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="flex items-center justify-between py-3 text-xs text-zinc-500">
            <span>Location &amp; Timezone</span>
            <span className="text-zinc-400">Toronto, ON (UTC-4 / EST)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
