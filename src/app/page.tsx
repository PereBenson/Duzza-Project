import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { DivisionCard } from "@/components/sections/DivisionCard";
import { WorkCard } from "@/components/sections/WorkCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandingPillars, projectsCapabilities } from "@/content/pages";
import { site } from "@/content/site";
import { getFeaturedWork } from "@/lib/content/repository";

const groupCapabilities = [
  "Engineering",
  "Construction",
  "Oil & gas",
  "Marine",
  "Procurement & supply",
  "Branding",
  "Creative media",
  "Merchandising",
] as const;

export default function HomePage() {
  const featuredWork = getFeaturedWork(3);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Parent group · Two active divisions
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
              One parent group.
              <br />
              Distinct businesses.
              <br />
              <span className="text-muted">Clear next steps.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.name} is the parent brand for Duzza Projects and Duzza Branding, with
              future fashion and food ventures in development.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/businesses" size="lg">
                Explore our businesses
              </ButtonLink>
              <ButtonLink href={site.primaryCta.href} variant="secondary" size="lg">
                {site.primaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Projects · Branding · Two active divisions
            </p>
          </div>

          <aside className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">At a glance</p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Active divisions
                </dt>
                <dd className="mt-2 font-display text-2xl leading-snug text-ink">
                  Duzza Projects
                  <br />
                  Duzza Branding
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  In development
                </dt>
                <dd className="mt-2 font-display text-2xl leading-snug text-ink">
                  Fashion &amp; Clothing
                  <br />
                  Food &amp; Hospitality
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Engineering reach
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Nigeria, per client clarification. Broader coverage is not claimed.
                </dd>
              </div>
            </dl>
            <Link
              href="/work/marine-corridor-survey"
              className="mt-8 block overflow-hidden rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
            >
              <div className="relative aspect-[4/3] bg-mist">
                <Image
                  src="/images/projects/marine-survey.jpg"
                  alt="Surveyor taking measurements beside a coastal lake"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border border-t-0 border-line bg-white px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Selected work · Marine survey
                </span>
                <span aria-hidden="true" className="text-ink">
                  →
                </span>
              </div>
            </Link>
          </aside>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-5">
        <Container>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {groupCapabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our businesses"
              title="Two active divisions. More in development."
              description="Each business has its own audience, services and enquiry route, held together by one parent identity."
            />
            <ButtonLink href="/businesses" variant="secondary" className="shrink-0 self-start">
              View all businesses
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {site.divisions.map((division, index) => (
              <DivisionCard key={division.name} division={division} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A preview of the work behind the group."
              description="Selected stories across engineering, marine survey, executive branding and campaign systems."
            />
            <ButtonLink href="/work" variant="secondary" className="shrink-0 self-start">
              View selected work
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item, index) => (
              <WorkCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-canvas/15 bg-carbon py-16 text-canvas lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/60">
              Duzza Projects
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Technical work, plainly explained.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-canvas/70 sm:text-lg">
              General contracting, engineering and construction, oil and gas, marine project
              support, hydro-spatial and hydrographic survey support, and general supply.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/50">
              Current engineering reach: Nigeria
            </p>
            <ButtonLink href="/projects" variant="outline-light" size="lg" className="mt-8">
              Explore Duzza Projects
            </ButtonLink>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {projectsCapabilities.map((capability, index) => (
              <li
                key={capability.title}
                className="rounded-card border border-canvas/20 p-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg tracking-tight">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-canvas/65">
                  {capability.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/15 bg-accent py-16 text-ink lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/75">
              Duzza Branding
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Expressive identities and content.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
              Executive, corporate and digital branding, sports and creative media, and
              merchandising for an international client base.
            </p>
            <ButtonLink
              href={site.secondaryCta.href}
              variant="carbon"
              size="lg"
              className="mt-8"
            >
              {site.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {brandingPillars.map((pillar, index) => (
              <li key={pillar.title} className="rounded-card border border-ink/15 bg-ink/5 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/75">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg tracking-tight">{pillar.title}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-canvas py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Operating approach
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              A clear front door for a growing group.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              The parent site routes visitors to the right division instead of combining
              unrelated services into one generic list.
            </p>
            <p>
              Projects and Branding use separate enquiry routes so each team receives relevant
              context from the first contact.
            </p>
            <p>
              Future ventures are labelled <span className="font-medium text-ink">Coming soon</span>.
              No products, launch dates or availability are published before launch readiness is
              confirmed.
            </p>
            <p>
              The same content system is designed to move from local prototype records to an
              approved editorial workflow without changing the parent identity.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 lg:py-24">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Start a conversation
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Tell us what you are planning.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Share the scope, audience and timing through the route that fits. Project and
              branding enquiries are kept separate from the first contact.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.primaryCta.href} size="lg">
              {site.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.secondaryCta.href} variant="secondary" size="lg">
              {site.secondaryCta.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
