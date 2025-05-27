import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { LeaveStatus } from "@/generator/prisma";

const leaveRequestSchema = z.object({
  employeeId: z.string().uuid(),
  leaveType: z.enum([
    "annual",
    "sick",
    "maternity",
    "paternity",
    "unpaid",
    "other",
  ]),
  startDate: z.string().datetime(), // or z.date() if you prefer
  endDate: z.string().datetime(), // or z.date() if you prefer
  reason: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") as LeaveStatus | null;
    const employeeId = searchParams.get("employeeId");
    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (employeeId) {
      where.employeeId = employeeId;
    }

    const [leaveRequests, total] = await Promise.all([
      prisma.leaveRequest.findMany({
        where,
        include: {
          employee: {
            select: {
              firstName: true,
              lastName: true,
              employeeCode: true,
              department: true,
              position: true,
            },
          },
          approvedBy: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.leaveRequest.count({ where }),
    ]);

    return NextResponse.json({
      leaveRequests: leaveRequests.map((request) => ({
        ...request,
        startDate: request.startDate.toISOString(),
        endDate: request.endDate.toISOString(),
        createdAt: request.createdAt.toISOString(),
        approvedAt: request.approvedAt?.toISOString(),
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get leave requests error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leaveRequestSchema.parse(body);

    // Verify employee exists
    const employee = await prisma.employee.findUnique({
      where: { employeeId: validatedData.employeeId },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // Check for overlapping leave requests
    const overlappingLeave = await prisma.leaveRequest.findFirst({
      where: {
        employeeId: validatedData.employeeId,
        status: "approved",
        OR: [
          {
            startDate: { lte: new Date(validatedData.endDate) },
            endDate: { gte: new Date(validatedData.startDate) },
          },
        ],
      },
    });

    if (overlappingLeave) {
      return NextResponse.json(
        {
          error: "Overlapping leave request exists",
          conflictingLeaveId: overlappingLeave.leaveId,
        },
        { status: 400 }
      );
    }

    // Create new leave request
    const newLeaveRequest = await prisma.leaveRequest.create({
      data: {
        employeeId: validatedData.employeeId,
        leaveType: validatedData.leaveType,
        startDate: new Date(validatedData.startDate),
        endDate: new Date(validatedData.endDate),
        reason: validatedData.reason,
        status: "pending",
      },
      include: {
        employee: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Create notification for approvers
    const approvers = await prisma.employee.findMany({
      where: {
        position: "Manager",
      },
      select: {
        employeeId: true,
      },
    });

    await Promise.all(
      approvers.map((approver) =>
        prisma.notification.create({
          data: {
            auth: { connect: { employeeId: approver.employeeId } },
            message: `${employee.firstName} ${employee.lastName} requested ${validatedData.leaveType} leave from ${validatedData.startDate} to ${validatedData.endDate}`,
          },
        })
      )
    );

    return NextResponse.json({
      success: true,
      leaveRequest: {
        ...newLeaveRequest,
        startDate: newLeaveRequest.startDate.toISOString(),
        endDate: newLeaveRequest.endDate.toISOString(),
        createdAt: newLeaveRequest.createdAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("Create leave request error:", error);
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
// import { z } from "zod"

// const leaveRequestSchema = z.object({
//   employeeId: z.string(),
//   leaveType: z.enum(["annual", "sick", "maternity", "paternity", "unpaid", "other"]),
//   startDate: z.string(),
//   endDate: z.string(),
//   reason: z.string().optional(),
// })

// export async function GET(request: NextRequest) {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const { searchParams } = new URL(request.url)
//     const status = searchParams.get("status")
//     const employeeId = searchParams.get("employeeId")

//     let filteredRequests = runtimeData.leaveRequests

//     if (status) {
//       filteredRequests = filteredRequests.filter((req) => req.status === status)
//     }

//     if (employeeId) {
//       filteredRequests = filteredRequests.filter((req) => req.employeeId === employeeId)
//     }

//     return NextResponse.json({
//       leaveRequests: filteredRequests,
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const validatedData = leaveRequestSchema.parse(body)

//     await new Promise((resolve) => setTimeout(resolve, 300))

//     const employee = runtimeData.employees.find((emp) => emp.employeeId === validatedData.employeeId)

//     const newLeaveRequest = {
//       leaveId: `leave-${Date.now()}`,
//       employeeId: validatedData.employeeId,
//       leaveType: validatedData.leaveType,
//       startDate: new Date(validatedData.startDate),
//       endDate: new Date(validatedData.endDate),
//       reason: validatedData.reason || "",
//       status: "pending" as const,
//       createdAt: new Date(),
//       employee,
//     }

//     runtimeData.leaveRequests.unshift(newLeaveRequest)

//     // Add notification
//     const notification = {
//       id: `notif-${Date.now()}`,
//       type: "leave_request",
//       title: "New Leave Request",
//       message: `${employee?.firstName} ${employee?.lastName} requested ${validatedData.leaveType} leave`,
//       timestamp: new Date(),
//       read: false,
//     }

//     runtimeData.notifications.unshift(notification)

//     return NextResponse.json({
//       success: true,
//       leaveRequest: newLeaveRequest,
//     })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
