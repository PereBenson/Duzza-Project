import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { groupStructure } from "@/content/pages";
import { site } from "@/content/site";
import { getTeamMembers } from "@/lib/content/repository";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About DUZZA GROUP, the public-facing parent brand for DUZZA LIMITED, and its active and future business divisions.",
  path: "/about",
});

export default function AboutPage() {
  const team = getTeamMembers();

  return (
    <>
      <PageHero
        eyebrow="About DUZZA GROUP"
        title="A parent group for distinct businesses."
        description="DUZZA GROUP is the public-facing parent brand for DUZZA LIMITED, a Nigerian private company limited by shares. The group currently presents two active divisions, with future ventures in development."
        actions={
          <>
            <ButtonLink href="/businesses" size="lg">
              Explore our businesses
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact DUZZA
            </ButtonLink>
          </>
        }
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Group at a glance
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Public brand
                </dt>
                <dd className="mt-1 font-medium text-ink">DUZZA GROUP</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Legal entity
                </dt>
                <dd className="mt-1 font-medium text-ink">DUZZA LIMITED</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Active divisions
                </dt>
                <dd className="mt-1 text-ink">Duzza Projects · Duzza Branding</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  In development
                </dt>
                <dd className="mt-1 text-ink">Fashion &amp; Clothing · Food &amp; Hospitality</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              One parent brand · Two active divisions
            </p>
          </div>
        }
      />

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">The group</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              One parent identity. Separate business journeys.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                DUZZA GROUP exists to present and support distinct businesses under one corporate
                front door. Two divisions are active today: Duzza Projects and Duzza Branding.
              </p>
              <p>
                Fashion and food ventures are in development. They are clearly labelled{" "}
                <span className="font-medium text-ink">Coming soon</span> and are not presented as
                active services.
              </p>
              <p>
                The site is structured so additional divisions can be added later without
                rebuilding the parent identity.
              </p>
            </div>
          </div>

          <div className="rounded-card border border-line bg-canvas p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              How the group works
            </p>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Each division keeps its own audience, offer and enquiry route. The parent brand
                provides a clear front door and a consistent standard of presentation without
                flattening the differences between the businesses.
              </p>
              <p>
                Duzza Projects is built around technical clarity and dependable delivery. Duzza
                Branding is built around expressive identity and content that can travel across
                markets. Both operate under the same group discipline.
              </p>
            </div>
            <dl className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Clarity
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Say what the work is, who it is for and what happens next.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Restraint
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Keep the system precise, useful and free of unnecessary noise.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Evidence
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Publish claims, imagery and outcomes only when they can be substantiated.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Longevity
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Build the parent identity so new ventures can join without a rebuild.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Partnership
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Route each conversation to the team that can carry it properly.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Discretion
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  Treat client information and unpublished work with care.
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Group structure"
            title="The parent brand and its divisions."
            description="The structure distinguishes active divisions from ventures that are still in development."
          />

          <div className="mt-10 rounded-card border border-line bg-white p-6 sm:p-8">
            <div className="flex justify-center rounded-control bg-carbon px-5 py-6">
              <Image
                src="/brand/duzza-group-lockup-reverse.png"
                alt="DUZZA GROUP"
                width={1292}
                height={287}
                className="h-9 w-auto"
              />
            </div>
            <div aria-hidden="true" className="mx-auto h-8 w-px bg-line" />
            <div className="grid gap-4 sm:grid-cols-2">
              {groupStructure.map((item) => (
                <div key={item.name} className="rounded-control border border-line p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl tracking-tight text-ink">{item.name}</h3>
                    <Badge tone={item.status === "Active division" ? "active" : "coming-soon"}>
                      {item.status}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="A small group with distinct disciplines."
            description="The final leadership structure will be confirmed by the client. These profiles are illustrative for presentation review."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-card border border-line bg-canvas p-6">
                <div className="flex size-16 items-center justify-center rounded-full bg-carbon font-display text-xl tracking-[0.12em] text-canvas">
                  {member.initials}
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {member.role}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                  {member.focus}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
            Illustrative names, roles and focus areas are included to test the leadership layout.
            They are not approved appointments or biographies.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Build the next conversation with DUZZA GROUP."
        description="Use the appropriate route for a project, branding brief or general business enquiry."
        primary={site.primaryCta}
        secondary={{ label: "Contact DUZZA", href: "/contact" }}
      />
    </>
  );
}
