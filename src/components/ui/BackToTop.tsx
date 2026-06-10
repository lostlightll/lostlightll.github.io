"use client";

import { useCallback, useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="回到顶部"
      className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/90 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-500 dark:text-zinc-400"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
