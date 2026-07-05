export interface CaseStudySection {
  id: string;
  title: string;
  /** Paragraphs of prose. */
  body: string[];
  /** Optional bullet list rendered after the prose. */
  points?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dokani-pos",
    title: "Dokani POS",
    summary:
      "An offline-first, cross-platform point-of-sale for retail in the UAE/MENA — a Rust + Tauri desktop and Android app that keeps selling with no connection and reconciles every device to a single source of truth. Shipped as v1.11.4 across Windows, macOS, Linux, and Android.",
    role: "Founder & Lead Developer",
    period: "2024 – Present",
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
      "GitLab CI",
      "GitHub Actions",
    ],
    metrics: [
      { label: "Platforms shipped", value: "4" },
      { label: "Offline capability", value: "100%" },
      { label: "Latest release", value: "v1.11.4" },
    ],
    sections: [
      {
        id: "business-problem",
        title: "Business problem",
        body: [
          "Barber shops and retailers across the UAE and wider MENA region operate on connections that drop constantly. Existing point-of-sale tools assumed a stable network: when the internet went down, the register went down with it, and the shop stopped selling. At the counter that is unacceptable — a stalled checkout is a lost sale.",
          "On top of pure availability, the product had two hard regional requirements: receipts had to render correct Arabic right-to-left text on cheap thermal printers, and invoices had to satisfy UAE ZATCA / FTA e-invoicing rules. It also had to run natively on whatever hardware a shop already owned — Windows, macOS, and Linux desktops as well as Android tablets — from a single codebase.",
        ],
        points: [
          "Zero-downtime selling on unreliable or absent connections.",
          "Correct Arabic RTL receipts and ZATCA-compliant e-invoicing.",
          "One codebase across Windows, macOS, Linux, and Android.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Dokani is a local-first system built on Tauri 2, pairing a Rust core with a React frontend in a single native binary. Each terminal owns a complete local SQLite database and operates entirely against it, so the register never waits on the network. The Rust side exposes typed Tauri commands that the frontend calls instead of hitting a remote API.",
          "Synchronization runs on two independent paths. When the internet is available, a delta-sync engine reconciles the local database with Supabase over PostgREST. When it is not — or when several terminals share a counter — a zero-config LAN fallback takes over: an Axum WebSocket server, discovered via mDNS and secured with a self-signed TLS certificate, keeps devices in sync with no cloud and no manual setup.",
        ],
        points: [
          "Client: Tauri 2 app — Rust core + React 18 frontend, local SQLite.",
          "Cloud sync: delta-sync to Supabase (PostgREST).",
          "LAN sync: Axum WebSocket + mDNS discovery + self-signed TLS.",
        ],
      },
      {
        id: "frontend-architecture",
        title: "Frontend architecture",
        body: [
          "The frontend is a React 18 + TypeScript application running inside the Tauri webview, organized around the checkout as the hot path. It never talks to a network directly: all reads and writes go through typed Tauri commands into the Rust core, which serves them from local SQLite. That keeps every interaction at the counter instant and fully available offline.",
          "Access control is enforced on the client as well as the core. A 7-role × 84-permission RBAC model gates what each user can see and do in the UI, mirroring the checks the Rust commands run independently — so the frontend degrades gracefully by role while the core remains the real authority.",
        ],
        points: [
          "Reads and writes flow through typed Tauri commands — no network on the hot path.",
          "7-role × 84-permission RBAC enforced in the UI and re-checked in the core.",
          "TypeScript end to end so the command contract and UI stay in lockstep.",
        ],
      },
      {
        id: "backend-overview",
        title: "Backend overview",
        body: [
          "The 'backend' is mostly Rust running on the device. A rusqlite layer over SQLite is the system of record for each terminal, and every mutation is enforced by the same RBAC rules regardless of which client triggered it. An embedded Axum server provides the LAN WebSocket sync endpoint when devices need to talk to each other directly.",
          "In the cloud, Supabase (PostgreSQL via PostgREST) is the shared source of truth that the delta-sync engine reconciles against, with conflict resolution handled deterministically so multi-device edits converge. Compliance is treated as a first-class part of the backend: a dedicated pipeline generates UAE ZATCA e-invoices — UBL 2.1 XML, TLV QR codes, SHA-256 invoice hashing, and per-item VAT.",
        ],
      },
      {
        id: "performance-decisions",
        title: "Performance decisions",
        body: [
          "Performance was framed as a correctness requirement, not a nicety: the counter cannot stutter. The biggest lever was removing the network from the hot path entirely — every price lookup and cart update is a local SQLite read handled in Rust, so interactions are effectively instant. Sync, whether to the cloud or across the LAN, runs asynchronously and never competes with the sale.",
          "Choosing Rust + Tauri over a heavier runtime kept binaries small and startup fast on the low-end hardware many shops run, while still shipping natively to four platforms. Thermal printing goes straight to ESC/POS with Arabic text shaped by HarfBuzz in Rust, avoiding a slow rendering round-trip for every receipt.",
        ],
        points: [
          "Network removed from the hot path; all reads are local SQLite in Rust.",
          "Rust + Tauri for small binaries and fast startup on low-end hardware.",
          "Direct ESC/POS printing with HarfBuzz text shaping — no render round-trip.",
        ],
      },
      {
        id: "challenges",
        title: "Challenges",
        body: [
          "The hardest problems were all about consistency and correctness across environments. Two terminals editing the same data while offline, a device that reconnects after hours, a shop with no internet at all but three tablets on one counter — each needed a defined, predictable outcome. Running two sync paths (cloud delta-sync and LAN WebSocket) meant conflict resolution had to converge no matter which path delivered a change.",
          "Regional correctness added a second front. Shaping Arabic RTL text for ESC/POS thermal printers via HarfBuzz, and building a ZATCA e-invoicing pipeline exact enough to pass validation (UBL 2.1, TLV QR, SHA-256), were both unforgiving — small errors mean an unreadable receipt or a rejected invoice. Shipping all of it as signed, auto-updating builds across four platforms, including multi-arch macOS, was its own engineering effort.",
        ],
      },
      {
        id: "lessons-learned",
        title: "Lessons learned",
        body: [
          "Local-first is a product decision before it is a technical one. Committing to 'the counter always works' forced clarity on every trade-off downstream — and once that was fixed, Rust + Tauri over local SQLite followed naturally as the way to guarantee it on real hardware.",
          "The second lesson was that compliance and localization are features, not afterthoughts. Arabic RTL receipts and ZATCA e-invoicing were the difference between a demo and a product people in the region could actually adopt, so they belonged in the architecture from the start — not bolted on at the end.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
