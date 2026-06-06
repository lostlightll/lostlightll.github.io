import { about } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" title="关于" subtitle="Who I am">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {about.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-4">
          {about.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {detail.label}
              </dt>
              <dd className="mt-1 text-zinc-900 dark:text-zinc-100">
                {detail.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
