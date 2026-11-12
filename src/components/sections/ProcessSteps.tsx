import { Container } from "@/components/layout/Container";
import type { ProcessStep } from "@/content/pages";
import { cn } from "@/lib/cn";

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: readonly ProcessStep[];
  tone?: "light" | "dark";
};

export function ProcessSteps({
  eyebrow = "Process",
  title,
  description,
  steps,
  tone = "light",
}: ProcessStepsProps) {
  const isDark = tone === "dark";

  return (
    <section className={cn(isDark ? "bg-carbon text-canvas" : "bg-white text-ink")}>
      <Container className="py-16 lg:py-24">
        <div className="max-w-2xl">
          <p
            className={cn(
              "font-mono text-xs uppercase tracking-[0.2em]",
              isDark ? "text-canvas/60" : "text-muted",
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 text-base leading-relaxed",
                isDark ? "text-canvas/70" : "text-muted",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "rounded-card border p-6",
                isDark ? "border-canvas/20" : "border-line bg-canvas",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.18em]",
                  isDark ? "text-canvas/50" : "text-muted",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl tracking-tight">{step.title}</h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  isDark ? "text-canvas/65" : "text-muted",
                )}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
