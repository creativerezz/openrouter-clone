import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RankingsExplorer } from "@/components/rankings-explorer";

const HERO_STATS = [
  { value: "480+", label: "models" },
  { value: "60+", label: "providers" },
  { value: "2.4M", label: "monthly users" },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border-light">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(160,120,255,0.14),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted"
            >
              <span>Rankings</span>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-dark">Apps</span>
            </nav>

            <h1 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              App &amp; Agent Rankings
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
              The largest public apps and agents using OpenRouter, ranked by
              token usage. A single API routes every request to the best
              available model and provider.
            </p>

            <dl className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-semibold tabular-nums text-foreground">
                    {stat.value}
                  </dd>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Rankings */}
        <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <RankingsExplorer />
        </section>
      </main>

      <Footer />
    </div>
  );
}
