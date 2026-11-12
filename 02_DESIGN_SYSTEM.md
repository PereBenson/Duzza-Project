# DUZZA GROUP — Proposed design system

**Status:** Initial proposal carried forward from Stage 6. Requires visual review against the final approved logo and real content before sign-off.

## 1. Foundations

### Colour tokens
| Token | Value | Intended use |
|---|---|---|
| Carbon | `#111318` | Main dark surface, primary text on light |
| Chalk | `#F4F3EF` | Main warm page background |
| Signal Lime | `#C8F169` | Primary accent, key CTA highlights |
| Steel | `#7C838C` | Secondary text, muted UI; contrast-check small text |
| Mist | `#E5E7E4` | Borders, dividers, subtle panels |
| White | `#FFFFFF` | Cards and clean surfaces |

Define these as CSS custom properties in one central token file. Do not scatter raw hex values across components. Add semantic tokens (`--color-text`, `--color-surface`, `--color-border`, `--color-accent`, etc.) mapped to the base palette.

### Typography
| Role | Family | Guidance |
|---|---|---|
| Display | Space Grotesk | Hero and large editorial headings |
| Body/UI | Inter | Paragraphs, controls, navigation and labels |
| Technical | IBM Plex Mono | Small technical labels and metadata only |

Suggested fluid type scale (clamp values may be tuned during implementation):
- Display XL: 3.5–6rem, tight line-height 0.95–1.05.
- Display L: 2.75–4.5rem, line-height 1.0–1.08.
- H1: 2.5–4rem.
- H2: 2–3rem.
- H3: 1.5–2rem.
- Lead: 1.125–1.375rem.
- Body: 1rem, line-height 1.55–1.7.
- Small: 0.875rem; metadata should remain readable and not be overused.

Use responsive `clamp()` sizing for display text. Avoid extremely long line lengths; body copy should generally sit around 60–75 characters per line.

### Spacing
4px base scale:
`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`.

Use semantic spacing variables for section padding, card padding and component gaps. Do not create arbitrary values unless layout requires them; if repeated, promote them into tokens.

### Grid and layout
- Maximum content width: 1280px (proposed).
- Desktop: 12 columns, 24px gutter.
- Tablet: 8 columns, 20px gutter.
- Mobile: 4 columns, 16px gutter.
- Responsive side padding: 20 / 24 / 32 / 48 / 64px as viewport grows.
- Proposed breakpoints: 480, 768, 1024, 1280 and 1440px.
- Use a consistent centered container and fluid section spacing.

### Radius and borders
- Small controls: 6px radius.
- Cards: 12px radius.
- Large feature media: 16px radius where it supports the composition.
- Prefer fine, low-contrast borders over heavy shadows. Use elevation sparingly.

## 2. Component rules

### Header/navigation
- Clear parent-brand identity and concise nav.
- Desktop uses approved combined DUZZA GROUP lockup.
- Primary CTA remains visually distinct.
- Mobile navigation must be keyboard accessible and easy to close.
- Avoid a tall header that consumes the first viewport.

### Buttons
- Minimum interactive height: 48px.
- Clear primary, secondary and text-link variants.
- Visible hover, focus, active and disabled states.
- Labels should describe the action; avoid generic `Submit` where a specific label is possible.
- Do not rely on colour alone to communicate state.

### Cards
- Use for divisions, services, projects, insights and equipment.
- Consistent padding and alignment.
- Keep cards scannable; do not turn every content block into a card.
- Project cards must only show verified project records.

### Forms
- Persistent visible labels; placeholder is not a label.
- Inline validation and clear error summary.
- Correct input types and autocomplete attributes.
- Explain file types and size limits before upload.
- Consent must be explicit and unchecked by default when required.
- Provide success and failure states; do not display success until server confirmation.

### Media
- Responsive images with explicit dimensions/aspect ratio to reduce layout shift.
- Use modern image formats where supported and appropriate fallbacks.
- Lazy-load below-the-fold media; prioritise the main hero visual.
- Video requires a poster and reduced-motion fallback.

## 3. Accessibility requirements
Target WCAG 2.2 AA as the implementation target (the client brief specified WCAG 2.1 AA; 2.2 AA is a forward-looking recommendation). At minimum:
- Semantic landmarks and heading hierarchy.
- Full keyboard operation and visible focus.
- Accessible names for icon-only controls.
- Contrast checks for text, controls and focus indicators.
- Alt text for meaningful images; empty alt for decorative images.
- Reduced-motion support.
- Accessible form labels, instructions and error messages.
- No information conveyed by colour alone.

## 4. Performance requirements
- Prioritise small mobile payloads and fast first contentful paint.
- Avoid shipping large animation libraries for simple transitions.
- Avoid autoplay background video on mobile; prefer a static poster where performance or data use would suffer.
- Set image dimensions and use responsive sources.
- Keep third-party scripts minimal and load only after consent where applicable.

## 5. Design QA
Before sign-off, test the tokens and components against:
- Actual final logo files and both light/dark logo variants.
- Real Projects content and real Branding portfolio assets.
- Narrow mobile widths, standard phones, tablets and desktop.
- Contrast checker and keyboard-only navigation.
- Reduced-motion setting.
- Long headings, empty states, missing images and form error states.

Do not call this design system final until the client approves the palette, font use and combined logo lockup.
