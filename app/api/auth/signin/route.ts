import { type NextRequest, NextResponse } from "next/server"
import { signIn } from "@/lib/auth"
import { z } from "zod"

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = signInSchema.parse(body)

    const result = await signIn(email, password)

    if (!result) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const response = NextResponse.json({
      success: true,
      user: result.user,
    })

    // Set HTTP-only cookie
    response.cookies.set("auth-token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Sign in API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
