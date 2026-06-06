import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {siteConfig.social.github && (
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              GitHub
            </a>
          )}
          {siteConfig.social.email && (
            <a href={`mailto:${siteConfig.social.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
