import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "../../../../../auth";
import { LoginSchema } from "@/lib/schema";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";
import { error } from "console";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/lib/user-data";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = LoginSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return NextResponse.json(
      { error: "Email does not exists!" },
      { status: 400 }
    );
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return NextResponse.json(
      { success: "Confirmation email sent" },
      { status: 400 }
    );
  }

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

        // return { error: "Invalid credentials" };
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
