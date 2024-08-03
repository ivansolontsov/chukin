import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/dictionaries";

export function middleware(request: NextRequest, res: NextResponse) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${locales[0]}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
