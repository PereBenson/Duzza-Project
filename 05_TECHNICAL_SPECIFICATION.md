# DUZZA GROUP — Technical specification (Stage 7)

## 1. Recommended architecture

**Recommended baseline:** Next.js App Router + React + TypeScript + Sanity CMS.

Rationale:
- Next.js supports server-rendered and statically generated marketing pages, route-level metadata, image optimisation and a modular App Router structure.
- TypeScript improves maintainability and catches common implementation errors.
- Sanity provides structured content models and a non-developer editing interface for divisions, services, portfolio items, equipment and insights.
- A single domain/codebase avoids fragmenting the parent brand and allows new divisions to be added through reusable templates.

Use the current stable versions at implementation time. Do not pin old versions merely because this document was prepared earlier. Review official migration/release notes before upgrading major versions.

## 2. Application structure

Suggested structure (adapt where justified; keep responsibilities clear):

```text
src/
  app/
    (site)/
      page.tsx
      about/page.tsx
      businesses/page.tsx
      projects/page.tsx
      projects/equipment/page.tsx
      branding/page.tsx
      fashion/page.tsx
      food/page.tsx
      work/page.tsx
      insights/page.tsx
      contact/page.tsx
      contact/project-enquiry/page.tsx
      contact/branding-brief/page.tsx
      privacy/page.tsx
      terms/page.tsx
    api/
      enquiries/route.ts
      draft-mode/enable/route.ts   # only if Sanity preview is configured
      draft-mode/disable/route.ts  # only if Sanity preview is configured
  components/
    layout/
    navigation/
    sections/
    forms/
    cards/
    media/
    ui/
  lib/
    sanity/
    validation/
    email/
    analytics/
    security/
  styles/
    tokens.css
    globals.css
sanity/
  schemas/
  lib/
public/
  brand/
  images/
```

This is a suggested structure, not a requirement to create every route immediately. Do not create empty public pages merely to match the tree.

## 3. CMS recommendation — Sanity

Use Sanity for editable content if the client confirms an owner/editor and is comfortable with the service and its pricing/terms. Recommended initial content types are defined in `06_CONTENT_MODELS_AND_DATA.md`.

Implementation notes:
- Use the official `next-sanity` integration and follow current Sanity guidance for the chosen Next.js version.
- Keep public read access limited to published content.
- Store secrets only in environment variables; never expose write tokens to the browser.
- Use preview/draft mode only after secure token handling and origin configuration are complete.
- Choose either the recommended Live Content API pattern or a documented webhook revalidation strategy; do not build both redundantly without a need.
- Studio may be embedded at `/studio` for a small/medium project or hosted separately if separation is preferred. Protect access through Sanity authentication and appropriate roles.

Fallback if CMS is not approved: use typed local content files for the prototype, with a clearly documented migration path. Do not build a fake CMS interface.

## 4. Hosting and environments

**Proposed hosting:** Vercel for the Next.js frontend, subject to client account ownership, budget, region, data and vendor approval. Alternatives may be considered if the client's hosting constraints require them.

Environments:
- Local development.
- Preview/staging deployment for review.
- Production deployment connected to the client's domain.

Rules:
- The client should own the domain, hosting and CMS accounts, or explicitly authorise the responsible organisation.
- Use separate development/production environment variables and CMS datasets where appropriate.
- Enable HTTPS.
- Do not deploy with placeholder credentials or fake production integrations.
- Document DNS, deployment and rollback steps.

## 5. Forms and lead handling

Release-one forms:
- Project/quote enquiry.
- Branding brief.
- General/partnership enquiry.
- Equipment enquiry only if a real equipment catalogue is published.
- Future-division interest capture only if a monitored destination and privacy basis exist.

Recommended pattern:
1. Client-side UX validation for usability.
2. Server-side schema validation using Zod (client validation is never trusted).
3. Spam protection such as Cloudflare Turnstile or equivalent, configured and tested.
4. Rate limiting and input sanitisation.
5. Email delivery through an approved provider (e.g. Resend or Postmark) after the client supplies/authorises the account and sender domain.
6. Optional CRM or Google Sheets routing only after the client chooses the system and grants access.
7. Confirmation message only after the server accepts the enquiry; do not imply a guaranteed response time unless approved.

Use separate recipients for Projects and Branding where the client supplies them, plus a general inbox. Never invent email addresses. Do not hardcode recipient addresses into client-visible source if they should be environment-configured.

File uploads:
- Do not accept files until a secure storage provider, allowed file types, maximum size, retention policy and access control are configured.
- Validate MIME type and extension server-side; do not trust filename alone.
- Store privately; use short-lived signed URLs for authorised access.
- Never place uploaded documents in a public static directory.

WhatsApp:
- Add click-to-chat only after the client supplies the correct business number in international format.
- Use a clear prefilled message appropriate to the selected enquiry route.

## 6. Analytics and measurement

Recommended:
- Google Analytics 4.
- Google Search Console.
- Meta Pixel only if required by the client and controlled by consent where applicable.

Track meaningful events:
- `cta_click` with CTA name and page.
- `form_start` with form type.
- `form_submit_success` only after server success.
- `form_submit_error` without sending personal data to analytics.
- `whatsapp_click`.
- `portfolio_item_open`.
- `equipment_enquiry_click`.
- `waitlist_submit_success` only if waitlist is activated.

Do not send names, emails, phone numbers, message contents or uploaded filenames to analytics. Configure consent and privacy disclosures before enabling non-essential tracking.

## 7. SEO implementation

- Unique title and meta description for every indexable route.
- Canonical URLs and Open Graph/social metadata.
- XML sitemap and robots configuration.
- Semantic heading hierarchy and descriptive internal links.
- Descriptive image alt text and optimised image sizes.
- Organization structured data using only verified legal/business facts.
- Service structured data only for services actually offered and described accurately.
- Breadcrumbs where they improve navigation.
- Redirect plan for any changed URLs.
- No keyword stuffing or location claims unsupported by the business.

Search themes to validate before targeting: Nigerian engineering/construction contracting, marine/hydrographic survey support, hydrographic navigation/positioning equipment hire, general supply/procurement, executive branding, corporate/digital branding and sports creative media. Do not assume rankings or search volume.

## 8. Performance

Targets:
- Mobile-first delivery and good Core Web Vitals.
- Use Next.js image handling or an equivalent image CDN with responsive sizes.
- Compress images and provide appropriate dimensions; lazy-load below-the-fold media.
- Prefer static hero imagery over large autoplay video on mobile.
- Minimise client components; use server components by default where appropriate.
- Avoid unnecessary dependencies, third-party embeds and large animation packages.
- Use font subsets/limited weights and avoid layout shifts.
- Test on throttled mobile network and lower-powered devices.

## 9. Security and privacy

- HTTPS everywhere.
- Server-side validation, rate limiting and spam protection for forms.
- Secure headers and sensible content security policy, tested against required integrations.
- Secrets only in environment variables; rotate credentials if exposed.
- Least-privilege CMS and hosting access.
- Dependency updates and vulnerability review.
- Backups/export plan for CMS content and project source.
- Privacy notice, data retention and contact process approved by the client/legal adviser.
- Consider Nigeria's NDPA and other applicable privacy requirements based on actual users/processing. This document is not legal advice; obtain appropriate review.

## 10. Accessibility

Implementation target: WCAG 2.2 AA, meeting at least the brief's WCAG 2.1 AA requirement. Test keyboard navigation, focus, contrast, labels, errors, alt text, semantic structure, zoom/reflow and reduced motion.

## 11. Integrations — decision status

| Integration | Recommendation | Required before live use |
|---|---|---|
| Sanity CMS | Recommended | Client approval, project/dataset, editor owner |
| Hosting | Vercel proposed | Client account, plan and domain approval |
| Email provider | Resend/Postmark or approved equivalent | Account, sender-domain verification, recipient inboxes |
| Turnstile | Recommended | Site key/secret and domain configuration |
| WhatsApp | Click-to-chat | Verified business number |
| GA4 | Recommended | Measurement ID and privacy/consent approval |
| Search Console | Recommended | Domain verification |
| Meta Pixel | Optional | Pixel ID and consent configuration |
| CRM/Sheets | Optional | Client choice, access and field mapping |
| Secure file storage | Optional | Provider, access rules, retention and size/type limits |

## 12. Release scope

### Release one
Corporate marketing website, active division pages, lead forms, CMS-backed content where approved, SEO foundation, analytics after consent, WhatsApp, verified portfolio/equipment content where supplied.

### Later phases
Fashion e-commerce, restaurant ordering, payments, delivery zones, careers portal, client portal, multilingual experience or separate division microsites. These are explicitly out of release-one scope.
