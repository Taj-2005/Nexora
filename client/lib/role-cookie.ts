/**
 * Role cookie for Next.js middleware. Set by client on login/refresh/register, cleared on logout.
 * Middleware reads this to protect routes without calling the API.
 */
const ROLE_COOKIE = "shopsmart_role";
const MAX_AGE = 3600; // 1 hour, match access token

export function setRoleCookie(role: string): void {
  if (typeof document === "undefined") return;
  const value = role.toUpperCase();
  if (!["CUSTOMER", "ADMIN", "SUPER_ADMIN"].includes(value)) return;
  document.cookie = `${ROLE_COOKIE}=${value}; path=/; max-age=${MAX_AGE}; samesite=lax`;
}

export function clearRoleCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${ROLE_COOKIE}=; path=/; max-age=0`;
}

export const ROLE_COOKIE_NAME = ROLE_COOKIE;
