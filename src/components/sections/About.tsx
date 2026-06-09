import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" title="关于">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>你好，我是 Kha1ed</p>
          <p>
            喜欢玩各种各样的游戏。Apex猎杀，CS2完美S，5E3000分。
          </p>
          <p>
            开发可能只是兴趣爱好，了解的不多。主力工具VSCode+ClaudeCode。
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">常用 ID</dt>
            <dd className="mt-1 text-zinc-900 dark:text-zinc-100">Kha1ed / Nyx / Nyxlium</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">所在地</dt>
            <dd className="mt-1 text-zinc-900 dark:text-zinc-100">中国</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">主力工具</dt>
            <dd className="mt-1 text-zinc-900 dark:text-zinc-100">VSCode ClaudeCode</dd>
          </div>
        </div>
      </div>
    </Section>
  );
}
