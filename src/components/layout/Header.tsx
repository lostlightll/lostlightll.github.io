"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "/about", label: "关于" },
  { href: "/posts", label: "文章" },
  { href: "/#projects", label: "项目" },
  { href: "/#contact", label: "联系" },
];

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const html = document.documentElement;
    const next = !html.classList.contains("dark");
    if (next) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/85 backdrop-blur-md dark:bg-zinc-950/85 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto max-w-5xl flex items-center justify-between h-14 px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
        >
          {siteConfig.title}
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-1 p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="切换暗色模式"
            type="button"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
