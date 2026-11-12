import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FormNoticeProps = {
  tone: "info" | "success" | "error";
  children: ReactNode;
  className?: string;
};

const toneStyles = {
  info: "border-line bg-canvas text-ink",
  success: "border-ink bg-white text-ink",
  error: "border-error bg-white text-error",
} as const;

export function FormNotice({ tone, children, className }: FormNoticeProps) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={cn("rounded-card border p-4 text-sm leading-relaxed", toneStyles[tone], className)}
    >
      {children}
    </div>
  );
}
