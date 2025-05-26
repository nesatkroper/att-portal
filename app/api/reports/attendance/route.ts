import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")
    const employeeId = searchParams.get("employeeId")
    const department = searchParams.get("department")
    const format = searchParams.get("format") || "json"

    await new Promise((resolve) => setTimeout(resolve, 300))

    let filteredAttendances = runtimeData.attendances

    // Apply filters
    if (startDate) {
      filteredAttendances = filteredAttendances.filter((att) => new Date(att.checkIn) >= new Date(startDate))
    }

    if (endDate) {
      filteredAttendances = filteredAttendances.filter((att) => new Date(att.checkIn) <= new Date(endDate))
    }

    if (employeeId) {
      filteredAttendances = filteredAttendances.filter((att) => att.employeeId === employeeId)
    }

    if (department) {
      filteredAttendances = filteredAttendances.filter((att) => att.employee.department.departmentName === department)
    }

    // Format data for export
    const reportData = filteredAttendances.map((att) => ({
      "Employee Code": att.employee.employeeCode,
      "Employee Name": `${att.employee.firstName} ${att.employee.lastName}`,
      Department: att.employee.department.departmentName,
      Position: att.employee.position.positionName,
      Event: att.event.eventName,
      "Check In": att.checkIn.toLocaleString(),
      "Check Out": att.checkOut ? att.checkOut.toLocaleString() : "Still Active",
      "Work Hours": att.checkOut
        ? `${Math.round(((att.checkOut.getTime() - att.checkIn.getTime()) / (1000 * 60 * 60)) * 100) / 100}h`
        : "Active",
      Method: att.method,
      Note: att.note || "",
    }))

    // Calculate summary statistics
    const summary = {
      totalRecords: reportData.length,
      totalEmployees: new Set(filteredAttendances.map((att) => att.employeeId)).size,
      averageWorkHours:
        filteredAttendances
          .filter((att) => att.checkOut)
          .reduce((sum, att) => sum + (att.checkOut!.getTime() - att.checkIn.getTime()) / (1000 * 60 * 60), 0) /
        filteredAttendances.filter((att) => att.checkOut).length,
      departmentBreakdown: Object.entries(
        filteredAttendances.reduce(
          (acc, att) => {
            acc[att.employee.department.departmentName] = (acc[att.employee.department.departmentName] || 0) + 1
            return acc
          },
          {} as Record<string, number>,
        ),
      ).map(([dept, count]) => ({ department: dept, count })),
    }

    return NextResponse.json({
      success: true,
      data: reportData,
      summary,
      filters: {
        startDate,
        endDate,
        employeeId,
        department,
      },
    })
  } catch (error) {
    console.error("Report generation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
