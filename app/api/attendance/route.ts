import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const attendanceSchema = z.object({
  employeeId: z.string().uuid(),
  eventId: z.string().uuid(),
  method: z.enum(["phone", "biometric"]).optional().default("phone"),
  note: z.string().optional(),
  location: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = attendanceSchema.parse(body);

    // Check if employee and event exist
    const [employee, event] = await Promise.all([
      prisma.employee.findUnique({
        where: { employeeId: validatedData.employeeId },
      }),
      prisma.event.findUnique({
        where: { eventId: validatedData.eventId },
      }),
    ]);

    if (!employee || !event) {
      return NextResponse.json(
        { error: "Employee or event not found" },
        { status: 404 }
      );
    }

    // Check for existing active attendance
    const existingAttendance = await prisma.attendance.findFirst({
      where: {
        employeeId: validatedData.employeeId,
        eventId: validatedData.eventId,
        checkOut: null,
        status: "active",
      },
      include: {
        employee: true,
        event: true,
      },
    });

    if (existingAttendance) {
      // Check-out flow
      const updatedAttendance = await prisma.attendance.update({
        where: { attendanceId: existingAttendance.attendanceId },
        data: {
          checkOut: new Date(),
          note: validatedData.note || existingAttendance.note,
        },
        include: {
          employee: true,
          event: true,
        },
      });

      // Create notification
      await prisma.notification.create({
        data: {
          auth: { connect: { employeeId: employee.employeeId } },
          message: `${employee.firstName} ${employee.lastName} checked out from ${event.eventName}`,
        },
      });

      return NextResponse.json({
        success: true,
        type: "checkout",
        attendance: {
          ...updatedAttendance,
          employee: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            employeeCode: employee.employeeCode,
          },
          event: {
            eventName: event.eventName,
          },
        },
      });
    } else {
      // Check-in flow
      const newAttendance = await prisma.attendance.create({
        data: {
          employeeId: validatedData.employeeId,
          eventId: validatedData.eventId,
          method: validatedData.method,
          status: "active",
          note: validatedData.note,
          checkIn: new Date(),
        },
        include: {
          employee: true,
          event: true,
        },
      });

      // Create notification
      await prisma.notification.create({
        data: {
          auth: { connect: { employeeId: employee.employeeId } },
          message: `${employee.firstName} ${employee.lastName} checked in to ${event.eventName}`,
        },
      });

      return NextResponse.json({
        success: true,
        type: "checkin",
        attendance: {
          ...newAttendance,
          employee: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            employeeCode: employee.employeeCode,
          },
          event: {
            eventName: event.eventName,
          },
        },
      });
    }
  } catch (error) {
    console.error("Attendance API error:", error);
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get("eventId");
    const employeeId = searchParams.get("employeeId");
    const date = searchParams.get("date");
    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const where: any = {};

    if (eventId) {
      where.eventId = eventId;
    }

    if (employeeId) {
      where.employeeId = employeeId;
    }

    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      
      where.checkIn = {
        gte: startDate,
        lt: endDate,
      };
    }

    const [attendances, total] = await Promise.all([
      prisma.attendance.findMany({
        where,
        include: {
          employee: true,
          event: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          checkIn: "desc",
        },
      }),
      prisma.attendance.count({ where }),
    ]);

    return NextResponse.json({
      attendances: attendances.map((att) => ({
        ...att,
        employee: {
          firstName: att.employee.firstName,
          lastName: att.employee.lastName,
          employeeCode: att.employee.employeeCode,
        },
        event: {
          eventName: att.event.eventName,
        },
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get attendance error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


// import { type NextRequest, NextResponse } from "next/server"
// import { runtimeData } from "@/lib/mock-data"
// import { z } from "zod"

// const attendanceSchema = z.object({
//   employeeId: z.string().uuid(),
//   eventId: z.string().uuid(),
//   method: z.enum(["phone", "biometric"]).optional(),
//   note: z.string().optional(),
//   location: z
//     .object({
//       latitude: z.number(),
//       longitude: z.number(),
//     })
//     .optional(),
// })

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const validatedData = attendanceSchema.parse(body)

//     await new Promise((resolve) => setTimeout(resolve, 300))

//     // Check if employee already has an active attendance for this event
//     const existingAttendance = runtimeData.attendances.find(
//       (att) =>
//         att.employeeId === validatedData.employeeId &&
//         att.eventId === validatedData.eventId &&
//         !att.checkOut &&
//         att.status === "active",
//     )

//     const employee = runtimeData.employees.find((emp) => emp.employeeId === validatedData.employeeId)
//     const event = runtimeData.events.find((evt) => evt.eventId === validatedData.eventId)

//     if (!employee || !event) {
//       return NextResponse.json({ error: "Employee or event not found" }, { status: 404 })
//     }

//     if (existingAttendance) {
//       // This is a check-out
//       existingAttendance.checkOut = new Date()
//       existingAttendance.note = validatedData.note || existingAttendance.note

//       // Add notification
//       const notification = {
//         id: `notif-${Date.now()}`,
//         type: "attendance",
//         title: "Employee Checked Out",
//         message: `${employee.firstName} ${employee.lastName} checked out from ${event.eventName}`,
//         timestamp: new Date(),
//         read: false,
//       }
//       runtimeData.notifications.unshift(notification)

//       return NextResponse.json({
//         success: true,
//         type: "checkout",
//         attendance: {
//           ...existingAttendance,
//           employee: {
//             firstName: employee.firstName,
//             lastName: employee.lastName,
//             employeeCode: employee.employeeCode,
//           },
//           event: {
//             eventName: event.eventName,
//           },
//         },
//       })
//     } else {
//       // This is a check-in
//       const newAttendance = {
//         attendanceId: `att-${Date.now()}`,
//         employeeId: validatedData.employeeId,
//         eventId: validatedData.eventId,
//         method: validatedData.method || "phone",
//         status: "active" as const,
//         note: validatedData.note || "",
//         checkIn: new Date(),
//         checkOut: null,
//         employee,
//         event,
//       }

//       runtimeData.attendances.unshift(newAttendance)

//       // Add notification
//       const notification = {
//         id: `notif-${Date.now()}`,
//         type: "attendance",
//         title: "Employee Checked In",
//         message: `${employee.firstName} ${employee.lastName} checked in to ${event.eventName}`,
//         timestamp: new Date(),
//         read: false,
//       }
//       runtimeData.notifications.unshift(notification)

//       return NextResponse.json({
//         success: true,
//         type: "checkin",
//         attendance: {
//           ...newAttendance,
//           employee: {
//             firstName: employee.firstName,
//             lastName: employee.lastName,
//             employeeCode: employee.employeeCode,
//           },
//           event: {
//             eventName: event.eventName,
//           },
//         },
//       })
//     }
//   } catch (error) {
//     console.error("Attendance API error:", error)
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const eventId = searchParams.get("eventId")
//     const employeeId = searchParams.get("employeeId")
//     const date = searchParams.get("date")
//     const page = Number.parseInt(searchParams.get("page") || "1")
//     const limit = Number.parseInt(searchParams.get("limit") || "10")

//     await new Promise((resolve) => setTimeout(resolve, 200))

//     let filteredAttendances = runtimeData.attendances

//     if (eventId) {
//       filteredAttendances = filteredAttendances.filter((att) => att.eventId === eventId)
//     }

//     if (employeeId) {
//       filteredAttendances = filteredAttendances.filter((att) => att.employeeId === employeeId)
//     }

//     if (date) {
//       const startDate = new Date(date)
//       const endDate = new Date(date)
//       endDate.setDate(endDate.getDate() + 1)
//       filteredAttendances = filteredAttendances.filter((att) => {
//         const checkInDate = new Date(att.checkIn)
//         return checkInDate >= startDate && checkInDate < endDate
//       })
//     }

//     const startIndex = (page - 1) * limit
//     const endIndex = startIndex + limit
//     const paginatedAttendances = filteredAttendances.slice(startIndex, endIndex)

//     return NextResponse.json({
//       attendances: paginatedAttendances,
//       pagination: {
//         page,
//         limit,
//         total: filteredAttendances.length,
//         pages: Math.ceil(filteredAttendances.length / limit),
//       },
//     })
//   } catch (error) {
//     console.error("Get attendance error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
