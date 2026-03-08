const BASE_URL = "http://localhost:5000/api/auth";

async function parseResponse(res: Response) {
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export async function loginUser(data: { email: string; password: string }) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  role: "user" | "owner";
}) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return parseResponse(res);
}
