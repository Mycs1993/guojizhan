import { NextRequest, NextResponse } from "next/server";
import { validateCredentials, generateToken, setAuthCookie } from "@/lib/auth";
import type { LoginRequest, LoginResponse } from "@/types/seo";

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json<LoginResponse>(
        { success: false, error: "Username and password are required" },
        { status: 400 }
      );
    }

    if (!validateCredentials(username, password)) {
      return NextResponse.json<LoginResponse>(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = generateToken(username);
    await setAuthCookie(token);

    return NextResponse.json<LoginResponse>({ success: true, token });
  } catch {
    return NextResponse.json<LoginResponse>(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
