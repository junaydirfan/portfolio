// components/ui/theme-toggle.tsx
"use client"

import * as React from "react" 
import { Moon, Sun } from "lucide-react" // Assuming you use lucide-react
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button" // Assuming you have a Button component like shadcn/ui

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure we only render on the client
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative"
    >
      <div className="relative h-[1.2rem] w-[1.2rem]">
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

// --- If you don't have a Button component, use a basic button ---
// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = React.useState(false)
//   React.useEffect(() => setMounted(true), [])

//   if (!mounted) {
//      return <button className="w-10 h-10 p-2 opacity-0" disabled></button>; // Placeholder
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark' ? (
//         <Sun className="h-5 w-5 text-foreground" />
//       ) : (
//         <Moon className="h-5 w-5 text-foreground" />
//       )}
//     </button>
//   )
// }