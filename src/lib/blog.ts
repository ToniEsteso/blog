import { getCollection, render } from "astro:content";
import type { CollectionEntry } from "astro:content";

export interface Post {
  slug: string;
  url: string;
  title: string;
  description: string;
  pubDate: Date;
  category: string;
  readingTime: number;
}

export interface PostDetail extends Post {
  Content: Awaited<ReturnType<typeof render>>["Content"];
}

function toSlug(id: string): string {
  return id.split("/").pop()!.replace(".md", "");
}

function estimateReadingTime(markdown: string): number {
  let text = markdown.replace(/^---[\s\S]*?---/, "");
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`[^`]+`/g, "");
  text = text.replace(/<[^>]+>/g, "");
  text = text.replace(/!?\[[^\]]*\]\([^)]*\)/g, "");
  text = text.replace(/!?\[[^\]]*\]\[[^\]]*\]/g, "");
  text = text.replace(/[*_#~>-]/g, "");
  const words = text.trim().split(/\s+/).filter(Boolean);
  return Math.ceil(words.length / 200);
}

function toPost(entry: CollectionEntry<"blog">): Post {
  const slug = toSlug(entry.id);
  return {
    slug,
    url: `/blog/${slug}`,
    title: entry.data.title,
    description: entry.data.description,
    pubDate: entry.data.pubDate,
    category: entry.data.category,
    readingTime: estimateReadingTime(entry.body ?? ""),
  };
}

export async function getPosts(options?: { limit?: number }): Promise<Post[]> {
  const entries = await getCollection("blog");
  const posts = entries
    .map(toPost)
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  if (options?.limit !== undefined) {
    return posts.slice(0, options.limit);
  }
  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<PostDetail | undefined> {
  const entries = await getCollection("blog");
  const entry = entries.find((e) => toSlug(e.id) === slug);
  if (!entry) return undefined;

  const { Content } = await render(entry);
  return { ...toPost(entry), Content };
}

export async function getCategories(): Promise<string[]> {
  const posts = await getPosts();
  return [...new Set(posts.map((p) => p.category))].sort();
}
