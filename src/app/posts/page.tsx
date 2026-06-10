import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-[calc(100vh-8rem)] py-20 px-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold tracking-tight">文章</h1>
            {posts.length > 0 && (
              <span className="text-sm text-zinc-500 dark:text-zinc-500 tabular-nums">
                共 {posts.length} 篇
              </span>
            )}
          </div>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-transparent" />
        </header>

        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Link
                  href={`/posts/${post.slug}`}
                  className="group block rounded-xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-4 text-sm">
                    {/* Date */}
                    <time className="shrink-0 tabular-nums text-zinc-400 dark:text-zinc-500">
                      {post.date}
                    </time>

                    {/* Separator */}
                    <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                    {/* Reading time */}
                    <span className="inline-flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      约 {post.readingTime} 分钟
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>

                  {post.description && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md border border-zinc-200/80 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 transition-colors group-hover:border-zinc-300 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          返回首页
        </Link>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 px-6 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400 dark:text-zinc-600"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
        </svg>
      </div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
        暂无文章，稍后再来看看。
      </p>
    </div>
  );
}
