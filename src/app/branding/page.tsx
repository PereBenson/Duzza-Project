import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WorkCard } from "@/components/sections/WorkCard";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandingPillars, brandingProcess } from "@/content/pages";
import { site } from "@/content/site";
import { getWorkByDivision } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Duzza Branding",
  description:
    "Duzza Branding delivers executive, corporate and digital branding, sports and creative media, and merchandising for an international client base.",
  path: "/branding",
});

export default function BrandingPage() {
  const brandingWork = getWorkByDivision("branding");

  return (
    <>
      <PageHero
        eyebrow="Duzza Branding"
        title="Brand systems and content built to travel."
        description="Duzza Branding works across executive, corporate and digital branding, sports and creative media, and merchandising, for an international client base."
        tone="accent"
        actions={
          <>
            <ButtonLink href={site.secondaryCta.href} variant="carbon" size="lg">
              {site.secondaryCta.label}
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" size="lg">
              Explore services
            </ButtonLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/65">
              Division notes
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/75">
                  Client base
                </dt>
                <dd className="mt-1 leading-relaxed text-ink/85">
                  International. The division is not framed as Nigeria-only.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/75">
                  Service pillars
                </dt>
                <dd className="mt-1 leading-relaxed text-ink/85">
                  Executive · Corporate &amp; Digital · Sports &amp; Creative Media ·
                  Merchandising
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/75">
                  Portfolio
                </dt>
                <dd className="mt-1 leading-relaxed text-ink/85">
                  Portfolio previews are available to review. Approved client work will replace
                  them before launch.
                </dd>
              </div>
            </dl>
          </div>
        }
      />

      <section id="services" className="scroll-mt-24 border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Service pillars"
            title="Four ways to build and show a brand."
            description="The service scope below follows the client brief. Final inclusions, production responsibilities and deliverables are pending confirmation."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {brandingPillars.map((pillar, index) => (
              <Card key={pillar.title} className="flex h-full flex-col p-6 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-carbon py-16 text-canvas lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A visual practice across four territories."
              description="Concept studies across executive profiles, sports content, identity systems and merchandise, built to show the range of the division."
              className="[&_h2]:text-canvas [&_p]:text-canvas/65"
            />
            <ButtonLink href="/work" variant="outline-light" className="shrink-0 self-start">
              View all selected work
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <div className="border-b border-line">
        <ProcessSteps
          eyebrow="Proposed process"
          title="From brief to delivery."
          description="A four-stage approach follows the client brief. Final stage descriptions and typical timelines are confirmed per project."
          steps={brandingProcess}
        />
      </div>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              International by design
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Built for clients wherever they work.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Duzza Branding has an international client base and an international target
              audience. The division is not positioned as Nigeria-only.
            </p>
            <p>
              Sports-brand promotional content, UGC-style video, static imagery and campaign
              assets are part of the stated service scope.
            </p>
            <p>
              Countries, client names, testimonials and performance metrics will appear only for
              approved records. No geographic coverage or results are implied.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Questions</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Before you brief us.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  Do you work with clients outside Nigeria?
                  <span aria-hidden="true" className="text-xl font-normal text-muted group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Duzza Branding has an international client base and an international target
                audience. Specific markets are not claimed until they are verified.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  Can I see selected work?
                  <span aria-hidden="true" className="text-xl font-normal text-muted group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                The selected work above covers executive, digital, sports and merchandise
                applications across the division.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  How do I start a branding project?
                  <span aria-hidden="true" className="text-xl font-normal text-muted group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Use the branding brief route to share the goal, deliverables and timing.
              </p>
            </details>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with the brief."
        description="Share the brand, audience, deliverables and timing through the branding brief route."
        primary={site.secondaryCta}
        secondary={{ label: "Contact DUZZA", href: "/contact" }}
      />
    </>
  );
}
