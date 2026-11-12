import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { EquipmentCard } from "@/components/sections/EquipmentCard";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WorkCard } from "@/components/sections/WorkCard";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsCapabilities, projectsProcess, projectsSectors } from "@/content/pages";
import { site } from "@/content/site";
import { getAllEquipment, getWorkByDivision } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Duzza Projects",
  description:
    "Duzza Projects covers general contracting, engineering and construction, oil and gas, marine support, hydrographic survey support, equipment hire enquiries and supply.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projectWork = getWorkByDivision("projects");
  const equipment = getAllEquipment().slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Duzza Projects · Working name"
        title="Contracting, engineering and marine support."
        description="Duzza Projects covers general contracting and general merchants, engineering and construction, oil and gas, marine project support, hydro-spatial and hydrographic survey support, equipment hire enquiries and general supply."
        tone="dark"
        actions={
          <>
            <ButtonLink href={site.primaryCta.href} size="lg">
              {site.primaryCta.label}
            </ButtonLink>
            <ButtonLink href="#capabilities" variant="outline-light" size="lg">
              Explore capabilities
            </ButtonLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/60">
              Division notes
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                  Current engineering reach
                </dt>
                <dd className="mt-1 leading-relaxed text-canvas/80">
                  Nigeria, per client clarification. Broader coverage is not claimed.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                  Equipment
                </dt>
                <dd className="mt-1 leading-relaxed text-canvas/80">
                  An illustrative survey equipment catalogue is ready for review.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
                  Trading name
                </dt>
                <dd className="mt-1 leading-relaxed text-canvas/80">
                  Duzza Projects is a working name pending confirmation.
                </dd>
              </div>
            </dl>
          </div>
        }
      />

      <section id="capabilities" className="scroll-mt-24 border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Stated work areas."
            description="The services below reflect the client brief. Detailed scope boundaries, approvals and supporting evidence are confirmed per project."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectsCapabilities.map((capability, index) => (
              <Card key={capability.title} className="flex h-full flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Project scopes, made legible."
              description="How technical work can be presented around a clear brief, method and handover."
            />
            <ButtonLink href="/work" variant="secondary" className="shrink-0 self-start">
              View all selected work
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectWork.map((item, index) => (
              <WorkCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-carbon py-16 text-canvas lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Equipment hire"
              title="Hydrographic navigation and positioning."
              description="An illustrative catalogue covering bathymetric survey, positioning, surface platforms and depth sounding."
              className="[&_h2]:text-canvas [&_p]:text-canvas/65"
            />
            <ButtonLink
              href="/projects/equipment"
              variant="outline-light"
              className="shrink-0 self-start"
            >
              View equipment catalogue
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} item={item} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-canvas/65">
            Equipment records are presentation samples. Specifications, hire configuration and
            current availability require client confirmation before publication.
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Sectors"
            title="Where the work applies."
            description="The stated sectors are listed below. No additional sectors or delivery locations are implied."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {projectsSectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full border border-line bg-canvas px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink"
              >
                {sector}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="border-b border-line">
        <ProcessSteps
          eyebrow="Proposed process"
          title="From brief to handover."
          description="A four-stage approach follows the client brief. Final stage descriptions, documentation and responsibilities are confirmed per project."
          steps={projectsProcess}
        />
      </div>

      <CtaBand
        title="Discuss a project with Duzza Projects."
        description="Share the scope, location and timing through the project enquiry route."
        primary={site.primaryCta}
        secondary={{ label: "Explore selected work", href: "/work" }}
        tone="dark"
      />
    </>
  );
}
