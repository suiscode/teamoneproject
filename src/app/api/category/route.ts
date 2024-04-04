import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { CarCategory } from "../../models";

export const POST = async (req: NextResponse) => {
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
      { success: "Category Added", data: newCategory },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextResponse) => {
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
