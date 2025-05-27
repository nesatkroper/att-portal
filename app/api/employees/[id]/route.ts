import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const employeeUpdateSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  lastName: z.string().min(1).max(20).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).max(20).optional(),
  departmentId: z.string().uuid().optional(),
  positionId: z.string().uuid().optional(),
  salary: z.number().positive().optional(),
  status: z.enum(["active", "inactive"]).optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  dob: z.string().optional(), // or z.date() if preferred
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const employee = await prisma.employee.findUnique({
      where: { employeeId: id },
      include: {
        auth: true,
      },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      employee: {
        ...employee,
        department: employee.department,
        position: employee.position,
      },
    });
  } catch (error) {
    console.error("Get employee error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const validatedData = employeeUpdateSchema.parse(body);

    // Check if employee exists
    const existingEmployee = await prisma.employee.findUnique({
      where: { employeeId: id },
    });

    if (!existingEmployee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // Check if email is being updated to an existing one
    // if (validatedData.email && validatedData.email !== existingEmployee.email) {
    //   const emailExists = await prisma.employee.findFirst({
    //     where: { email: validatedData.email },
    //   });

    //   if (emailExists) {
    //     return NextResponse.json(
    //       { error: "Email already in use" },
    //       { status: 400 }
    //     );
    //   }
    // }

    // Prepare update data
    const updateData: any = { ...validatedData };
    if (validatedData.dob) {
      updateData.dob = new Date(validatedData.dob);
    }

    // Update employee
    const updatedEmployee = await prisma.employee.update({
      where: { employeeId: id },
      data: updateData,
    });

    // If email was updated, also update the auth record
    if (validatedData.email) {
      await prisma.auth.updateMany({
        where: { employeeId: id },
        data: { email: validatedData.email },
      });
    }

    return NextResponse.json({
      success: true,
      employee: {
        ...updatedEmployee,
        department: updatedEmployee.department,
        position: updatedEmployee.position,
      },
    });
  } catch (error) {
    console.error("Update employee error:", error);
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

    // Check if employee exists
    const employee = await prisma.employee.findUnique({
      where: { employeeId: id },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // Soft delete - update status to inactive
    await prisma.$transaction([
      prisma.employee.update({
        where: { employeeId: id },
        data: { status: "inactive" },
      }),
      prisma.auth.updateMany({
        where: { employeeId: id },
        data: { status: "inactive" },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete employee error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// import { type NextRequest, NextResponse } from "next/server"
// import { runtimeData } from "@/lib/mock-data"
// import { z } from "zod"

// const employeeUpdateSchema = z.object({
//   firstName: z.string().min(1).optional(),
//   lastName: z.string().min(1).optional(),
//   email: z.string().email().optional(),
//   phone: z.string().optional(),
//   departmentId: z.string().optional(),
//   positionId: z.string().optional(),
//   salary: z.number().positive().optional(),
//   status: z.enum(["active", "inactive"]).optional(),
// })

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params

//     await new Promise((resolve) => setTimeout(resolve, 100))

//     const employee = runtimeData.employees.find((emp) => emp.employeeId === id)

//     if (!employee) {
//       return NextResponse.json({ error: "Employee not found" }, { status: 404 })
//     }

//     return NextResponse.json({ employee })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params
//     const body = await request.json()
//     const validatedData = employeeUpdateSchema.parse(body)

//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const employeeIndex = runtimeData.employees.findIndex((emp) => emp.employeeId === id)

//     if (employeeIndex === -1) {
//       return NextResponse.json({ error: "Employee not found" }, { status: 404 })
//     }

//     // Update employee
//     runtimeData.employees[employeeIndex] = {
//       ...runtimeData.employees[employeeIndex],
//       ...validatedData,
//     }

//     return NextResponse.json({
//       success: true,
//       employee: runtimeData.employees[employeeIndex],
//     })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params

//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const employeeIndex = runtimeData.employees.findIndex((emp) => emp.employeeId === id)

//     if (employeeIndex === -1) {
//       return NextResponse.json({ error: "Employee not found" }, { status: 404 })
//     }

//     // Soft delete - change status to inactive
//     runtimeData.employees[employeeIndex].status = "inactive"

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
