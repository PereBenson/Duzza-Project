# DUZZA GROUP — Antigravity workspace rules

## Project identity and source of truth
- Build the DUZZA GROUP corporate website described in the project context files.
- Use the project files as the primary requirements source. Read `00_PROJECT_CONTEXT.md`, `01_BRAND_GUIDELINES.md`, `02_DESIGN_SYSTEM.md`, `03_INFORMATION_ARCHITECTURE.md`, `04_CONTENT_SPECIFICATION.md`, `05_TECHNICAL_SPECIFICATION.md`, `06_CONTENT_MODELS_AND_DATA.md` and `07_IMPLEMENTATION_PLAN_AND_QA.md` before major implementation.
- Public-facing brand spelling is **DUZZA GROUP** (double Z). Legal entity in the client brief is **DUZZA LIMITED**. Do not conflate the two.
- Do not invent business facts, legal details, clients, metrics, equipment, certifications, testimonials, contact details, geographic claims or operational capabilities.

## Required working method
1. Inspect the current workspace before changing it.
2. Summarise what exists, what is missing and what you intend to change.
3. Identify required accounts, credentials, assets, dependencies and client decisions before attempting integrations.
4. Present a concise implementation plan and wait for approval before destructive changes, deployment, paid services or external account setup.
5. Implement in the phases defined in `07_IMPLEMENTATION_PLAN_AND_QA.md`.
6. After each phase, run relevant checks and report files changed, tests run, results and blockers.
7. Never claim a test, deployment, integration or submission succeeded unless it actually did.

## Design invariants
- Use the combined monogram + DUZZA GROUP wordmark in the desktop header once approved source assets are supplied.
- Use monogram-only only for compact contexts where the full lockup cannot remain legible, and for favicon/social avatar.
- Do not redraw or fabricate the selected logo. If assets are missing, use a clearly labelled temporary text placeholder and report the blocker.
- Use the proposed tokens in `02_DESIGN_SYSTEM.md`; keep raw colour values centralised.
- Maintain clean editorial layouts, whitespace, mobile-first responsiveness and restrained motion.
- Projects should feel precise and technical; Branding should feel expressive and image-led while retaining the parent system.
- Respect reduced-motion preferences and accessibility requirements.

## Technical invariants
- Prefer Next.js App Router, React and TypeScript unless workspace constraints justify a documented alternative.
- Use server components by default; add client components only for genuine interaction.
- Use Sanity only after the client project/account is configured. Otherwise use typed local content and document the migration path.
- Validate all submitted data on the server. Never trust client-side validation alone.
- Never expose API keys, write tokens, secrets or private enquiry data in client bundles or public CMS queries.
- Do not implement insecure file uploads. If storage/security is not configured, leave upload disabled and explain the dependency.
- No online payments, customer accounts, client portal or e-commerce in release one.
- Keep dependencies lean and use current stable versions compatible with the chosen stack.

## Content rules
- Duzza Projects is a working name until confirmed. Do not imply international delivery or operating footprint beyond client-verified facts; current engineering reach is Nigeria.
- Duzza Branding has international customers and an international target audience; do not frame it as Nigeria-only.
- Fashion and Food/Hospitality are coming soon/in development, not active services.
- Never use conceptual or stock imagery as evidence of actual DUZZA projects.
- Do not publish unapproved leadership names, client names/logos, testimonials or metrics.
- Do not display empty pages, fake portfolio entries, fake equipment availability or placeholder form recipients.

## Quality requirements
- Semantic HTML and accessible labels.
- WCAG AA contrast, visible focus and keyboard support.
- Responsive from narrow mobile through desktop.
- Optimised images/fonts and minimal third-party scripts.
- Unique metadata, sitemap and canonical URLs for indexable pages.
- No personal information sent to analytics.
- Run lint, typecheck, tests and production build before reporting a phase complete.

## Reporting format
For each milestone, report:
- Completed.
- Files changed/created.
- Checks run and results.
- Outstanding blockers/decisions.
- Next proposed phase.
