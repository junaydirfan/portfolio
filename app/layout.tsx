// layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/nav";
import { Availability } from "@/components/ui/availability";
import { ThemeProvider } from "@/components/theme-provider"; // <-- Import ThemeProvider

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "junaid irfan | web & cloud developer",
  description: "portfolio of junaid irfan, a software developer specializing in web development, cloud, and UI/UX design.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Add suppressHydrationWarning to <html> as recommended by next-themes
    <html lang="en" className="scroll-smooth" suppressHydrationWarning> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased bg-background text-foreground`}
        // suppressHydrationWarning={true} // Moved to <html>
      >
        {/* Configure ThemeProvider */}
        <ThemeProvider
          attribute="class" // Apply theme by adding/removing 'dark' class to <html>
          defaultTheme="system" // Default to user's system preference
          enableSystem // Enable system preference detection
          disableTransitionOnChange // Optional: Prevent transitions on theme change
        >
          <Nav />
          {children}
          <Availability />
        </ThemeProvider>
      </body>
    </html>
  );
}