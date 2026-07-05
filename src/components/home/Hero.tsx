import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
        }}
      />
      <Container className="relative py-24 sm:py-32">
        <div className="fade-in is-visible max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to remote full-stack roles
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl font-medium tracking-tight text-accent sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
            {site.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects" variant="primary">
              View Projects
              <ArrowRightIcon width={18} height={18} />
            </Button>
            <Button href={site.resumeHref} variant="secondary" download>
              Download Resume
              <DownloadIcon width={18} height={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
