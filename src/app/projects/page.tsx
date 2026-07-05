import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production software designed and built by Amine Benahmed — Dokani POS (Rust/Tauri offline-first POS), Benahmed Education, and Wasfaty.online. Architecture, problems solved, and key achievements.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · Amine Benahmed",
    description:
      "Production software built end to end with Rust, React, TypeScript and AWS.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Projects"
        title="Products I've shipped"
        lede="Each of these is a real product with real constraints. Below: the architecture, the problems they solved, and what I'm proud of."
      />
      <div className="mt-14 space-y-16 sm:space-y-24">
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
