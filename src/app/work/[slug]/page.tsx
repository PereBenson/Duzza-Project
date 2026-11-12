import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { WorkCard } from "@/components/sections/WorkCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { getAllWork, getRelatedWork, getWorkBySlug } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWork().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);

  if (!item) {
    return { title: "Work not found" };
  }

  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);

  if (!item) {
    notFound();
  }

  const related = getRelatedWork(item);
  const divisionLabel = item.division === "projects" ? "Duzza Projects" : "Duzza Branding";

  return (
    <>
      <section className="border-b border-canvas/15 bg-carbon py-14 text-canvas lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/55">
              <Link href="/work" className="transition-colors hover:text-canvas">
                Selected work
              </Link>
              <span aria-hidden="true">/</span>
              <span>{item.category}</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-canvas/75">{item.summary}</p>
          </div>

          <dl className="grid gap-5 border-t border-canvas/20 pt-6 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Division
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{divisionLabel}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Sector
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{item.sector}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Project archetype
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{item.clientLabel}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Programme
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{item.timeline}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="bg-white py-4">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-media bg-mist sm:aspect-[2/1]">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Image:{" "}
            <a
              href={item.image.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {item.image.credit}
            </a>{" "}
            / {item.image.license}
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">The brief</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">{item.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">The approach</p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{item.approach}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl tracking-tight text-ink">Contribution</h2>
                <ul className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                  {item.contribution.map((entry) => (
                    <li key={entry} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-muted" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl tracking-tight text-ink">Deliverables</h2>
                <ul className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                  {item.deliverables.map((entry) => (
                    <li key={entry} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-muted" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 self-start rounded-card border border-line bg-canvas p-6 sm:p-8">
            <div>
              <Badge tone={item.division === "projects" ? "active" : "neutral"}>
                {divisionLabel}
              </Badge>
              <h2 className="mt-5 font-display text-2xl tracking-tight text-ink">
                Concept study
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.meta.note}</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Scope summary
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Project archetype</dt>
                  <dd className="mt-1 font-medium text-ink">{item.clientLabel}</dd>
                </div>
                <div>
                  <dt className="text-muted">Sector</dt>
                  <dd className="mt-1 font-medium text-ink">{item.sector}</dd>
                </div>
                <div>
                  <dt className="text-muted">Programme</dt>
                  <dd className="mt-1 font-medium text-ink">{item.timeline}</dd>
                </div>
              </dl>
            </div>
            <ButtonLink
              href={item.division === "projects" ? site.primaryCta.href : site.secondaryCta.href}
              variant="secondary"
              className="w-full"
            >
              Discuss a similar scope
            </ButtonLink>
          </aside>
        </Container>
      </section>

      {item.testimonial ? (
        <section className="border-b border-ink/15 bg-accent py-16 text-ink lg:py-24">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/65">
                Illustrative client perspective
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
                A sample voice for presentation review, not an approved testimonial.
              </p>
            </div>
            <figure>
              <blockquote className="font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                “{item.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/20 pt-4 text-sm text-ink/75">
                <span className="font-semibold text-ink">{item.testimonial.attribution}</span>
                <span className="block">{item.testimonial.context}</span>
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-b border-line bg-canvas py-16 lg:py-24">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="More work"
                title="More selected work."
                description="Continue through the selected work from the same division."
              />
              <ButtonLink href="/work" variant="secondary" className="shrink-0 self-start">
                View all work
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((entry) => (
                <WorkCard key={entry.slug} item={entry} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title="Have a similar brief?"
        description="Share the scope, audience and timing through the route that fits your project."
        primary={site.primaryCta}
        secondary={site.secondaryCta}
      />
    </>
  );
}
