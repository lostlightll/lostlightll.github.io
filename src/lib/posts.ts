import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  readingTime: number; // minutes
  wordCount: number;
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

function extractHeadings(raw: string): Heading[] {
  const re = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(raw)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w一-鿿]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ level, text, id });
  }
  return headings;
}

function calcReadingTime(text: string): { minutes: number; chars: number } {
  // Chinese: strip whitespace, count characters (~300 chars/min for technical reading)
  const cleaned = text.replace(/\s/g, '');
  const chars = cleaned.length;
  const minutes = Math.max(1, Math.ceil(chars / 300));
  return { minutes, chars };
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string; headings: Heading[] } | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { minutes, chars } = calcReadingTime(content);
  const headings = extractHeadings(content);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString().slice(0, 10) : '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      readingTime: minutes,
      wordCount: chars,
    },
    content,
    headings,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const full = getPostBySlug(slug);
      return full?.meta ?? null;
    })
    .filter((p): p is PostMeta => p !== null);
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
