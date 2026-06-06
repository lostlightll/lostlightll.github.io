import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const projects = [
  {
    title: "nzm-wiki",
    description: "NZM Wiki — Fork 项目。",
    github: "https://github.com/lostlightll/nzm-wiki",
    tags: ["Wiki", "Fork"],
  },
  {
    title: "lostlightll.github.io",
    description: "本网站。基于 Next.js + Tailwind CSS，CodeX 工作流构建。",
    github: "https://github.com/lostlightll/lostlightll.github.io",
    tags: ["Next.js", "Tailwind CSS", "CodeX"],
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" title="项目">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer block"
          >
            <h3 className="font-semibold text-lg group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
