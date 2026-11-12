import type { ContentMeta, TeamMember } from "@/content/types";

const demoMeta = (source: string): ContentMeta => ({
  status: "demo",
  approval: "pending",
  mustReplace: true,
  source,
  note: "Illustrative profile created for prototype review. Not an approved leadership record.",
});

export const teamMembers = [
  {
    name: "Adaeze Nwosu",
    role: "Group Managing Director",
    focus: "Group strategy, governance and partnerships.",
    initials: "AN",
    meta: demoMeta("Illustrative team profile"),
  },
  {
    name: "Tunde Balogun",
    role: "Head of Projects",
    focus: "Engineering delivery, marine operations and supply.",
    initials: "TB",
    meta: demoMeta("Illustrative team profile"),
  },
  {
    name: "Maya Bennett",
    role: "Creative Director, Branding",
    focus: "Identity systems, campaigns and international accounts.",
    initials: "MB",
    meta: demoMeta("Illustrative team profile"),
  },
] satisfies readonly TeamMember[];
