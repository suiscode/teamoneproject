import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const { carId, userId, starRating, comment } = body;
  try {
    const existingReview = await db.review.findFirst({
      where: {
        carId: carId,
        userId: userId,
      },
    });

    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this car." },
        { status: 409 }
      );
    }
    const review = await db.review.create({
      data: {
        car: {
          connect: {
            id: carId, // Connects this review to an existing Car
          },
        },
        User: {
          connect: {
            id: userId, // Connects this review to an existing User
          },
        },
        starRating: starRating,
        comment: comment,
      },
    });
    console.log();
    return NextResponse.json({ success: "Category added" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 200 });
  }
};

export const GET = async (req) => {
  try {
    const carId = req.nextUrl.searchParams.get("carId");
    console.log(carId);
    const data = await db.review.findMany({
      where: {
        carId: carId,
      },
      include: {
        User: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
    console.log(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 200 });
  }
};
