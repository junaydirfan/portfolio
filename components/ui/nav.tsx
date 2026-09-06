// components/ui/nav.tsx
"use client"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#about"
          className="text-sm font-medium tracking-tight text-zinc-200 hover:text-white transition-colors"
        >
          junaid irfan
        </a>

        <nav className="flex items-center gap-5 font-mono text-xs text-zinc-400">
          <a href="#experience" className="hover:text-white transition-colors">
            experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            contact
          </a>
        </nav>
      </div>
    </header>
  )
}
