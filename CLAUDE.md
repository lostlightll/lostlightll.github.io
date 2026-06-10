# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal site & blog for Kha1ed (Nyx). Static-export Next.js 16 + Tailwind CSS 4 + MDX, deployed to GitHub Pages.

## Critical: Next.js 16

This is **Next.js 16 (Turbopack)**, not the Next.js you know. Breaking changes exist. Before writing framework-specific code, check `node_modules/next/dist/docs/` for relevant guides. Heed deprecation notices.

## Commands

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Static export → out/
npm run lint     # ESLint
```

No test runner configured.

## Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout: <html>, theme script, Header, Footer
│   ├── page.tsx              # Home: Hero → About → Projects → Skills → Contact
│   ├── about/page.tsx        # /about (placeholder)
│   ├── posts/
│   │   ├── page.tsx          # /posts — article list
│   │   └── [slug]/page.tsx   # /posts/[slug] — MDX article detail (SSG)
│   └── globals.css           # Tailwind v4 + custom @theme (animate-fade-up, animate-reveal)
├── components/
│   ├── layout/               # Header (fixed, backdrop-blur), Footer
│   ├── sections/             # Homepage sections: Hero, About, Projects, Skills, Contact
│   └── ui/                   # Reusable: Badge, Section, ReadingProgress, BackToTop, TableOfContents
├── content/
│   └── posts/*.mdx           # Blog posts (gray-matter frontmatter)
├── lib/
│   └── posts.ts              # MDX parsing: getAllPosts, getPostBySlug, reading time, heading extraction
└── data/
    ├── types.ts              # SiteConfig interface
    └── content.ts            # Site metadata (title, author, social links)
```

## Key Constraints

- **`output: "export"`** — No SSR, no API routes, no `next/headers`. All pages are static HTML. Dynamic routes must use `generateStaticParams`.
- **Images** are unoptimized (`images.unoptimized: true`) — GitHub Pages can't run the image optimizer.
- **MDX** uses `@next/mdx` for compilation + `next-mdx-remote/rsc` for rendering in server components. Override components in `src/mdx-components.tsx`.
- **Page extensions** configured: `js, jsx, md, mdx, ts, tsx`.

## Design Conventions

- **Colors**: Zinc scale (`zinc-50` through `zinc-950`), blue accent for interactive states
- **Dark mode**: `class="dark"` on `<html>`, persisted in `localStorage("theme")`, resolved in `<script>` before paint
- **Fixed header**: `h-14`, `backdrop-blur-md`, `z-50`. Main content padded with `min-h-[calc(100vh-3.5rem)]`
- **Container**: `<main>` uses `max-w-5xl`, individual pages may narrow further (`max-w-2xl` for articles)
- **Custom animations** in `globals.css`: `animate-fade-up` (opacity + translateY), `animate-reveal` (blur + scale). Always respect `motion-reduce`.
- **Icons**: Inline SVG only, no icon library. 16×16 or 24×24 viewBox.
- **Content width**: `<main className="mx-auto max-w-5xl">` in root layout — sections don't need their own container.

## MDX Post Format

```mdx
---
title: "文章标题"
date: 2026-01-15
description: "简短描述"
tags: ["标签1", "标签2"]
---

Content in Markdown. h2/h3 get auto-generated IDs for TOC linking.
```

## Site Config

Edit `src/data/content.ts` to change title, author, social links. The `SiteConfig` type is in `src/data/types.ts`.

## Git Commit Style

按模块拆分提交，每个逻辑变更组独立 commit：

- 一个功能 / 一个组件 / 一个文件组 = 一次 commit
- 不要把所有改动塞进一个大 commit
- Commit message 用中文描述做了什么（如 `优化 Hero 按钮样式`、`重写 CLAUDE.md 与 README`）
- 结尾统一加 `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`

## Project Memory

This project is maintained by Claude Code. See memory at `C:\Users\Nyx\.claude\projects\D--Claude-lostlightll-github-io\memory\`.
