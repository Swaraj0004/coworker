import type { Space } from "../types/space";

const STORAGE_KEY = "user_memberships";

export interface UserMembership {
  spaceId: string;
  spaceName: string;
  plan: "hot-desk" | "dedicated-desk" | "private-office";
  status: "active" | "paused";
  monthlyPrice: number;
  nextBillingDate: string;
}

export function getUserMemberships(): UserMembership[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as UserMembership[]) : [];
}

function saveUserMemberships(data: UserMembership[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addUserMembership(space: Space, plan: UserMembership["plan"]): UserMembership[] {
  const memberships = getUserMemberships();

  if (memberships.some((item) => item.spaceId === space._id)) {
    return memberships;
  }

  const multipliers: Record<UserMembership["plan"], number> = {
    "hot-desk": 1,
    "dedicated-desk": 1.25,
    "private-office": 1.8
  };

  const monthlyPrice = Math.round(space.pricePerMonth * multipliers[plan]);
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
