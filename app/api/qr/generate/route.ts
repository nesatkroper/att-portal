import { type NextRequest, NextResponse } from "next/server";
import { generateQRCode } from "@/lib/qr-generator";
import { z } from "zod";
import prisma from "@/lib/prisma";

const qrSchema = z.object({
  eventId: z.string(),
  expiresIn: z.number().min(1).max(1440).default(60),
  oneTimeUse: z.boolean().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { expiresIn, oneTimeUse } = qrSchema.parse(body);
    const eventId = "d53cfb45-8eb0-35da-b977-2838ca9326dd";

    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { eventId },
    });

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const token = `${eventId}-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    const expiresAt = new Date(Date.now() + expiresIn * 60 * 1000);

    const qrData = {
      token,
      eventId,
      expiresAt: expiresAt.toISOString(),
      oneTimeUse,
      eventName: event.eventName,
    };

    const qrCodeUrl = await generateQRCode(qrData);

    // Create new QR code in database
    const newQRCode = await prisma.qRCode.create({
      data: {
        token,
        eventId,
        eventName: event.eventName,
        qrCode: qrCodeUrl,
        expiresAt,
        oneTimeUse,
        isActive: true,
        scans: 0,
      },
    });

    return NextResponse.json({
      success: true,
      qrCode: newQRCode,
    });
  } catch (error) {
    console.error("QR generation error:", error);
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Optional: Add pagination, filtering, etc. as needed
    const qrCodes = await prisma.qRCode.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        event: {
          select: {
            memo: true,
            startDate: true,
            endDate: true,
          },
        },
      },
    });

    return NextResponse.json({
      qrCodes,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
