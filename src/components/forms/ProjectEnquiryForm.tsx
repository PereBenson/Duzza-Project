import { FormGrid, FormNote, FormSection, FormShell } from "@/components/forms/FormShell";
import { Checkbox, Select, TextArea, TextInput } from "@/components/ui/form/controls";

export function ProjectEnquiryForm() {
  return (
    <FormShell
      title="Project enquiry"
      description="Tell us about the project, scope and timing. Required fields are marked with an asterisk."
      endpoint="/api/enquiries/project"
      submitLabel="Send project enquiry"
    >
      <FormSection legend="Contact details">
        <FormGrid>
          <TextInput id="project-name" name="name" label="Full name" autoComplete="name" required />
          <TextInput
            id="project-company"
            name="company"
            label="Company or organisation"
            autoComplete="organization"
          />
          <TextInput
            id="project-email"
            name="email"
            type="email"
            label="Work email"
            autoComplete="email"
            required
          />
          <TextInput
            id="project-phone"
            name="phone"
            type="tel"
            label="Phone or WhatsApp"
            autoComplete="tel"
            hint="Include the country code if outside Nigeria."
          />
          <TextInput
            id="project-location"
            name="location"
            label="Country or project location"
            autoComplete="country-name"
          />
          <Select
            id="project-interest"
            name="interest"
            label="Enquiry category"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="general-contracting">General contracting</option>
            <option value="engineering-construction">Engineering and construction</option>
            <option value="oil-gas">Oil and gas</option>
            <option value="marine-support">Marine project support</option>
            <option value="hydrographic-survey">Hydrographic survey support</option>
            <option value="equipment-hire">Equipment hire</option>
            <option value="supply-procurement">Supply and procurement</option>
            <option value="other">Other</option>
          </Select>
        </FormGrid>
      </FormSection>

      <FormSection legend="Project details">
        <TextArea
          id="project-scope"
          name="scope"
          label="Project summary and scope"
          hint="Describe the work, location, current stage and any known constraints."
          rows={6}
          required
        />
        <FormGrid>
          <TextInput
            id="project-timeline"
            name="timeline"
            label="Timeline"
            hint="For example: planning, Q1, or a specific date range."
          />
          <TextInput
            id="project-budget"
            name="budget"
            label="Budget range (optional)"
            hint="Only provide a range if you are comfortable sharing it."
          />
        </FormGrid>
        <FormNote>
          File upload is not included in release one. Keep drawings, surveys and other documents
          outside this form until a secure transfer route is approved.
        </FormNote>
      </FormSection>

      <FormSection legend="Privacy">
        <Checkbox
          id="project-privacy"
          name="privacy"
          label={
            <>
              I have read the{" "}
              <a href="/privacy" className="underline decoration-line underline-offset-4 hover:decoration-ink">
                privacy notice
              </a>{" "}
              and understand how my enquiry will be handled.
            </>
          }
          required
        />
      </FormSection>
    </FormShell>
  );
}
