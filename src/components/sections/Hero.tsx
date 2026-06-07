export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center px-6">
      {/* full-bleed background — breaks out of max-w-5xl parent */}
      <div className="absolute inset-0 -z-20 -mx-[calc((100vw-100%)/2)] w-[100vw]">
        <img
          src="/full_kha1ed_3.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center blur-sm"
          style={{
            transform: "scale(1.5) translate(-10%, 18%)",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 97%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 97%)",
          }}
        />
        <div className="absolute inset-0 bg-[#787877]/35 dark:bg-zinc-950/55" />
        <div className="absolute top-full left-0 right-0 h-[50vh] bg-gradient-to-b from-[#787877]/35 via-[#787877]/15 to-transparent dark:from-zinc-950/55 dark:via-zinc-950/15 dark:to-transparent" />
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="max-w-xl flex-shrink-0 animate-fade-up">
          <img
            src="/avatar.png"
            alt="Kha1ed"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover mb-8 ring-1 ring-zinc-200 dark:ring-zinc-800"
          />

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Kha1ed
          </h1>

          <p className="mt-2 text-sm font-semibold text-zinc-800/80 dark:text-zinc-200/75 tracking-wide uppercase">
            Nyx / Nyxlium / Lost Light
          </p>

          <p className="mt-6 text-base text-zinc-800/70 dark:text-zinc-200/65 leading-relaxed max-w-lg">
            业余开发者，目前主要维护逆战未来维基 Fork。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/posts"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              查看文章
            </a>
            <a
              href="https://github.com/lostlightll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-800/70 dark:text-zinc-200/65 hover:border-zinc-500 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              查看仓库
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
