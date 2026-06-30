import { cn } from "@/lib/cn";
import { formatGrowth } from "@/lib/format";
import { TINT_CLASSES, type Tint, type ModelInfo } from "@/lib/data";
import { TrendingUpIcon, TrendingDownIcon, SparkleIcon } from "./icons";

export function GrowthBadge({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const positive = value >= 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium tabular-nums",
        positive ? "bg-tint-green text-accent-green" : "bg-surface text-subtle",
        className,
      )}
      title={`${formatGrowth(value)} vs. previous period`}
    >
      {positive ? (
        <TrendingUpIcon className="size-3.5" />
      ) : (
        <TrendingDownIcon className="size-3.5" />
      )}
      {formatGrowth(value)}
    </span>
  );
}

export function CategoryBadge({
  category,
  tint,
  className,
}: {
  category: string;
  tint: Tint;
  className?: string;
}) {
  const t = TINT_CLASSES[tint];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-medium",
        t.bg,
        t.text,
        className,
      )}
    >
      {category}
    </span>
  );
}

export function NewBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[11px] font-medium bg-tint-purple text-accent-purple",
        className,
      )}
    >
      <SparkleIcon className="size-3" />
      New
    </span>
  );
}

export function ModelBadge({
  model,
  className,
}: {
  model: ModelInfo;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-[11px] font-medium text-subtle",
        className,
      )}
      title={`${model.name} — ${model.license === "open" ? "open-weight" : "closed"}, ${model.region}`}
    >
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          model.license === "open" ? "bg-accent-green" : "bg-subtle",
        )}
        aria-hidden
      />
      {model.org}
    </span>
  );
}
