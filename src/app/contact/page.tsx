import type { Metadata } from "next";
import Link from "next/link";

import { GeneralEnquiryForm } from "@/components/forms/GeneralEnquiryForm";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact DUZZA GROUP for project, branding, general and partnership enquiries.",
  path: "/contact",
});

const routes = [
  {
    number: "01",
    title: "Project or quote enquiry",
    description:
      "For contracting, engineering, marine survey support, equipment hire enquiries and supply.",
    href: "/contact/project-enquiry",
    action: "Start a project enquiry",
  },
  {
    number: "02",
    title: "Branding brief",
    description:
      "For executive, corporate and digital branding, sports and creative media, and merchandising.",
    href: "/contact/branding-brief",
    action: "Start a branding brief",
  },
  {
    number: "03",
    title: "General or partnership",
    description: "For general questions, partnerships, supplier contacts and other enquiries.",
    href: "#general-enquiry",
    action: "Use the general enquiry",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are planning."
        description="Choose the route that matches your enquiry so the right team receives the right context from the first contact."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Start here
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Project or quote enquiry</li>
              <li>Branding brief</li>
              <li>General or partnership enquiry</li>
            </ul>
            <p className="mt-4 border-t border-line pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              Choose a route · Share the context · Start the conversation
            </p>
          </div>
        }
      />

      <section className="border-b border-line bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Enquiry routes"
            title="Three ways to start."
            description="Project, branding and general enquiries are kept separate so each team receives relevant information."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {routes.map((route) => (
              <Card key={route.title} className="flex h-full flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {route.number}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{route.description}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={route.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {route.action}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-canvas py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              What happens next
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              A clear route from first message to next step.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Enquiries begin with the form so the right team receives the context it needs. Direct
              phone, WhatsApp and office details can be added when they are verified.
            </p>
          </div>
          <ol className="grid gap-4 border-y border-line py-6 sm:grid-cols-3">
            <li>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                01
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink">Share the brief</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Use the route that matches the work and include the scope, timing and location.
              </p>
            </li>
            <li className="border-t border-line pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                02
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink">Review</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The relevant team reviews the context and identifies any missing information.
              </p>
            </li>
            <li className="border-t border-line pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                03
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink">Respond</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The next conversation is routed to the division best placed to take it forward.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      <section id="general-enquiry" className="scroll-mt-24 bg-white py-16 lg:py-24">
        <Container className="max-w-3xl">
          <GeneralEnquiryForm />
        </Container>
      </section>
    </>
  );
}
