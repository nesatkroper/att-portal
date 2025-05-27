import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Schema for creating user accounts
const authCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  roleId: z.string().uuid(),
  employeeId: z.string().uuid().optional(),
  status: z.enum(["active", "inactive", "suspended"]).default("active"),
});

// Schema for updating user accounts

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = authCreateSchema.parse(body);

    // Check if email already exists
    const existingAuth = await prisma.auth.findUnique({
      where: { email: validatedData.email },
    });

    if (existingAuth) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Check if employee already has an account
    if (validatedData.employeeId) {
      const employeeAuth = await prisma.auth.findFirst({
        where: { employeeId: validatedData.employeeId },
      });

      if (employeeAuth) {
        return NextResponse.json(
          { error: "Employee already has an account" },
          { status: 400 }
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create auth record
    const newAuth = await prisma.auth.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        roleId: validatedData.roleId,
        employeeId: validatedData.employeeId,
        status: validatedData.status,
      },
      include: {
        role: true,
        employee: true,
      },
    });

    // Create auth log
    await prisma.authLog.create({
      data: {
        authId: newAuth.authId,
        action: "ACCOUNT_CREATED",
        message: "Account created by admin",
      },
    });

    return NextResponse.json({
      success: true,
      auth: {
        authId: newAuth.authId,
        email: newAuth.email,
        status: newAuth.status,
        role: newAuth.role.roleName,
        employee: newAuth.employee
          ? {
              employeeId: newAuth.employee.employeeId,
              name: `${newAuth.employee.firstName} ${newAuth.employee.lastName}`,
              department: newAuth.employee.department,
              position: newAuth.employee.position,
            }
          : null,
      },
    });
  } catch (error) {
    console.error("Create auth error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");
    const search = searchParams.get("search");
    const role = searchParams.get("role");
    const status = searchParams.get("status");

    const where: any = {};

    if (search) {
      where.OR = [
        { email: { contains: search, mode: "insensitive" } },
        {
          employee: {
            OR: [
              { firstName: { contains: search, mode: "insensitive" } },
              { lastName: { contains: search, mode: "insensitive" } },
            ],
          },
        },
      ];
    }

    if (role) {
      where.roleId = role;
    }

    if (status) {
      where.status = status;
    }

    const [auths, total] = await Promise.all([
      prisma.auth.findMany({
        where,
        include: {
          role: true,
          employee: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.auth.count({ where }),
    ]);

    return NextResponse.json({
      auths: auths.map((auth) => ({
        authId: auth.authId,
        email: auth.email,
        status: auth.status,
        role: auth.role.roleName,
        lastLoginAt: auth.lastLoginAt,
        employee: auth.employee
          ? {
              employeeId: auth.employee.employeeId,
              name: `${auth.employee.firstName} ${auth.employee.lastName}`,
              department: auth.employee.department,
              position: auth.employee.position,
            }
          : null,
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get auths error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
