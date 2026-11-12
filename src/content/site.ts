export type DivisionStatus = "active" | "coming-soon";

export type Division = {
  name: string;
  href?: string;
  summary: string;
  status: DivisionStatus;
  statusLabel: string;
  services: readonly string[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export const site = {
  name: "DUZZA GROUP",
  legalName: "DUZZA LIMITED",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://duzzagroup.example",
  description:
    "DUZZA GROUP is the parent brand for Duzza Projects and Duzza Branding, with future fashion and food ventures in development.",
  navigation: [
    { label: "About", href: "/about" },
    { label: "Businesses", href: "/businesses" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ] satisfies readonly NavigationItem[],
  primaryCta: {
    label: "Request a Quote",
    href: "/contact/project-enquiry",
  },
  secondaryCta: {
    label: "Start a Branding Project",
    href: "/contact/branding-brief",
  },
  divisions: [
    {
      name: "Duzza Projects",
      href: "/projects",
      status: "active",
      statusLabel: "Active division",
      summary:
        "General contracting, engineering and construction, oil and gas, marine survey support and general supply.",
      services: [
        "Engineering & construction",
        "Oil & gas",
        "Marine & hydrographic survey",
        "Hydrographic equipment hire enquiries",
        "Procurement & supply",
      ],
    },
    {
      name: "Duzza Branding",
      href: "/branding",
      status: "active",
      statusLabel: "Active division",
      summary:
        "Executive branding, corporate and digital branding, sports and creative media, and merchandising for an international client base.",
      services: [
        "Executive branding",
        "Corporate & digital branding",
        "Sports & creative media",
        "Merchandising",
      ],
    },
    {
      name: "Fashion & Clothing",
      status: "coming-soon",
      statusLabel: "Coming soon",
      summary:
        "Boutique clothing, English and Ankara wear, shoes, bags and branded custom pieces.",
      services: [],
    },
    {
      name: "Food & Hospitality",
      status: "coming-soon",
      statusLabel: "Coming soon",
      summary: "Bakery, pastries, confectionery and restaurant offerings in development.",
      services: [],
    },
  ] satisfies readonly Division[],
  footerNavigation: [
    { label: "About", href: "/about" },
    { label: "Businesses", href: "/businesses" },
    { label: "Duzza Projects", href: "/projects" },
    { label: "Duzza Branding", href: "/branding" },
    { label: "Selected Work", href: "/work" },
    { label: "Equipment Hire", href: "/projects/equipment" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ] satisfies readonly NavigationItem[],
} as const;
