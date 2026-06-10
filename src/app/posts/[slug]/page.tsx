import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, type PostMeta } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const components = useMDXComponents({});
  const { meta, content, headings } = post;

  return (
    <>
      <ReadingProgress />

      <div className="min-h-[calc(100vh-8rem)] py-20 px-6">
        <article className="mx-auto max-w-2xl">
          {/* Header */}
          <header className="mb-10">
            {/* Meta row */}
            <div className="flex items-center gap-3 text-sm">
              <time className="tabular-nums text-zinc-400 dark:text-zinc-500">
                {meta.date}
              </time>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
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
                约 {meta.readingTime} 分钟 · {meta.wordCount} 字
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {meta.title}
            </h1>

            {/* Description */}
            {meta.description && (
              <p className="mt-3 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                {meta.description}
              </p>
            )}

            {/* Tags */}
            {meta.tags && meta.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="mt-8 h-px bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-zinc-800 dark:via-zinc-800/50" />
          </header>

          {/* TOC — desktop sidebar */}
          <TableOfContents headings={headings} />

          {/* Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <MDXRemote source={content} components={components} />
          </div>

          {/* Footer — Author & Navigation */}
          <footer className="mt-16 space-y-10">
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-lg font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                {siteConfig.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {siteConfig.author}
                </p>
                <div className="mt-0.5 flex items-center gap-3 text-sm">
                  {siteConfig.social.github && (
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                    >
                      GitHub
                    </a>
                  )}
                  {siteConfig.social.email && (
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                    >
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <nav className="grid gap-4 sm:grid-cols-2" aria-label="文章导航">
              {prev ? (
                <PostNavLink post={prev} direction="prev" />
              ) : (
                <div />
              )}
              {next ? (
                <PostNavLink post={next} direction="next" />
              ) : (
                <div />
              )}
            </nav>
          </footer>
        </article>
      </div>

      <BackToTop />
    </>
  );
}

function PostNavLink({
  post,
  direction,
}: {
  post: PostMeta;
  direction: "prev" | "next";
}) {
  const isPrev = direction === "prev";

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={`group flex flex-col rounded-lg border border-zinc-200/80 bg-white p-4 transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 ${
        isPrev ? "" : "text-right"
      }`}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        {isPrev ? "← 上一篇" : "下一篇 →"}
      </span>
      <span className="mt-1 text-sm font-medium text-zinc-700 transition-colors group-hover:text-blue-600 dark:text-zinc-300 dark:group-hover:text-blue-400 line-clamp-1">
        {post.title}
      </span>
    </Link>
  );
}
