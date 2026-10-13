// 从 Google Fonts 按固定文字拉取思源宋体 Heavy 子集：pnpm font:title [文字]
import { writeFile } from 'node:fs/promises';

const text = process.argv[2] ?? '幻想延续';
const out = new URL('../public/fonts/title-serif.woff2', import.meta.url);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&text=${encodeURIComponent(text)}`;
const css = await (await fetch(cssUrl, { headers: { 'User-Agent': UA } })).text();
const fontUrl = css.match(/url\((https:[^)]+)\)\s*format\('woff2'\)/)?.[1];
if (!fontUrl) throw new Error(`没有拿到 woff2 地址：\n${css}`);

const font = Buffer.from(await (await fetch(fontUrl)).arrayBuffer());
await writeFile(out, font);
console.log(`「${text}」→ public/fonts/title-serif.woff2（${(font.length / 1024).toFixed(1)} KB）`);
