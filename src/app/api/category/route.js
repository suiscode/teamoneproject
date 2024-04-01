import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { CarCategory } from "../../models";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDB();
    const categoryFind = await CarCategory.find({ name: body.name });
    if (categoryFind.length >= 1)
      return NextResponse.json("Category exists", { status: 500 });
    const newCategory = await CarCategory.create({
      name: body.name,
      cars: [],
    });
    return NextResponse.json(newCategory, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const body = await req.json();
  try {
    connectToDB();
    const categoryFind = await CarCategory.findByIdAndDelete(body.id);
    return NextResponse.json("Category deleted", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const GET = async () => {
  try {
    connectToDB();
    const categoryFind = await CarCategory.find();
    return NextResponse.json(categoryFind, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
