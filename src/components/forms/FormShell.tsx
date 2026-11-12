"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { FormNotice } from "@/components/ui/form/FormNotice";

type FormShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  endpoint: string;
  submitLabel: string;
};

type EnquiryResponse = {
  ok?: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

export function FormShell({
  title,
  description,
  children,
  endpoint,
  submitLabel,
}: FormShellProps) {
  const formId = useId();
  const startedAtRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = Date.now().toString();
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string | string[]> = {};

    for (const element of Array.from(form.elements)) {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.setCustomValidity("");
      }
    }

    for (const [key, value] of formData.entries()) {
      if (typeof value !== "string") {
        continue;
      }

      const current = payload[key];
      if (current === undefined) {
        payload[key] = value;
      } else if (Array.isArray(current)) {
        current.push(value);
      } else {
        payload[key] = [current, value];
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as EnquiryResponse | null;
      const firstFieldError = result?.fieldErrors
        ? Object.entries(result.fieldErrors)[0]
        : undefined;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setServerMessage(
          firstFieldError?.[1] ??
            result?.message ??
            "The enquiry could not be checked. Try again.",
        );

        if (firstFieldError) {
          const [fieldName, message] = firstFieldError;
          const field = form.elements.namedItem(fieldName);

          if (
            field instanceof HTMLInputElement ||
            field instanceof HTMLSelectElement ||
            field instanceof HTMLTextAreaElement
          ) {
            field.setCustomValidity(message);
            field.reportValidity();
          }
        }

        return;
      }

      setStatus("success");
      setServerMessage(
        result.message ??
          "Prototype validation passed. No enquiry data was sent or stored.",
      );
    } catch {
      setStatus("error");
      setServerMessage("The enquiry could not be checked. Check your connection and try again.");
    }
  }

  return (
    <div className="rounded-card border border-line bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>

      <FormNotice tone="info" className="mt-6">
        This is a presentation preview. The form does not send or store any data in this build.
      </FormNotice>

      {status === "success" ? (
        <FormNotice tone="success" className="mt-4">
          {serverMessage}
        </FormNotice>
      ) : null}

      {status === "error" ? (
        <FormNotice tone="error" className="mt-4">
          {serverMessage}
        </FormNotice>
      ) : null}

      <form
        className="relative mt-8 space-y-8"
        onSubmit={handleSubmit}
        onInput={(event) => {
          const target = event.target;
          if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLSelectElement ||
            target instanceof HTMLTextAreaElement
          ) {
            target.setCustomValidity("");
          }
        }}
        aria-busy={status === "submitting"}
      >
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

        {children}

        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-muted">
            Do not include sensitive personal information. No submission is sent or stored while
            delivery is not configured.
          </p>
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Checking..." : submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

export function FormSection({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export function FormGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}

export function FormNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-control border border-line bg-canvas p-4 text-xs leading-relaxed text-muted">
      {children}
    </p>
  );
}
