/** Format a token count given in billions into a compact human label. */
export function formatTokens(billions: number): string {
  if (billions >= 1000) {
    return `${(billions / 1000).toFixed(2)}T`;
  }
  if (billions >= 1) {
    return `${Math.round(billions)}B`;
  }
  return `${Math.round(billions * 1000)}M`;
}

/** Format a growth percentage with an explicit sign. */
export function formatGrowth(pct: number): string {
  const sign = pct > 0 ? "+" : pct < 0 ? "−" : "";
  return `${sign}${Math.abs(pct)}%`;
}

/** Format a dollar amount into a compact human label. */
export function formatRevenue(dollars: number): string {
  if (dollars >= 1_000_000_000) {
    return `$${(dollars / 1_000_000_000).toFixed(2)}B`;
  }
  if (dollars >= 1_000_000) {
    return `$${(dollars / 1_000_000).toFixed(1)}M`;
  }
  if (dollars >= 1_000) {
    return `$${Math.round(dollars / 1000)}K`;
  }
  return `$${Math.round(dollars)}`;
}

/** Derive a 1–2 character monogram from an app name. */
export function monogram(name: string): string {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, "").trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}
