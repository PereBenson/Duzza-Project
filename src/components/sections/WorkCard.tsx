import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import type { WorkItem } from "@/content/types";

type WorkCardProps = {
  item: WorkItem;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function WorkCard({
  item,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: WorkCardProps) {
  const divisionLabel = item.division === "projects" ? "Duzza Projects" : "Duzza Branding";

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-card border border-line bg-white",
        className,
      )}
    >
      <Link
        href={`/work/${item.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <span className="absolute left-4 top-4 rounded-full bg-canvas/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur">
            {divisionLabel}
          </span>
        </div>

        <div className="p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {item.category}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            View project story
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
