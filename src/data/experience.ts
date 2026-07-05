export interface Experience {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export const experience: Experience[] = [
  {
    role: "Founder & Lead Developer",
    org: "Dokani POS",
    location: "UAE / MENA",
    period: "2024 – Present",
    current: true,
    summary:
      "Offline-first, cross-platform point-of-sale for barber shops and retail. Shipped v1.11.4 across Windows, macOS, Linux, and Android.",
    highlights: [
      "Architected a local-first SQLite core with a delta-sync engine to Supabase (PostgREST), plus a zero-config LAN sync fallback (Axum WebSocket + mDNS + self-signed TLS).",
      "Built ESC/POS thermal printing with Arabic RTL text shaping via HarfBuzz in Rust, for 58mm and 80mm printers on every platform.",
      "Implemented a UAE ZATCA / FTA e-invoicing pipeline: UBL 2.1 XML, TLV QR codes, SHA-256 hashing, and per-item VAT.",
      "Shipped a signed CI/CD auto-update pipeline (GitLab Pages CDN, multi-arch GitHub Actions), tiered subscriptions, auto-backup, and Excel import/export.",
    ],
    stack: [
      "Rust",
      "Tauri 2",
      "React 18",
      "TypeScript",
      "SQLite",
      "Supabase",
      "Axum",
      "HarfBuzz",
    ],
  },
  {
    role: "Founder & Lead Developer",
    org: "Benahmed Education",
    location: "Algeria",
    period: "2019 – 2024",
    summary:
      "Physics & chemistry e-learning platform for Algerian high-school students (150+ lessons, 500+ exercises). Built during COVID and maintained for five years.",
    highlights: [
      "Built on Gatsby with an MDX + KaTeX pipeline rendering equations across the full national curriculum.",
      "Implemented an AWS serverless backend: Cognito auth (email + Google/Facebook OAuth), AppSync GraphQL, and DynamoDB.",
      "Built an in-browser Editor.js lesson editor, gamified quizzes, and a progress-tracking student dashboard.",
      "Shipped an offline PWA, QR-code sharing, a multilingual Arabic RTL / French / English UI, and full SEO.",
    ],
    stack: ["Gatsby", "React", "Redux Toolkit", "MDX", "KaTeX", "AWS", "GraphQL"],
  },
  {
    role: "Full-Stack Developer",
    org: "Wasfaty.online",
    period: "2018 – 2019",
    summary:
      "My first self-taught product: a recipe-saving web app, designed and built end to end — the project that launched my development career.",
    highlights: [
      "Built the full application front to back as a self-directed learning project.",
      "Took it from concept to a live, working web app.",
    ],
    stack: ["React", "JavaScript"],
  },
  {
    role: "High-School Physics Teacher",
    org: "Ministry of Education, Algeria",
    period: "2013 – 2026",
    summary:
      "Taught high-school physics (18h/week from 2018), which left time for self-taught, parallel software development. Transitioned to full-time development in February 2026.",
    highlights: [],
  },
];

export const education: Education[] = [
  {
    degree: "Master's Degree, Physics",
    school: "University of Sciences and Technology of Oran (USTO-MB), Algeria",
    year: "2013",
  },
];

export const languages = [
  "Arabic (Native)",
  "French (Professional, B2+)",
  "English (Professional, B2+)",
];
