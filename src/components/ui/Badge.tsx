import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "active" | "coming-soon" | "neutral";
  className?: string;
};

const toneStyles = {
  active: "bg-ink text-canvas",
  "coming-soon": "border border-line bg-canvas text-ink",
  neutral: "border border-line bg-white text-ink",
} as const;

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
        toneStyles[tone],
        className,
      )}
    >
      {tone === "active" ? <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
