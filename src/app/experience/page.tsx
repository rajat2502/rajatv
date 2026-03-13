import type { Metadata } from "next";
import { EXPERIENCES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Experience — Rajat Verma",
  description: "Work experience.",
};

export default function ExperiencePage() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Experience
      </h1>
      <div className="mt-8 space-y-10">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company}>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {exp.company}
              </h2>
              <span className="text-sm text-neutral-500">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-500">{exp.role}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-600">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
