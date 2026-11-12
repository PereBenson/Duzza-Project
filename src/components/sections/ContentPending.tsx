import { cn } from "@/lib/cn";

type ContentPendingProps = {
  title: string;
  description: string;
  items?: readonly string[];
  tone?: "light" | "dark";
  className?: string;
};

export function ContentPending({
  title,
  description,
  items,
  tone = "light",
  className,
}: ContentPendingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "rounded-card border p-6 sm:p-8",
        isDark ? "border-canvas/20 bg-canvas/5 text-canvas" : "border-line bg-canvas text-ink",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono text-[10px] uppercase tracking-[0.18em]",
          isDark ? "text-canvas/55" : "text-muted",
        )}
      >
        Development content — pending client approval
      </p>
      <h3 className="mt-3 font-display text-2xl tracking-tight">{title}</h3>
      <p className={cn("mt-3 max-w-2xl text-sm leading-relaxed", isDark ? "text-canvas/70" : "text-muted")}>
        {description}
      </p>
      {items && items.length > 0 ? (
        <ul
          className={cn(
            "mt-5 grid gap-2 border-t pt-5 text-sm sm:grid-cols-2",
            isDark ? "border-canvas/15 text-canvas/75" : "border-line text-ink",
          )}
        >
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className={cn("mt-2 h-px w-4 shrink-0", isDark ? "bg-canvas/45" : "bg-muted")}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
