import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { Car } from "../../models";
import { CarCategory } from "../../models";


export const POST = async (req, res) => {
    const body = await req.json();
    console.log(body);
    try {
      connectToDB();
      const carUploaded = await Car.create({...body});
      const carAddedToCategory = await CarCategory.findByIdAndUpdate(body.type,{});
      console.log(carUploaded);
      return NextResponse.json("Car added", { status: 200 });
    } catch (e) {
      console.log(e);
      return NextResponse.json(e, { status: 500 });
    }
  };