import { Github, Linkedin, Mail } from "lucide-react";
import { SITE, EXPERIENCES, PROJECTS } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const revalidate = 3600;

export default async function Home() {
  const posts = await getBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="animate-fade-in-up stagger-1">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {SITE.name}
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">{SITE.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-all duration-200 hover:text-emerald-accent hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-all duration-200 hover:text-emerald-accent hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-neutral-500 transition-all duration-200 hover:text-emerald-accent hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Experience</h2>
          <Link
            href="/experience"
            data-sound="nav"
            className="text-sm text-emerald-accent hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 space-y-1">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="hover-row flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <span className="text-neutral-900 dark:text-neutral-100">{exp.company}</span>
                <span className="ml-2 text-sm text-neutral-500">{exp.role}</span>
              </div>
              <span className="text-sm text-neutral-500">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Projects</h2>
          <Link
            href="/projects"
            data-sound="nav"
            className="text-sm text-emerald-accent hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 space-y-1">
          {PROJECTS.slice(0, 4).map((project) => (
            <div key={project.title} className="hover-row">
              <span className="text-neutral-900 dark:text-neutral-100">{project.title}</span>
              <span className="ml-2 text-sm text-neutral-500">
                {project.tech.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      {latestPosts.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Writing</h2>
            <Link
              href="/blog"
              data-sound="nav"
              className="text-sm text-emerald-accent hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 space-y-1">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-sound="item"
                className="hover-row block"
              >
                <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                  <span className="text-neutral-900 dark:text-neutral-100">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-sm text-neutral-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
