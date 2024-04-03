import * as z from "zod";

// import { loginSchema } from "../../../../lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "../../../../../auth";
import { LoginSchema } from "@/lib/schema";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";
import { error } from "console";
import { AuthError } from "next-auth";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedFields = LoginSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const { email, password } = validatedFields.data;
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
