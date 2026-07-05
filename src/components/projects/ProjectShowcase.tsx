import Image from "next/image";
import Link from "next/link";
import { BadgeList } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/projects";

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <span
              aria-hidden
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <FadeIn as="article" className="scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-2">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-2">
            {project.context}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.name}
          </h2>
          <p className="mt-3 text-pretty text-base leading-7 text-muted">
            {project.tagline}
          </p>
          <div className="mt-5">
            <BadgeList items={project.stack} />
          </div>
          {project.caseStudySlug ? (
            <Link
              href={`/case-studies/${project.caseStudySlug}`}
              className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              Read the case study
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-8 border-t border-border/70 pt-8 md:grid-cols-3">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Architecture
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            {project.architecture}
          </p>
        </div>
        <DetailList title="Problems solved" items={project.problems} />
        <DetailList title="Key achievements" items={project.achievements} />
      </div>
    </FadeIn>
  );
}
