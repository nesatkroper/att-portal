import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Status } from "@/generator/prisma"; // Import the Status enum from Prisma

const eventSchema = z.object({
  eventName: z.string().min(1).max(200),
  memo: z.string().optional(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") as Status | null;
    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const where = status
      ? {
          status: {
            equals: status,
          },
        }
      : {};

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          address: true,
        },
      }),
      prisma.event.count({ where }),
    ]);

    return NextResponse.json({
      events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = eventSchema.parse(body);

    const newEvent = await prisma.event.create({
      data: {
        eventName: validatedData.eventName,
        memo: validatedData.memo,
        startDate: new Date(validatedData.startDate),
        endDate: new Date(validatedData.endDate),
        status: Status.active, // Use the enum value
      },
    });

    return NextResponse.json({
      success: true,
      event: newEvent,
    });
  } catch (error) {
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

// const eventSchema = z.object({
//   eventName: z.string().min(1),
//   memo: z.string().optional(),
//   startDate: z.string(),
//   endDate: z.string(),
// })

// export async function GET(request: NextRequest) {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const { searchParams } = new URL(request.url)
//     const status = searchParams.get("status")
//     const page = Number.parseInt(searchParams.get("page") || "1")
//     const limit = Number.parseInt(searchParams.get("limit") || "10")

//     let filteredEvents = runtimeData.events

//     if (status) {
//       filteredEvents = filteredEvents.filter((event) => event.status === status)
//     }

//     const startIndex = (page - 1) * limit
//     const endIndex = startIndex + limit
//     const paginatedEvents = filteredEvents.slice(startIndex, endIndex)

//     return NextResponse.json({
//       events: paginatedEvents,
//       pagination: {
//         page,
//         limit,
//         total: filteredEvents.length,
//         pages: Math.ceil(filteredEvents.length / limit),
//       },
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const validatedData = eventSchema.parse(body)

//     await new Promise((resolve) => setTimeout(resolve, 300))

//     const newEvent = {
//       eventId: `evt-${Date.now()}`,
//       eventName: validatedData.eventName,
//       memo: validatedData.memo || "",
//       startDate: new Date(validatedData.startDate),
//       endDate: new Date(validatedData.endDate),
//       status: "active" as const,
//       createdAt: new Date(),
//     }

//     runtimeData.events.unshift(newEvent)

//     return NextResponse.json({
//       success: true,
//       event: newEvent,
//     })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
