import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  const { carId, userId, starRating, comment } = body;
  console.log(carId, userId, starRating, comment);
  try {
    // const review = await prisma.review.create({
    //   data: {
    //     car: {
    //       connect: {
    //         id: carId, // Connects this review to an existing Car
    //       },
    //     },
    //     User: {
    //       connect: {
    //         id: userId, // Connects this review to an existing User
    //       },
    //     },
    //     starRating: starRating,
    //     comment: comment,
    //   },
    // });
    console.log();
    return NextResponse.json({ success: "Category added" }, { status: 200 });

    console.log("Review created successfully:", review);
  } catch (error) {
    console.error("Failed to create review:", error);
  }
};
