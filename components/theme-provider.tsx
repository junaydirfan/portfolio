// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}