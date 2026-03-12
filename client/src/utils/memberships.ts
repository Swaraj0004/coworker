import type { Space } from "../types/space";
import { getCurrentAuthScope } from "./auth";

const STORAGE_KEY = "user_memberships";

function getMembershipsKey() {
  return `${STORAGE_KEY}:${getCurrentAuthScope()}`;
}

export type MembershipPlan =
  | "coworking-space"
  | "private-office"
  | "virtual-office"
  | "serviced-office";

export interface UserMembership {
  spaceId: string;
  spaceName: string;
  plan: MembershipPlan;
  status: "active" | "paused";
  monthlyPrice: number;
  nextBillingDate: string;
}

export function formatMembershipPlan(plan: MembershipPlan): string {
  switch (plan) {
    case "private-office":
      return "Private Office";
    case "virtual-office":
      return "Virtual Office";
    case "serviced-office":
      return "Serviced Office";
    case "coworking-space":
    default:
      return "Coworking Space";
  }
}

export function getUserMemberships(): UserMembership[] {
  if (getCurrentAuthScope() === "anonymous") {
    return [];
  }

  const raw = localStorage.getItem(getMembershipsKey());
  return raw ? (JSON.parse(raw) as UserMembership[]) : [];
}

function saveUserMemberships(data: UserMembership[]) {
  localStorage.setItem(getMembershipsKey(), JSON.stringify(data));
}

function getPlanPrice(space: Space, plan: MembershipPlan): number {
  const pricing = space.pricing || {};

  switch (plan) {
    case "serviced-office":
      return pricing.servicedOffice ?? space.pricePerMonth + 12000;
    case "private-office":
      return pricing.privateOffice ?? space.pricePerMonth + 7000;
    case "virtual-office":
      return pricing.virtualOffice ?? 2500;
    case "coworking-space":
    default:
      return pricing.coworkingSpace ?? space.pricePerMonth;
  }
}

export function addUserMembership(space: Space, plan: UserMembership["plan"]): UserMembership[] {
  if (getCurrentAuthScope() === "anonymous") {
    throw new Error("Please login first to add this place.");
  }

  const memberships = getUserMemberships();

  if (memberships.some((item) => item.spaceId === space._id)) {
    return memberships;
  }

  const monthlyPrice = Math.round(getPlanPrice(space, plan));
  const nextBillingDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const updated = [
    ...memberships,
    {
      spaceId: space._id,
      spaceName: space.name,
      plan,
      status: "active" as const,
      monthlyPrice,
      nextBillingDate
    }
  ];

  saveUserMemberships(updated);
  return updated;
}

export function updateMembershipStatus(
  spaceId: string,
  status: UserMembership["status"]
): UserMembership[] {
  const updated = getUserMemberships().map((item) =>
    item.spaceId === spaceId ? { ...item, status } : item
  );

  saveUserMemberships(updated);
  return updated;
}

export function payMembership(spaceId: string): UserMembership[] {
  const nextBillingDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const updated = getUserMemberships().map((item) =>
    item.spaceId === spaceId ? { ...item, nextBillingDate } : item
  );

  saveUserMemberships(updated);
  return updated;
}

export function removeMembership(spaceId: string): UserMembership[] {
  const updated = getUserMemberships().filter((item) => item.spaceId !== spaceId);
  saveUserMemberships(updated);
  return updated;
}
