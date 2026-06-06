import { projects } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function ProjectsSection() {
  return (
    <Section id="projects" title="项目" subtitle="Things I&apos;ve built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
