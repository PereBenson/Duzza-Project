import type { ContentMeta, ImageAsset, Testimonial, WorkItem } from "@/content/types";

const pexelsLicense = {
  license: "Pexels License",
  licenseUrl: "https://www.pexels.com/license/",
} as const;

const demoMeta = (source: string): ContentMeta => ({
  status: "demo",
  approval: "pending",
  mustReplace: true,
  source,
  note: "Illustrative concept developed for layout and content review. Not a record of completed work.",
});

const projectTestimonial: Testimonial = {
  quote:
    "The value was in the clarity of the reporting. We always knew what had been surveyed, what was outstanding and what needed a decision.",
  attribution: "Programme Director",
  context: "Nearshore infrastructure · illustrative perspective",
  meta: demoMeta("Demo testimonial supplied for prototype review"),
};

const brandingTestimonial: Testimonial = {
  quote:
    "The system gave our team a consistent way to show up across profiles, launches and campaign moments without starting from scratch each time.",
  attribution: "Founder",
  context: "Consumer brand · illustrative perspective",
  meta: demoMeta("Demo testimonial supplied for prototype review"),
};

const images = {
  civilWorks: {
    src: "/images/projects/civil-works.jpg",
    alt: "Tower crane rising above a construction site against a blue sky",
    width: 1600,
    height: 2400,
    credit: "NITIN CHAUHAN",
    sourceUrl: "https://www.pexels.com/photo/crane-at-construction-site-16593777/",
    ...pexelsLicense,
  },
  energyLogistics: {
    src: "/images/projects/energy-logistics.jpg",
    alt: "Offshore energy platform standing in open water",
    width: 1600,
    height: 1200,
    credit: "Jan-Rune Smenes Reite",
    sourceUrl: "https://www.pexels.com/photo/offshore-drilling-rig-on-body-of-water-3216911/",
    ...pexelsLicense,
  },
  marineSurvey: {
    src: "/images/projects/marine-survey.jpg",
    alt: "Surveyor taking measurements beside a coastal lake",
    width: 1600,
    height: 1067,
    credit: "Asad Photo Maldives",
    sourceUrl: "https://www.pexels.com/photo/man-with-measurement-device-by-lake-24245274/",
    ...pexelsLicense,
  },
  executiveProfile: {
    src: "/images/branding/executive-profile.jpg",
    alt: "Professional portrait of a leader in a dark suit",
    width: 1600,
    height: 1067,
    credit: "Erick Ortega",
    sourceUrl:
      "https://www.pexels.com/photo/portrait-of-confident-business-woman-in-black-suit-36363691/",
    ...pexelsLicense,
  },
  performanceCampaign: {
    src: "/images/branding/performance-campaign.jpg",
    alt: "Athlete preparing for a training session on an outdoor track",
    width: 1600,
    height: 2400,
    credit: "Adenir Figueiredo Carvalho",
    sourceUrl:
      "https://www.pexels.com/photo/young-athlete-preparing-for-race-on-outdoor-track-32996794/",
    ...pexelsLicense,
  },
  identitySystem: {
    src: "/images/branding/identity-system.jpg",
    alt: "Minimal stationery and digital workspace arranged in a flat lay",
    width: 1600,
    height: 1067,
    credit: "MART PRODUCTION",
    sourceUrl: "https://www.pexels.com/photo/stationery-on-black-background-7718791/",
    ...pexelsLicense,
  },
  merchandise: {
    src: "/images/branding/merchandise.jpg",
    alt: "Plain white t-shirt prepared for a branded merchandise concept",
    width: 1600,
    height: 1067,
    credit: "mockupbee",
    sourceUrl: "https://www.pexels.com/photo/white-t-shirt-on-white-surface-12039633/",
    ...pexelsLicense,
  },
} satisfies Record<string, ImageAsset>;

export const workItems = [
  {
    slug: "civil-works-package",
    division: "projects",
    category: "Engineering & construction",
    title: "Civil works package",
    summary:
      "A concept delivery model for early civil works, connecting mobilisation, inspection points and staged handover.",
    clientLabel: "Private developer",
    sector: "Construction",
    timeline: "24-week concept programme",
    challenge:
      "The brief called for a single view of site progress across groundworks, concrete packages and incoming materials. The client team needed earlier warning on interface clashes and a cleaner route from inspection to handover.",
    approach:
      "Package the works around visible milestones, a short weekly reporting rhythm and named decision points. Keep quality records, material movements and site instructions tied to the same delivery plan.",
    contribution: [
      "Package and milestone structure",
      "Site coordination and reporting routines",
      "Inspection and quality-control checkpoints",
      "Staged handover model",
    ],
    deliverables: [
      "Delivery plan and responsibility map",
      "Weekly progress and risk summary",
      "Inspection and handover register",
      "Material and interface tracker",
    ],
    image: images.civilWorks,
    testimonial: projectTestimonial,
    featured: true,
    meta: demoMeta("Illustrative Projects case study"),
  },
  {
    slug: "energy-logistics-support",
    division: "projects",
    category: "Oil & gas",
    title: "Energy logistics support",
    summary:
      "A concept coordination scope for equipment, materials and site interfaces across a long-running energy programme.",
    clientLabel: "Energy operator",
    sector: "Oil & gas",
    timeline: "12-month concept support window",
    challenge:
      "Multiple suppliers, changing priorities and limited visibility between the field team and the operations office made it difficult to confirm what was moving, what was delayed and what required escalation.",
    approach:
      "Create one operating picture for requests, movements and exceptions. Give each item an owner, a status and a next action, with a short daily exception review and a weekly commercial summary.",
    contribution: [
      "Logistics coordination model",
      "Supplier and movement tracking",
      "Exception and escalation process",
      "Weekly reporting pack",
    ],
    deliverables: [
      "Movement and request tracker",
      "Exception review rhythm",
      "Supplier status summary",
      "Site interface map",
    ],
    image: images.energyLogistics,
    featured: true,
    meta: demoMeta("Illustrative Projects case study"),
  },
  {
    slug: "marine-corridor-survey",
    division: "projects",
    category: "Marine & hydrographic",
    title: "Marine corridor survey",
    summary:
      "A concept survey scope for nearshore corridor mapping, positioning checks and a structured data handover.",
    clientLabel: "Nearshore infrastructure",
    sector: "Marine & hydrographic survey",
    timeline: "8-week concept survey window",
    challenge:
      "The engineering team needed a reliable picture of seabed conditions before mobilisation. Survey lines, positioning quality and deliverable formats had to be agreed before the field window opened.",
    approach:
      "Agree the survey specification and line plan first, then align positioning, acquisition and quality checks around the decisions the engineering team needs to make. Package raw and processed data for review.",
    contribution: [
      "Survey specification and line planning",
      "Positioning and acquisition support",
      "Quality-control checkpoints",
      "Processed and raw data handover",
    ],
    deliverables: [
      "Survey line plan",
      "Positioning and calibration record",
      "Bathymetric data package",
      "Survey report and issue log",
    ],
    image: images.marineSurvey,
    meta: demoMeta("Illustrative Projects case study"),
  },
  {
    slug: "executive-profile-system",
    division: "branding",
    category: "Executive branding",
    title: "Executive profile system",
    summary:
      "A leadership identity system spanning portrait direction, biography, social presence and press-ready assets.",
    clientLabel: "Private client",
    sector: "Professional services",
    timeline: "6-week concept sprint",
    challenge:
      "A senior leader had a strong reputation but an inconsistent public presence. The brief was to create one recognisable system that could travel across speaking, press and social channels without feeling over-produced.",
    approach:
      "Start with a clear narrative and a practical visual language. Build a small set of portrait, typography and layout rules, then produce templates the team can reuse across profiles, announcements and event materials.",
    contribution: [
      "Positioning and narrative direction",
      "Portrait and image direction",
      "Profile and press templates",
      "Social layout system",
    ],
    deliverables: [
      "Short and long biography",
      "Portrait selection and usage guide",
      "Profile and press kit",
      "Social template set",
    ],
    image: images.executiveProfile,
    testimonial: brandingTestimonial,
    featured: true,
    meta: demoMeta("Illustrative Branding case study"),
  },
  {
    slug: "performance-campaign-toolkit",
    division: "branding",
    category: "Sports & creative media",
    title: "Performance campaign toolkit",
    summary:
      "A modular content system for launches, matchdays and always-on social across a performance brand.",
    clientLabel: "Performance apparel",
    sector: "Sports & creative media",
    timeline: "Always-on concept system",
    challenge:
      "The brand needed to publish quickly without losing consistency. Campaign assets, short-form video and matchday content were being produced as one-offs, making the feed feel fragmented.",
    approach:
      "Build a flexible toolkit around a few fixed elements: type hierarchy, crop behaviour, motion cues and a small colour system. Create repeatable formats for announcements, product moments and athlete stories.",
    contribution: [
      "Campaign visual direction",
      "Content format system",
      "Short-form video guidance",
      "Channel-specific templates",
    ],
    deliverables: [
      "Campaign art direction",
      "Social template library",
      "Motion and edit guide",
      "Content calendar framework",
    ],
    image: images.performanceCampaign,
    featured: true,
    meta: demoMeta("Illustrative Branding case study"),
  },
  {
    slug: "corporate-identity-refresh",
    division: "branding",
    category: "Corporate & digital",
    title: "Corporate identity refresh",
    summary:
      "A restrained identity update with practical applications for digital, document and campaign use.",
    clientLabel: "Energy services",
    sector: "Corporate & digital branding",
    timeline: "10-week concept programme",
    challenge:
      "The existing identity had accumulated inconsistent variants across documents, digital channels and supplier materials. The team needed a simpler system without losing recognition.",
    approach:
      "Retain the strongest recognisable cues, tighten the typographic and colour system, then build a practical kit for the places the brand actually appears. Prioritise ease of use over an oversized guideline document.",
    contribution: [
      "Identity audit and direction",
      "Typographic and colour system",
      "Digital and document applications",
      "Lightweight brand guide",
    ],
    deliverables: [
      "Identity system and usage rules",
      "Document templates",
      "Digital layout kit",
      "Brand guide and asset pack",
    ],
    image: images.identitySystem,
    meta: demoMeta("Illustrative Branding case study"),
  },
  {
    slug: "merchandise-programme",
    division: "branding",
    category: "Merchandising",
    title: "Merchandise programme",
    summary:
      "A concept range strategy connecting apparel, packaging and campaign assets around one clear brand idea.",
    clientLabel: "Creative studio",
    sector: "Merchandising",
    timeline: "Seasonal concept range",
    challenge:
      "A creative studio wanted a small merchandise range that felt considered rather than promotional. The range needed to work for staff, clients and events without relying on a large number of stock-keeping units.",
    approach:
      "Define a tight product set, a consistent graphic language and a clear presentation standard. Test the system across apparel, packaging and launch content before expanding the range.",
    contribution: [
      "Range and product direction",
      "Graphic and label system",
      "Packaging and presentation",
      "Launch content direction",
    ],
    deliverables: [
      "Product range plan",
      "Graphic application guide",
      "Packaging concepts",
      "Launch content set",
    ],
    image: images.merchandise,
    meta: demoMeta("Illustrative Branding case study"),
  },
] satisfies readonly WorkItem[];

export function getProjectWork() {
  return workItems.filter((item) => item.division === "projects");
}

export function getBrandingWork() {
  return workItems.filter((item) => item.division === "branding");
}
