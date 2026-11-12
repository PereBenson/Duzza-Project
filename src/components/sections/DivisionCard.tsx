import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Division } from "@/content/site";
import { cn } from "@/lib/cn";

type DivisionCardProps = {
  division: Division;
  index: number;
  className?: string;
};

export function DivisionCard({ division, index, className }: DivisionCardProps) {
  const isActive = division.status === "active";

  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <div className="flex items-center justify-between gap-4">
        <Badge tone={division.status}>{division.statusLabel}</Badge>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl tracking-tight text-ink sm:text-3xl">
        {division.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{division.summary}</p>

      {division.services.length > 0 ? (
        <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink">
          {division.services.map((service) => (
            <li key={service} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-muted" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 border-t border-line pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
          Launch details will be shared when the venture is ready.
        </p>
      )}

      <div className="mt-auto pt-6">
        {isActive && division.href ? (
          <Link
            href={division.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Explore {division.name}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            In development
          </span>
        )}
      </div>
    </Card>
  );
}
