import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const ASCII = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
const PUNCTUATION = '，。、；：？！“”‘’（）《》【】—…·';

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else if (/\.(html|css)$/.test(entry.name)) yield full;
    }
}

/** 构建后扫描产物里出现的所有字符，把展示字体裁成子集，覆盖 dist 中的原文件。 */
export default function subsetDisplayFont({ font = 'fonts/smiley-sans.woff2' } = {}) {
    return {
        name: 'subset-display-font',
        hooks: {
            'astro:build:done': async ({ dir, logger }) => {
                const outDir = fileURLToPath(dir);
                const chars = new Set(ASCII + PUNCTUATION);
                for await (const file of walk(outDir)) {
                    const text = (await readFile(file, 'utf8')).replace(/<[^>]+>/g, '');
                    for (const char of text) chars.add(char);
                }

                const target = path.join(outDir, font);
                const source = await readFile(target);
                const subset = await subsetFont(source, [...chars].join(''), { targetFormat: 'woff2' });
                await writeFile(target, subset);

                const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
                logger.info(`${chars.size} 个字符：${kb(source.length)} → ${kb(subset.length)}`);
            },
        },
    };
}
