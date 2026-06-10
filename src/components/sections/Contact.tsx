import { siteConfig } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" title="联系">
      <div className="max-w-md">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          有有趣的想法想交流，或者只是打个招呼，随时联系。
        </p>
        <div className="mt-6 flex items-center gap-6">
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          )}
          {siteConfig.social.email && (
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {siteConfig.social.email}
            </a>
          )}
          {siteConfig.social.bilibili && (
            <a
              href={siteConfig.social.bilibili}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#E5547F] dark:hover:text-[#FC8EAC] transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#FB7299] shrink-0">
                <path d="M17.813 4.653h.854c1.51.054 2.751 1.031 2.965 2.52.044.307.055.618.055.932v7.61c0 .315-.011.626-.055.933-.214 1.489-1.456 2.466-2.965 2.52-.097.003-.193.006-.29.007H5.623c-.097 0-.193-.004-.29-.007-1.51-.054-2.751-1.031-2.965-2.52a5.316 5.316 0 0 1-.055-.933v-7.61c0-.314.011-.625.055-.932.214-1.489 1.456-2.466 2.965-2.52C5.43 4.65 5.527 4.647 5.623 4.647h.854l-.003-.004-.446-.595a.682.682 0 0 1 .108-.865l.01-.008.02-.014.026-.018a.66.66 0 0 1 .079-.045.673.673 0 0 1 .058-.024c.014-.005.024-.003.034-.01.04-.013.08-.013.121-.013h1.421a.655.655 0 0 1 .435.151c.027.022.045.05.068.078l.031.041.44.59c.2.255.344.397.522.478.178.081.36.122.548.135.188.012.379.002.575-.005.196-.007.398-.015.612-.015h4.812v-.003c.209 0 .408.008.602.015.196.007.387.017.575.005.188-.013.37-.054.548-.135.178-.08.322-.223.521-.478l.441-.59.031-.04c.023-.03.041-.057.068-.08a.654.654 0 0 1 .435-.15h1.422c.04 0 .08 0 .12.013.011.007.02.005.035.01.02.007.04.015.058.024a.66.66 0 0 1 .08.046l.02.013.01.009.021.013a.683.683 0 0 1 .107.865zM8.39 10.893l-.005.071c-.017.284-.09.509-.233.683-.098.118-.223.201-.386.254a.597.597 0 0 1-.044.047c-.11.104-.188.235-.188.458 0 .24.045.395.156.506l.032.03a.53.53 0 0 1 .094.101.603.603 0 0 0 .336.227c.338.109.612.365.841.784.228.42.337.933.352 1.567l.003.116h2.117l.009-.153c.037-.664.162-1.2.402-1.633.24-.434.543-.707.935-.844a.696.696 0 0 0 .41-.33.605.605 0 0 1 .047-.063c.077-.097.126-.197.144-.363.027-.248-.039-.423-.109-.513a.698.698 0 0 0-.045-.047c-.14-.14-.216-.296-.225-.534-.01-.242.067-.399.192-.517.017-.016.033-.03.044-.047.163-.174.233-.399.216-.683a1.184 1.184 0 0 0-.152-.475 1.015 1.015 0 0 0-.336-.338l-.005-.003a.681.681 0 0 1-.319-.54c-.043-.319-.247-.564-.563-.712-.316-.148-.743-.22-1.306-.22h-2.082c-.605 0-1.056.08-1.385.248-.328.168-.512.432-.53.82a.658.658 0 0 1-.18.47c-.037.04-.069.084-.097.13a.753.753 0 0 1-.212.218c-.14.085-.283.166-.44.255a1.11 1.11 0 0 0-.29.243 1.03 1.03 0 0 0-.253.406z" />
              </svg>
              哔哩哔哩
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
