import Image from "next/image";
import Link from "next/link";

import type { EquipmentItem } from "@/content/types";
import { cn } from "@/lib/cn";

type EquipmentCardProps = {
  item: EquipmentItem;
  className?: string;
  priority?: boolean;
};

export function EquipmentCard({ item, className, priority = false }: EquipmentCardProps) {
  return (
    <article className={cn("group overflow-hidden rounded-card border border-line bg-white", className)}>
      <Link
        href={`/projects/equipment/${item.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <span className="absolute left-4 top-4 rounded-full bg-canvas/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur">
            Equipment profile
          </span>
        </div>

        <div className="p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {item.category}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            View equipment
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
