export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center px-6">
      {/* full-bleed background — breaks out of max-w-5xl parent */}
      <div className="absolute inset-0 -z-20 -mx-[calc((100vw-100%)/2)] w-[100vw]">
        <img
          src="/full_kha1ed_3.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center blur-sm"
          style={{
            transform: "scale(1.5) translate(-10%, 18%)",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 97%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 97%)",
          }}
        />
        <div className="absolute inset-0 bg-zinc-50/70 dark:bg-zinc-950/55" />
        <div className="absolute top-full left-0 right-0 h-[50vh] bg-gradient-to-b from-zinc-50/70 via-zinc-50/30 to-transparent dark:from-zinc-950/55 dark:via-zinc-950/15 dark:to-transparent" />
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="max-w-xl flex-shrink-0 animate-fade-up">
          <img
            src="/avatar.png"
            alt="Kha1ed"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover mb-8 ring-1 ring-zinc-200 dark:ring-zinc-800"
          />

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Kha1ed
          </h1>

          <p className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-200/75 tracking-wide uppercase">
            Nyx / Nyxlium / Lost Light
          </p>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-300/70 leading-relaxed max-w-lg">
            业余开发者，目前主要维护逆战未来维基 Fork。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* 主操作：实色填充 */}
            <a
              href="/posts"
              className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-zinc-900/20 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-zinc-100/10 dark:hover:shadow-lg dark:hover:shadow-zinc-100/20 motion-reduce:transition-none cursor-pointer"
            >
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
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              查看文章
            </a>

            {/* GitHub：实色浅灰 */}
            <a
              href="https://github.com/lostlightll"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/50 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-zinc-300/60 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-zinc-950/30 dark:hover:shadow-lg dark:hover:shadow-black/40 motion-reduce:transition-none cursor-pointer"
            >
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
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              查看仓库
            </a>

            {/* B站：浅色极浅粉底+深粉字，暗色 B站原色+白字 */}
            <a
              href="https://space.bilibili.com/3494356482787443"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#FDE8EE] px-5 py-2.5 text-sm font-medium text-[#B03058] shadow-sm shadow-[#FBC8D6]/50 transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#FBD5E0] hover:shadow-md hover:shadow-[#F5A5BB]/40 dark:bg-[#FB7299] dark:text-white dark:shadow-[#FB7299]/25 dark:hover:bg-[#FC8EAC] dark:hover:shadow-lg dark:hover:shadow-[#FB7299]/30 motion-reduce:transition-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.813 4.653h.854c1.51.054 2.751 1.031 2.965 2.52.044.307.055.618.055.932v7.61c0 .315-.011.626-.055.933-.214 1.489-1.456 2.466-2.965 2.52-.097.003-.193.006-.29.007H5.623c-.097 0-.193-.004-.29-.007-1.51-.054-2.751-1.031-2.965-2.52a5.316 5.316 0 0 1-.055-.933v-7.61c0-.314.011-.625.055-.932.214-1.489 1.456-2.466 2.965-2.52C5.43 4.65 5.527 4.647 5.623 4.647h.854l-.003-.004-.446-.595a.682.682 0 0 1 .108-.865l.01-.008.02-.014.026-.018a.66.66 0 0 1 .079-.045.673.673 0 0 1 .058-.024c.014-.005.024-.003.034-.01.04-.013.08-.013.121-.013h1.421a.655.655 0 0 1 .435.151c.027.022.045.05.068.078l.031.041.44.59c.2.255.344.397.522.478.178.081.36.122.548.135.188.012.379.002.575-.005.196-.007.398-.015.612-.015h4.812v-.003c.209 0 .408.008.602.015.196.007.387.017.575.005.188-.013.37-.054.548-.135.178-.08.322-.223.521-.478l.441-.59.031-.04c.023-.03.041-.057.068-.08a.654.654 0 0 1 .435-.15h1.422c.04 0 .08 0 .12.013.011.007.02.005.035.01.02.007.04.015.058.024a.66.66 0 0 1 .08.046l.02.013.01.009.021.013a.683.683 0 0 1 .107.865zM8.39 10.893l-.005.071c-.017.284-.09.509-.233.683-.098.118-.223.201-.386.254a.597.597 0 0 1-.044.047c-.11.104-.188.235-.188.458 0 .24.045.395.156.506l.032.03a.53.53 0 0 1 .094.101.603.603 0 0 0 .336.227c.338.109.612.365.841.784.228.42.337.933.352 1.567l.003.116h2.117l.009-.153c.037-.664.162-1.2.402-1.633.24-.434.543-.707.935-.844a.696.696 0 0 0 .41-.33.605.605 0 0 1 .047-.063c.077-.097.126-.197.144-.363.027-.248-.039-.423-.109-.513a.698.698 0 0 0-.045-.047c-.14-.14-.216-.296-.225-.534-.01-.242.067-.399.192-.517.017-.016.033-.03.044-.047.163-.174.233-.399.216-.683a1.184 1.184 0 0 0-.152-.475 1.015 1.015 0 0 0-.336-.338l-.005-.003a.681.681 0 0 1-.319-.54c-.043-.319-.247-.564-.563-.712-.316-.148-.743-.22-1.306-.22h-2.082c-.605 0-1.056.08-1.385.248-.328.168-.512.432-.53.82a.658.658 0 0 1-.18.47c-.037.04-.069.084-.097.13a.753.753 0 0 1-.212.218c-.14.085-.283.166-.44.255a1.11 1.11 0 0 0-.29.243 1.03 1.03 0 0 0-.253.406z" />
              </svg>
              哔哩哔哩
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
