import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(process.env.ADMIN_TOKEN_SECRET || 'change-this-secret');
const ALG = 'HS256';

export async function login(password: string) {
  const envPassword = (process.env.ADMIN_PASSWORD || '').trim();

  if (!envPassword || password !== envPassword) return false;

  const token = await new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  return true;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch {
    return null;
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}
