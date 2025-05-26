import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"
import { z } from "zod"

const leaveRequestSchema = z.object({
  employeeId: z.string(),
  leaveType: z.enum(["annual", "sick", "maternity", "paternity", "unpaid", "other"]),
  startDate: z.string(),
  endDate: z.string(),
  reason: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const employeeId = searchParams.get("employeeId")

    let filteredRequests = runtimeData.leaveRequests

    if (status) {
      filteredRequests = filteredRequests.filter((req) => req.status === status)
    }

    if (employeeId) {
      filteredRequests = filteredRequests.filter((req) => req.employeeId === employeeId)
    }

    return NextResponse.json({
      leaveRequests: filteredRequests,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = leaveRequestSchema.parse(body)

    await new Promise((resolve) => setTimeout(resolve, 300))

    const employee = runtimeData.employees.find((emp) => emp.employeeId === validatedData.employeeId)

    const newLeaveRequest = {
      leaveId: `leave-${Date.now()}`,
      employeeId: validatedData.employeeId,
      leaveType: validatedData.leaveType,
      startDate: new Date(validatedData.startDate),
      endDate: new Date(validatedData.endDate),
      reason: validatedData.reason || "",
      status: "pending" as const,
      createdAt: new Date(),
      employee,
    }

    runtimeData.leaveRequests.unshift(newLeaveRequest)

    // Add notification
    const notification = {
      id: `notif-${Date.now()}`,
      type: "leave_request",
      title: "New Leave Request",
      message: `${employee?.firstName} ${employee?.lastName} requested ${validatedData.leaveType} leave`,
      timestamp: new Date(),
      read: false,
    }

    runtimeData.notifications.unshift(notification)

    return NextResponse.json({
      success: true,
      leaveRequest: newLeaveRequest,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
