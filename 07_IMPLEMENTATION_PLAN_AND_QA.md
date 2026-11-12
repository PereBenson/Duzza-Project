# DUZZA GROUP — Implementation plan and acceptance criteria

## Build approach
Build in gated phases. Antigravity must not begin a large implementation before it has inspected the workspace, confirmed the stack and identified missing inputs. It should report blockers and ask only essential questions. It may create a working prototype with clearly labelled local placeholder data, but must not publish fabricated claims.

## Phase 0 — Preflight and project setup
Tasks:
- Inspect the existing workspace and preserve any existing project work.
- Confirm package manager, runtime, framework and existing conventions before scaffolding.
- Confirm logo assets and brand files are present or record them as missing.
- Create a requirements-to-files map.
- Identify launch blockers: domain, contact details, legal copy, content, account access.
- Propose final directory structure and dependencies before installing.

Gate: no irreversible changes or deployment until user approves the plan. If workspace is empty, recommend Next.js App Router + TypeScript + Sanity integration.

## Phase 1 — Foundations
Tasks:
- Initialise application and lint/type-check/test scripts.
- Add design tokens, font loading and global styles.
- Build responsive container/grid, header, footer, buttons, cards, form controls and accessible navigation.
- Add error, loading and empty states.

Gate: responsive shell and visual tokens reviewed before building all pages.

## Phase 2 — Core page templates
Tasks:
- Home.
- About.
- Businesses hub.
- Projects.
- Branding.
- Contact and enquiry form shells.
- Coming-soon templates only if approved.

Gate: all claims use verified content or visible development placeholders; no empty navigation routes.

## Phase 3 — CMS and content
Tasks:
- Implement Sanity only after account/project details are available; otherwise use typed local data.
- Create schemas from `06_CONTENT_MODELS_AND_DATA.md`.
- Build reusable division, service, project and equipment templates.
- Configure draft/publish and preview only when secure credentials are set.

Gate: editor can add/edit a division or portfolio item without code changes; public site renders published content only.

## Phase 4 — Enquiries and integrations
Tasks:
- Implement server-side validation and secure form endpoints.
- Add spam protection, rate limiting and approved email routing.
- Add secure file upload only if fully configured.
- Add WhatsApp only after number verification.
- Add analytics and consent configuration only after client approval.

Gate: test submissions reach the correct destination; no personal data leaks to analytics or logs.

## Phase 5 — SEO, accessibility and performance
Tasks:
- Metadata, canonical URLs, sitemap, robots and social previews.
- Structured data using verified facts only.
- Image optimisation and font/performance review.
- Keyboard, contrast, reduced-motion and screen-reader checks.
- Mobile network testing.

Gate: QA report has no unresolved critical or high-severity issues.

## Phase 6 — Content loading, client review and launch
Tasks:
- Load approved copy and assets.
- Replace/remove every placeholder.
- Verify links, contact details, legal footer and social destinations.
- Review on staging with client.
- Confirm domain, backups, account ownership and rollback procedure.
- Deploy only after explicit launch approval.

Gate: signed launch checklist; no invented or unverified content visible.

## Acceptance criteria

### Functional
- All visible navigation links work and lead to meaningful pages/sections.
- Header and mobile navigation work with keyboard and touch.
- Project and Branding enquiries route to the correct approved destination.
- Validation errors are clear and accessible.
- Success state appears only after successful server acceptance.
- WhatsApp link opens the correct verified number.
- CMS editors can update supported content types without editing code.
- Draft content is not exposed publicly.

### Content integrity
- Public brand name is consistently DUZZA GROUP.
- Legal wording uses verified client-approved details.
- Active and coming-soon divisions are clearly distinguished.
- No invented clients, case studies, testimonials, certifications, statistics, equipment specs, locations or contact details.
- International positioning for Branding is retained.
- Projects geographic claims do not exceed verified operating reach.

### Design and responsive
- Matches approved logo lockup and proposed design system.
- No horizontal overflow at common mobile widths.
- Typography remains readable; buttons and controls have adequate touch targets.
- Layout remains usable at 200% zoom.
- Reduced-motion preference is respected.
- Images do not cause major layout shifts.

### Accessibility
- Keyboard-only navigation is possible.
- Focus is visible and logical.
- Form labels, instructions and errors are programmatically associated.
- Contrast meets WCAG AA.
- Meaningful images have appropriate alt text.
- Heading order and landmarks are semantic.

### Performance and technical
- No avoidable heavy client-side JavaScript.
- Images and fonts are optimised.
- No critical console errors or failing network requests.
- Typecheck, lint and build pass.
- Core Web Vitals are measured on staging/production; targets should be set and reviewed using real data.
- Security headers, form rate limiting and secret handling are reviewed.

### SEO
- Each public indexable page has unique title and description.
- Sitemap and robots are correct.
- Canonical URLs are correct.
- Social preview metadata works.
- Structured data contains only verified information.

## Handover deliverables
- Source code and repository access.
- Environment variable reference without secrets.
- CMS editor guide and role/access list.
- Deployment and rollback notes.
- Form routing and integration map.
- QA report and known limitations.
- Content update guide and backup/export procedure.
