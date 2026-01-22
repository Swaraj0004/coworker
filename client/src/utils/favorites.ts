import type { Space } from "../types/space";

const STORAGE_KEY = "favorite_spaces";

/** Get all favorite spaces */
export function getFavorites(): Space[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as Space[]) : [];
}

/** Check if space is favorite */
export function isFavorite(spaceId: string): boolean {
  return getFavorites().some(space => space._id === spaceId);
}

/** Add or remove favorite */
export function toggleFavorite(space: Space): Space[] {
  const favorites = getFavorites();
  const exists = favorites.find(f => f._id === space._id);

  let updated: Space[];

  if (exists) {
    updated = favorites.filter(f => f._id !== space._id);
  } else {
    updated = [...favorites, space];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}
