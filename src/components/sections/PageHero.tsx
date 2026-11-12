import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
};

const toneStyles = {
  light: {
    section: "border-line bg-canvas text-ink",
    eyebrow: "text-muted",
    description: "text-muted",
    aside: "border-line",
  },
  dark: {
    section: "border-canvas/15 bg-carbon text-canvas",
    eyebrow: "text-canvas/60",
    description: "text-canvas/75",
    aside: "border-canvas/20",
  },
  accent: {
    section: "border-ink/15 bg-accent text-ink",
    eyebrow: "text-ink/65",
    description: "text-ink/80",
    aside: "border-ink/20",
  },
} as const;

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  tone = "light",
  className,
}: PageHeroProps) {
  const styles = toneStyles[tone];

  return (
    <section className={cn("border-b", styles.section, className)}>
      <Container
        className={cn(
          "grid gap-12 py-16 lg:py-24",
          aside ? "lg:grid-cols-[1.2fr_0.8fr] lg:items-end" : "max-w-5xl",
        )}
      >
        <div>
          <p className={cn("font-mono text-xs uppercase tracking-[0.2em]", styles.eyebrow)}>
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", styles.description)}>
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        </div>

        {aside ? (
          <div className={cn("border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0", styles.aside)}>
            {aside}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
