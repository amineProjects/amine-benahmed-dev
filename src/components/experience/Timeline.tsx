import { BadgeList } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <ol className="relative border-l border-border">
      {experience.map((item) => (
        <li key={`${item.org}-${item.period}`} className="ml-6 pb-12 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[6.5px] mt-2 h-3 w-3 rounded-full border-2 border-background bg-accent"
          />
          <FadeIn>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {item.role}
              </h2>
              <span className="text-muted">·</span>
              <span className="text-base text-accent">{item.org}</span>
              {item.current ? (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                  Current
                </span>
              ) : null}
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-2">
              {item.period}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <p className="mt-4 text-pretty text-base leading-7 text-muted">
              {item.summary}
            </p>
            {item.highlights.length > 0 ? (
              <ul className="mt-4 space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {item.stack && item.stack.length > 0 ? (
              <div className="mt-5">
                <BadgeList items={item.stack} />
              </div>
            ) : null}
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
