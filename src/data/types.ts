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