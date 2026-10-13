import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getChapters } from '../utils/posts';

export async function GET(context: APIContext) {
    const chapters = await getChapters();
    return rss({
        title: '幻想延续',
        description: '幻想的个人连载。Student, occasional developer.',
        site: context.site ?? 'https://lostlightll.github.io',
        items: chapters.map(({ post, label, href }) => ({
            title: `第 ${label} 话 · ${post.data.title}`,
            pubDate: post.data.date,
            description: post.data.description,
            categories: post.data.tags,
            link: href,
        })),
        customData: '<language>zh-cn</language>',
    });
}
