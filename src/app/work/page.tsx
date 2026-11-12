import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { WorkCard } from "@/components/sections/WorkCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { getWorkByDivision } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Selected Work",
  description:
    "Selected concept studies across Duzza Projects and Duzza Branding, prepared for presentation review.",
  path: "/work",
});

export default function WorkPage() {
  const projectWork = getWorkByDivision("projects");
  const brandingWork = getWorkByDivision("branding");

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Technical scope. Creative range. One group."
        description="A curated preview of how DUZZA GROUP presents project and brand programmes. Stories remain concept studies until approved case records and media are supplied."
        actions={
          <>
            <ButtonLink href={site.primaryCta.href} size="lg">
              Start a project enquiry
            </ButtonLink>
            <ButtonLink href={site.secondaryCta.href} variant="secondary" size="lg">
              Start a branding brief
            </ButtonLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Work index</p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Divisions
                </dt>
                <dd className="mt-1 font-medium text-ink">Projects · Branding</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Case studies
                </dt>
                <dd className="mt-1 text-ink">
                  {projectWork.length + brandingWork.length} concept records
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Production status
                </dt>
                <dd className="mt-1 text-ink">Awaiting approved project records</dd>
              </div>
            </dl>
          </div>
        }
      />

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Duzza Projects"
              title="Engineering, marine and supply."
              description="Project stories covering civil works, energy logistics and nearshore survey support."
            />
            <ButtonLink href="/projects" variant="secondary" className="shrink-0 self-start">
              Explore Duzza Projects
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectWork.map((item, index) => (
              <WorkCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Duzza Branding"
              title="Identity, content and merchandise."
              description="Brand stories spanning executive profiles, campaign toolkits, identity systems and merchandise."
            />
            <ButtonLink href="/branding" variant="secondary" className="shrink-0 self-start">
              Explore Duzza Branding
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {brandingWork.map((item) => (
              <WorkCard
                key={item.slug}
                item={item}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Make the next case study real."
        description="Bring a live brief to Duzza Projects or Duzza Branding and start with the route that matches the work."
        primary={site.primaryCta}
        secondary={site.secondaryCta}
        tone="dark"
      />
    </>
  );
}
