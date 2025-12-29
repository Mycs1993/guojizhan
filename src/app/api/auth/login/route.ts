import { login, logout } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (body.action === 'logout') {
            await logout();
            return NextResponse.json({ success: true });
        }

        const { password } = body;
        if (!password) {
            return NextResponse.json({ error: 'Password required' }, { status: 400 });
        }

        const success = await login(password);
        if (!success) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
