import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-card border border-line bg-white p-6 sm:p-8", className)}>
      {children}
    </div>
  );
}
