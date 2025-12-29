import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames, exclude admin and api
    matcher: [
        '/',
        '/((?!admin|api|_next|_vercel|.*\\..*).*)'
    ]
};
