import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
            <div className="h-6 w-6 rounded bg-primary" />
            <span className="hidden font-bold lg:inline-block">
              WebApp Scaffold
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/posts"
            >
              Posts
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/demo"
            >
              Demo
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <span className="text-sm font-medium md:hidden">WebApp Scaffold</span>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}