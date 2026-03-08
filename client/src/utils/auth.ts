export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem("token"));
}

export function getUserRole(): "user" | "owner" | "admin" | null {
  return localStorage.getItem("role") as "user" | "owner" | "admin" | null;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}
