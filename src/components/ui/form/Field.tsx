import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type FieldMeta = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

type FieldProps = FieldMeta & {
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function Field({ id, label, hint, error, required, children, className }: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-muted" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="text-sm leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function describedBy({
  id,
  hint,
  error,
}: Pick<FieldMeta, "id" | "hint" | "error">): string | undefined {
  return (
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") ||
    undefined
  );
}
