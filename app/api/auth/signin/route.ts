import { type NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = signInSchema.parse(body);

    // 1. Find user in database
    const user = await prisma.auth.findUnique({
      where: { email },
      include: {
        employee: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 2. Verify password
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 3. Check account status
    if (user.status !== "active") {
      return NextResponse.json(
        { error: "Account is not active" },
        { status: 403 }
      );
    }

    // 4. Create JWT token
    const token = sign(
      {
        id: user.authId,
        email: user.email,
        role: user.role.roleName,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // 5. Update last login time
    await prisma.auth.update({
      where: { authId: user.authId },
      data: { lastLoginAt: new Date() },
    });

    // 6. Prepare user data for response
    const userData = {
      id: user.authId,
      email: user.email,
      role: user.role.roleName,
      status: user.status,
      employee: user.employee ? {
        id: user.employee.employeeId,
        code: user.employee.employeeCode,
        name: `${user.employee.firstName} ${user.employee.lastName}`,
        department: user.employee.department,
        position: user.employee.position,
      } : null,
    };

    // 7. Create response with HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: userData,
    });

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;

  } catch (error) {
    console.error("Sign in error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}




// import { type NextRequest, NextResponse } from "next/server"
// import { signIn } from "@/lib/auth"
// import { z } from "zod"

// const signInSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(1),
// })

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { email, password } = signInSchema.parse(body)

//     const result = await signIn(email, password)

//     if (!result) {
//       return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
//     }

//     const response = NextResponse.json({
//       success: true,
//       user: result.user,
//     })

//     // Set HTTP-only cookie
//     response.cookies.set("auth-token", result.token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60, // 7 days
//       path: "/",
//     })

//     return response
//   } catch (error) {
//     console.error("Sign in API error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
