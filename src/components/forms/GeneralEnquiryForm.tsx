import { FormGrid, FormSection, FormShell } from "@/components/forms/FormShell";
import { Checkbox, Select, TextArea, TextInput } from "@/components/ui/form/controls";

export function GeneralEnquiryForm() {
  return (
    <FormShell
      title="General or partnership enquiry"
      description="For general questions, partnerships and other business contacts. Required fields are marked with an asterisk."
      endpoint="/api/enquiries/general"
      submitLabel="Send general enquiry"
    >
      <FormSection legend="Contact details">
        <FormGrid>
          <TextInput id="general-name" name="name" label="Full name" autoComplete="name" required />
          <TextInput
            id="general-email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
            required
          />
          <TextInput
            id="general-phone"
            name="phone"
            type="tel"
            label="Phone (optional)"
            autoComplete="tel"
          />
          <Select id="general-type" name="type" label="Enquiry type" required defaultValue="">
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="general">General enquiry</option>
            <option value="partnership">Partnership</option>
            <option value="supplier">Supplier or procurement</option>
            <option value="other">Other</option>
          </Select>
        </FormGrid>
      </FormSection>

      <FormSection legend="Message">
        <TextArea
          id="general-message"
          name="message"
          label="Message"
          hint="Tell us what you would like to discuss."
          rows={6}
          required
        />
      </FormSection>

      <FormSection legend="Privacy">
        <Checkbox
          id="general-privacy"
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
