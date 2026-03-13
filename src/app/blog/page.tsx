import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog — Rajat Verma",
  description: "Articles on frontend engineering, performance, and web development.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Blog
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Posts from my{" "}
        <a
          href="https://medium.com/@rajat2502"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-accent hover:underline"
        >
          Medium
        </a>
        .
      </p>

      {posts.length === 0 ? (
        <p className="mt-8 text-neutral-500">No posts available right now.</p>
      ) : (
        <div className="mt-8 space-y-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} data-sound="item" className="hover-row block">
              <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                <span className="text-neutral-900 dark:text-neutral-100">
                  {post.title}
                </span>
                <span className="shrink-0 text-sm text-neutral-500">
                  {post.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 line-clamp-3">{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
