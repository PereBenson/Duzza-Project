export type Capability = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type StructureItem = {
  name: string;
  status: "Active division" | "Coming soon";
  note: string;
};

export const projectsCapabilities: readonly Capability[] = [
  {
    title: "General contracting",
    description:
      "General contracting and general merchants, covering engineering, construction, oil and gas, and marine work.",
  },
  {
    title: "Engineering & construction",
    description: "Engineering and construction project support.",
  },
  {
    title: "Oil & gas",
    description: "Project support for oil and gas work.",
  },
  {
    title: "Marine project support",
    description: "Marine project support services.",
  },
  {
    title: "Hydro-spatial & hydrographic survey",
    description: "Hydro-spatial and hydrographic survey support services.",
  },
  {
    title: "Supply & procurement",
    description: "General supply, procurement and merchandise trading.",
  },
];

export const projectsSectors: readonly string[] = [
  "Engineering",
  "Construction",
  "Oil & gas",
  "Marine",
  "Procurement & supply",
];

export const brandingPillars: readonly Capability[] = [
  {
    title: "Executive branding",
    description:
      "Personal and leadership brand identity for executives and agency heads, including profile imagery, bios, social presence and press materials.",
  },
  {
    title: "Corporate & digital branding",
    description:
      "Identity refresh, brand guidelines, social media design systems, website and campaign visuals, and digital ad creatives.",
  },
  {
    title: "Sports & creative media",
    description:
      "UGC-style video, static promotional images, graphic content, campaign assets and content calendars for sports brands.",
  },
  {
    title: "Merchandising",
    description:
      "Branded and customised apparel and promotional items, with concept-to-production support. Production responsibilities to be confirmed.",
  },
];

export const projectsProcess: readonly ProcessStep[] = [
  {
    title: "Brief",
    description: "Scope, location, constraints and decision points.",
  },
  {
    title: "Plan",
    description: "Delivery sequence, responsibilities and reporting.",
  },
  {
    title: "Mobilise",
    description: "People, equipment, materials and site readiness.",
  },
  {
    title: "Handover",
    description: "Quality records, close-out and next-stage support.",
  },
];

export const brandingProcess: readonly ProcessStep[] = [
  {
    title: "Brief",
    description: "Objectives, audience and scope.",
  },
  {
    title: "Concept",
    description: "Creative direction and approach.",
  },
  {
    title: "Create",
    description: "Production of the agreed deliverables.",
  },
  {
    title: "Deliver",
    description: "Final files and handover.",
  },
];

export const groupStructure: readonly StructureItem[] = [
  {
    name: "Duzza Projects",
    status: "Active division",
    note: "General contracting, engineering, marine survey support, equipment hire enquiries and supply.",
  },
  {
    name: "Duzza Branding",
    status: "Active division",
    note: "Executive, corporate and digital branding, sports and creative media, and merchandising.",
  },
  {
    name: "Fashion & Clothing",
    status: "Coming soon",
    note: "Boutique clothing, English and Ankara wear, shoes, bags and branded custom pieces.",
  },
  {
    name: "Food & Hospitality",
    status: "Coming soon",
    note: "Bakery, pastries, confectionery and restaurant offerings in development.",
  },
];

export const socialLinks = {
  instagram: {
    handle: "@duzza_branding",
    href: "https://www.instagram.com/duzza_branding",
    status: "pending-verification",
  },
} as const;
