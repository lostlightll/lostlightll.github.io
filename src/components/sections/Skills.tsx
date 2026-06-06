import { Section } from "@/components/ui/Section";

const skills = [
  {
    category: "语言",
    items: ["Java", "C++", "TypeScript", "JavaScript", "HTML / CSS"],
  },
  {
    category: "框架与工具",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    category: "AI / LLM",
    items: ["Claude Code", "CodeX", "Prompt Engineering"],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" title="技能">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
            <h3 className="font-semibold text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-4">
              {group.category}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
