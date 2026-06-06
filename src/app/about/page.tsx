import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">关于</h1>
        <p className="mt-8 text-zinc-500 dark:text-zinc-400 leading-relaxed">
          内容待补充。
        </p>
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
