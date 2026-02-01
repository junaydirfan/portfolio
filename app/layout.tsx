// layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/nav";
import { Availability } from "@/components/ui/availability";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
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
    // Add suppressHydrationWarning to <html>
    <html lang="en" className="scroll-smooth" suppressHydrationWarning> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark')
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
        // suppressHydrationWarning={true} // Moved to <html>
      >
        <Nav />
        {children}
        <Availability />
      </body>
    </html>
  );
}