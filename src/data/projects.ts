export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Placeholder in /public/projects — swap for a real screenshot (PNG) and update this path. */
  image: string;
  imageAlt: string;
  context: string;
  stack: string[];
  architecture: string;
  problems: string[];
  achievements: string[];
  caseStudySlug?: string;
  links?: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "dokani-pos",
    name: "Dokani POS",
    tagline:
      "Offline-first, cross-platform point-of-sale for retail in the UAE/MENA.",
    image: "/projects/dokani-pos.png",
    imageAlt: "Dokani POS checkout and inventory dashboard",
    context: "Founder & Lead Developer · 2024 – Present",
    stack: [
      "Rust",
      "Tauri 2",
      "React 18",
      "TypeScript",
      "SQLite",
      "Supabase",
      "PostgreSQL",
      "Axum",
      "HarfBuzz",
    ],
    architecture:
      "A local-first desktop and Android app built on Tauri 2 with a Rust core over SQLite, so the register runs entirely offline. A delta-sync engine reconciles to Supabase (PostgREST), and a zero-config LAN fallback (Axum WebSocket + mDNS + self-signed TLS) keeps multiple terminals in sync with no server. Shipped as v1.11.4 across Windows, macOS, Linux, and Android.",
    problems: [
      "Shops needed a register that keeps working fully offline and across multiple devices.",
      "Arabic RTL receipts and UAE ZATCA e-invoicing compliance were hard requirements.",
      "A single codebase had to ship to Windows, macOS, Linux, and Android.",
    ],
    achievements: [
      "Local-first SQLite core with a delta-sync engine to Supabase, plus a zero-config LAN sync fallback (Axum WebSocket + mDNS + self-signed TLS).",
      "ESC/POS thermal printing with Arabic RTL text shaping via HarfBuzz in Rust, supporting 58mm and 80mm printers on every platform.",
      "UAE ZATCA / FTA e-invoicing pipeline: UBL 2.1 XML, TLV QR codes, SHA-256 invoice hashing, and per-item VAT.",
      "7-role × 84-permission RBAC enforced independently on the React frontend and on every Rust Tauri command.",
      "Signed CI/CD auto-update pipeline (GitLab Pages CDN, multi-arch GitHub Actions) plus Lemon Squeezy subscriptions, auto-backup, and Excel import/export.",
    ],
    caseStudySlug: "dokani-pos",
    featured: true,
  },
  {
    slug: "education-platform",
    name: "Benahmed Education",
    tagline:
      "Physics & chemistry e-learning platform for Algerian high-school students.",
    image: "/projects/education-platform.png",
    imageAlt: "Benahmed Education lesson player and student dashboard",
    context: "Founder & Lead Developer · 2019 – 2024",
    stack: [
      "Gatsby",
      "React",
      "Redux Toolkit",
      "MDX",
      "KaTeX",
      "AWS",
      "GraphQL",
      "PWA",
    ],
    architecture:
      "A statically generated Gatsby frontend with an MDX + KaTeX pipeline that renders physics and chemistry equations across the full national curriculum. An AWS serverless backend — Cognito auth, AppSync GraphQL, and DynamoDB — powers real-time sync, wrapped in an offline-capable PWA. Built during COVID and maintained for five years (150+ lessons, 500+ exercises).",
    problems: [
      "COVID meant students needed the entire curriculum accessible online.",
      "Physics and chemistry content required reliable equation rendering at scale.",
      "Non-technical authors needed to publish lessons without redeploying.",
    ],
    achievements: [
      "MDX + KaTeX rendering pipeline covering the Scientific, Literary, and Technical-Mathematics streams.",
      "AWS serverless backend: Cognito (email + Google/Facebook OAuth), AppSync GraphQL, and DynamoDB.",
      "In-browser Editor.js lesson editor, timed gamified quizzes, and a progress-tracking student dashboard.",
      "Offline PWA, QR-code exercise sharing, a multilingual Arabic RTL / French / English UI, and full SEO.",
    ],
    featured: true,
  },
  {
    slug: "wasfaty-online",
    name: "Wasfaty.online",
    tagline: "A recipe-saving web app — my first self-taught product.",
    image: "/projects/wasfaty-online.png",
    imageAlt: "Wasfaty.online recipe web app",
    context: "Full-Stack Developer · 2018 – 2019",
    stack: ["React", "JavaScript"],
    architecture:
      "A recipe-saving web app designed and built front to back as a self-directed learning project — taken from concept to a live, working product. The project that launched my development career.",
    problems: [
      "Learning to design and ship a complete web app end to end, solo.",
      "Turning a self-taught curriculum into a real, usable product.",
    ],
    achievements: [
      "Built the full application front to back as a self-directed learning project.",
      "Shipped it from concept to a live, working web app.",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
