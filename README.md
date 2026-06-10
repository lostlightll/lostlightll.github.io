# [Kha1ed](https://lostlightll.github.io)

个人站点 & 博客。Next.js 16 + Tailwind CSS 4，静态导出到 GitHub Pages。

## 技术栈

- **框架**: Next.js 16 (Turbopack)
- **样式**: Tailwind CSS 4
- **内容**: MDX (`@next/mdx` + `next-mdx-remote`)
- **部署**: GitHub Pages (`output: "export"`)
- **维护**: Claude Code

## 开发

```bash
npm run dev      # 本地开发 (Turbopack)
npm run build    # 静态导出 → out/
npm run lint     # ESLint
```

## 写文章

在 `src/content/posts/` 下添加 `.mdx` 文件：

```mdx
---
title: "标题"
date: 2026-06-11
description: "简短描述"
tags: ["标签1", "标签2"]
---

内容写这里。
```
