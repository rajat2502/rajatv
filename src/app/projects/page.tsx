import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects — Rajat Verma",
  description: "Selected projects and work.",
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Projects
      </h1>
      <div className="mt-8 space-y-2">
        {PROJECTS.map((project) => (
          <div key={project.title} className="hover-row">
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              {project.link ? (
                project.link.startsWith("/") ? (
                  <Link
                    href={project.link}
                    className="underline decoration-emerald-accent/50 underline-offset-2 hover:decoration-emerald-accent"
                  >
                    {project.title}
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-emerald-accent/50 underline-offset-2 hover:decoration-emerald-accent"
                  >
                    {project.title}
                  </a>
                )
              ) : (
                project.title
              )}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              {project.tech.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
