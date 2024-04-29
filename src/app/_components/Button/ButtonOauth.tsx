import { Button } from "@/components/ui/button";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

function ButtonAuth() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="gap-4 mt-[-10px] flex items-center flex-col w-full px-8">
      <h1 className="text-xl">or</h1>
      <div className="flex justify-between w-full">
        <Button
          className="w-full flex gap-2"
          onClick={() => onClick("google")}
        >
          <FaGoogle />
          Google
        </Button>

      </div>
    </div>
  );
}

export default ButtonAuth;
