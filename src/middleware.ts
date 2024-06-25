import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function middleware(request: NextRequest) {
    console.log('Middleware triggered for path:', request.nextUrl.pathname);

    const isLoggedInCookie = request.cookies.get('isLoggedIn');
    console.log('isLoggedInCookie:', isLoggedInCookie);

    const isLoggedIn = isLoggedInCookie && isLoggedInCookie.value === 'true';
    console.log('isLoggedIn:', isLoggedIn);

    // Vérifiez également si l'utilisateur est connecté via GitHub ou Google avec Supabase
    if (!isLoggedIn) {
        const session = await supabase.auth.getUser();
        console.log('Supabase session:', session);

        if (session?.user) {
            console.log('User is logged in via Supabase.');
            return NextResponse.next(); // Laisser passer la requête
        }

        // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de login
        console.log('Redirecting to /login');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/settings/:path*',
        '/logout/:path*',
        '/builder/:path*',
    ],
};
