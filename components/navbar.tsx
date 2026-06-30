import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { SearchIcon, MenuIcon } from "./icons";

const NAV_LINKS: { label: string; href: string; active?: boolean }[] = [
  { label: "Models", href: "#" },
  { label: "Chat", href: "#" },
  { label: "Rankings", href: "#", active: true },
  { label: "Enterprise", href: "#" },
  { label: "Docs", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex-none rounded-md transition-opacity hover:opacity-80"
          aria-label="OpenRouter home"
        >
          <Logo />
        </Link>

        {/* Search */}
        <div className="relative hidden w-full max-w-[260px] md:block">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search models"
            className="w-full rounded-md border border-border bg-surface py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:bg-background focus:outline-none"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-border-light bg-background px-1.5 py-0.5 font-mono text-[11px] leading-none text-muted">
            /
          </kbd>
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-1">
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (link.active
                    ? "text-dark"
                    : "text-muted hover:bg-surface hover:text-dark")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 lg:ml-2 lg:border-l lg:border-border-light lg:pl-2">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-dark sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-px hover:bg-primary-hover active:translate-y-0"
            >
              Sign up
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-dark lg:hidden"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
