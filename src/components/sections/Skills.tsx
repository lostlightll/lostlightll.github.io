import { skills } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function SkillsSection() {
  return (
    <Section id="skills" title="技能" subtitle="Tech I work with">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold text-lg mb-3">{group.category}</h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-600 dark:text-zinc-400 before:content-['—'] before:mr-2 before:text-zinc-400 dark:before:text-zinc-600"
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
