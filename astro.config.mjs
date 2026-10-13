// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import subsetDisplayFont from './integrations/subset-display-font.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://lostlightll.github.io',
    compressHTML: false,
    integrations: [sitemap(), subsetDisplayFont()],
    markdown: {
        shikiConfig: {
            themes: { light: 'github-light', dark: 'github-dark' },
        },
    },
});
