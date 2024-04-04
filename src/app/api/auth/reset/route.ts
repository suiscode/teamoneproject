import { NextRequest, NextResponse } from "next/server";
import { NewPasswordSchema, ResetSchema } from "@/lib/schema";
import { getUserByEmail } from "@/lib/user-data";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";
import { getPasswordResetTokenByToken } from "@/lib/password-reset-token";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

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

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return NextResponse.json({ success: "Reset email sent" }, { status: 200 });
};

export const PUT = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);

  const { values, token } = body;
  if (!token) {
    return NextResponse.json({ error: "Missing Token" }, { status: 400 });
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return NextResponse.json({ error: "Token has expired" }, { status: 400 });
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return NextResponse.json(
      { error: "Email does not exist" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return NextResponse.json({ success: "Password updated" }, { status: 200 });
};
