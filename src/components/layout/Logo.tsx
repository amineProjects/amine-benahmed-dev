import Link from "next/link";
import { site } from "@/data/site";

/**
 * Brand logo — stacked "AB" monogram tile + optional wordmark.
 * Live text in Geist, so it stays crisp at any size and adapts to the theme.
 *
 *   <Logo />                      // monogram + name (default)
 *   <Logo showWordmark={false} /> // monogram only
 */
export function Logo({
  href = "/",
  showWordmark = true,
}: {
  href?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={site.name}
      className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-lg border border-border text-[15px] font-extrabold leading-none tracking-tight text-foreground transition-colors group-hover:border-accent"
      >
        A<span className="text-accent">B</span>
      </span>
      {showWordmark ? (
        <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
          {site.name}
          <span className="text-accent">.</span>
        </span>
      ) : null}
    </Link>
  );
}
