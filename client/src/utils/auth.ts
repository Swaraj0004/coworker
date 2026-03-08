export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem("token"));
}

export function getUserRole(): "user" | "owner" | null {
  return localStorage.getItem("role") as "user" | "owner" | null;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}
