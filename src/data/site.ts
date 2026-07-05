export type SocialKey = "linkedin" | "github" | "gitlab" | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  handle: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Amine Benahmed",
  role: "Full-Stack Developer",
  subtitle:
    "I take products from architecture to CI/CD release — building production software with Rust, React, TypeScript and cloud-sync architecture.",
  email: "amine@dokanionline.com",
  resumeHref: "/MohammedAmineBenahmedCV.pdf",
  /** metadataBase / canonical origin — update to the real production domain. */
  url: "https://aminebenahmed.dev",
  location: "Algeria · Open to Remote",
  description:
    "Self-taught full-stack developer with 8 years shipping production software end to end — Rust, React 18, TypeScript and AWS. Founder of Dokani POS, an offline-first, cross-platform point-of-sale for retail in the UAE/MENA.",
} as const;

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const socials: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-amine-benahmed",
    handle: "in/mohammed-amine-benahmed",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/amineProjects",
    handle: "github.com/amineProjects",
  },
  {
    key: "gitlab",
    label: "GitLab",
    href: "https://gitlab.com/amineProjects",
    handle: "gitlab.com/amineProjects",
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${site.email}`,
    handle: site.email,
  },
];

export const focusAreas = [
  "Rust",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
] as const;
