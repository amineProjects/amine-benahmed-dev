import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BadgeList } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const path = `/case-studies/${study.slug}`;
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${study.title} — Case Study · Amine Benahmed`,
      description: study.summary,
      url: path,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowRightIcon width={16} height={16} className="rotate-180" />
        All case studies
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Case Study · {study.role} · {study.period}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-muted">
          {study.summary}
        </p>
        <div className="mt-6">
          <BadgeList items={study.stack} />
        </div>
      </header>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-2">
              {metric.label}
            </dt>
            <dd className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
        <nav
          aria-label="On this page"
          className="hidden lg:block"
        >
          <div className="sticky top-24">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-2">
              On this page
            </p>
            <ul className="space-y-2 border-l border-border">
              {study.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <article className="max-w-2xl space-y-14">
          {study.sections.map((section) => (
            <FadeIn
              as="section"
              key={section.id}
              className="scroll-mt-24"
            >
              <h2
                id={section.id}
                className="scroll-mt-24 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-pretty text-base leading-7 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.points ? (
                <ul className="mt-5 space-y-2.5">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-7 text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </FadeIn>
          ))}
        </article>
      </div>
    </Container>
  );
}
