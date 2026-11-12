export type ContentStatus = "verified" | "proposed" | "demo";

export type ApprovalStatus = "approved" | "pending" | "not-required";

export type ContentMeta = {
  status: ContentStatus;
  approval: ApprovalStatus;
  mustReplace: boolean;
  source: string;
  note?: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
  meta: ContentMeta;
};

export type WorkDivision = "projects" | "branding";

export type WorkItem = {
  slug: string;
  division: WorkDivision;
  category: string;
  title: string;
  summary: string;
  clientLabel: string;
  sector: string;
  timeline: string;
  challenge: string;
  approach: string;
  contribution: readonly string[];
  deliverables: readonly string[];
  image: ImageAsset;
  testimonial?: Testimonial;
  featured?: boolean;
  meta: ContentMeta;
};

export type EquipmentSpec = {
  label: string;
  value: string;
};

export type EquipmentItem = {
  slug: string;
  name: string;
  category: string;
  model: string;
  summary: string;
  description: string;
  specs: readonly EquipmentSpec[];
  applications: readonly string[];
  hireNote: string;
  image: ImageAsset;
  meta: ContentMeta;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  meta: ContentMeta;
};

export type InventoryItem = {
  category: string;
  name: string;
  quantity: string;
  configuration: string;
  meta: ContentMeta;
};
