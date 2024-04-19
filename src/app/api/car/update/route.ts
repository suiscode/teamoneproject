import { algoliaIndex } from "@/lib/algolia";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  const {
    carId,
    name,
    description,
    price,
    gasoline,
    steering,
    capacity,
    salePrice,
  } = body;

  try {
    const res = await db.car.update({
      where: { id: carId },
      data: {
        name,
        description,
        price,
        gasoline,
        steering,
        capacity,
        salePrice,
      },
    });

    await algoliaIndex.partialUpdateObject({
      objectID: carId,
      name,
      description,
      price,
      gasoline,
      steering,
      capacity,
      salePrice,
    });
    return NextResponse.json(
      { success: "Successfully updated" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
