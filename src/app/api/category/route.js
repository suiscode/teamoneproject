import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { CarCategory } from "../../models";

export const POST = async (req, res) => {
  const body = await req.json();
  const { category } = body.values;
  console.log(category);

  try {
    connectToDB();
    const categoryFind = await CarCategory.find({ name: category });
    if (categoryFind.length >= 1)
      return NextResponse.json({ error: "Category exists" }, { status: 500 });
    const newCategory = await CarCategory.create({
      name: category,
      cars: [],
    });
    return NextResponse.json(
      { success: "Category added", data: newCategory },
      { status: 200 }
    );
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
    const categoryFind = await CarCategory.find().sort({ _id: -1 });
    return NextResponse.json(categoryFind, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
