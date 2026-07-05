import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="border-t border-border/70 py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            lede="A few products I've designed, built, and shipped."
          />
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            All projects
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => {
            const href = project.caseStudySlug
              ? `/case-studies/${project.caseStudySlug}`
              : "/projects";
            return (
              <li key={project.slug}>
                <FadeIn delay={i * 80} className="h-full">
                  <Link
                    href={href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-muted-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold tracking-tight text-foreground">
                          {project.name}
                        </h3>
                        <ArrowUpRightIcon
                          width={18}
                          height={18}
                          className="mt-0.5 shrink-0 text-muted-2 transition-colors group-hover:text-foreground"
                        />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {project.tagline}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
