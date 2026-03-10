import type {
  CreateSpacePayload,
  Review,
  Space,
  UpdateSpacePayload
} from "../types/space";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export interface IndiaCityStat {
  city: string;
  state: string;
  avgPrice: number;
  spaces: number;
  lat: number;
  lng: number;
}

export interface OwnerEnquiryNotification {
  id: string;
  type: "enquiry";
  title: string;
  message: string;
  spaceId: string;
  createdAt: string;
}

async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  useAuth = false
): Promise<T> {
  const headers = new Headers(options.headers || {});

  if (!headers.has("Content-Type") && options.body && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (useAuth) {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Please login to continue");
    }
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Request failed");
  }

  return response.json() as Promise<T>;
}

export async function fetchNearbySpaces(
  lat: number,
  lng: number,
  radiusKm = 0
): Promise<Space[]> {
  return apiRequest<Space[]>(`/spaces/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}`);
}

export async function fetchIndiaCityStats(): Promise<IndiaCityStat[]> {
  return apiRequest<IndiaCityStat[]>("/spaces/cities/india");
}

export async function fetchSpaceById(id: string): Promise<Space> {
  return apiRequest<Space>(`/spaces/${id}`);
}

export async function fetchOwnerSpaces(): Promise<Space[]> {
  return apiRequest<Space[]>("/spaces/owner/me", {}, true);
}

export async function fetchOwnerEnquiryNotifications(): Promise<OwnerEnquiryNotification[]> {
  return apiRequest<OwnerEnquiryNotification[]>("/spaces/owner/enquiries", {}, true);
}

export async function uploadSpacePhotos(files: File[]): Promise<string[]> {
  if (!files.length) {
    return [];
  }

  const formData = new FormData();
  files.forEach((file) => formData.append("photos", file));

  const response = await apiRequest<{ urls: string[] }>(
    "/spaces/upload-photo",
    {
      method: "POST",
      body: formData
    },
    true
  );

  return response.urls || [];
}

export async function createSpace(payload: CreateSpacePayload): Promise<Space> {
  return apiRequest<Space>(
    "/spaces",
    {
      method: "POST",
      body: JSON.stringify(payload)
    },
    true
  );
}

export async function updateOwnerSpace(id: string, payload: UpdateSpacePayload): Promise<Space> {
  return apiRequest<Space>(
    `/spaces/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(payload)
    },
    true
  );
}

export async function deleteOwnerSpace(id: string): Promise<{ message: string }> {
  return apiRequest<{ message: string }>(
    `/spaces/${id}`,
    {
      method: "DELETE"
    },
    true
  );
}

export async function fetchReviews(spaceId: string): Promise<Review[]> {
  const reviews = await apiRequest<any[]>(`/reviews/${spaceId}`);

  return reviews.map((review) => ({
    ...review,
    confidence: review.confidenceScore
  })) as Review[];
}

export async function createReview(payload: {
  spaceId: string;
  rating: number;
  comment: string;
}): Promise<Review> {
  const review = await apiRequest<any>(
    "/reviews",
    {
      method: "POST",
      body: JSON.stringify(payload)
    },
    true
  );

  return {
    ...review,
    confidence: review.confidenceScore
  } as Review;
}
