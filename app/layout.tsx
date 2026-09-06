import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrolling from "@/components/smooth-scrolling";
import { PostHogProvider } from "@/components/posthog-provider";

export const metadata: Metadata = {
  title: "Junaid Irfan",
  description: "Portfolio of Junaid Irfan, Full-Stack & DevSecOps Engineer specializing in cloud-native systems, platform engineering, and AI operations.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-zinc-800 selection:text-white"
      >
        <PostHogProvider>
          <SmoothScrolling>
            {children}
            <Analytics />
          </SmoothScrolling>
        </PostHogProvider>
      </body>
    </html>
  );
}

