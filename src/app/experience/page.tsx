import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/experience/Timeline";
import { FadeIn } from "@/components/ui/FadeIn";
import { education, languages } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The career of Amine Benahmed — founder & lead developer of Dokani POS and Benahmed Education, self-taught full-stack developer with 8 years shipping production software.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience · Amine Benahmed",
    description:
      "Founder & lead developer of Dokani POS and Benahmed Education — 8 years shipping production software.",
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Experience"
        title="A track record of shipping"
        lede="Roles where I've built and owned production frontend systems."
      />
      <div className="mt-14 max-w-2xl">
        <Timeline />
      </div>

      <FadeIn className="mt-20 max-w-2xl">
        <div className="grid gap-10 border-t border-border/70 pt-10 sm:grid-cols-2">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.school}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-2">
                    {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Languages
            </h2>
            <ul className="mt-4 space-y-2">
              {languages.map((lang) => (
                <li key={lang} className="text-sm leading-6 text-muted">
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
