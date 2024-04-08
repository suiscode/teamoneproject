import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const userId = req.nextUrl.searchParams.get("userId");
  const carId = req.nextUrl.searchParams.get("carId");
  console.log(userId, carId, "THIS WORKED HAHAHA");
  const isBookmarked = await db.bookmark.findUnique({
    where: {
      userId_carId: {
        userId: userId,
        carId: carId,
      },
    },
  });
  console.log(isBookmarked);
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
  const bookmarkToDelete = await prisma.bookmark.findUnique({
    where: {
      userId_carId: {
        userId: userId,
        carId: carId,
      },
    },
  });

  await prisma.bookmark.delete({
    where: {
      id: bookmarkToDelete.id,
    },
  });
  console.log("worked");
  return NextResponse.json("Added", { status: 200 });
};
