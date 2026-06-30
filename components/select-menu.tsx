"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "./icons";

export interface SelectMenuOption<T extends string> {
  id: T;
  label: string;
}

interface SelectMenuProps<T extends string> {
  options: SelectMenuOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Accessible name for the control (there's no visible <label>). */
  "aria-label": string;
  className?: string;
}

/**
 * Custom single-select listbox styled to match the design system.
 *
 * Native <select> elements delegate their open dropdown to the OS/browser
 * shell, which sits outside the page's own DOM and event loop — so it can't
 * be driven the way the rest of the UI is (and is notoriously unreliable
 * under automated/synthetic keyboard input). This component keeps the whole
 * interaction — trigger, popover, and option list — inside React-rendered
 * DOM, with full roving keyboard support (ArrowUp/ArrowDown, Home/End,
 * Enter/Space, Escape, click-outside-to-close).
 */
export function SelectMenu<T extends string>({
  options,
  value,
  onChange,
  className,
  ...rest
}: SelectMenuProps<T>) {
  const ariaLabel = rest["aria-label"];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, options.findIndex((o) => o.id === value)),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const listboxId = useId();

  const selectedIndex = options.findIndex((o) => o.id === value);
  const selected = options[selectedIndex] ?? options[0];

  // Close when clicking outside the trigger/popover.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  // Keep the highlighted option in view as it changes.
  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  function openAt(index: number) {
    setActiveIndex(Math.max(0, Math.min(options.length - 1, index)));
    setOpen(true);
  }

  function commit(index: number) {
    const opt = options[index];
    if (opt) onChange(opt.id);
    setOpen(false);
  }

  // Focus never leaves the trigger button — the popover is driven entirely
  // via aria-activedescendant, the standard "collapsible dropdown listbox"
  // pattern. This keeps the control reachable by normal Tab order and means
  // there's only ever one element to dispatch key events to.
  function onButtonKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      switch (e.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          e.preventDefault();
          openAt(selectedIndex === -1 ? 0 : selectedIndex);
          return;
        default:
          return;
      }
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        commit(activeIndex);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={open ? `${listboxId}-${activeIndex}` : undefined}
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openAt(selectedIndex === -1 ? 0 : selectedIndex))}
        onKeyDown={onButtonKeyDown}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-lg border border-border-light bg-surface px-2.5 py-1.5 text-sm text-foreground transition-colors hover:border-border focus:outline-none focus:ring-2 focus:ring-primary/30",
          className,
        )}
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDownIcon
          className={cn(
            "size-3.5 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute left-0 top-[calc(100%+6px)] z-20 max-h-60 min-w-full overflow-auto rounded-lg border border-border-light bg-raised p-1 shadow-card-hover"
        >
          {options.map((o, i) => {
            const isSelected = o.id === value;
            const isActive = i === activeIndex;
            return (
              <li
                key={o.id}
                ref={(el) => {
                  optionRefs.current[i] = el;
                }}
                id={`${listboxId}-${i}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => commit(i)}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  isActive ? "bg-surface text-foreground" : "text-muted",
                  isSelected && "font-medium text-foreground",
                )}
              >
                {o.label}
                {isSelected && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-primary"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
