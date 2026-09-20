import type { CollectionEntry } from "astro:content";

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBlogSlug(post: CollectionEntry<"blog">) {
  return slugify(post.data.slug || post.data.title) || post.id;
}
