export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  locale: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Hero {
  name: string;
  tagline: string;
  description: string;
  actions: {
    label: string;
    href: string;
    primary?: boolean;
  }[];
}

export interface About {
  description: string[];
  details: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
  image?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Contact {
  title: string;
  description: string;
}
