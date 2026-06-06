import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

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

  return (
    <div className="min-h-[calc(100vh-8rem)] py-20 px-6">
      <article className="mx-auto max-w-2xl">
        <header className="mb-8">
          <time className="text-sm text-zinc-400 dark:text-zinc-500">
            {post.meta.date}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            {post.meta.title}
          </h1>
          {post.meta.description && (
            <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
              {post.meta.description}
            </p>
          )}
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {post.content}
          </pre>
        </div>
        <Link
          href="/posts"
          className="mt-12 inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← 返回文章列表
        </Link>
      </article>
    </div>
  );
}