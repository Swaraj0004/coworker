import type { Space } from "../types/space";

const BASE_URL = "http://localhost:5000/api";

export async function fetchNearbySpaces(
  lat: number,
  lng: number
): Promise<Space[]> {
  const res = await fetch(
    `${BASE_URL}/spaces/nearby?lat=${lat}&lng=${lng}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch spaces");
  }

  return res.json();
}
