import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Locale routing:
 *   1. Skip Next.js internals and static files.
 *   2. If the path already starts with /fa or /en → set the cookie + continue.
 *   3. Otherwise pick the locale from (cookie → Accept-Language → default)
 *      and redirect.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip framework + asset paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // any file with extension (favicon.ico, /robots.txt, etc.)
  ) {
    return NextResponse.next();
  }

  // Already prefixed?
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, first, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // Pick locale: cookie > Accept-Language > default
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const headerLocale = pickHeaderLocale(
    request.headers.get("accept-language") ?? "",
  );
  const target =
    (cookieLocale && isLocale(cookieLocale) && cookieLocale) ||
    headerLocale ||
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

function pickHeaderLocale(header: string) {
  const wanted = header
    .split(",")
    .map((p) => p.split(";")[0].trim().toLowerCase())
    .map((p) => p.split("-")[0]);

  for (const w of wanted) {
    if (isLocale(w)) return w;
  }
  return null;
}

export const config = {
  // Run on everything except static assets / framework internals.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
