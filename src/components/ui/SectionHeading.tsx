import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Tag>
      {lede ? (
        <p className="mt-4 text-pretty text-base leading-7 text-muted sm:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
