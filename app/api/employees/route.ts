import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const employeeCreateSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  email: z.string().email(),
  phone: z.string().min(1).max(20),
  departmentId: z.string(),
  positionId: z.string(),
  salary: z.number().positive(),
  gender: z.enum(["male", "female", "other"]).optional().default("male"),
  dob: z.string().optional(), // or z.date() if you prefer
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const department = searchParams.get("department");
    const status = searchParams.get("status");
    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const where: any = {
      status: status && status !== "all" ? status : undefined,
    };

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { employeeCode: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    if (department && department !== "all") {
      where.department = department;
    }

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.employee.count({ where }),
    ]);

    return NextResponse.json({
      employees: employees.map((emp) => ({
        ...emp,
        department: emp.department,
        position: emp.position,
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get employees error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = employeeCreateSchema.parse(body);

    // Check if email already exists
    // const existingEmployee = await prisma.employee.findFirst({
    //   where: { email: validatedData.email },
    // });

    // if (existingEmployee) {
    //   return NextResponse.json(
    //     { error: "Email already exists" },
    //     { status: 400 }
    //   );
    // }

    // Generate employee code
    const lastEmployee = await prisma.employee.findFirst({
      orderBy: { createdAt: "desc" },
      select: { employeeCode: true },
    });

    const nextCodeNumber = lastEmployee
      ? parseInt(lastEmployee.employeeCode?.replace("EMP", "") || "0") + 1
      : 1;
    const employeeCode = `EMP${String(nextCodeNumber).padStart(3, "0")}`;

    // Create new employee
    const newEmployee = await prisma.employee.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        phone: validatedData.phone,
        department: validatedData.departmentId,
        position: validatedData.positionId,
        salary: validatedData.salary,
        gender: validatedData.gender,
        dob: validatedData.dob ? new Date(validatedData.dob) : null,
        employeeCode,
        hiredDate: new Date(),
        status: "active",
      },
    });

    // Create auth record for the employee
    await prisma.auth.create({
      data: {
        email: validatedData.email,
        password: "", // You'll want to set this properly
        roleId: "", // Set appropriate role ID
        employeeId: newEmployee.employeeId,
        status: "active",
      },
    });

    return NextResponse.json({
      success: true,
      employee: {
        ...newEmployee,
        department: newEmployee.department,
        position: newEmployee.position,
      },
    });
  } catch (error) {
    console.error("Create employee error:", error);
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

// import { type NextRequest, NextResponse } from "next/server"
// import { runtimeData } from "@/lib/mock-data"
// import { z } from "zod"

// const employeeCreateSchema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   email: z.string().email(),
//   phone: z.string().min(1),
//   departmentId: z.string(),
//   positionId: z.string(),
//   salary: z.number().positive(),
// })

// export async function GET(request: NextRequest) {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const { searchParams } = new URL(request.url)
//     const search = searchParams.get("search")
//     const department = searchParams.get("department")
//     const status = searchParams.get("status")
//     const page = Number.parseInt(searchParams.get("page") || "1")
//     const limit = Number.parseInt(searchParams.get("limit") || "10")

//     let filteredEmployees = runtimeData.employees

//     if (search) {
//       filteredEmployees = filteredEmployees.filter(
//         (emp) =>
//           emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
//           emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
//           emp.employeeCode?.toLowerCase().includes(search.toLowerCase()) ||
//           emp.email.toLowerCase().includes(search.toLowerCase()),
//       )
//     }

//     if (department && department !== "all") {
//       filteredEmployees = filteredEmployees.filter((emp) => emp.department.departmentName === department)
//     }

//     if (status && status !== "all") {
//       filteredEmployees = filteredEmployees.filter((emp) => emp.status === status)
//     }

//     const startIndex = (page - 1) * limit
//     const endIndex = startIndex + limit
//     const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex)

//     return NextResponse.json({
//       employees: paginatedEmployees,
//       pagination: {
//         page,
//         limit,
//         total: filteredEmployees.length,
//         pages: Math.ceil(filteredEmployees.length / limit),
//       },
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const validatedData = employeeCreateSchema.parse(body)

//     await new Promise((resolve) => setTimeout(resolve, 300))

//     // Check if email already exists
//     const existingEmployee = runtimeData.employees.find((emp) => emp.email === validatedData.email)
//     if (existingEmployee) {
//       return NextResponse.json({ error: "Email already exists" }, { status: 400 })
//     }

//     // Find department and position
//     const departments = [
//       { departmentId: "dept-1", departmentName: "Administration" },
//       { departmentId: "dept-2", departmentName: "Engineering" },
//       { departmentId: "dept-3", departmentName: "Marketing" },
//       { departmentId: "dept-4", departmentName: "HR" },
//     ]

//     const positions = [
//       { positionId: "pos-1", positionName: "System Administrator" },
//       { positionId: "pos-2", positionName: "Software Developer" },
//       { positionId: "pos-3", positionName: "Marketing Manager" },
//       { positionId: "pos-4", positionName: "HR Specialist" },
//       { positionId: "pos-5", positionName: "Senior Developer" },
//     ]

//     const department = departments.find((d) => d.departmentId === validatedData.departmentId)
//     const position = positions.find((p) => p.positionId === validatedData.positionId)

//     if (!department || !position) {
//       return NextResponse.json({ error: "Invalid department or position" }, { status: 400 })
//     }

//     const newEmployee = {
//       employeeId: `emp-${Date.now()}`,
//       employeeCode: `EMP${String(runtimeData.employees.length + 1).padStart(3, "0")}`,
//       firstName: validatedData.firstName,
//       lastName: validatedData.lastName,
//       email: validatedData.email,
//       phone: validatedData.phone,
//       department,
//       position,
//       salary: validatedData.salary,
//       hiredDate: new Date().toISOString(),
//       status: "active" as const,
//     }

//     runtimeData.employees.unshift(newEmployee)

//     return NextResponse.json({
//       success: true,
//       employee: newEmployee,
//     })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
