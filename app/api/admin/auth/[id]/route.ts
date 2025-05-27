import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

const authUpdateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  roleId: z.string().uuid().optional(),
  status: z.enum(["active", "inactive", "suspended"]).optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const validatedData = authUpdateSchema.parse(body);

    // Check if auth exists
    const existingAuth = await prisma.auth.findUnique({
      where: { authId: id },
    });

    if (!existingAuth) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    // Check if email is being updated to an existing one
    if (validatedData.email && validatedData.email !== existingAuth.email) {
      const emailExists = await prisma.auth.findFirst({
        where: {
          email: validatedData.email,
          authId: { not: id },
        },
      });

      if (emailExists) {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 400 }
        );
      }
    }

    // Prepare update data
    const updateData: any = { ...validatedData };
    if (validatedData.password) {
      updateData.password = await bcrypt.hash(validatedData.password, 10);
    }

    // Update auth record
    const updatedAuth = await prisma.auth.update({
      where: { authId: id },
      data: updateData,
      include: {
        role: true,
        employee: true,
      },
    });

    // Create auth log
    await prisma.authLog.create({
      data: {
        authId: updatedAuth.authId,
        action: "ACCOUNT_UPDATED",
        message: "Account updated by admin",
      },
    });

    return NextResponse.json({
      success: true,
      auth: {
        authId: updatedAuth.authId,
        email: updatedAuth.email,
        status: updatedAuth.status,
        role: updatedAuth.role.roleName,
        employee: updatedAuth.employee
          ? {
              employeeId: updatedAuth.employee.employeeId,
              name: `${updatedAuth.employee.firstName} ${updatedAuth.employee.lastName}`,
              department: updatedAuth.employee.department,
              position: updatedAuth.employee.position,
            }
          : null,
      },
    });
  } catch (error) {
    console.error("Update auth error:", error);
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if auth exists
    const existingAuth = await prisma.auth.findUnique({
      where: { authId: id },
    });

    if (!existingAuth) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    // Soft delete - update status to inactive
    await prisma.auth.update({
      where: { authId: id },
      data: { status: "inactive" },
    });

    // Create auth log
    await prisma.authLog.create({
      data: {
        authId: id,
        action: "ACCOUNT_DEACTIVATED",
        message: "Account deactivated by admin",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
