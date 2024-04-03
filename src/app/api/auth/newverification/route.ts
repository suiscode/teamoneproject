import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user-data";
import { getVerificationByToken } from "@/lib/verification-token";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { token } = body;
  

  const existingToken = await getVerificationByToken(token);

  if (!existingToken) {
    return NextResponse.json(
      { error: "Token does not exist!" },
      { status: 400 }
    );
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired)
    return NextResponse.json({ error: "Token has expired" }, { status: 400 });

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return NextResponse.json(
      { error: "Email does not exist" },
      { status: 400 }
    );
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });
  return NextResponse.json({success:'Email verified'}, { status: 200 });
};
