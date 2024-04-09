import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { CarCategory } from "../../models";
import { getCategoryByName } from "@/lib/user-data";
import { db } from "@/lib/db";

export const POST = async (req, res) => {
  const body = await req.json();
  const { category } = body.values;

  try {
    const existingCategory = await getCategoryByName(category);

    if (existingCategory)
      return NextResponse.json({ error: "Category exists" }, { status: 400 });
    const newCategory = await db.carCategory.create({
      data: {
        name: category,
      },
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
    await db.carCategory.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json("Category deleted", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const PATCH = async (req, res) => {
  const body = await req.json();
  try {
    await db.carCategory.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.category,
      },
    });
    return NextResponse.json("Category deleted", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const categoryFind = await db.carCategory.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(categoryFind, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
