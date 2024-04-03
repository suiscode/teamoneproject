"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

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
    </div>
  );
}

export default page;
