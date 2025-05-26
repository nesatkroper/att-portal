import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"

export async function POST(request: NextRequest) {
  try {
    const { qrData } = await request.json()

    let parsedData
    try {
      parsedData = JSON.parse(qrData)
    } catch {
      return NextResponse.json({ error: "Invalid QR code format" }, { status: 400 })
    }

    const { token, eventId, expiresAt } = parsedData

    // Check if QR code is expired
    if (new Date() > new Date(expiresAt)) {
      return NextResponse.json({ error: "QR code has expired" }, { status: 400 })
    }

    // Find QR code in storage
    const qrCode = runtimeData.qrCodes.find((qr) => qr.token === token)
    if (!qrCode) {
      return NextResponse.json({ error: "Invalid QR code" }, { status: 400 })
    }

    // Verify event exists and is active
    const event = runtimeData.events.find((e) => e.eventId === eventId && e.status === "active")
    if (!event) {
      return NextResponse.json({ error: "Event not found or inactive" }, { status: 404 })
    }

    // Increment scan count
    qrCode.scans += 1

    // Mock employee data (in real app, get from session)
    const employee = runtimeData.employees[1] // Jane Smith

    return NextResponse.json({
      success: true,
      valid: true,
      event,
      employee: {
        employeeId: employee.employeeId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        employeeCode: employee.employeeCode,
        department: employee.department.departmentName,
        position: employee.position.positionName,
      },
    })
  } catch (error) {
    console.error("QR validation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
