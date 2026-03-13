import Parser from "rss-parser";
import { BlogPost } from "@/types";

const parser = new Parser<
  Record<string, unknown>,
  { "content:encoded"?: string }
>({
  customFields: { item: ["content:encoded"] },
});

const DESCRIPTIONS: Record<string, string> = {
  "eevee-lution-building-headouts-in-house-design-system-3d8e6bf5984b":
    "The story of building Headout's design system from the ground up — from reading Atomic Design to shipping 10 reusable components used across the entire web team.",
  "how-to-use-npm-and-import-export-modules-in-javascript-31a7f66a2064":
    "A practical guide to NPM, package management, and how import/export modules work in JavaScript — essential knowledge before picking up any framework.",
  "asynchronous-javascript-to-learn-before-javascript-frameworks-9b63972290c2":
    "Covers async/await, promises, callbacks, and the Fetch API — the async JavaScript fundamentals you need before diving into React, Vue, or Angular.",
  "object-and-array-methods-to-learn-before-javascript-frameworks-59728dcea306":
    "A walkthrough of the most useful Object and Array methods in JavaScript — map, filter, reduce, destructuring, and more — with practical examples.",
  "things-to-learn-before-learning-a-javascript-framework-b7baec310247":
    "The core JavaScript and ES6 concepts you should be comfortable with before starting with React, Vue, or Angular — from let/const to template literals and arrow functions.",
};

function slugFromUrl(url: string): string {
  const path = url.split("?")[0].replace(/\/$/, "");
  const parts = path.split("/");
  return parts[parts.length - 1] || "untitled";
}

let cachedPosts: BlogPost[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts && Date.now() - cacheTime < CACHE_TTL) {
    return cachedPosts;
  }

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@rajat2502"
    );

    cachedPosts = (feed.items ?? []).map((item) => {
      const slug = slugFromUrl(item.link ?? "");
      return {
        title: item.title ?? "Untitled",
        slug,
        link: item.link ?? "#",
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "",
        description: DESCRIPTIONS[slug] ?? "",
        content: item["content:encoded"] ?? "",
      };
    });
    cacheTime = Date.now();
    return cachedPosts;
  } catch {
    return cachedPosts ?? [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}
