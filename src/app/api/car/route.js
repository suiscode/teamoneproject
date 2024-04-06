import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { Car } from "../../models";
import { CarCategory } from "../../models";

export const POST = async (req, res) => {
  const body = await req.json();
  console.log(body);
  try {
    connectToDB();
    console.log("first log");
    const carUploaded = await Car.create({ ...body });
    const carAddedToCategory = await CarCategory.findOneAndUpdate(
      { name: body.type },
      { $push: { cars: carUploaded._id } },
      { new: true }
    );
    console.log("second log");

    return NextResponse.json("Car added", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
