"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { CloseIcon, MenuIcon, SearchIcon } from "./icons";

interface NavLinkItem {
  label: string;
  href: string;
  active?: boolean;
}

interface MobileNavProps {
  links: NavLinkItem[];
}

/**
 * Hamburger trigger + slide-down panel shown below the `lg` breakpoint.
 * Surfaces everything that's hidden from the collapsed header at small/
 * medium widths: the nav links (`lg:flex`), search (`md:block`), and Sign in
 * (`sm:inline-flex`). Follows the same open/close conventions as
 * `SelectMenu` — click-outside and Escape both close it — with an added
 * document-level Escape listener since focus can move into the panel.
 */
export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // The panel only makes sense below `lg`; if the viewport is resized past
  // it (e.g. rotating a tablet) while open, close it so it can't get stuck
  // open behind/alongside the desktop nav.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 64rem)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-dark"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      {open && (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border-light bg-background/95 px-4 py-4 shadow-card-hover backdrop-blur-md sm:px-6"
        >
          <div className="relative mb-4 md:hidden">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search models"
              className="w-full rounded-md border border-border bg-surface py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:bg-background focus:outline-none"
            />
          </div>

          <nav className="flex flex-col gap-0.5" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                onClick={close}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  link.active
                    ? "bg-surface text-dark"
                    : "text-muted hover:bg-surface hover:text-dark",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2 border-t border-border-light pt-4">
            <Link
              href="#"
              onClick={close}
              className="rounded-md px-3 py-2.5 text-center text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-dark sm:hidden"
            >
              Sign in
            </Link>
            <Link
              href="#"
              onClick={close}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-hover active:translate-y-0"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
