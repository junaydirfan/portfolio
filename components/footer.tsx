"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/60 py-8 text-zinc-500 font-mono text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          // J.I. {currentYear}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@junaidirfan.com"
            className="hover:text-zinc-300 transition-colors"
          >
            email
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="https://github.com/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            github
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="https://linkedin.com/in/junaydirfan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            linkedin
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="#about"
            className="hover:text-zinc-300 transition-colors"
          >
            top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
