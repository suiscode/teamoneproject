import { NextResponse } from "next/server";
import { connectToDB } from "../../utils";
import { Car } from "../../models";
import { CarCategory } from "../../models";
import { db } from "@/lib/db";
import { algoliaIndex } from "../../../lib/algolia.ts";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    const newCar = await db.car.create({
      data: {
        ...body,
      },
    });
    const algoliaObject = {
      objectID: newCar.id.toString(),
      ...newCar,
    };
    await algoliaIndex.saveObject(algoliaObject);

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
    const objectID = id;
    await algoliaIndex.deleteObject(objectID);
    return NextResponse.json({ success: "Item deleted" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const data = await req.json();
  const { key } = body;
  try {
    const { hits } = await algoliaIndex.search(key);

    return NextResponse.json({ hits }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};
