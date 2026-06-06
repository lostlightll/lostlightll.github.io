import { hero } from "@/data/content";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 pt-16">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          {hero.name}
        </h1>
        <p className="mt-4 text-2xl text-zinc-500 dark:text-zinc-400 font-light">
          {hero.tagline}
        </p>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {hero.description}
        </p>
        <div className="mt-8 flex gap-4">
          {hero.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                action.primary
                  ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
