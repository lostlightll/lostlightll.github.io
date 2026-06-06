import { SiteConfig, Hero, About, Project, SkillGroup, Contact } from "./types";

export const siteConfig: SiteConfig = {
  title: "Lost Light",
  description: "Personal website of Lost Light",
  author: "Lost Light",
  locale: "zh-CN",
  social: {
    github: "https://github.com/lostlightll",
    email: "lostlight@example.com",
  },
};

export const hero: Hero = {
  name: "Lost Light",
  tagline: "写代码，也写人生",
  description:
    "一个在全栈世界里寻找光的人。喜欢把复杂问题拆成小模块，再一个一个温柔地解决。",
  actions: [
    { label: "查看项目", href: "#projects", primary: true },
    { label: "联系我", href: "#contact" },
  ],
};

export const about: About = {
  description: [
    "你好，我是 Lost Light。",
    "全栈开发者，偏向前端和 Node.js。热衷于构建干净的架构和可维护的代码。",
    "相信技术应该服务生活，代码应该有人味儿。工作之外喜欢摄影、游戏，偶尔写点东西。",
  ],
  details: [
    { label: "所在地", value: "中国 · 深圳" },
    { label: "技术栈", value: "TypeScript / React / Next.js / Node.js" },
    { label: "状态", value: "开放合作中" },
  ],
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "一个轻量级的全栈应用，前端 Next.js，后端 Node.js + PostgreSQL。",
    github: "https://github.com/lostlightll/project-alpha",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Project Beta",
    description: "个人博客系统，支持 Markdown 写作和静态生成。",
    url: "https://example.com",
    github: "https://github.com/lostlightll/project-beta",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
  {
    title: "Project Gamma",
    description: "CLI 工具，用于快速生成项目模板和自动化脚本。",
    github: "https://github.com/lostlightll/project-gamma",
    tags: ["Node.js", "CLI", "TypeScript"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "前端",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue"],
  },
  {
    category: "后端",
    items: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "工具",
    items: ["Git", "Docker", "VS Code", "Figma", "Linux"],
  },
];

export const contact: Contact = {
  title: "来聊聊",
  description:
    "如果你有有趣的项目想合作，或者只是想打个招呼，随时联系我。",
};
