import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent-strong text-accent-contrast hover:bg-accent shadow-sm shadow-accent-strong/20",
  secondary:
    "border border-border bg-surface/40 text-foreground hover:border-muted-2 hover:bg-surface-2",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const cls = `${baseClasses} ${styles[variant]} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(download ? { download: true } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
