// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/nav";
import { Availability } from "@/components/ui/availability";
import { ThemeProvider } from "@/components/theme-provider"; // <-- Import ThemeProvider

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Junaid Irfan | Software Developer",
  description: "Portfolio of Junaid Irfan, a software developer specializing in web development, data science, and UI/UX design.",
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
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-background text-foreground`} // font-inter added, bg/text moved here
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