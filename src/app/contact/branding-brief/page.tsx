import type { Metadata } from "next";

import { BrandingBriefForm } from "@/components/forms/BrandingBriefForm";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Branding Brief",
  description: "Branding project brief route for Duzza Branding.",
  path: "/contact/branding-brief",
});

export default function BrandingBriefPage() {
  return (
    <>
      <PageHero
        eyebrow="Duzza Branding"
        title="Start a branding project."
        description="Share the brand, audience, deliverables and timing. This presentation preview shows the intended brief experience without transmitting data."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Before you start
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Describe the goal and who the work is for.</li>
              <li>List the deliverables and channels you expect.</li>
              <li>Add links to current brand or social pages.</li>
              <li>Keep brand files outside this form.</li>
            </ul>
          </div>
        }
      />

      <section className="bg-white py-16 lg:py-24">
        <Container className="max-w-3xl">
          <BrandingBriefForm />
        </Container>
      </section>
    </>
  );
}
