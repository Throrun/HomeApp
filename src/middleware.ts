import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    const isPublicPath = ["/login", "/register"].includes(pathname);
    const isApiPath = ["/api/auth/login", "/api/auth/register"].includes(pathname);
    if (pathname.endsWith('.css') || pathname.endsWith('.svg') || pathname.endsWith('.js') || isApiPath) { return NextResponse.next(); }

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // if (token && isPublicPath) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return NextResponse.next();
}