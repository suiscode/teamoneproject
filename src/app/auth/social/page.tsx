"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="space-x-4">
      <button onClick={() => onClick("google")}>google</button>
      <button onClick={() => onClick("github")}>github</button>
      <Button size="sm" variant="link" className="px-0">
        <Link href="/auth/reset">Forgot password?</Link>
      </Button>
    </div>
  );
}

export default page;
