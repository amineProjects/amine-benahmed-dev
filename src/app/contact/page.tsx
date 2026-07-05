import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRightIcon, socialIcons } from "@/components/ui/Icons";
import { socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amine Benahmed — LinkedIn, GitHub, GitLab, or email.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Amine Benahmed",
    description: "Get in touch — LinkedIn, GitHub, GitLab, or email.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's talk"
        lede="I'm open to senior frontend roles and interesting product conversations. The fastest way to reach me is any of these."
      />

      <FadeIn>
        <ul className="mt-12 max-w-2xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/60">
          {socials.map((social) => {
            const Icon = socialIcons[social.key];
            const isMail = social.key === "email";
            return (
              <li key={social.key}>
                <a
                  href={social.href}
                  {...(isMail
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:px-6 sm:py-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:text-foreground">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground">
                      {social.label}
                    </span>
                    <span className="block truncate font-mono text-sm text-muted">
                      {social.handle}
                    </span>
                  </span>
                  <ArrowUpRightIcon
                    width={18}
                    height={18}
                    className="shrink-0 text-muted-2 transition-colors group-hover:text-foreground"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </FadeIn>
    </Container>
  );
}
