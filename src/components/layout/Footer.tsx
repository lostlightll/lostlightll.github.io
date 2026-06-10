import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500 dark:text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.author}.{" "}
          <span className="text-zinc-400 dark:text-zinc-600">·</span>{" "}
          头像来源：{" "}
          <a
            href="https://www.pixiv.net/artworks/137933273"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            Pixiv #137933273
          </a>
        </p>
        <div className="flex items-center gap-5">
          <a href="/posts" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer">
            文章
          </a>
          {siteConfig.social.github && (
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer">
              GitHub
            </a>
          )}
          {siteConfig.social.email && (
            <a href={`mailto:${siteConfig.social.email}`} className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer">
              Email
            </a>
          )}
          {siteConfig.social.bilibili && (
            <a href={siteConfig.social.bilibili} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer">
              B站
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
