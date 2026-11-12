"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-canvas py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Something went wrong</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
          This page could not be loaded.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Please try again. If the problem continues, use the contact route once it is
          available.
        </p>
        <Button onClick={reset} className="mt-8">
          Try again
        </Button>
      </Container>
    </section>
  );
}
