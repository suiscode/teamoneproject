import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const userId = req.nextUrl.searchParams.get("userId");
  const carId = req.nextUrl.searchParams.get("carId");
  const isBookmarked = await db.bookmark.findUnique({
    where: {
      userId_carId: {
        userId: userId,
        carId: carId,
      },
    },
  });
  if (isBookmarked) return NextResponse.json(true, { status: 200 });
  return NextResponse.json(false, { status: 200 });
};

export const POST = async (req, res) => {
  const body = await req.json();

  const { userId, carId } = body;
  const newBookmark = await db.bookmark.create({
    data: {
      userId: userId,
      carId: carId,
    },
  });
  return NextResponse.json("Added", { status: 200 });
};

export const PUT = async (req, res) => {
  const body = await req.json();

  const { userId, carId } = body;
  try {
    const bookmarkToDelete = await db.bookmark.findUnique({
      where: {
        userId_carId: {
          userId: userId,
          carId: carId,
        },
      },
    });
    console.log(bookmarkToDelete);

    await db.bookmark.delete({
      where: {
        id: bookmarkToDelete.id,
      },
    });
    return NextResponse.json("Added", { status: 200 });
  } catch (error) {
    return NextResponse.json("Error", { status: 400 });
  }
};
