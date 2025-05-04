// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Ensure the component only renders on the client-side where localStorage is available
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Optional: Render a loading state or null on the server/during hydration mismatch
    // return null; 
    // Or, render children directly, next-themes handles flash prevention
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}