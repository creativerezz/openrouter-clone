export type Tint = "blue" | "green" | "orange" | "purple";

export type Category =
  | "Programming"
  | "Roleplay"
  | "Chat"
  | "Writing"
  | "Research"
  | "Marketing";

export type Period = "today" | "week" | "month" | "year";

export type License = "open" | "closed";

export type Region = "US" | "EU" | "China" | "Multi";

export interface ModelInfo {
  /** Display name of the underlying model that powers this app. */
  name: string;
  /** Lab/company that trained the model. */
  org: string;
  /** Where the lab is based, used for origin-aware filtering. */
  region: Region;
  /** Whether model weights are open or the model is closed/API-only. */
  license: License;
  /** Illustrative blended price per million tokens, in USD. */
  pricePerMTok: number;
}

export interface RankedApp {
  name: string;
  description: string;
  domain: string;
  /** Tokens processed this month, in billions. The canonical sort key. */
  monthlyTokensB: number;
  /** Period-over-period growth as a percentage (can be negative). */
  growth: number;
  category: Category;
  tint: Tint;
  isNew?: boolean;
  /** The primary model this app routes most of its traffic to. */
  model: ModelInfo;
}

const MODELS = {
  gpt5: { name: "GPT-5", org: "OpenAI", region: "US", license: "closed", pricePerMTok: 9 },
  claudeOpus: { name: "Claude Opus", org: "Anthropic", region: "US", license: "closed", pricePerMTok: 12 },
  claudeSonnet: { name: "Claude Sonnet", org: "Anthropic", region: "US", license: "closed", pricePerMTok: 8 },
  geminiPro: { name: "Gemini Pro", org: "Google DeepMind", region: "US", license: "closed", pricePerMTok: 7 },
  grok: { name: "Grok", org: "xAI", region: "US", license: "closed", pricePerMTok: 6 },
  llama: { name: "Llama 4", org: "Meta", region: "US", license: "open", pricePerMTok: 0.6 },
  mistral: { name: "Mistral Large", org: "Mistral AI", region: "EU", license: "open", pricePerMTok: 1.2 },
  deepseek: { name: "DeepSeek V4", org: "DeepSeek", region: "China", license: "open", pricePerMTok: 0.4 },
  qwen: { name: "Qwen 3", org: "Alibaba", region: "China", license: "open", pricePerMTok: 0.5 },
  kimi: { name: "Kimi K2", org: "Moonshot AI", region: "China", license: "open", pricePerMTok: 0.6 },
  glm: { name: "GLM-5", org: "Zhipu AI", region: "China", license: "open", pricePerMTok: 0.5 },
  minimax: { name: "MiniMax M2", org: "MiniMax", region: "China", license: "open", pricePerMTok: 0.5 },
  multi: { name: "Multiple models", org: "Multi-model", region: "Multi", license: "open", pricePerMTok: 2 },
} satisfies Record<string, ModelInfo>;

type ModelKey = keyof typeof MODELS;

const CATEGORY_TINT: Record<Category, Tint> = {
  Programming: "purple",
  Roleplay: "orange",
  Chat: "blue",
  Writing: "green",
  Research: "blue",
  Marketing: "green",
};

interface RawApp {
  name: string;
  description: string;
  domain: string;
  monthlyTokensB: number;
  growth: number;
  category: Category;
  model: ModelKey;
  isNew?: boolean;
}

/**
 * Sample/illustrative app data — not live usage figures. See DATA_UPDATED
 * below. Token counts loosely tier by category popularity; revenue is
 * derived from each app's model price, not tracked independently, so it
 * can (and is meant to) rank differently than the tokens view.
 */
const RAW_APPS: RawApp[] = [
  // Programming
  { name: "Cline", description: "Autonomous coding agent right in your IDE.", domain: "cline.bot", monthlyTokensB: 1460, growth: 14, category: "Programming", model: "claudeSonnet" },
  { name: "Cursor", description: "The AI code editor built for pair programming with AI.", domain: "cursor.com", monthlyTokensB: 1380, growth: 19, category: "Programming", model: "claudeSonnet" },
  { name: "Windsurf", description: "An agentic IDE with deep codebase understanding.", domain: "windsurf.com", monthlyTokensB: 1120, growth: 22, category: "Programming", model: "gpt5" },
  { name: "Roo Code", description: "A whole dev team of AI agents in your editor.", domain: "roocode.com", monthlyTokensB: 982, growth: 23, category: "Programming", model: "deepseek" },
  { name: "Devin", description: "The AI software engineer that plans, codes, and ships.", domain: "devin.ai", monthlyTokensB: 705, growth: 31, category: "Programming", model: "claudeOpus" },
  { name: "Replit Agent", description: "Build and ship full-stack apps from a prompt.", domain: "replit.com", monthlyTokensB: 668, growth: 17, category: "Programming", model: "claudeSonnet" },
  { name: "Kilo Code", description: "Open-source AI coding agent for VS Code.", domain: "kilocode.ai", monthlyTokensB: 763, growth: 41, category: "Programming", model: "qwen", isNew: true },
  { name: "OpenHands", description: "An open platform for AI software engineers.", domain: "all-hands.dev", monthlyTokensB: 398, growth: 26, category: "Programming", model: "deepseek" },
  { name: "liteLLM", description: "Call 100+ LLMs using the OpenAI input/output format.", domain: "litellm.ai", monthlyTokensB: 421, growth: 18, category: "Programming", model: "multi" },
  { name: "Aider", description: "AI pair programming, right in your terminal.", domain: "aider.chat", monthlyTokensB: 241, growth: 5, category: "Programming", model: "gpt5" },
  { name: "GPT Engineer", description: "Describe an app, generate the codebase.", domain: "gptengineer.app", monthlyTokensB: 219, growth: 36, category: "Programming", model: "deepseek", isNew: true },
  { name: "Goose", description: "An open-source, extensible AI agent that gets things done.", domain: "block.github.io", monthlyTokensB: 197, growth: 44, category: "Programming", model: "qwen", isNew: true },
  { name: "CrewAI", description: "Orchestrate role-playing, autonomous AI agents.", domain: "crewai.com", monthlyTokensB: 161, growth: 16, category: "Programming", model: "multi" },
  { name: "Continue", description: "The open-source autopilot for software development.", domain: "continue.dev", monthlyTokensB: 138, growth: 12, category: "Programming", model: "mistral" },
  { name: "AutoGPT", description: "Continuous autonomous task execution for AI agents.", domain: "autogpt.net", monthlyTokensB: 115, growth: -6, category: "Programming", model: "gpt5" },
  { name: "LangGraph Studio", description: "Visual debugger for stateful agent graphs.", domain: "langchain.com", monthlyTokensB: 64, growth: 28, category: "Programming", model: "multi" },
  { name: "Smol Developer", description: "A junior developer agent that scaffolds whole repos.", domain: "smol.ai", monthlyTokensB: 45, growth: 9, category: "Programming", model: "gpt5" },

  // Roleplay
  { name: "Character.AI", description: "Create and talk to AI characters of every kind.", domain: "character.ai", monthlyTokensB: 1050, growth: 8, category: "Roleplay", model: "minimax" },
  { name: "SillyTavern", description: "A power-user frontend for AI roleplay and stories.", domain: "sillytavern.app", monthlyTokensB: 612, growth: 6, category: "Roleplay", model: "kimi" },
  { name: "Spicychat", description: "Uncensored AI roleplay chat, your way.", domain: "spicychat.ai", monthlyTokensB: 298, growth: 13, category: "Roleplay", model: "kimi" },
  { name: "Chub AI", description: "A GenAI platform for immersive, open-ended roleplay.", domain: "chub.ai", monthlyTokensB: 356, growth: -3, category: "Roleplay", model: "minimax" },
  { name: "NovelAI", description: "AI-assisted storytelling, art, and roleplay.", domain: "novelai.net", monthlyTokensB: 285, growth: 7, category: "Roleplay", model: "kimi" },
  { name: "HammerAI", description: "Chat with AI characters, locally and for free.", domain: "hammerai.com", monthlyTokensB: 274, growth: 27, category: "Roleplay", model: "llama" },
  { name: "Chai", description: "A social platform to chat with AI characters.", domain: "chai-research.com", monthlyTokensB: 232, growth: 11, category: "Roleplay", model: "glm" },
  { name: "Janitor AI", description: "Create and chat with your own AI characters.", domain: "janitorai.com", monthlyTokensB: 208, growth: -8, category: "Roleplay", model: "glm" },
  { name: "Crushon.ai", description: "NSFW-friendly AI companions and roleplay.", domain: "crushon.ai", monthlyTokensB: 110, growth: 24, category: "Roleplay", model: "deepseek" },
  { name: "Tavern Keeper", description: "Persistent worlds and memory for AI roleplay.", domain: "tavernkeeper.ai", monthlyTokensB: 78, growth: 21, category: "Roleplay", model: "kimi", isNew: true },
  { name: "Backyard AI", description: "Run local AI characters with full privacy.", domain: "backyard.ai", monthlyTokensB: 73, growth: 14, category: "Roleplay", model: "llama" },
  { name: "RisuAI", description: "An open-source frontend for immersive AI roleplay.", domain: "risuai.net", monthlyTokensB: 54, growth: 19, category: "Roleplay", model: "qwen" },
  { name: "Dittin AI", description: "Mobile-first AI character chat and roleplay.", domain: "dittin.ai", monthlyTokensB: 9, growth: 52, category: "Roleplay", model: "minimax", isNew: true },

  // Chat
  { name: "Cherry Studio", description: "A desktop client for multiple LLM providers.", domain: "cherry-ai.com", monthlyTokensB: 488, growth: 9, category: "Chat", model: "multi" },
  { name: "LM Studio", description: "Discover, download, and run local LLMs.", domain: "lmstudio.ai", monthlyTokensB: 327, growth: 21, category: "Chat", model: "llama" },
  { name: "Open WebUI", description: "An extensible, self-hosted interface for any model.", domain: "openwebui.com", monthlyTokensB: 312, growth: 11, category: "Chat", model: "multi" },
  { name: "Jan", description: "An open-source ChatGPT alternative that runs offline.", domain: "jan.ai", monthlyTokensB: 188, growth: 16, category: "Chat", model: "mistral" },
  { name: "Copy.ai", description: "Go-to-market AI for content and campaigns.", domain: "copy.ai", monthlyTokensB: 182, growth: 4, category: "Marketing", model: "claudeSonnet" },
  { name: "AnythingLLM", description: "Turn any documents into an AI chatbot.", domain: "anythingllm.com", monthlyTokensB: 149, growth: 18, category: "Chat", model: "multi" },
  { name: "BoltAI", description: "A polished, native AI chat app for macOS.", domain: "boltai.com", monthlyTokensB: 154, growth: 7, category: "Chat", model: "multi" },
  { name: "Msty", description: "A single, friction-free interface for every model.", domain: "msty.app", monthlyTokensB: 104, growth: 4, category: "Chat", model: "multi" },
  { name: "GPT4All", description: "Run open-source LLMs locally, on any device.", domain: "gpt4all.io", monthlyTokensB: 88, growth: 6, category: "Chat", model: "llama" },
  { name: "TypingMind", description: "A better UI for ChatGPT and other AI models.", domain: "typingmind.com", monthlyTokensB: 59, growth: 13, category: "Chat", model: "multi" },
  { name: "Raycast AI", description: "AI commands built into your launcher.", domain: "raycast.com", monthlyTokensB: 36, growth: 29, category: "Chat", model: "claudeSonnet" },
  { name: "Witsy", description: "A native, privacy-first desktop AI assistant.", domain: "witsy.app", monthlyTokensB: 18, growth: 38, category: "Chat", model: "mistral", isNew: true },

  // Writing
  { name: "Quill", description: "An AI writing partner for long-form drafts.", domain: "quill.so", monthlyTokensB: 176, growth: 33, category: "Writing", model: "claudeOpus", isNew: true },
  { name: "Sudowrite", description: "An AI writing partner built for novelists.", domain: "sudowrite.com", monthlyTokensB: 127, growth: 15, category: "Writing", model: "claudeOpus" },
  { name: "Writesonic", description: "AI content and SEO at scale.", domain: "writesonic.com", monthlyTokensB: 84, growth: -2, category: "Writing", model: "qwen" },
  { name: "Gamma", description: "Generate beautiful docs, decks, and pages with AI.", domain: "gamma.app", monthlyTokensB: 41, growth: 31, category: "Writing", model: "geminiPro" },
  { name: "Lex", description: "A word processor with AI built into the page.", domain: "lex.page", monthlyTokensB: 32, growth: 12, category: "Writing", model: "gpt5" },
  { name: "Compose AI", description: "AI autocomplete that writes alongside you.", domain: "compose.ai", monthlyTokensB: 24, growth: 3, category: "Writing", model: "mistral" },

  // Research
  { name: "Perplexity", description: "Ask anything, get answers grounded in real sources.", domain: "perplexity.ai", monthlyTokensB: 890, growth: 24, category: "Research", model: "geminiPro" },
  { name: "Sigma Research", description: "Agentic web research with grounded citations.", domain: "sigmabrowser.com", monthlyTokensB: 121, growth: 19, category: "Research", model: "geminiPro" },
  { name: "Elicit", description: "An AI research assistant for literature review.", domain: "elicit.com", monthlyTokensB: 168, growth: 14, category: "Research", model: "claudeOpus" },
  { name: "Consensus", description: "Search 200M+ academic papers with AI.", domain: "consensus.app", monthlyTokensB: 132, growth: 9, category: "Research", model: "gpt5" },
  { name: "GPT Researcher", description: "An open-source autonomous research agent.", domain: "gptr.dev", monthlyTokensB: 69, growth: 27, category: "Research", model: "deepseek" },
  { name: "Tavily", description: "A search API built for AI agents.", domain: "tavily.com", monthlyTokensB: 21, growth: 46, category: "Research", model: "multi", isNew: true },
  { name: "Scite", description: "See how research has been cited — supported or contradicted.", domain: "scite.ai", monthlyTokensB: 15, growth: 8, category: "Research", model: "gpt5" },

  // Marketing
  { name: "Jasper", description: "On-brand AI content for marketing teams.", domain: "jasper.ai", monthlyTokensB: 340, growth: 1, category: "Marketing", model: "gpt5" },
  { name: "Copyhound", description: "On-brand marketing copy generated at scale.", domain: "copyhound.ai", monthlyTokensB: 92, growth: 15, category: "Marketing", model: "gpt5" },
  { name: "AdCreative.ai", description: "Generate high-converting ad creatives with AI.", domain: "adcreative.ai", monthlyTokensB: 49, growth: 22, category: "Marketing", model: "geminiPro" },
  { name: "Surfer SEO", description: "AI-guided content optimization for search.", domain: "surferseo.com", monthlyTokensB: 28, growth: 6, category: "Marketing", model: "mistral" },
  { name: "Postwise", description: "AI-written tweets and threads that grow your audience.", domain: "postwise.ai", monthlyTokensB: 12, growth: 41, category: "Marketing", model: "deepseek", isNew: true },
];

function buildApp(raw: RawApp): RankedApp {
  return {
    name: raw.name,
    description: raw.description,
    domain: raw.domain,
    monthlyTokensB: raw.monthlyTokensB,
    growth: raw.growth,
    category: raw.category,
    tint: CATEGORY_TINT[raw.category],
    isNew: raw.isNew,
    model: MODELS[raw.model],
  };
}

/** Ranked apps, ordered by monthly token usage (descending). */
export const apps: RankedApp[] = RAW_APPS.map(buildApp).sort(
  (a, b) => b.monthlyTokensB - a.monthlyTokensB,
);

/** Sample data is curated by hand, not pulled live — shown in the UI footer. */
export const DATA_UPDATED = "Jun 30, 2026";

export const PERIODS: { id: Period; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
  { id: "year", label: "This Year" },
];

const PERIOD_FACTOR: Record<Period, number> = {
  today: 0.035,
  week: 0.23,
  month: 1,
  year: 11.4,
};

const GROWTH_SHIFT: Record<Period, number> = {
  today: 1.6,
  week: 1.2,
  month: 1,
  year: 0.7,
};

/** Tokens for a given app scaled to the selected period (in billions). */
export function tokensForPeriod(app: RankedApp, period: Period): number {
  return app.monthlyTokensB * PERIOD_FACTOR[period];
}

/** Growth for a given app, exaggerated for shorter windows. */
export function growthForPeriod(app: RankedApp, period: Period): number {
  return Math.round(app.growth * GROWTH_SHIFT[period]);
}

/** Total tokens across all apps for a period, formatted-ready (billions). */
export function totalTokens(period: Period): number {
  return apps.reduce((sum, a) => sum + tokensForPeriod(a, period), 0);
}

/**
 * Illustrative revenue for a given app and period, in USD. Derived from the
 * app's model price rather than tracked directly — on purpose, so the
 * revenue view can rank differently than the tokens view (cheaper
 * open-weight models can carry huge token share but a small revenue share,
 * and vice versa for pricier closed models).
 */
export function revenueForPeriod(app: RankedApp, period: Period): number {
  return tokensForPeriod(app, period) * 1000 * app.model.pricePerMTok;
}

/** Total illustrative revenue across all apps for a period, in USD. */
export function totalRevenue(period: Period): number {
  return apps.reduce((sum, a) => sum + revenueForPeriod(a, period), 0);
}

export type RankBy = "tokens" | "revenue";

/** Apps sorted for display by the chosen metric and period. */
export function sortApps(
  list: RankedApp[],
  rankBy: RankBy,
  period: Period,
): RankedApp[] {
  const metric = rankBy === "tokens" ? tokensForPeriod : revenueForPeriod;
  return list.slice().sort((a, b) => metric(b, period) - metric(a, period));
}

export interface AppFilters {
  query: string;
  license: License | "all";
  region: Region | "all";
}

export const DEFAULT_FILTERS: AppFilters = {
  query: "",
  license: "all",
  region: "all",
};

/** Apply search/license/region filters to the ranked list. */
export function filterApps(list: RankedApp[], filters: AppFilters): RankedApp[] {
  const q = filters.query.trim().toLowerCase();
  return list.filter((app) => {
    if (filters.license !== "all" && app.model.license !== filters.license) return false;
    if (filters.region !== "all" && app.model.region !== filters.region) return false;
    if (q && !app.name.toLowerCase().includes(q) && !app.description.toLowerCase().includes(q)) {
      return false;
    }
    return true;
  });
}

export const LICENSE_OPTIONS: { id: License | "all"; label: string }[] = [
  { id: "all", label: "All licenses" },
  { id: "open", label: "Open-weight" },
  { id: "closed", label: "Closed" },
];

export const REGION_OPTIONS: { id: Region | "all"; label: string }[] = [
  { id: "all", label: "All origins" },
  { id: "US", label: "United States" },
  { id: "China", label: "China" },
  { id: "EU", label: "Europe" },
  { id: "Multi", label: "Multi-model" },
];

export interface FeaturedCategory {
  title: string;
  category: Category;
  tint: Tint;
  blurb: string;
}

export const FEATURED: FeaturedCategory[] = [
  {
    title: "Top Coding Agents",
    category: "Programming",
    tint: "purple",
    blurb: "Agents that read, write, and ship real code.",
  },
  {
    title: "Top Roleplay Apps",
    category: "Roleplay",
    tint: "orange",
    blurb: "Immersive characters, worlds, and stories.",
  },
  {
    title: "Top Chat Clients",
    category: "Chat",
    tint: "blue",
    blurb: "Bring your own key and chat anywhere.",
  },
  {
    title: "Top Writing Tools",
    category: "Writing",
    tint: "green",
    blurb: "Drafting, editing, and ideation, accelerated.",
  },
];

/** The highest-ranked app within a category (apps are pre-sorted). */
export function leaderFor(category: Category): RankedApp {
  return apps.find((a) => a.category === category)!;
}

/** Number of ranked apps within a category. */
export function countFor(category: Category): number {
  return apps.filter((a) => a.category === category).length;
}

/** Tailwind class sets per tint — literal strings so the compiler keeps them. */
export const TINT_CLASSES: Record<
  Tint,
  { bg: string; text: string; ring: string; border: string }
> = {
  blue: {
    bg: "bg-tint-blue",
    text: "text-accent-blue",
    ring: "ring-accent-blue/15",
    border: "border-accent-blue/45 hover:border-accent-blue/80",
  },
  green: {
    bg: "bg-tint-green",
    text: "text-accent-green",
    ring: "ring-accent-green/15",
    border: "border-accent-green/45 hover:border-accent-green/80",
  },
  orange: {
    bg: "bg-tint-orange",
    text: "text-accent-orange",
    ring: "ring-accent-orange/15",
    border: "border-accent-orange/45 hover:border-accent-orange/80",
  },
  purple: {
    bg: "bg-tint-purple",
    text: "text-accent-purple",
    ring: "ring-accent-purple/20",
    border: "border-accent-purple/50 hover:border-accent-purple/80",
  },
};
