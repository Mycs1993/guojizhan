import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Double safety: Bypass admin, API, and test routes.
    // Ideally the matching config handles this, but explicit check doesn't hurt.
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
    // Match all paths except static files, Next.js internals, and API routes
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
