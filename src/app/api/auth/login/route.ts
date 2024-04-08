import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "../../../../../auth";
import { LoginSchema } from "@/lib/schema";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";
import { error } from "console";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/lib/user-data";
import {
  generateVerificationToken,
  generateTwoFactorToken,
} from "@/lib/tokens";
import { sendTwoFactorEmail, sendVerificationEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/lib/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/lib/two-factor-confirmation";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = LoginSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return NextResponse.json(
      { error: "Email does not exists!" },
      { status: 400 }
    );
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);
  if (!passwordMatch)
    return NextResponse.json({ error: "Credentials wrong" }, { status: 400 });

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return NextResponse.json(
      { success: "Email is not verified, verification email sent" },
      { status: 200 }
    );
  }

  // if (existingUser.isTwoFactorEnabled && existingUser.email) {
  //   if (code) {
  //     const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

  //     if (!twoFactorToken) {
  //       return NextResponse.json({ error: "Invalid code" }, { status: 400 });
  //     }

  //     if (twoFactorToken.token !== code) {
  //       return NextResponse.json({ error: "Invalid code" }, { status: 400 });
  //     }

  //     const hasExpired = new Date(twoFactorToken.expires) < new Date();
  //     if (hasExpired) {
  //       return NextResponse.json({ error: "Code expired" }, { status: 400 });
  //     }

  //     await db.twoFactorToken.delete({
  //       where: { id: twoFactorToken.id },
  //     });

  //     const existingConfirmation = await getTwoFactorConfirmationByUserId(
  //       existingUser.id
  //     );

  //     if (existingConfirmation) {
  //       await db.twoFactorConfirmation.delete({
  //         where: { id: existingConfirmation.id },
  //       });
  //     }

  //     await db.twoFactorConfirmation.create({
  //       data: {
  //         userId: existingUser.id,
  //       },
  //     });
  //   } else {
  //     const twoFactorToken = await generateTwoFactorToken(existingUser.email);
  //     await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token);
  //     return NextResponse.json({ twoFactor: true }, { status: 200 });
  //   }
  // }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    console.log("worked");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 400 }
          );

        default:
          return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
          );
      }
    }
    throw error;
  }
};
