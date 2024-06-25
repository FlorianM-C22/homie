import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { UserResponse } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
    console.log('Middleware triggered for path:', request.nextUrl.pathname);

    const isLoggedInCookie = request.cookies.get('isLoggedIn');
    console.log('isLoggedInCookie:', isLoggedInCookie);

    const isLoggedIn = isLoggedInCookie && isLoggedInCookie.value === 'true';
    console.log('isLoggedIn:', isLoggedIn);

    // Vérifiez également si l'utilisateur est connecté via Supabase
    if (!isLoggedIn) {
        const session: UserResponse | null = await supabase.auth.getUser();
        console.log('Supabase session:', session);

        // Vérifiez si l'utilisateur est connecté via GitHub ou Google
        if (!session?.data.user) {
            // Vérifiez la session OAuth pour GitHub
            const githubSession = await supabase.auth.getSession();
            console.log('GitHub session:', githubSession);

            // Vérifiez la session OAuth pour Google
            const googleSession = await supabase.auth.getSession();
            console.log('Google session:', googleSession);

            if (!githubSession && !googleSession) {
                // Si aucune session n'est trouvée, redirigez vers la page de connexion
                console.log('Redirecting to /login');
                return NextResponse.redirect(new URL('/login', request.url));
            }
        }

        console.log('User is logged in via Supabase or OAuth.');
        return NextResponse.next(); // Laissez la requête passer
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
