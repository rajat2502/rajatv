import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link
        href="/"
        data-sound="nav"
        className="text-lg font-semibold text-neutral-900 transition-colors duration-200 hover:text-emerald-accent dark:text-neutral-100"
      >
        rv
      </Link>
      <nav className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-sound="nav"
            className="relative text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-emerald-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
