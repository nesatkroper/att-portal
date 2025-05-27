import { type NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma"; // Make sure you have your Prisma client set up

export async function GET(request: NextRequest) {
  try {
    // 1. Verify authentication token
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "No token provided" }, 
        { status: 401 }
      );
    }

    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid token" }, 
        { status: 401 }
      );
    }

    // 2. Fetch user details from database using Prisma
    const userData = await prisma.auth.findUnique({
      where: { authId: user.id }, // Assuming verifyToken returns user.id
      include: {
        employee: true,
        role: true,
      },
    });

    if (!userData) {
      return NextResponse.json(
        { error: "User not found in database" }, 
        { status: 404 }
      );
    }

    // 3. Format the response data
    const responseData = {
      id: userData.authId,
      email: userData.email,
      role: userData.role.roleName,
      status: userData.status,
      lastLoginAt: userData.lastLoginAt,
      employee: userData.employee ? {
        id: userData.employee.employeeId,
        code: userData.employee.employeeCode,
        firstName: userData.employee.firstName,
        lastName: userData.employee.lastName,
        department: userData.employee.department,
        position: userData.employee.position,
        status: userData.employee.status,
      } : null,
    };

    // 4. Update last login time
    await prisma.auth.update({
      where: { authId: user.id },
      data: { lastLoginAt: new Date() },
    });

    return NextResponse.json({ user: responseData });

  } catch (error) {
    console.error("User fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
}


// import { type NextRequest, NextResponse } from "next/server"
// import { verifyToken } from "@/lib/auth"

// export async function GET(request: NextRequest) {
//   try {
//     const token = request.cookies.get("auth-token")?.value

//     if (!token) {
//       return NextResponse.json({ error: "No token provided" }, { status: 401 })
//     }

//     const user = await verifyToken(token)

//     if (!user) {
//       return NextResponse.json({ error: "Invalid token" }, { status: 401 })
//     }

//     return NextResponse.json({ user })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
