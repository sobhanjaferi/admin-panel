import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token");

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth"],
};
