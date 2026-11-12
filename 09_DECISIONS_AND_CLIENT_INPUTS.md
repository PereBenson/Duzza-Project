# DUZZA GROUP — Decisions and client inputs register

## Decisions carried into implementation
| Topic | Current recommendation / decision | Status |
|---|---|---|
| Public parent brand | DUZZA GROUP | Confirmed by project context |
| Legal entity | DUZZA LIMITED | Stated in client brief; final public legal wording to verify |
| Site architecture | One domain, one codebase, modular division pages | Recommended |
| Desktop logo | Combined approved monogram + wordmark lockup | Design direction agreed; source files and approval pending |
| Mobile logo | Combined lockup if legible; otherwise monogram with accessible name | Recommendation |
| Active divisions | Duzza Projects (working name) and Duzza Branding | Brief states active; Projects name needs confirmation |
| Future divisions | Fashion and Food/Hospitality as coming soon only | Brief states planned |
| Branding audience | International-facing | Client clarification |
| Projects geography | Current engineering reach Nigeria; broader reach must be verified | Client clarification |
| Design tokens | Palette/type/spacing/grid proposal in `02_DESIGN_SYSTEM.md` | Proposed; client approval pending |
| Frontend | Next.js App Router + React + TypeScript | Technical recommendation |
| CMS | Sanity | Recommended, subject to account and budget approval |
| Hosting | Vercel | Proposed, subject to account/domain approval |
| Forms | Server validation + spam protection + approved email routing | Recommended |

## Launch blockers / required client inputs

### Identity and legal
- [ ] Approved monogram source artwork.
- [ ] Approved wordmark source artwork.
- [ ] Approval of combined lockup and light/dark variants.
- [ ] Confirm final trading name for Duzza Projects.
- [ ] Confirm legal footer wording and legal entity name.
- [ ] Supply current RC number and registered office address if they are to be displayed.

### Contact and operations
- [ ] General business email.
- [ ] Projects enquiry recipient.
- [ ] Branding enquiry recipient.
- [ ] Verified WhatsApp/business phone number.
- [ ] Confirm expected response-time wording, if any.
- [ ] Confirm whether CRM/Google Sheets routing is wanted and which account owns it.

### Content and evidence
- [ ] Approved About story, mission, vision and values.
- [ ] Leadership names, titles, bios and photo permissions (if profiles are wanted).
- [ ] Final service descriptions and scope boundaries for Projects.
- [ ] Confirm Projects geographic coverage and any safety/compliance statements.
- [ ] Equipment inventory, specs, images, datasheets and availability owner (if catalogue is wanted).
- [ ] Original Branding portfolio assets and rights/permissions.
- [ ] Permission for client names, logos, testimonials and metrics.
- [ ] Confirm social profile URLs.
- [ ] Confirm whether Fashion and Food teaser pages should be published at launch.
- [ ] Confirm whether Insights has an editorial owner and launch content.

### Technical accounts and privacy
- [ ] Domain registrar access / DNS owner.
- [ ] Hosting account and plan approval.
- [ ] Sanity project/dataset and editor owner, if CMS is approved.
- [ ] Email provider account and sender-domain verification.
- [ ] Turnstile or equivalent spam-protection configuration.
- [ ] Secure file-storage provider and retention policy, if uploads are enabled.
- [ ] GA4 and Search Console access; Meta Pixel decision.
- [ ] Approved privacy notice, terms and data retention instructions.

## Decisions that should not block a local prototype
- Final domain name, provided routing is developed independently of it.
- CMS project credentials: local typed content can be used temporarily.
- Email provider credentials: form UI can be prototyped but must not claim to send.
- Analytics IDs: event interfaces can be prepared but tracking must remain disabled until configured.
- Portfolio evidence: layout can be developed with neutral placeholders that are clearly marked as non-production and never shown as real client work.
