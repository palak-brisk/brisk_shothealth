import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const adminProtectedRoutes = ["/admin/dashboard", "/admin/users"];
const userProtectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/register", "/admin/login", "/admin/register", "/verify", "/admin/verify"];

export default auth(async function middleware(req: NextRequest) {
  const session = await auth();
  const pathname = req.nextUrl.pathname;
  if (publicRoutes.includes(pathname)) return NextResponse.next();
  const isAdminProtected = adminProtectedRoutes.some((route) => pathname.startsWith(route));
  const isUserProtected = userProtectedRoutes.some((route) => pathname.startsWith(route));
  if (!session?.user && (isAdminProtected || isUserProtected)) {
    const loginPath = isAdminProtected ? "/admin/login" : "/login";
    const absoluteUrl = new URL(loginPath, req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl);
  }
  if (session?.user && session.user.role !== "ADMIN" && isAdminProtected) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl);
  }
  if (session?.user && session.user.role !== "USER" && isUserProtected) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/register", "/admin/register", "/verify", "/admin/verify"],
};