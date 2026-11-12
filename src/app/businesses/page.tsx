import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { DivisionCard } from "@/components/sections/DivisionCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Businesses",
  description:
    "Duzza Projects and Duzza Branding are active divisions of DUZZA GROUP. Fashion and food ventures are in development.",
  path: "/businesses",
});

export default function BusinessesPage() {
  const activeDivisions = site.divisions.filter((division) => division.status === "active");
  const upcomingDivisions = site.divisions.filter((division) => division.status === "coming-soon");

  return (
    <>
      <PageHero
        eyebrow="Our businesses"
        title="One group. Distinct businesses."
        description="DUZZA GROUP operates two active divisions today. Future ventures are shown as coming soon and are not presented as active services."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Division status
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Active
                </dt>
                <dd className="mt-1 font-medium text-ink">Duzza Projects · Duzza Branding</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  In development
                </dt>
                <dd className="mt-1 font-medium text-ink">Fashion &amp; Clothing · Food &amp; Hospitality</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Group direction
                </dt>
                <dd className="mt-1 text-ink">A modular home for future ventures</dd>
              </div>
            </dl>
          </div>
        }
      />

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Active divisions"
            title="Two businesses, each with its own journey."
            description="Projects and Branding serve different audiences and use separate enquiry routes, while sharing one parent identity."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {activeDivisions.map((division, index) => (
              <DivisionCard key={division.name} division={division} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="In development"
            title="Future ventures, clearly labelled."
            description="Fashion and food are not active services yet. No products, launch dates, menus or availability are published before launch readiness is confirmed."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {upcomingDivisions.map((division, index) => (
              <DivisionCard key={division.name} division={division} index={index + 2} />
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Fashion and food will only appear as active services once the ventures are operational,
            the offer is confirmed and the site content is approved.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Not sure which route fits?"
        description="Use the general enquiry for partnerships, supplier contacts or anything that does not fit Projects or Branding."
        primary={{ label: "Contact DUZZA", href: "/contact" }}
        secondary={site.primaryCta}
        tone="light"
      />
    </>
  );
}
