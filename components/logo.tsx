import { cn } from "@/lib/cn";

/** The OpenRouter mark — an abstract "router" glyph: one input branching to two outputs. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <path
        d="M6 12h6m0 0V6.5A1.5 1.5 0 0 1 13.5 5H16m-4 7v5.5A1.5 1.5 0 0 0 13.5 19H16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="12" r="2.5" fill="currentColor" />
      <circle cx="18" cy="5" r="2.5" fill="currentColor" />
      <circle cx="18" cy="19" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-foreground", className)}>
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight">OpenRouter</span>
    </span>
  );
}
