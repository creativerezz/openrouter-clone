import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "App & Agent Rankings | OpenRouter",
  description:
    "The largest public apps and agents using OpenRouter, ranked by token usage. A unified interface for every LLM.",
  metadataBase: new URL("https://openrouter.ai"),
  openGraph: {
    title: "App & Agent Rankings | OpenRouter",
    description:
      "The largest public apps and agents using OpenRouter, ranked by token usage.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

// Runs before first paint to set the theme class — prevents a light/dark flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
