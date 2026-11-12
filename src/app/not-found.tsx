import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-canvas py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">Page not found.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          The page you requested does not exist or has moved.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
