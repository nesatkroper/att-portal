import { type NextRequest, NextResponse } from "next/server"
import { runtimeData } from "@/lib/mock-data"

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json({
      notifications: runtimeData.notifications,
      unreadCount: runtimeData.notifications.filter((n) => !n.read).length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { notificationId, read } = await request.json()

    const notification = runtimeData.notifications.find((n) => n.id === notificationId)
    if (notification) {
      notification.read = read
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
