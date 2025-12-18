import { NextResponse } from "next/server";
import { getAuthToken, verifyToken } from "@/lib/auth";

export async function GET() {
  const token = await getAuthToken();
  
  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const result = verifyToken(token);
  
  if (!result.valid) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, username: result.username });
}
