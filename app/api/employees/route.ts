import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"
import { z } from "zod"

const employeeCreateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  departmentId: z.string(),
  positionId: z.string(),
  salary: z.number().positive(),
})

export async function GET(request: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const department = searchParams.get("department")
    const status = searchParams.get("status")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    let filteredEmployees = runtimeData.employees

    if (search) {
      filteredEmployees = filteredEmployees.filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
          emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
          emp.employeeCode?.toLowerCase().includes(search.toLowerCase()) ||
          emp.email.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (department && department !== "all") {
      filteredEmployees = filteredEmployees.filter((emp) => emp.department.departmentName === department)
    }

    if (status && status !== "all") {
      filteredEmployees = filteredEmployees.filter((emp) => emp.status === status)
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex)

    return NextResponse.json({
      employees: paginatedEmployees,
      pagination: {
        page,
        limit,
        total: filteredEmployees.length,
        pages: Math.ceil(filteredEmployees.length / limit),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = employeeCreateSchema.parse(body)

    await new Promise((resolve) => setTimeout(resolve, 300))

    // Check if email already exists
    const existingEmployee = runtimeData.employees.find((emp) => emp.email === validatedData.email)
    if (existingEmployee) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    // Find department and position
    const departments = [
      { departmentId: "dept-1", departmentName: "Administration" },
      { departmentId: "dept-2", departmentName: "Engineering" },
      { departmentId: "dept-3", departmentName: "Marketing" },
      { departmentId: "dept-4", departmentName: "HR" },
    ]

    const positions = [
      { positionId: "pos-1", positionName: "System Administrator" },
      { positionId: "pos-2", positionName: "Software Developer" },
      { positionId: "pos-3", positionName: "Marketing Manager" },
      { positionId: "pos-4", positionName: "HR Specialist" },
      { positionId: "pos-5", positionName: "Senior Developer" },
    ]

    const department = departments.find((d) => d.departmentId === validatedData.departmentId)
    const position = positions.find((p) => p.positionId === validatedData.positionId)

    if (!department || !position) {
      return NextResponse.json({ error: "Invalid department or position" }, { status: 400 })
    }

    const newEmployee = {
      employeeId: `emp-${Date.now()}`,
      employeeCode: `EMP${String(runtimeData.employees.length + 1).padStart(3, "0")}`,
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phone: validatedData.phone,
      department,
      position,
      salary: validatedData.salary,
      hiredDate: new Date().toISOString(),
      status: "active" as const,
    }

    runtimeData.employees.unshift(newEmployee)

    return NextResponse.json({
      success: true,
      employee: newEmployee,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
