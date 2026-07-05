import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BadgeList } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth engineering case studies by Amine Benahmed, including the architecture and decisions behind Dokani POS, an offline-first point-of-sale SaaS.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies · Amine Benahmed",
    description:
      "In-depth engineering case studies — architecture, trade-offs, and lessons learned.",
    url: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Case Studies"
        title="How things were actually built"
        lede="Deep dives into the systems behind the products — the problem, the architecture, the trade-offs, and what I learned."
      />

      <ul className="mt-12 space-y-6">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <FadeIn>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-muted-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {study.title}
                  </h2>
                  <span className="font-mono text-xs text-muted-2">
                    {study.role} · {study.period}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-muted">
                  {study.summary}
                </p>
                <div className="mt-5">
                  <BadgeList items={study.stack.slice(0, 6)} />
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read case study
                  <ArrowRightIcon
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Container>
  );
}
