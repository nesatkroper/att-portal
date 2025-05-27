import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    // 1. Get the token from cookies using await
    const cookieStore = cookies();
    const token = (await cookieStore).get("auth-token")?.value;

    // 2. If token exists, invalidate it in database
    if (token) {
      // Delete the token from database
      await prisma.token.deleteMany({
        where: {
          token: token,
        },
      });

      // Get client IP and user agent
      const ip = request.headers.get("x-forwarded-for") || "unknown";
      const userAgent = request.headers.get("user-agent") || "unknown";

      // Create auth log for logout
      const authRecord = await prisma.token.findUnique({
        where: { token },
        select: { authId: true }
      });

      if (authRecord) {
        await prisma.authLog.create({
          data: {
            action: "LOGOUT",
            metadata: JSON.stringify({
              type: "user_logout",
              ip: ip,
              userAgent: userAgent
            }),
            ip: ip,
            userAgent: userAgent,
            method: "POST",
            authId: authRecord.authId,
          },
        });
      }
    }

    // 3. Create response and clear cookie
    const response = NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );

    // 4. Clear the auth cookie with same options as login
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Immediately expire
      path: "/",
    });

    return response;

  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}


// import { NextResponse } from "next/server"

// export async function POST() {
//   const response = NextResponse.json({ success: true })

//   response.cookies.delete("auth-token")

//   return response
// }
