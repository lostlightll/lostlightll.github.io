import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-[calc(100vh-8rem)] py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">文章</h1>
        {posts.length === 0 ? (
          <p className="mt-8 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            暂无文章。
          </p>
        ) : (
          <div className="mt-8 space-y-6">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="group block rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <time className="text-sm text-zinc-400 dark:text-zinc-500">
                    {post.date}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400"
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
          className="mt-8 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
