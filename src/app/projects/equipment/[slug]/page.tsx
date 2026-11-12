import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { EquipmentCard } from "@/components/sections/EquipmentCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllEquipment, getEquipmentBySlug, getRelatedEquipment } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

type EquipmentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEquipment().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: EquipmentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);

  if (!item) {
    return { title: "Equipment not found" };
  }

  return pageMetadata({
    title: item.name,
    description: item.summary,
    path: `/projects/equipment/${item.slug}`,
  });
}

export default async function EquipmentDetailPage({ params }: EquipmentDetailPageProps) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);

  if (!item) {
    notFound();
  }

  const related = getRelatedEquipment(item);

  return (
    <>
      <section className="border-b border-canvas/15 bg-carbon py-14 text-canvas lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/55">
              <Link href="/projects/equipment" className="transition-colors hover:text-canvas">
                Equipment hire
              </Link>
              <span aria-hidden="true">/</span>
              <span>{item.category}</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {item.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-canvas/75">{item.summary}</p>
          </div>

          <dl className="grid gap-5 border-t border-canvas/20 pt-6 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Category
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{item.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Configuration
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">{item.model}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Availability
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">Enquire for current status</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                Hire scope
              </dt>
              <dd className="mt-1 text-sm text-canvas/85">Project-specific</dd>
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Overview</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">{item.description}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink">Sample specifications</h2>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {item.specs.map((spec) => (
                  <div key={spec.label} className="grid gap-2 py-4 sm:grid-cols-[0.8fr_1.2fr]">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink">Typical applications</h2>
              <ul className="mt-5 grid gap-3 border-t border-line pt-5 text-sm leading-relaxed text-muted sm:grid-cols-2">
                {item.applications.map((application) => (
                  <li key={application} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-muted" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 self-start rounded-card border border-line bg-canvas p-6 sm:p-8">
            <div>
              <Badge tone="neutral">Illustrative catalogue</Badge>
              <h2 className="mt-5 font-display text-2xl tracking-tight text-ink">Before you enquire</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.meta.note}</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Hire note
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.hireNote}</p>
            </div>
            <ButtonLink href="/contact/project-enquiry" className="w-full">
              Request current availability
            </ButtonLink>
          </aside>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-b border-line bg-canvas py-16 lg:py-24">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Equipment catalogue"
                title="Other configurations."
                description="Browse the rest of the illustrative survey equipment range."
              />
              <ButtonLink href="/projects/equipment" variant="secondary" className="shrink-0 self-start">
                View the catalogue
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((entry) => (
                <EquipmentCard key={entry.slug} item={entry} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title="Specify the survey requirement."
        description="Share the water depth, location, deliverables and timing. The team can then confirm the right configuration."
        primary={{ label: "Start an equipment enquiry", href: "/contact/project-enquiry" }}
        secondary={{ label: "Back to equipment", href: "/projects/equipment" }}
        tone="light"
      />
    </>
  );
}
