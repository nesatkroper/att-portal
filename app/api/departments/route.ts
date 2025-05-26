import { NextResponse } from "next/server"

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
  { positionId: "pos-6", positionName: "Designer" },
  { positionId: "pos-7", positionName: "Analyst" },
]

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json({
      departments,
      positions,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
