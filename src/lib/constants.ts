import { Experience, Project } from "@/types";

export const SITE = {
  name: "Rajat Verma",
  description:
    "Software engineer who loves solving real-world problems and shipping products people enjoy using.",
  url: "https://rajatv.in",
  email: "rajatverma5885045@gmail.com",
  github: "https://github.com/rajat2502",
  linkedin: "https://www.linkedin.com/in/rajat2502",
  medium: "https://medium.com/@rajat2502",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Valory",
    role: "Senior Software Engineer",
    period: "June 2025 -Present",
    bullets: [
      "Shipped Pearl v1 (Electron), rewriting core user flows to improve usability and driving UI polish across the desktop app",
      "Built end-to-end user-facing features including in-app support via Zendesk, ensuring a consistent experience throughout the application",
      "Owned frontend architecture decisions for the desktop app, working closely with the protocol team",
    ],
  },
  {
    company: "Headout",
    role: "Intern → Software Engineer → Senior Software Engineer",
    period: "Aug 2021 -June 2025",
    bullets: [
      "Reduced LCP of discovery pages by ~20% and JS chunk size by ~75% through code splitting, lazy loading, and build optimizations",
      "Built the in-house design system from scratch -10 reusable components driving visual consistency across all web team applications",
      "Standardized dev tooling (ESLint, Webpack, CI pipelines) and owned the frontend platform for the web team",
      "Led the complete rebranding of headout.com, coordinating across design and engineering",
      "Ran A/B experiments to increase CTR on discovery pages and standardized the calendar component across multiple time zones",
    ],
  },
  {
    company: "Brucira",
    role: "Frontend Engineering Intern",
    period: "May 2020 -July 2020",
    bullets: [
      "Collaborated closely with designers to craft the UI for Ruttl (website feedback tool), focusing on interaction design and visual detail",
      "Shipped interactive features like page versioning and draggable comments",
    ],
  },
  {
    company: "Devfolio",
    role: "Frontend Engineering Intern",
    period: "March 2020 -April 2020",
    bullets: [
      "Worked on the main Devfolio application supporting thousands of developers attending hackathons and events",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "StandNote",
    description:
      "An online meeting assistant that provides attendees with automated meeting minutes for their conversations. Works with any video conferencing web app through a Chrome Extension. Integrates Azure speech-to-text models and REST APIs for real-time transcription and summarization.",
    tech: ["React", "JavaScript", "Azure", "TailwindCSS"],
    link: "https://github.com/rajat2502/StandNote",
  },
  {
    title: "CodeINN",
    description:
      "A browser-based code editor that lets you write, run, and share code without any local setup. Supports C, C++, Python, HTML, CSS, and JavaScript with live preview, syntax highlighting, autocompletion, and code formatting. Built during FOSSHack 2020 with a React frontend and Django backend.",
    tech: ["React", "TailwindCSS", "Django", "Judge0 API"],
    link: "https://github.com/rajat2502/CodeINN",
  },
  {
    title: "ChainConnect",
    description:
      "A multi-blockchain wallet platform for connecting to different chains, managing transactions, viewing token balances, and tracking transaction history. Integrates CoinGecko API for token discovery and supports multiple wallet providers across EVM-compatible networks.",
    tech: ["Next.js", "TypeScript", "ethers.js", "Ant Design"],
    link: "https://github.com/rajat2502/Chainconnect",
  },
  {
    title: "Awsar",
    description:
      "A government recruitment platform that connects organizations with job seekers under a single domain. Automatically extracts job descriptions from uploaded PDF and Word documents, manages the full application lifecycle, and tracks interviews through to selection. Winner of Smart India Hackathon 2020.",
    tech: ["React", "TailwindCSS", "Django", "Django REST Framework"],
    link: "https://github.com/rajat2502/awsar",
  },
  {
    title: "Webcomb",
    description:
      "An interactive web playground for practicing frontend development. Write HTML, CSS, and JavaScript side-by-side with real-time preview, syntax highlighting, and autocompletion powered by CodeMirror. No setup required — runs entirely in the browser.",
    tech: ["React", "CodeMirror", "JavaScript"],
    link: "https://github.com/rajat2502/Webcomb",
  },
];

export const NAV_LINKS = [
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];
