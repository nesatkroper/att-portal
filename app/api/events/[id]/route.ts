import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Status } from "@/generator/prisma";

const updateEventSchema = z.object({
  eventName: z.string().min(1).max(200).optional(),
  memo: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.nativeEnum(Status).optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const validatedData = updateEventSchema.parse(body);

    const updateData = {
      ...validatedData,
      ...(validatedData.startDate && {
        startDate: new Date(validatedData.startDate),
      }),
      ...(validatedData.endDate && {
        endDate: new Date(validatedData.endDate),
      }),
    };

    const updatedEvent = await prisma.event.update({
      where: { eventId: id },
      data: updateData,
      // updatedAt will be automatically updated by @updatedAt in the model
    });

    return NextResponse.json({
      success: true,
      event: updatedEvent,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    if (error instanceof Error && error.message.includes("RecordNotFound")) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Soft delete approach (recommended)
    const deletedEvent = await prisma.event.update({
      where: { eventId: id },
      data: { status: Status.deleted }, // Using your enum status for soft delete
    });

    // Alternative for hard delete:
    // await prisma.event.delete({
    //   where: { eventId: id }
    // })

    return NextResponse.json({
      success: true,
      event: deletedEvent,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes("RecordNotFound")) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
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

//     const eventIndex = runtimeData.events.findIndex((event) => event.eventId === id)

//     if (eventIndex === -1) {
//       return NextResponse.json({ error: "Event not found" }, { status: 404 })
//     }

//     runtimeData.events[eventIndex] = {
//       ...runtimeData.events[eventIndex],
//       ...body,
//       updatedAt: new Date(),
//     }

//     return NextResponse.json({
//       success: true,
//       event: runtimeData.events[eventIndex],
//     })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

// export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params

//     await new Promise((resolve) => setTimeout(resolve, 200))

//     const eventIndex = runtimeData.events.findIndex((event) => event.eventId === id)

//     if (eventIndex === -1) {
//       return NextResponse.json({ error: "Event not found" }, { status: 404 })
//     }

//     runtimeData.events.splice(eventIndex, 1)

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }
