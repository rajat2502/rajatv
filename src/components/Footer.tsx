import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>&copy; {new Date().getFullYear()} Rajat Verma</span>
        <div className="flex items-center gap-4">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Github size={16} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
