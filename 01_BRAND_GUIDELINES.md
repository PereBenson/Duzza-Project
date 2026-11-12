# DUZZA GROUP — Brand application guidelines

## Brand architecture
Use a parent-and-divisions system:
- Parent: DUZZA GROUP — the umbrella identity and corporate front door.
- Active division 1: Duzza Projects (working name; confirm final registered/trading name).
- Active division 2: Duzza Branding.
- Future divisions: Fashion and Food/Hospitality, clearly marked Coming soon until launch readiness is confirmed.

The parent identity should unify the site. Division-specific layouts, imagery and accent treatments may express their different audiences, but must not look like unrelated companies.

## Logo system
The intended master lockup combines two separately selected logo iterations: the chosen monogram and the chosen full wordmark. Treat this as a careful identity-system refinement, not a pasted collage.

Required assets from client:
- Approved monogram as SVG (preferred) or high-resolution transparent PNG.
- Approved DUZZA GROUP wordmark as SVG (preferred) or high-resolution transparent PNG.
- Any existing usage restrictions, clear-space rules or colour variants.

Implementation instructions:
1. Inspect the supplied source artwork before using it.
2. Preserve original letterforms, proportions and distinctive geometry.
3. Create a combined lockup with consistent visual weight, baseline/optical alignment, spacing and clear space.
4. Do not stretch, skew, recolour or rebuild the logo from a screenshot.
5. Export approved SVG variants for light and dark backgrounds, plus a monogram favicon.
6. Ask for approval of the combined lockup before finalising header usage.

Suggested file locations:
- `public/brand/duzza-group-lockup.svg`
- `public/brand/duzza-group-lockup-light.svg`
- `public/brand/duzza-monogram.svg`
- `public/brand/favicon.svg`

These are expected paths, not existing assets. If the client provides different formats, preserve originals and document the final mapping.

## Responsive use
- Desktop header: combined monogram + wordmark.
- Tablet: combined lockup while it remains legible; otherwise apply the compact lockup only after visual approval.
- Mobile: combined lockup if it fits without crowding; otherwise monogram-only, with accessible name `DUZZA GROUP` on the link.
- Favicon and social avatar: monogram.
- Footer: combined lockup where space permits.

Do not decide on monogram-only desktop navigation as the default. The current recommendation is the full combined lockup, with responsive reduction only where needed for legibility.

## Colour use
Proposed master palette:
- Carbon `#111318` — primary dark surfaces, text on light surfaces.
- Chalk `#F4F3EF` — warm primary background.
- Signal Lime `#C8F169` — restrained accent and key actions.
- Steel `#7C838C` — secondary text and muted elements; verify contrast before use for small text.
- Mist `#E5E7E4` — subtle borders and secondary surfaces.
- White `#FFFFFF` — clean surfaces and contrast.

Use Signal Lime as a deliberate accent, not as a large-area background everywhere. Maintain WCAG AA contrast. If a proposed pairing fails contrast, adjust the pairing or use a darker/lighter accessible variant and document the change.

Division expression:
- Projects: primarily Carbon, Chalk, Steel and restrained Lime; technical photography and diagrams.
- Branding: same master tokens, with stronger imagery, more expressive composition and selected high-contrast surfaces. Do not introduce an unapproved second palette without documenting it for approval.
- Future divisions: no fully developed sub-brand palette until their business identities are supplied.

## Typography
- Space Grotesk: display and headings.
- Inter: paragraphs, navigation, labels, forms and UI.
- IBM Plex Mono: technical labels, specifications, timestamps and small metadata only.

Load fonts efficiently; prefer self-hosted licensed files or a privacy-conscious provider setup approved for the project. Avoid loading unnecessary weights. If font files/licensing are not supplied, use a visually close system fallback until approved.

## Voice and copy
- Confident, clear, specific and grounded.
- Avoid inflated claims, generic superlatives and unsupported guarantees.
- Projects copy should explain capabilities in plain language, with technical detail where useful.
- Branding copy should feel internationally legible and visually confident, not geographically restricted to Nigeria.
- Keep calls to action direct: `Request a Quote`, `Enquire About Equipment`, `Start a Branding Project`, `Contact DUZZA`.

## Photography and portfolio
Prioritise original, approved project, equipment, team and creative-work assets. Do not use generic stock photography in a way that implies it depicts DUZZA's actual work. If stock or conceptual imagery is used as temporary art direction, label it in the CMS and replace before launch or clearly separate it from project evidence.

## Motion
Use small, purposeful transitions for navigation, reveal and hover states. Respect `prefers-reduced-motion`. Do not use autoplay audio. Any hero video must be muted, compressed, have a poster image and never block the primary message or CTA.
