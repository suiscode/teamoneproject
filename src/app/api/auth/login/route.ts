import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { LoginSchema } from "@/lib/schema";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = LoginSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  return NextResponse.json({ success: "Email sent" }, { status: 200 });
};
