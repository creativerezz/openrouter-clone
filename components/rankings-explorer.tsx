"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { formatTokens, formatRevenue } from "@/lib/format";
import {
  apps,
  PERIODS,
  FEATURED,
  TINT_CLASSES,
  LICENSE_OPTIONS,
  REGION_OPTIONS,
  DEFAULT_FILTERS,
  DATA_UPDATED,
  tokensForPeriod,
  revenueForPeriod,
  growthForPeriod,
  totalTokens,
  leaderFor,
  countFor,
  filterApps,
  sortApps,
  type Period,
  type RankBy,
  type AppFilters,
  type FeaturedCategory,
  type RankedApp,
} from "@/lib/data";
import { AppIcon } from "./app-icon";
import { GrowthBadge, CategoryBadge, NewBadge, ModelBadge } from "./badges";
import { ExternalLinkIcon, ArrowRightIcon, SearchIcon } from "./icons";
import { SelectMenu } from "./select-menu";

export function RankingsExplorer() {
  const [period, setPeriod] = useState<Period>("month");
  const [rankBy, setRankBy] = useState<RankBy>("tokens");
  const [filters, setFilters] = useState<AppFilters>(DEFAULT_FILTERS);

  const visibleApps = useMemo(
    () => sortApps(filterApps(apps, filters), rankBy, period),
    [filters, rankBy, period],
  );

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">
          <span className="font-semibold tabular-nums text-foreground">
            {formatTokens(totalTokens(period))}
          </span>{" "}
          tokens processed across {apps.length} apps
        </p>
        <PeriodTabs period={period} onChange={setPeriod} />
      </div>

      {/* Featured category cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((featured) => (
          <FeaturedCard key={featured.title} featured={featured} period={period} />
        ))}
      </div>

      {/* Full ranked list */}
      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium text-foreground">All apps & agents</h2>
            <p className="text-sm text-muted">
              {visibleApps.length === apps.length
                ? `Ranked by ${rankBy} processed this period.`
                : `${visibleApps.length} of ${apps.length} apps match your filters.`}
            </p>
          </div>
          <RankByToggle rankBy={rankBy} onChange={setRankBy} />
        </div>

        <FilterBar filters={filters} onChange={setFilters} />

        {visibleApps.length === 0 ? (
          <p className="mt-8 rounded-xl border border-dashed border-border-light p-8 text-center text-sm text-muted">
            No apps match those filters. Try widening your search.
          </p>
        ) : (
          <ol className="mt-5 flex flex-col gap-2">
            {visibleApps.map((app, i) => (
              <RankRow key={app.name} app={app} rank={i + 1} period={period} rankBy={rankBy} />
            ))}
          </ol>
        )}

        <p className="mt-6 text-xs text-subtle">
          Sample data for illustration, manually curated — not live usage figures.
          Last updated {DATA_UPDATED}.
        </p>
      </div>
    </div>
  );
}

function RankByToggle({
  rankBy,
  onChange,
}: {
  rankBy: RankBy;
  onChange: (r: RankBy) => void;
}) {
  const options: { id: RankBy; label: string }[] = [
    { id: "tokens", label: "By tokens" },
    { id: "revenue", label: "By revenue" },
  ];
  return (
    <div
      role="tablist"
      aria-label="Rank by"
      className="inline-flex shrink-0 items-center rounded-lg border border-border-light bg-surface p-1"
    >
      {options.map((o) => {
        const active = o.id === rankBy;
        return (
          <button
            key={o.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.id)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              active ? "bg-raised text-foreground shadow-sm" : "text-muted hover:text-dark",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function FilterBar({
  filters,
  onChange,
}: {
  filters: AppFilters;
  onChange: (f: AppFilters) => void;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search apps & agents"
          className="w-full rounded-lg border border-border-light bg-surface py-1.5 pl-8 pr-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 sm:w-56"
        />
      </div>

      <SelectMenu
        options={LICENSE_OPTIONS}
        value={filters.license}
        onChange={(license) => onChange({ ...filters, license })}
        aria-label="Filter by license"
      />

      <SelectMenu
        options={REGION_OPTIONS}
        value={filters.region}
        onChange={(region) => onChange({ ...filters, region })}
        aria-label="Filter by origin"
      />

      {(filters.query || filters.license !== "all" || filters.region !== "all") && (
        <button
          onClick={() => onChange(DEFAULT_FILTERS)}
          className="text-sm text-muted underline-offset-2 hover:text-dark hover:underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

function PeriodTabs({
  period,
  onChange,
}: {
  period: Period;
  onChange: (p: Period) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Ranking period"
      className="inline-flex items-center rounded-lg border border-border-light bg-surface p-1"
    >
      {PERIODS.map((p) => {
        const active = p.id === period;
        return (
          <button
            key={p.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(p.id)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              active
                ? "bg-raised text-foreground shadow-sm"
                : "text-muted hover:text-dark",
            )}
          >
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

function FeaturedCard({
  featured,
  period,
}: {
  featured: FeaturedCategory;
  period: Period;
}) {
  const leader = leaderFor(featured.category);
  const t = TINT_CLASSES[featured.tint];

  return (
    <a
      href="#"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card p-5 transition-all duration-[350ms] ease-standard hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-card-hover",
        t.border,
      )}
    >
      <div className="flex items-center justify-between">
        <span className={cn("text-[13px] font-semibold", t.text)}>
          {featured.title}
        </span>
        <ArrowRightIcon
          className={cn(
            "size-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100",
            t.text,
          )}
        />
      </div>
      <p className="mt-1 text-[13px] leading-snug text-subtle">{featured.blurb}</p>

      <div className="mt-5 flex items-center gap-3">
        <AppIcon name={leader.name} tint={featured.tint} size="sm" variant="tint" />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-foreground">
            {leader.name}
          </div>
          <div className="text-xs tabular-nums text-subtle">
            {formatTokens(tokensForPeriod(leader, period))} tokens
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-subtle">
        {(() => {
          const n = countFor(featured.category);
          return `${n} app${n === 1 ? "" : "s"} ranked`;
        })()}
      </div>
    </a>
  );
}

function RankRow({
  app,
  rank,
  period,
  rankBy,
}: {
  app: RankedApp;
  rank: number;
  period: Period;
  rankBy: RankBy;
}) {
  const tokens = formatTokens(tokensForPeriod(app, period));
  const growth = growthForPeriod(app, period);
  const revenue = formatRevenue(revenueForPeriod(app, period));

  return (
    <li>
      <a
        href="#"
        className="group flex items-center gap-3 rounded-xl border border-border-light bg-card p-3 transition-all duration-[350ms] ease-standard hover:-translate-y-0.5 hover:border-border hover:shadow-card-hover sm:gap-5 sm:p-4"
      >
        <span
          className={cn(
            "w-5 shrink-0 text-center text-sm font-semibold tabular-nums sm:w-7 sm:text-base",
            rank <= 3 ? "text-foreground" : "text-muted",
          )}
        >
          {rank}
        </span>

        <AppIcon name={app.name} tint={app.tint} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate font-semibold text-foreground">{app.name}</span>
            <ExternalLinkIcon className="size-3.5 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
            {app.isNew && <NewBadge className="ml-0.5 hidden sm:inline-flex" />}
          </div>
          <p className="truncate text-sm text-muted">{app.description}</p>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <CategoryBadge category={app.category} tint={app.tint} />
          <ModelBadge model={app.model} className="hidden lg:inline-flex" />
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1 text-right">
          <div className="text-sm font-semibold tabular-nums text-foreground sm:text-base">
            {rankBy === "tokens" ? tokens : revenue}
            {rankBy === "tokens" && (
              <span className="ml-1 text-xs font-normal text-muted">tokens</span>
            )}
          </div>
          <GrowthBadge value={growth} />
        </div>
      </a>
    </li>
  );
}
