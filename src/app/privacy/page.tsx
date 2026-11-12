import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: "Privacy notice for the DUZZA GROUP website.",
  path: "/privacy",
});

const sections = [
  {
    title: "This presentation build",
    body: [
      "This website is a presentation prototype. The enquiry forms do not transmit or store any information, and no analytics or advertising trackers are configured in this build.",
      "Submitting a form only reveals a prototype response state. Nothing is sent to DUZZA GROUP or any third party.",
    ],
  },
  {
    title: "Information the live site would collect",
    body: [
      "When enquiry delivery is enabled, the forms would collect the contact details and project or brand information you choose to provide. This may include your name, organisation, email address, phone number, location and the content of your enquiry.",
      "The live site would use that information to review and respond to your enquiry, manage the resulting conversation and keep appropriate business records.",
    ],
  },
  {
    title: "Sharing and retention",
    body: [
      "Enquiry information would be shared only with the DUZZA GROUP team and service providers needed to receive, store or respond to it. It would not be sold.",
      "Retention periods, hosting arrangements and the responsible data owner must be confirmed before enquiry delivery is enabled.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "A live service would provide a route to request access, correction or deletion of enquiry information. The final contact route and response process are pending client and legal approval.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice."
        description="A plain-language summary of how this prototype handles information, and how the live enquiry service is intended to work."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Status</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Presentation draft. Final wording, retention periods and the privacy contact must be
              approved before the site collects personal data.
            </p>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
              Legal entity: DUZZA LIMITED.
            </p>
          </div>
        }
      />

      <section className="bg-white py-16 lg:py-24">
        <Container className="max-w-3xl">
          <div className="rounded-card border border-line bg-canvas p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Current build
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              No enquiry data is collected, sent or stored by this prototype.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-line pt-6 text-sm leading-relaxed text-muted">
            This page is a presentation draft, not legal advice. It must be reviewed against the
            final data flows, service providers and applicable law before launch.
          </p>
        </Container>
      </section>
    </>
  );
}
