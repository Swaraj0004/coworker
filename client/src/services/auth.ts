const BASE_URL = "http://localhost:5000/api/auth";

async function parseResponse(res: Response) {
  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : {};

  if (!res.ok) {
    const fallback = res.statusText || `HTTP ${res.status}`;
    throw new Error(data.message || fallback || "Request failed");
  }

  return data;
}

async function safeFetch(input: RequestInfo | URL, init?: RequestInit) {
  try {
    return await fetch(input, init);
  } catch {
    throw new Error("Cannot reach server. Please start backend on port 5000.");
  }
}

export async function loginUser(data: { identifier: string; password: string }) {
  const res = await safeFetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function fetchMyProfile() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await safeFetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return parseResponse(res);
}

export async function sendSignupOtp(data: { email: string }) {
  const res = await safeFetch(`${BASE_URL}/send-signup-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function verifySignupOtp(data: { email: string; otp: string }) {
  const res = await safeFetch(`${BASE_URL}/verify-signup-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function checkUsername(data: { username: string }) {
  const res = await safeFetch(`${BASE_URL}/check-username`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function registerUser(data: {
  signupToken: string;
  name: string;
  email: string;
  role: "user" | "owner";
  username: string;
  mobile: string;
  city: string;
  state: string;
  password: string;
  officeAddress?: string;
  officeNumber?: string;
}) {
  const res = await safeFetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function requestForgotPasswordOtp(data: { identifier: string }) {
  const res = await safeFetch(`${BASE_URL}/forgot-password/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function verifyForgotPasswordOtp(data: { identifier: string; otp: string }) {
  const res = await safeFetch(`${BASE_URL}/forgot-password/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function resetPassword(data: { resetToken: string; newPassword: string }) {
  const res = await safeFetch(`${BASE_URL}/forgot-password/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}
