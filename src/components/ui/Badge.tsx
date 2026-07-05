interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function BadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
