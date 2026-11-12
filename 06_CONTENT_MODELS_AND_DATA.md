# DUZZA GROUP — CMS content models and data rules

## Principles
- Model reusable content, not hard-coded page-specific duplication.
- Keep the parent group and divisions distinct.
- Draft and publish workflow for client review.
- Never publish records with missing required fields or unapproved factual claims.
- Keep sensitive enquiry data out of the public CMS unless there is a clear operational need and access policy.

## Recommended document types

### 1. Site settings (singleton)
Fields:
- Public brand name (default: DUZZA GROUP).
- Legal entity name (draft/verified state; default source says DUZZA LIMITED).
- Combined logo asset and compact logo asset.
- Default SEO title/description.
- Main contact email/phone/WhatsApp (only verified values).
- Social links.
- Footer legal copy.
- Privacy/terms routes.

### 2. Business division
Fields:
- Name.
- Slug.
- Status: `active | coming-soon | hidden`.
- Short summary.
- Long description.
- Audience.
- Services (references).
- Hero image/video and alt/poster.
- Accent style token (restricted to approved tokens).
- Primary CTA label and route.
- SEO title/description.
- Sort order.

Initial records: Duzza Projects (working name; confirm) and Duzza Branding as active; Fashion and Food/Hospitality as coming soon only if teaser pages are approved.

### 3. Service
Fields:
- Name.
- Slug.
- Parent division reference.
- Summary and full description.
- Scope/inclusions.
- Relevant sector tags.
- Geography statement (approved text only).
- CTA label and enquiry route.
- Sort order.
- SEO fields.

### 4. Project / case study
Fields:
- Title.
- Slug.
- Division reference.
- Client display name or anonymised label.
- Client naming permission status.
- Country/market (optional, verified and approved).
- Sector and service tags.
- Brief/challenge.
- DUZZA scope/deliverables.
- Gallery/video assets and rights status.
- Outcomes (optional; evidence/approval required).
- Testimonial (optional; written permission required).
- Publish status/date.
- SEO fields.

Validation: no public publish unless image rights are cleared and client identity/metrics/testimonials are authorised. Concept imagery must never be categorised as a completed DUZZA project.

### 5. Equipment item
Fields:
- Name.
- Category.
- Manufacturer/model (if supplied).
- Specifications (structured only when verified).
- Intended use.
- Images/datasheet.
- Availability status and last-updated timestamp.
- Hire geography.
- Enquiry CTA.

Validation: availability requires a named content owner and update process. If stale or unknown, show `Enquire for current availability` or hide availability entirely. Do not invent specs.

### 6. Insight/article
Fields:
- Title, slug, author, publish date.
- Summary and body.
- Cover image and alt text.
- Topic tags and division reference.
- SEO fields.
- Draft/published status.

Only enable the Insights navigation when an editorial owner can keep it current.

### 7. Testimonial (optional)
Fields:
- Quote.
- Person name/title/company (only with permission).
- Division/project reference.
- Permission status and evidence record.

No placeholder testimonials should be visible publicly.

### 8. FAQ
Fields:
- Question and answer.
- Division/service reference.
- Sort order.
- Publish status.

### 9. Leadership profile (optional)
Fields:
- Name, title, approved biography, photo, alt text, sort order.
- Publish permission status.

Do not create profiles from names mentioned casually in source documents without client confirmation.

## Enquiry data (not a public CMS document)
Store enquiries in a secure operational destination selected by the client: approved email delivery, CRM or database. Minimum fields should match the form specification. Restrict access and define retention/deletion policy. Do not expose enquiry submissions to public Sanity queries.

## Taxonomies
Suggested controlled tags:
- Division: Projects, Branding, Fashion, Food/Hospitality.
- Projects sectors: Engineering, Construction, Oil & Gas, Marine, Procurement/Supply.
- Branding categories: Executive, Corporate/Digital, Sports/Creative Media, Merchandising.
- Work filters: Division, sector/service, country (only where verified).

## Publish checklist
Before publishing any record, check:
1. Is the content factually verified by the client?
2. Are names, logos, photographs and media approved for public use?
3. Are geography, availability, dates and metrics current?
4. Does the content have an accurate CTA and destination?
5. Are SEO fields useful and non-misleading?
6. Is the content complete on mobile and accessible?
