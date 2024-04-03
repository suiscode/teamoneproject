import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/schema";
import { connectToDB } from "@/app/utils";
import { User } from "@/app/models";
import { getUserByEmail } from "@/lib/user-data";
import { db } from "@/lib/db";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = RegisterSchema.safeParse(body);
  console.log(body);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  try {
    connectToDB();

    const { email, password, name } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser)
      return NextResponse.json({ error: "Email is in use" }, { status: 400 });

    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    return NextResponse.json({ success: "Email sent" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
};
