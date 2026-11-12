import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

type PagePlaceholderProps = {
  title: string;
  description: string;
  pending: string;
};

export function PagePlaceholder({ title, description, pending }: PagePlaceholderProps) {
  return (
    <section className="bg-canvas py-16 lg:py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Development placeholder
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>

        <div className="mt-10 max-w-2xl rounded-card border border-line bg-white p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Pending approval
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink">{pending}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This route exists so the navigation shell can be reviewed without dead ends. It
            will be replaced during the core page build and must not be published as-is.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
          <ButtonLink href="/businesses">View our businesses</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
