# DUZZA GROUP — Stages 7–8 delivery package

**Purpose:** Technical specification and Antigravity build context for the first release of the DUZZA GROUP website.

## Start here
1. Create/open a clean project folder in Google Antigravity.
2. Copy the contents of this package into the project root. Keep `AGENTS.md` at the root.
3. Add the approved logo source files to `public/brand/` (see `01_BRAND_GUIDELINES.md`). Do not ask the agent to invent the final logo.
4. Review `00_PROJECT_CONTEXT.md` and `05_TECHNICAL_SPECIFICATION.md` for unresolved client decisions.
5. Paste the complete prompt in `08_ANTIGRAVITY_MASTER_BUILD_PROMPT.md` into Antigravity.
6. Have Antigravity complete the discovery/preflight phase and report blockers before implementation. Do not allow it to silently invent missing business facts or credentials.

## Package contents
- `00_PROJECT_CONTEXT.md` — source-of-truth project context and factual boundaries.
- `01_BRAND_GUIDELINES.md` — identity direction and logo lockup behaviour.
- `02_DESIGN_SYSTEM.md` — proposed design tokens and component rules.
- `03_INFORMATION_ARCHITECTURE.md` — routes, navigation and user journeys.
- `04_CONTENT_SPECIFICATION.md` — page-by-page content requirements and content gaps.
- `05_TECHNICAL_SPECIFICATION.md` — recommended stack, integrations, security, SEO and deployment.
- `06_CONTENT_MODELS_AND_DATA.md` — CMS models and validation rules.
- `07_IMPLEMENTATION_PLAN_AND_QA.md` — phased build sequence, gates and acceptance tests.
- `AGENTS.md` — persistent Antigravity workspace rules.
- `08_ANTIGRAVITY_MASTER_BUILD_PROMPT.md` — the execution prompt.
- `09_DECISIONS_AND_CLIENT_INPUTS.md` — decisions, open questions and launch blockers.

## Scope boundary
This is a lead-generation corporate website, not an e-commerce platform, customer portal or operational project-management system. Fashion and food are teaser/coming-soon sections only in release one. No online payments, user accounts, careers portal or client portal in release one.

## Source hierarchy
1. Client-supplied DUZZA website briefs and confirmed clarifications.
2. Approved logo files and brand assets supplied by the client.
3. This package's proposals where the briefs leave a design or technical decision open.
4. General implementation conventions, subject to current official documentation.

If sources conflict or a fact is missing, stop and flag it. Do not silently resolve legal names, addresses, service claims, client names, certifications, metrics or contact details.
