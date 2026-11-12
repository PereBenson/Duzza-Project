import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

import { describedBy, Field, type FieldMeta } from "./Field";

const controlStyles =
  "w-full rounded-control border border-line bg-white px-4 py-3 text-base text-ink transition-colors placeholder:text-muted focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 disabled:cursor-not-allowed disabled:bg-canvas disabled:text-muted aria-[invalid=true]:border-error";

type TextInputProps = FieldMeta & Omit<ComponentPropsWithoutRef<"input">, "id">;

export function TextInput({ id, label, hint, error, required, className, ...props }: TextInputProps) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, hint, error })}
        className={cn(controlStyles, className)}
        {...props}
      />
    </Field>
  );
}

type TextAreaProps = FieldMeta & Omit<ComponentPropsWithoutRef<"textarea">, "id">;

export function TextArea({ id, label, hint, error, required, className, ...props }: TextAreaProps) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      <textarea
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, hint, error })}
        className={cn(controlStyles, "min-h-32 resize-y", className)}
        {...props}
      />
    </Field>
  );
}

type SelectProps = FieldMeta & Omit<ComponentPropsWithoutRef<"select">, "id">;

export function Select({ id, label, hint, error, required, className, children, ...props }: SelectProps) {
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      <select
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, hint, error })}
        className={cn(controlStyles, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
    </Field>
  );
}

type CheckboxProps = Omit<FieldMeta, "label"> & {
  label: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "id" | "type" | "children">;

export function Checkbox({ id, label, hint, error, required, className, ...props }: CheckboxProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy({ id, hint, error })}
          className="mt-0.5 size-5 shrink-0 rounded border-line accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas aria-[invalid=true]:border-error"
          {...props}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-ink">
          {label}
          {required ? (
            <span className="ml-1 text-muted" aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="pl-8 text-sm leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="pl-8 text-sm font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
