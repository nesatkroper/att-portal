import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const leaveRequestUpdateSchema = z.object({
  status: z.enum(["approved", "rejected", "cancelled"]),
  approvedById: z.string().uuid(),
  note: z.string().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const validatedData = leaveRequestUpdateSchema.parse(body);

    // Verify leave request exists
    const leaveRequest = await prisma.leaveRequest.findUnique({
      where: { leaveId: id },
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!leaveRequest) {
      return NextResponse.json(
        { error: "Leave request not found" },
        { status: 404 }
      );
    }

    // Verify approver exists
    const approver = await prisma.employee.findUnique({
      where: { employeeId: validatedData.approvedById },
    });

    if (!approver) {
      return NextResponse.json(
        { error: "Approver not found" },
        { status: 404 }
      );
    }

    // Update leave request
    const updatedRequest = await prisma.$transaction(async (tx) => {
      const updated = await tx.leaveRequest.update({
        where: { leaveId: id },
        data: {
          status: validatedData.status,
          approvedById: validatedData.approvedById,
          approvedAt: new Date(),
          reason: validatedData.note,
        },
        include: {
          employee: true,
          approvedBy: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });

      // Create notification for employee
      await tx.notification.create({
        data: {
          auth: {
            connect: { employeeId: updated.employeeId },
          },
          message: `Your leave request has been ${validatedData.status} by ${approver.firstName} ${approver.lastName}`,
        },
      });

      // Create audit log
      await tx.authLog.create({
        data: {
          auth: {
            connect: { employeeId: validatedData.approvedById },
          },
          action: "LEAVE_REQUEST_UPDATE",
          message: `Updated leave request ${id} to status ${validatedData.status}`,
          metadata: JSON.stringify({
            leaveId: id,
            previousStatus: leaveRequest.status,
            newStatus: validatedData.status,
          }),
        },
      });

      return updated;
    });

    return NextResponse.json({
      success: true,
      leaveRequest: {
        ...updatedRequest,
        startDate: updatedRequest.startDate.toISOString(),
        endDate: updatedRequest.endDate.toISOString(),
        createdAt: updatedRequest.createdAt.toISOString(),
        approvedAt: updatedRequest.approvedAt?.toISOString(),
      },
    });
  } catch (error) {
    console.error("Update leave request error:", error);
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

// export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params
//     const body = await request.json()

//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const requestIndex = runtimeData.leaveRequests.findIndex((req) => req.leaveId === id)

//     if (requestIndex === -1) {
//       return NextResponse.json({ error: "Leave request not found" }, { status: 404 })
//     }

//     const oldRequest = runtimeData.leaveRequests[requestIndex]
//     runtimeData.leaveRequests[requestIndex] = {
//       ...oldRequest,
//       ...body,
//       approvedAt: body.status === "approved" ? new Date() : oldRequest.approvedAt,
//     }

//     // Add notification for status change
//     if (body.status && body.status !== oldRequest.status) {
//       const notification = {
//         id: `notif-${Date.now()}`,
//         type: "leave_request",
//         title: "Leave Request Updated",
//         message: `Leave request ${body.status} for ${oldRequest.employee?.firstName} ${oldRequest.employee?.lastName}`,
//         timestamp: new Date(),
//         read: false,
//       }

//       runtimeData.notifications.unshift(notification)
//     }

//     return NextResponse.json({
//       success: true,
//       leaveRequest: runtimeData.leaveRequests[requestIndex],
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
