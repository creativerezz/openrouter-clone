import Link from "next/link";
import { Logo } from "./logo";
import { GitHubIcon, XIcon } from "./icons";

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Models", "Chat", "Rankings", "Enterprise"] },
  { title: "Developers", links: ["Docs", "API Reference", "Status", "Integrations"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Privacy"] },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border-light bg-surface/40">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            A unified interface for LLMs. Better prices, better uptime, no
            subscription.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <Link
              href="#"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border-light text-muted transition-colors hover:bg-background hover:text-dark"
            >
              <GitHubIcon className="size-[18px]" />
            </Link>
            <Link
              href="#"
              aria-label="X"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border-light text-muted transition-colors hover:bg-background hover:text-dark"
            >
              <XIcon className="size-4" />
            </Link>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-dark"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border-light">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} OpenRouter, Inc. A design-system clone.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="transition-colors hover:text-dark">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-dark">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-dark">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
