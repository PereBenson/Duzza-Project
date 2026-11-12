import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { EquipmentCard } from "@/components/sections/EquipmentCard";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllEquipment, getInventory } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Equipment Hire",
  description:
    "Illustrative hydrographic navigation and positioning equipment catalogue for Duzza Projects.",
  path: "/projects/equipment",
});

export default function EquipmentPage() {
  const equipment = getAllEquipment();
  const inventory = getInventory();

  return (
    <>
      <PageHero
        eyebrow="Duzza Projects · Equipment"
        title="Survey equipment, clearly specified."
        description="A presentation catalogue for hydrographic navigation, positioning and survey equipment. Configurations are illustrative until the client's inventory and datasheets are verified."
        tone="dark"
        actions={
          <>
            <ButtonLink href="/contact/project-enquiry" size="lg">
              Enquire about equipment
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline-light" size="lg">
              Back to Duzza Projects
            </ButtonLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/60">
              Catalogue status
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-canvas/80">
              <li>Specifications are illustrative and marked for replacement.</li>
              <li>No current availability is claimed.</li>
              <li>Hire geography requires client confirmation.</li>
              <li>Datasheets will be added only after verification.</li>
            </ul>
          </div>
        }
      />

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Equipment catalogue"
            title="Hydrographic survey and positioning."
            description="The catalogue demonstrates how equipment could be presented before a live hire enquiry. Each record can be replaced with approved inventory data without changing the page structure."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item, index) => (
              <EquipmentCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section id="inventory" className="scroll-mt-24 border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Inventory schedule"
              title="A typical survey equipment register."
              description="A sample inventory structure for a survey and marine support operation. Quantities and configurations are placeholders for review."
            />
            <ButtonLink href="/contact/project-enquiry" variant="secondary" className="shrink-0 self-start">
              Ask about a configuration
            </ButtonLink>
          </div>

          <div className="mt-10 overflow-hidden rounded-card border border-line bg-white">
            <div className="hidden grid-cols-[1.3fr_0.35fr_1.5fr] gap-6 border-b border-line bg-carbon px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/65 md:grid">
              <span>Asset</span>
              <span>Sample quantity</span>
              <span>Illustrative configuration</span>
            </div>
            {inventory.map((item) => (
              <div
                key={`${item.category}-${item.name}`}
                className="grid gap-3 border-b border-line px-6 py-5 last:border-b-0 md:grid-cols-[1.3fr_0.35fr_1.5fr] md:items-start md:gap-6"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl tracking-tight text-ink">{item.name}</h3>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:hidden">
                    Sample quantity
                  </p>
                  <p className="mt-1 text-sm text-ink md:mt-0">{item.quantity}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:hidden">
                    Illustrative configuration
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted md:mt-0">
                    {item.configuration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            This register is a structure, not a claim of ownership. Replace quantities,
            configurations and status with verified records before publishing.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Need a survey configuration?"
        description="Share the survey scope, water depth, location and timing through the project enquiry route."
        primary={{ label: "Start an equipment enquiry", href: "/contact/project-enquiry" }}
        secondary={{ label: "Explore Duzza Projects", href: "/projects" }}
        tone="light"
      />
    </>
  );
}
