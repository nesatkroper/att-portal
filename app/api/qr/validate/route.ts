import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const qrValidationSchema = z.object({
  qrData: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const { qrData } = await request.json();
    const validation = qrValidationSchema.safeParse({ qrData });

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request format", details: validation.error.errors },
        { status: 400 }
      );
    }

    let parsedData;
    try {
      parsedData = JSON.parse(qrData);
    } catch {
      return NextResponse.json(
        { error: "Invalid QR code format" },
        { status: 400 }
      );
    }

    const { token, eventId, expiresAt } = parsedData;

    // Check if QR code is expired
    if (new Date() > new Date(expiresAt)) {
      return NextResponse.json(
        { error: "QR code has expired" },
        { status: 400 }
      );
    }

    // Find QR code and related event in database
    const qrCode = await prisma.qRCode.findUnique({
      where: { token },
      include: {
        event: true,
      },
    });

    if (!qrCode) {
      return NextResponse.json({ error: "Invalid QR code" }, { status: 400 });
    }

    if (!qrCode.isActive) {
      return NextResponse.json(
        { error: "QR code is not active" },
        { status: 400 }
      );
    }

    // Verify event exists and is active
    if (qrCode.event.status !== "active") {
      return NextResponse.json(
        { error: "Event not found or inactive" },
        { status: 404 }
      );
    }

    // Increment scan count
    const updatedQrCode = await prisma.qRCode.update({
      where: { token },
      data: {
        scans: { increment: 1 },
        updatedAt: new Date(),
      },
    });

    // In a real app, get employee from session/auth context
    // Mock employee data for demonstration
    const employee = await prisma.employee.findUnique({
      where: { employeeId: "ee18ec1e-72c3-49d7-bb71-fe44bff9c5ba" },
      include: {
        department: true,
        position: true,
      },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      valid: true,
      event: {
        eventId: qrCode.event.eventId,
        eventName: qrCode.event.eventName,
        startDate: qrCode.event.startDate,
        endDate: qrCode.event.endDate,
      },
      employee: {
        employeeId: employee.employeeId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        employeeCode: employee.employeeCode,
        department: employee.department.departmentName,
        position: employee.position.positionName,
      },
      scanCount: updatedQrCode.scans,
    });
  } catch (error) {
    console.error("QR validation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// import { type NextRequest, NextResponse } from "next/server"
// import { runtimeData } from "@/lib/mock-data"

// export async function POST(request: NextRequest) {
//   try {
//     const { qrData } = await request.json()

//     let parsedData
//     try {
//       parsedData = JSON.parse(qrData)
//     } catch {
//       return NextResponse.json({ error: "Invalid QR code format" }, { status: 400 })
//     }

//     const { token, eventId, expiresAt } = parsedData

//     // Check if QR code is expired
//     if (new Date() > new Date(expiresAt)) {
//       return NextResponse.json({ error: "QR code has expired" }, { status: 400 })
//     }

//     // Find QR code in storage
//     const qrCode = runtimeData.qrCodes.find((qr) => qr.token === token)
//     if (!qrCode) {
//       return NextResponse.json({ error: "Invalid QR code" }, { status: 400 })
//     }

//     // Verify event exists and is active
//     const event = runtimeData.events.find((e) => e.eventId === eventId && e.status === "active")
//     if (!event) {
//       return NextResponse.json({ error: "Event not found or inactive" }, { status: 404 })
//     }

//     // Increment scan count
//     qrCode.scans += 1

//     // Mock employee data (in real app, get from session)
//     const employee = runtimeData.employees[1] // Jane Smith

//     return NextResponse.json({
//       success: true,
//       valid: true,
//       event,
//       employee: {
//         employeeId: employee.employeeId,
//         firstName: employee.firstName,
//         lastName: employee.lastName,
//         employeeCode: employee.employeeCode,
//         department: employee.department.departmentName,
//         position: employee.position.positionName,
//       },
//     })
//   } catch (error) {
//     console.error("QR validation error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
