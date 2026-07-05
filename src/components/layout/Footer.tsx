import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { nav, site, socials } from "@/data/site";
import { socialIcons } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-mono text-sm font-semibold text-foreground">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{site.role}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="flex gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.key];
              const isMail = social.key === "email";
              return (
                <li key={social.key}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...(isMail
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-muted-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind.</p>
        </div>
      </Container>
    </footer>
  );
}
