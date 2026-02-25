import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROLE_COOKIE_NAME } from "./lib/role-cookie";

const ADMIN_ROLES = ["ADMIN", "SUPER_ADMIN"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const role = request.cookies.get(ROLE_COOKIE_NAME)?.value ?? null;

  // Protected: require any authenticated user (profile, orders, checkout)
  const userOnlyPaths = ["/profile", "/orders", "/checkout"];
  const isUserOnly = userOnlyPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
  if (isUserOnly) {
    if (!role) {
      const login = new URL("/login", request.url);
      login.searchParams.set("redirect", pathname);
      return NextResponse.redirect(login);
    }
    return NextResponse.next();
  }

  // Admin: require ADMIN or SUPER_ADMIN
  if (pathname.startsWith("/admin")) {
    if (!role) {
      const login = new URL("/login", request.url);
      login.searchParams.set("redirect", pathname);
      return NextResponse.redirect(login);
    }
    if (!ADMIN_ROLES.includes(role)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/profile", "/profile/:path*", "/orders", "/orders/:path*", "/checkout"],
};
