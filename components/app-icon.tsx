import { cn } from "@/lib/cn";
import { monogram } from "@/lib/format";
import { TINT_CLASSES, type Tint } from "@/lib/data";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "size-9 rounded-md text-[13px]",
  md: "size-11 rounded-lg text-sm",
  lg: "size-12 rounded-xl text-base",
};

export function AppIcon({
  name,
  tint,
  size = "md",
  variant = "tint",
  className,
}: {
  name: string;
  tint: Tint;
  size?: Size;
  variant?: "tint" | "solid";
  className?: string;
}) {
  const t = TINT_CLASSES[tint];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-semibold ring-1 ring-inset",
        SIZES[size],
        variant === "tint"
          ? cn(t.bg, t.text, t.ring)
          : cn("bg-card", t.text, "ring-border-light"),
        className,
      )}
    >
      {monogram(name)}
    </span>
  );
}
