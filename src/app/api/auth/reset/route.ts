import { NextRequest, NextResponse } from "next/server";
import { ResetSchema } from "@/lib/schema";
import { getUserByEmail } from "@/lib/user-data";
import * as z from "zod";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = ResetSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return NextResponse.json({ error: "Email not found" }, { status: 400 });
  }

  return NextResponse.json({ success: "Reset email sent" }, { status: 200 });
};
