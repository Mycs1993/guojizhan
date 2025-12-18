import { cookies } from "next/headers";

// 简单的 token 生成（生产环境应使用 JWT）
const TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || "seo-admin-secret-key-change-in-production";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const TOKEN_COOKIE_NAME = "seo-admin-token";
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// 简单的 token 编码（生产环境应使用 JWT）
function encodeToken(data: { username: string; exp: number }): string {
  const payload = JSON.stringify(data);
  return Buffer.from(payload).toString("base64");
}

function decodeToken(token: string): { username: string; exp: number } | null {
  try {
    const payload = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function generateToken(username: string): string {
  const exp = Date.now() + TOKEN_EXPIRY;
  return encodeToken({ username, exp });
}

export function verifyToken(token: string): { valid: boolean; username?: string } {
  const decoded = decodeToken(token);
  if (!decoded) return { valid: false };
  if (decoded.exp < Date.now()) return { valid: false };
  return { valid: true, username: decoded.username };
}

export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TOKEN_EXPIRY / 1000,
    path: "/",
  });
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_COOKIE_NAME);
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_COOKIE_NAME)?.value || null;
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  if (!token) return false;
  return verifyToken(token).valid;
}
