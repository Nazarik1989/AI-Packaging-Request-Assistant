import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/qr"];

export function middleware(request: NextRequest) {
  const accessCode = process.env.DEMO_ACCESS_CODE;

  if (!accessCode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const isAccessPage = pathname.startsWith("/access");

  if (isAccessPage) {
    const submittedCode = request.nextUrl.searchParams.get("code")?.trim();

    if (!submittedCode) {
      return NextResponse.next();
    }

    if (submittedCode !== accessCode) {
      const retryUrl = request.nextUrl.clone();
      retryUrl.pathname = "/access";
      retryUrl.search = "";
      retryUrl.searchParams.set("error", "1");
      return NextResponse.redirect(retryUrl);
    }

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = request.nextUrl.searchParams.get("next") || "/";
    redirectUrl.search = "";

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("demo_access", "granted", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 14,
      path: "/",
      sameSite: "lax",
      secure: request.headers.get("x-forwarded-proto") === "https",
    });

    return response;
  }

  const isPublic = publicPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isPublic) {
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
