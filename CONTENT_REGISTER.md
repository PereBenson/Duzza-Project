# DUZZA GROUP — Content Register

Internal working register for presentation-prototype content. This file is not public-facing.

## Status vocabulary

- `verified` — confirmed by the client or an approved source.
- `proposed` — supplied as a recommendation, pending approval.
- `demo` — fictional or placeholder content for layout review only.
- `approval: pending` — cannot be published as fact until approved.
- `mustReplace: true` — must be replaced before launch.

Current prototype records are `demo`, `approval: pending`, `mustReplace: true`. Work records are **concept studies**, not claims of completed DUZZA projects. Equipment records are **illustrative configurations**, not inventory or availability statements.

## Production blockers

- Production logo vectors and the client-approved final lockup are still missing. The prototype uses image crops extracted from the supplied brand concept sheet.
- Contact recipients, email delivery provider and spam protection are not configured.
- A legally reviewed privacy notice and retention policy are not approved.
- No client-approved case studies, testimonials or leadership biographies have been supplied.
- Equipment inventory, datasheets, ownership and hire availability are unverified.
- No team photography has been supplied.

## Brand assets

Source: `brand/Create_DUZZA_GROUP_brand_identity_0e077e32_2K.jpg`

The supplied concept sheet is the source for the current logo presentation. Prototype crops and recoloured raster derivatives were produced without redrawing the mark:

| Asset | Purpose | Status |
| --- | --- | --- |
| `public/brand/duzza-group-lockup.png` | Desktop and mobile header lockup | Prototype raster derivative |
| `public/brand/duzza-group-lockup-reverse.png` | Dark-background footer and About lockup | Prototype recoloured raster |
| `public/brand/duzza-group-monogram.png` | Structured data and compact brand use | Prototype raster derivative |
| `src/app/icon.png` | Favicon | Prototype raster derivative |
| `src/app/apple-icon.png` | Apple touch icon | Prototype raster derivative |
| `public/og/duzza-group-og.png` | Social preview card | Prototype raster derivative |

Production SVG/PNG lockups, monogram-only vector files, clear-space rules and final logo approval remain outstanding.

## Image assets

All images are downloaded locally from Pexels and used under the Pexels License. Attribution is displayed on work and equipment detail pages. Images are illustrative and must not be presented as evidence of DUZZA projects or equipment.

| Local path | Creator | Pexels source | Dimensions | Used in |
| --- | --- | --- | --- | --- |
| `public/images/projects/civil-works.jpg` | NITIN CHAUHAN | https://www.pexels.com/photo/crane-at-construction-site-16593777/ | 1600×2400 | `civil-works-package` |
| `public/images/projects/energy-logistics.jpg` | Jan-Rune Smenes Reite | https://www.pexels.com/photo/offshore-drilling-rig-on-body-of-water-3216911/ | 1600×1200 | `energy-logistics-support` |
| `public/images/projects/marine-survey.jpg` | Asad Photo Maldives | https://www.pexels.com/photo/man-with-measurement-device-by-lake-24245274/ | 1600×1067 | `marine-corridor-survey`; Home hero |
| `public/images/branding/executive-profile.jpg` | Erick Ortega | https://www.pexels.com/photo/portrait-of-confident-business-woman-in-black-suit-36363691/ | 1600×1067 | `executive-profile-system` |
| `public/images/branding/performance-campaign.jpg` | Adenir Figueiredo Carvalho | https://www.pexels.com/photo/young-athlete-preparing-for-race-on-outdoor-track-32996794/ | 1600×2400 | `performance-campaign-toolkit` |
| `public/images/branding/identity-system.jpg` | MART PRODUCTION | https://www.pexels.com/photo/stationery-on-black-background-7718791/ | 1600×1067 | `corporate-identity-refresh` |
| `public/images/branding/merchandise.jpg` | mockupbee | https://www.pexels.com/photo/white-t-shirt-on-white-surface-12039633/ | 1600×1067 | `merchandise-programme` |
| `public/images/equipment/multibeam.jpg` | Maahid Photos | https://www.pexels.com/photo/top-view-photo-of-speedboat-on-sea-4701633/ | 1600×2402 | `multibeam-echosounder` |
| `public/images/equipment/gnss-ins.jpg` | Khoiru Ummah Kendari 24 | https://www.pexels.com/photo/high-precision-construction-surveying-equipment-outdoors-36930873/ | 1600×1068 | `gnss-ins-positioning` |
| `public/images/equipment/usv.jpg` | Emre Koşak | https://www.pexels.com/photo/aerial-view-of-boat-on-tranquil-ocean-surface-30617592/ | 1600×2000 | `unmanned-survey-vessel` |
| `public/images/equipment/echo-sounder.jpg` | Anthony Desrochers | https://www.pexels.com/photo/engineering-equipment-in-close-up-shot-13279686/ | 1600×2400 | `single-beam-echosounder` |

License reference: https://www.pexels.com/license/

`public/images/team/` is currently empty. No team photographs are published.

## Work records

| Slug | Division | Title | Status | Approval | Must replace |
| --- | --- | --- | --- | --- | --- |
| `civil-works-package` | Projects | Civil works package | demo | pending | Yes |
| `energy-logistics-support` | Projects | Energy logistics support | demo | pending | Yes |
| `marine-corridor-survey` | Projects | Marine corridor survey | demo | pending | Yes |
| `executive-profile-system` | Branding | Executive profile system | demo | pending | Yes |
| `performance-campaign-toolkit` | Branding | Performance campaign toolkit | demo | pending | Yes |
| `corporate-identity-refresh` | Branding | Corporate identity refresh | demo | pending | Yes |
| `merchandise-programme` | Branding | Merchandise programme | demo | pending | Yes |

`clientLabel` values are project archetypes, not verified client names. Work imagery is representative only. Replace each record with an approved case study, original media, confirmed client naming and verified outcomes before launch.

## Testimonials

| Used in | Attribution | Status | Approval | Must replace |
| --- | --- | --- | --- | --- |
| `civil-works-package` | Programme Director | demo | pending | Yes |
| `executive-profile-system` | Founder | demo | pending | Yes |

Both testimonials are fictional presentation copy. Do not publish without an approved quote, named or agreed attribution, context and written permission.

## Equipment records

| Slug | Name | Status | Approval | Must replace |
| --- | --- | --- | --- | --- |
| `multibeam-echosounder` | Multibeam echosounder | demo | pending | Yes |
| `gnss-ins-positioning` | GNSS / INS positioning system | demo | pending | Yes |
| `unmanned-survey-vessel` | Unmanned survey vessel | demo | pending | Yes |
| `single-beam-echosounder` | Single-beam echosounder | demo | pending | Yes |

All specifications are illustrative. Replace with verified manufacturer or client datasheets, approved hire scope and confirmed availability. Do not claim equipment ownership, operating geography or availability.

`src/content/demo/inventory.ts` adds a 14-line sample inventory schedule covering survey acquisition, positioning, platforms and support equipment. Quantities and configurations are placeholders only; the schedule is not evidence of ownership or availability.

## Team records

| Name | Role | Status | Approval | Must replace |
| --- | --- | --- | --- | --- |
| Adaeze Nwosu | Group Managing Director | demo | pending | Yes |
| Tunde Balogun | Head of Projects | demo | pending | Yes |
| Maya Bennett | Creative Director, Branding | demo | pending | Yes |

Names, roles and biographies are fictional. Replace only with confirmed people, approved biographies and photo permissions.

## Contact and legal

- Public contact email, phone, WhatsApp and office address: not supplied.
- Project and branding enquiry recipients: not configured.
- Privacy notice: presentation draft only; legal review and final data-flow details pending.
- Footer legal wording: `DUZZA LIMITED` is stated in the client brief; registration number and registered office are not displayed.
- Logo: prototype image crops are in use; approved production vectors and final clear-space rules remain outstanding.

## Enquiry prototype endpoints

- `/api/enquiries/project`, `/api/enquiries/branding`, `/api/enquiries/general`.
- Requests are JSON-only, size-limited, server-validated, honeypot-checked and rate-limited in memory.
- The endpoints do not send email, write to a database, store the payload or log personal data.
- A successful response means prototype validation passed, not that a message was delivered.
- Replace the handler with an approved delivery provider, recipient inboxes, persistent spam protection and a reviewed retention process before launch.

## CMS migration path

Pages read content through `src/lib/content/repository.ts`; they do not import demo records directly. To move to Sanity after the client project is configured:

1. Map `src/content/types.ts` to Sanity schemas for work, equipment, team, testimonials and shared image metadata.
2. Replace the repository function bodies with Sanity queries while keeping the same return types.
3. Add draft/publish handling and a preview route only after secure credentials are configured.
4. Keep the current demo records available for local development and visual regression checks.
5. Do not expose draft records or private enquiry data in public queries.

## Validation status

- Last full check: lint, typecheck, 6 tests and production build pass; 28 pages generated.
- Lighthouse accessibility: 100 on Home, About, Projects, Branding, Contact, enquiry forms, Work, Work detail, Equipment, Equipment detail, Businesses and Privacy.
- Enquiry preview endpoints: valid project, branding and general payloads return `200`; invalid payloads return `422`; repeated requests return `429`; honeypot submissions return `200` without delivery.
- Browser check: the project form submits, displays the preview success notice, and associates a server field error with the scope field.
- Mobile layout: 390 px viewport shows no horizontal overflow across Home, About, Projects, Work, Work detail, Equipment, Equipment detail, Businesses, Contact, both enquiry forms and Privacy.
- Default indexing is disabled. Lighthouse SEO will report `is-crawlable` until `NEXT_PUBLIC_SITE_INDEXABLE=true` is set for the production domain.
- Lighthouse performance tracing failed with `NO_NAVSTART` in the local Chrome/Lighthouse environment; a browser performance audit remains outstanding.

## Review checklist before launch

- Replace every `demo` and `mustReplace` record.
- Verify all image rights, credits and usage contexts.
- Confirm equipment and project claims against approved evidence.
- Configure secure server-side form handling and recipient inboxes.
- Approve the privacy notice, retention policy and legal footer.
- Supply and approve final logo assets and favicon.
- Run accessibility, keyboard, responsive, performance and metadata checks.
- Re-run lint, typecheck, tests, production build and route smoke tests.
