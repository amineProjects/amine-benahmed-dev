import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BadgeList } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { focusAreas } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Self-taught, full-stack, product-minded"
          />
          <div className="mt-6 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 text-pretty text-base leading-7 text-muted sm:text-lg">
              <p>
                I&apos;m a self-taught full-stack developer with 8 years
                shipping production software end to end — from architecture to
                CI/CD release. I started coding in 2014, shipped my first web
                app in 2018, and have been building products continuously since.
                I care about the things that make software reliable: type
                safety, clear data boundaries, and interfaces that stay fast
                under real conditions.
              </p>
              <p>
                I&apos;m the{" "}
                <span className="text-foreground">
                  founder &amp; lead developer of Dokani POS
                </span>
                , an offline-first, cross-platform point-of-sale I built for
                retail in the UAE/MENA — Rust and Tauri on the desktop, React on
                the frontend, with a delta-sync architecture. I taught
                high-school physics alongside development until early 2026, when
                I moved to building full-time.
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-2">
                Focus
              </p>
              <BadgeList items={focusAreas} />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
