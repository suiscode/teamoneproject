import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { Car } from "../../models";
import { CarCategory } from "../../models";
import { db } from "@/lib/db";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    const newCar = await db.car.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json("Car added", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Car name exists" }, { status: 500 });
  }
};

export const PATCH = async (req, res) => {
  const body = await req.json();
  const { id } = body;
  try {
    await db.car.delete({
      where: { id },
    });

    return NextResponse.json({ success: "Item deleted" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
