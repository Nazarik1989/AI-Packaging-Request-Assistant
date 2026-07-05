import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/", "/demo", "/qr"];

export function middleware(request: NextRequest) {
  const accessCode = process.env.DEMO_ACCESS_CODE;

  if (!accessCode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (!isProtected || pathname.startsWith("/access")) {
    return NextResponse.next();
  }

  const hasAccess = request.cookies.get("demo_access")?.value === "granted";

  if (hasAccess) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/access";
  url.searchParams.set("next", pathname);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
