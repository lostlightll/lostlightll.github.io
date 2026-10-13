import { getCollection, type CollectionEntry } from 'astro:content';

export interface Chapter {
    post: CollectionEntry<'posts'>;
    no: number;
    label: string;
    minutes: number;
    href: string;
}

const CJK = /[㐀-鿿豈-﫿]/g;

function readingMinutes(text: string) {
    const cjk = text.match(CJK)?.length ?? 0;
    const words = text.replace(CJK, ' ').match(/[A-Za-z0-9]+/g)?.length ?? 0;
    return Math.max(1, Math.round(cjk / 400 + words / 220));
}

export async function getChapters(): Promise<Chapter[]> {
    const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
    posts.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf() || a.id.localeCompare(b.id));
    return posts
        .map((post, i) => ({
            post,
            no: i + 1,
            label: String(i + 1).padStart(2, '0'),
            minutes: readingMinutes(post.body ?? ''),
            href: `/posts/${post.id}/`,
        }))
        .reverse();
}

export function groupByYear(chapters: Chapter[]) {
    const volumes = new Map<number, Chapter[]>();
    for (const chapter of chapters) {
        const year = chapter.post.data.date.getUTCFullYear();
        volumes.set(year, [...(volumes.get(year) ?? []), chapter]);
    }
    return [...volumes];
}

export const formatDate = (d: Date) =>
    [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()].map((n) => String(n).padStart(2, '0')).join('.');
