import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold tracking-tight mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
    p: ({ children }) => <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 text-zinc-600 dark:text-zinc-400 mb-4">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    code: ({ children }) => (
      <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-800 dark:text-zinc-200">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-500 dark:text-zinc-400 mb-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
