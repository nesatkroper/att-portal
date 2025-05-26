import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const body = await request.json()

    await new Promise((resolve) => setTimeout(resolve, 200))

    const requestIndex = runtimeData.leaveRequests.findIndex((req) => req.leaveId === id)

    if (requestIndex === -1) {
      return NextResponse.json({ error: "Leave request not found" }, { status: 404 })
    }

    const oldRequest = runtimeData.leaveRequests[requestIndex]
    runtimeData.leaveRequests[requestIndex] = {
      ...oldRequest,
      ...body,
      approvedAt: body.status === "approved" ? new Date() : oldRequest.approvedAt,
    }

    // Add notification for status change
    if (body.status && body.status !== oldRequest.status) {
      const notification = {
        id: `notif-${Date.now()}`,
        type: "leave_request",
        title: "Leave Request Updated",
        message: `Leave request ${body.status} for ${oldRequest.employee?.firstName} ${oldRequest.employee?.lastName}`,
        timestamp: new Date(),
        read: false,
      }

      runtimeData.notifications.unshift(notification)
    }

    return NextResponse.json({
      success: true,
      leaveRequest: runtimeData.leaveRequests[requestIndex],
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
