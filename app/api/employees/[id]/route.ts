import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"
import { z } from "zod"

const employeeUpdateSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  departmentId: z.string().optional(),
  positionId: z.string().optional(),
  salary: z.number().positive().optional(),
  status: z.enum(["active", "inactive"]).optional(),
})

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    await new Promise((resolve) => setTimeout(resolve, 100))

    const employee = runtimeData.employees.find((emp) => emp.employeeId === id)

    if (!employee) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 })
    }

    return NextResponse.json({ employee })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const body = await request.json()
    const validatedData = employeeUpdateSchema.parse(body)

    await new Promise((resolve) => setTimeout(resolve, 200))

    const employeeIndex = runtimeData.employees.findIndex((emp) => emp.employeeId === id)

    if (employeeIndex === -1) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 })
    }

    // Update employee
    runtimeData.employees[employeeIndex] = {
      ...runtimeData.employees[employeeIndex],
      ...validatedData,
    }

    return NextResponse.json({
      success: true,
      employee: runtimeData.employees[employeeIndex],
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    await new Promise((resolve) => setTimeout(resolve, 200))

    const employeeIndex = runtimeData.employees.findIndex((emp) => emp.employeeId === id)

    if (employeeIndex === -1) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 })
    }

    // Soft delete - change status to inactive
    runtimeData.employees[employeeIndex].status = "inactive"

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
