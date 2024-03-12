import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // 예시
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (request.nextUrl.pathname === "/signin") {
    if (token) {
      const url = new URL("/", request.url);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (!token) {
    const url = new URL(`/signin`, request.url);
    return NextResponse.redirect(url);
  }
  return undefined;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)"],
};
