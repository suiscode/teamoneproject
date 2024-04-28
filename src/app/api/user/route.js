import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  const body = await req.json();
  const { firstName, lastName, phoneNumber, userId } = body;
  console.log(body);
  try {
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      },
    });
    return NextResponse.json({ success: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 200 });
  }
};
