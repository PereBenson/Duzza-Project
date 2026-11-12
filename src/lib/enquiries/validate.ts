export type EnquiryKind = "project" | "branding" | "general";

type Payload = Record<string, unknown>;

export type ValidationResult =
  | { ok: true; data: Record<string, string | string[]> }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

const projectInterests = new Set([
  "general-contracting",
  "engineering-construction",
  "oil-gas",
  "marine-support",
  "hydrographic-survey",
  "equipment-hire",
  "supply-procurement",
  "other",
]);

const brandingServices = new Set([
  "executive-branding",
  "corporate-digital",
  "sports-creative",
  "merchandising",
]);

const generalTypes = new Set(["general", "partnership", "supplier", "other"]);
const brandingTimelines = new Set([
  "under-1-month",
  "1-3-months",
  "3-6-months",
  "ongoing",
]);

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function values(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((entry): entry is string => typeof entry === "string");
  }
  return typeof value === "string" ? [value] : [];
}

function addError(errors: Record<string, string>, key: string, message: string) {
  if (!errors[key]) {
    errors[key] = message;
  }
}

function validateCommon(payload: Payload, errors: Record<string, string>) {
  const name = text(payload.name);
  const email = text(payload.email);
  const phone = text(payload.phone);
  const privacy = values(payload.privacy);

  if (name.length < 2) {
    addError(errors, "name", "Enter your name.");
  } else if (name.length > 120) {
    addError(errors, "name", "Keep your name under 120 characters.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    addError(errors, "email", "Enter a valid email address.");
  }

  if (phone.length > 40) {
    addError(errors, "phone", "Keep the phone number under 40 characters.");
  }

  if (!privacy.includes("on") && !privacy.includes("true")) {
    addError(errors, "privacy", "Confirm that you have read the privacy notice.");
  }

  return { name, email, phone };
}

export function validateEnquiry(kind: EnquiryKind, payload: Payload): ValidationResult {
  const errors: Record<string, string> = {};
  const common = validateCommon(payload, errors);

  if (kind === "project") {
    const interest = text(payload.interest);
    const scope = text(payload.scope);
    const timeline = text(payload.timeline);
    const budget = text(payload.budget);
    const location = text(payload.location);

    if (!projectInterests.has(interest)) {
      addError(errors, "interest", "Select an enquiry category.");
    }
    if (scope.length < 20) {
      addError(errors, "scope", "Describe the project in at least 20 characters.");
    } else if (scope.length > 3000) {
      addError(errors, "scope", "Keep the project summary under 3,000 characters.");
    }
    if (timeline.length > 120) {
      addError(errors, "timeline", "Keep the timeline under 120 characters.");
    }
    if (budget.length > 120) {
      addError(errors, "budget", "Keep the budget note under 120 characters.");
    }
    if (location.length > 160) {
      addError(errors, "location", "Keep the location under 160 characters.");
    }

    if (Object.keys(errors).length > 0) {
      return { ok: false, message: "Check the highlighted information and try again.", fieldErrors: errors };
    }

    return { ok: true, data: { ...common, interest, scope, timeline, budget, location } };
  }

  if (kind === "branding") {
    const goal = text(payload.goal);
    const deliverables = text(payload.deliverables);
    const timeline = text(payload.timeline);
    const budget = text(payload.budget);
    const links = text(payload.links);
    const country = text(payload.country);
    const services = values(payload.services).filter((entry) => brandingServices.has(entry));

    if (goal.length < 20) {
      addError(errors, "goal", "Describe the project goal in at least 20 characters.");
    } else if (goal.length > 3000) {
      addError(errors, "goal", "Keep the project goal under 3,000 characters.");
    }
    if (deliverables.length > 2000) {
      addError(errors, "deliverables", "Keep the deliverables under 2,000 characters.");
    }
    if (timeline && !brandingTimelines.has(timeline)) {
      addError(errors, "timeline", "Select a valid timeline.");
    }
    if (budget.length > 120) {
      addError(errors, "budget", "Keep the budget note under 120 characters.");
    }
    if (links.length > 500) {
      addError(errors, "links", "Keep links under 500 characters.");
    }
    if (country.length > 120) {
      addError(errors, "country", "Keep the country under 120 characters.");
    }

    if (Object.keys(errors).length > 0) {
      return { ok: false, message: "Check the highlighted information and try again.", fieldErrors: errors };
    }

    return {
      ok: true,
      data: { ...common, goal, deliverables, timeline, budget, links, country, services },
    };
  }

  const type = text(payload.type);
  const message = text(payload.message);

  if (!generalTypes.has(type)) {
    addError(errors, "type", "Select an enquiry type.");
  }
  if (message.length < 20) {
    addError(errors, "message", "Write at least 20 characters.");
  } else if (message.length > 3000) {
    addError(errors, "message", "Keep the message under 3,000 characters.");
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Check the highlighted information and try again.", fieldErrors: errors };
  }

  return { ok: true, data: { ...common, type, message } };
}
