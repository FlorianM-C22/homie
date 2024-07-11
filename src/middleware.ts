// Middleware for protected routes

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Middleware triggered for path:', request.nextUrl.pathname);
    // Checks for cookie value
    const isLoggedInCookie = request.cookies.get('isLoggedIn');
    console.log('isLoggedInCookie:', isLoggedInCookie);

    const isLoggedIn = isLoggedInCookie && isLoggedInCookie.value === 'true';
    console.log('isLoggedIn:', isLoggedIn);
    // If no cookie, redirect to login page
    if (!isLoggedIn) {
        console.log('Redirecting to /login');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// Protected routes
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/settings/:path*',
        '/logout/:path*',
        '/builder/:path*',
    ],
};
