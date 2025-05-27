import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma" // Assuming you have a Prisma client instance set up

export async function GET() {
  try {
    // Fetch notifications from database including related auth info
    const notifications = await prisma.notification.findMany({
      include: {
        auth: {
          select: {
            email: true,
            employee: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Calculate unread count
    const unreadCount = await prisma.notification.count({
      where: {
        read: false
      }
    })

    return NextResponse.json({
      notifications: notifications.map(n => ({
        id: n.notificationId,
        title: n.title,
        message: n.message,
        read: n.read,
        type: n.type,
        createdAt: n.createdAt,
        // Include additional fields from auth if needed
        email: n.auth.email,
        employeeName: n.auth.employee ? 
          `${n.auth.employee.firstName} ${n.auth.employee.lastName}` : null
      })),
      unreadCount
    })
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { notificationId, read } = await request.json()

    // Update notification in database
    const updatedNotification = await prisma.notification.update({
      where: {
        notificationId
      },
      data: {
        read
      }
    })

    if (!updatedNotification) {
      return NextResponse.json(
        { error: "Notification not found" }, 
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating notification:', error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
}


// import { type NextRequest, NextResponse } from "next/server"
// import { runtimeData } from "@/lib/mock-data"

// export async function GET() {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 100))

//     return NextResponse.json({
//       notifications: runtimeData.notifications,
//       unreadCount: runtimeData.notifications.filter((n) => !n.read).length,
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function PUT(request: NextRequest) {
//   try {
//     const { notificationId, read } = await request.json()

//     const notification = runtimeData.notifications.find((n) => n.id === notificationId)
//     if (notification) {
//       notification.read = read
//     }

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
