import type { Metadata } from "next";
import { siteConfig } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const script = `
  (function() {
    try {
      var s = localStorage.getItem("theme");
      var d = document.documentElement;
      if (s === "dark" || (!s && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        d.classList.add("dark");
      } else if (s === "light") {
        d.classList.remove("dark");
      }
    } catch(e) {}
  })();
`;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning className="scroll-smooth scroll-pt-14">
      <head>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <Header />
        <main className="mx-auto max-w-5xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
