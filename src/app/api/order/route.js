import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { db } from "@/lib/db";

export const POST = async (req) => {
  const session = await auth();
  const { pickUpLocation, dropOffLocation, date, carId } = await req.json();
  console.log(date);
  try {
    const newOrder = await db.order.create({
      data: {
        user: {
          connect: { id: session.user.id },
        },
        car: {
          connect: { id: carId },
        },
        duration: {
          from: date.from,
          to: date.to,
        },
        pickupLocation: pickUpLocation,
        dropLocation: dropOffLocation,
      },
    });

    return NextResponse.json({ success: "Category added" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
