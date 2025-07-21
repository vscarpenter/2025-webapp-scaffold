import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: "WebApp Scaffold - Next.js 15 + TypeScript",
  description: "A modern web application scaffold built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "React"],
  authors: [{ name: "WebApp Scaffold" }],
  creator: "WebApp Scaffold",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webapp-scaffold.vercel.app",
    title: "WebApp Scaffold",
    description: "A modern web application scaffold built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI",
    siteName: "WebApp Scaffold",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebApp Scaffold",
    description: "A modern web application scaffold built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}