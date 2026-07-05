import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const accessCode = process.env.DEMO_ACCESS_CODE;

  if (!accessCode) {
    return NextResponse.json({ ok: true });
  }

  const body = (await request.json()) as { code?: string };
  const isValid = body.code?.trim() === accessCode;

  if (!isValid) {
    return NextResponse.json(
      { ok: false, message: "Неверный код доступа" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("demo_access", "granted", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
