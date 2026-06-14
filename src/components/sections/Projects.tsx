import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

interface Project {
  title: string;
  description: string;
  github: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "nzm-wiki",
    description: "NZM Wiki — Fork 项目，逆战：未来游戏数据百科。",
    github: "https://github.com/lostlightll/nzm-wiki",
    tags: ["Wiki", "Fork"],
  },
  {
    title: "NyxMediaTools",
    description: "致敬小丸工具箱，视频处理 GUI 工具（名字待定）。",
    github: "https://github.com/lostlightll/NyxMediaTools",
    tags: ["WinUI 3", ".NET 9", "C#", "FFmpeg"],
  },
  {
    title: "lostlightll.github.io",
    description: "本网站。基于 Next.js + Tailwind CSS。",
    github: "https://github.com/lostlightll/lostlightll.github.io",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 motion-reduce:transition-none cursor-pointer animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header — icon + title + GitHub link */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Project icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-sm font-bold text-zinc-500 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 dark:group-hover:border-zinc-600 dark:group-hover:text-zinc-400">
            {project.title.charAt(0).toUpperCase()}
          </div>
          <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {project.title}
          </h3>
        </div>

        {/* External link icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-zinc-400 transition-colors group-hover:text-blue-500 dark:text-zinc-600 dark:group-hover:text-blue-400"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects" title="项目">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
