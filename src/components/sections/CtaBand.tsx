import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Cta = {
  label: string;
  href: string;
};

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: Cta;
  secondary?: Cta;
  tone?: "dark" | "light" | "accent";
};

export function CtaBand({
  eyebrow = "Next step",
  title,
  description,
  primary,
  secondary,
  tone = "dark",
}: CtaBandProps) {
  const isDark = tone === "dark";
  const isAccent = tone === "accent";

  return (
    <section
      className={cn(
        "border-y",
        isDark && "border-carbon bg-carbon text-canvas",
        isAccent && "border-ink/15 bg-accent text-ink",
        !isDark && !isAccent && "border-line bg-canvas text-ink",
      )}
    >
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-24">
        <div>
          <p
            className={cn(
              "font-mono text-xs uppercase tracking-[0.2em]",
              isDark ? "text-canvas/60" : isAccent ? "text-ink/75" : "text-ink/60",
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed",
              isDark ? "text-canvas/75" : "text-ink/75",
            )}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href={primary.href} size="lg">
            {primary.label}
          </ButtonLink>
          {secondary ? (
            <ButtonLink
              href={secondary.href}
              variant={isDark ? "outline-light" : "secondary"}
              size="lg"
            >
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
