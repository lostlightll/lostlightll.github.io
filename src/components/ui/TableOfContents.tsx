"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";

interface Props {
  headings: Heading[];
}

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" },
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block" aria-label="文章目录">
      <div className="fixed top-28 max-w-[220px]">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          目录
        </h4>
        <ul className="space-y-1.5 border-l border-zinc-200 dark:border-zinc-800">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block py-0.5 text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                  h.level === 3 ? "pl-5" : "pl-3"
                } ${
                  activeId === h.id
                    ? "border-l -ml-px border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-zinc-400 dark:text-zinc-500"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
