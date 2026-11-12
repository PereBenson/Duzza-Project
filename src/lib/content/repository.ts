import { equipmentItems } from "@/content/demo/equipment";
import { inventoryItems } from "@/content/demo/inventory";
import { teamMembers } from "@/content/demo/team";
import { workItems } from "@/content/demo/work";
import type {
  EquipmentItem,
  InventoryItem,
  TeamMember,
  WorkDivision,
  WorkItem,
} from "@/content/types";

export function getAllWork(): readonly WorkItem[] {
  return workItems;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}

export function getWorkByDivision(division: WorkDivision): readonly WorkItem[] {
  return workItems.filter((item) => item.division === division);
}

export function getFeaturedWork(limit = 3): readonly WorkItem[] {
  return workItems.filter((item) => item.featured).slice(0, limit);
}

export function getRelatedWork(item: WorkItem, limit = 3): readonly WorkItem[] {
  const sameDivision = workItems.filter(
    (candidate) => candidate.division === item.division && candidate.slug !== item.slug,
  );

  return sameDivision.slice(0, limit);
}

export function getAllEquipment(): readonly EquipmentItem[] {
  return equipmentItems;
}

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
  return equipmentItems.find((item) => item.slug === slug);
}

export function getRelatedEquipment(item: EquipmentItem, limit = 3): readonly EquipmentItem[] {
  return equipmentItems.filter((candidate) => candidate.slug !== item.slug).slice(0, limit);
}

export function getInventory(): readonly InventoryItem[] {
  return inventoryItems;
}

export function getTeamMembers(): readonly TeamMember[] {
  return teamMembers;
}
