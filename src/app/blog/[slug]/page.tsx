import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Rajat Verma`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="animate-fade-in-up">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <h1 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        {post.title}
      </h1>
      <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500">
        <time>{post.date}</time>
        <span>·</span>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-accent hover:underline"
        >
          View on Medium
        </a>
      </div>

      <div
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
