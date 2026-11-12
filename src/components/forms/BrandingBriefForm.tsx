import { FormGrid, FormNote, FormSection, FormShell } from "@/components/forms/FormShell";
import { Checkbox, Select, TextArea, TextInput } from "@/components/ui/form/controls";

export function BrandingBriefForm() {
  return (
    <FormShell
      title="Branding brief"
      description="Share the brand, audience, deliverables and timing. Required fields are marked with an asterisk."
      endpoint="/api/enquiries/branding"
      submitLabel="Send branding brief"
    >
      <FormSection legend="Contact details">
        <FormGrid>
          <TextInput id="branding-name" name="name" label="Full name" autoComplete="name" required />
          <TextInput
            id="branding-company"
            name="company"
            label="Company or agency"
            autoComplete="organization"
          />
          <TextInput
            id="branding-email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
            required
          />
          <TextInput
            id="branding-phone"
            name="phone"
            type="tel"
            label="Phone or WhatsApp"
            autoComplete="tel"
          />
          <TextInput
            id="branding-country"
            name="country"
            label="Country"
            autoComplete="country-name"
          />
          <Select id="branding-timeline" name="timeline" label="Timeline" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="under-1-month">Under 1 month</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="ongoing">Ongoing or retainer</option>
          </Select>
        </FormGrid>
      </FormSection>

      <FormSection legend="Services needed">
        <div className="grid gap-4 sm:grid-cols-2">
          <Checkbox
            id="branding-executive"
            name="services"
            value="executive-branding"
            label="Executive branding"
            hint="Personal and leadership brand identity."
          />
          <Checkbox
            id="branding-corporate"
            name="services"
            value="corporate-digital"
            label="Corporate and digital branding"
            hint="Identity, guidelines, social systems and campaign visuals."
          />
          <Checkbox
            id="branding-sports"
            name="services"
            value="sports-creative"
            label="Sports and creative media"
            hint="UGC-style video, static content and campaign assets."
          />
          <Checkbox
            id="branding-merch"
            name="services"
            value="merchandising"
            label="Merchandising"
            hint="Branded apparel and promotional items."
          />
        </div>
      </FormSection>

      <FormSection legend="Project details">
        <TextArea
          id="branding-goal"
          name="goal"
          label="Project goal"
          hint="What should the work achieve, and who is it for?"
          rows={5}
          required
        />
        <TextArea
          id="branding-deliverables"
          name="deliverables"
          label="Deliverables needed"
          hint="List the formats, channels or assets you expect."
          rows={5}
        />
        <FormGrid>
          <TextInput
            id="branding-budget"
            name="budget"
            label="Budget range (optional)"
            hint="Only provide a range if you are comfortable sharing it."
          />
          <TextInput
            id="branding-links"
            name="links"
            label="Brand or social links"
            hint="Add one or more URLs separated by spaces."
          />
        </FormGrid>
        <FormNote>
          File upload is not included in release one. Use links for current brand references and
          keep source files outside this form until a secure transfer route is approved.
        </FormNote>
      </FormSection>

      <FormSection legend="Privacy">
        <Checkbox
          id="branding-privacy"
          name="privacy"
          label={
            <>
              I have read the{" "}
              <a href="/privacy" className="underline decoration-line underline-offset-4 hover:decoration-ink">
                privacy notice
              </a>{" "}
              and understand how my brief will be handled.
            </>
          }
          required
        />
      </FormSection>
    </FormShell>
  );
}
