// components/ui/theme-toggle.tsx
"use client"

import * as React from "react" 
import { Moon, Sun } from "lucide-react" // Assuming you use lucide-react
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button" // Assuming you have a Button component like shadcn/ui

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Wait until mounted to render client-specific UI
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Render a placeholder or null on the server/initial render
    // to avoid hydration mismatch if the stored theme differs from system/default
    return <div className="w-10 h-10"></div>; // Placeholder with button size
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
         <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
         <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
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