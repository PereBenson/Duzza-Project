import type { Metadata } from "next";

import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Project Enquiry",
  description: "Project, contracting and procurement enquiry route for Duzza Projects.",
  path: "/contact/project-enquiry",
});

export default function ProjectEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Duzza Projects"
        title="Project enquiry."
        description="Share the scope, location and timing of your project. This presentation preview shows the intended enquiry experience without transmitting data."
        aside={
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Before you start
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Describe the work, location and current stage.</li>
              <li>Include a realistic timeline if one exists.</li>
              <li>Keep drawings and documents outside this form.</li>
              <li>Do not include sensitive personal information.</li>
            </ul>
          </div>
        }
      />

      <section className="bg-white py-16 lg:py-24">
        <Container className="max-w-3xl">
          <ProjectEnquiryForm />
        </Container>
      </section>
    </>
  );
}
