import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Bypass admin, API, and test routes from locale handling.
    if (
        pathname.startsWith('/manage') ||
        pathname.startsWith('/admin') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/test')
    ) {
        return NextResponse.next();
    }

    // Apply internationalization middleware for other routes
    return intlMiddleware(request);
}

export const config = {
    // Match all paths except static files and Next.js internals
    matcher: [
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};
