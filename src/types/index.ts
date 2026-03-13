export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  link: string;
  date: string;
  description: string;
  content: string;
}
