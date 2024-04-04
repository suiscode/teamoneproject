import { Button } from "@/components/ui/button";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
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
          className="w-[47%] flex gap-2"
          onClick={() => onClick("google")}
        >
          <GoogleIcon />
          Google
        </Button>
        <Button
          className="w-[47%] flex gap-2"
          onClick={() => onClick("github")}
        >
          <GitHubIcon />
          GitHub
        </Button>
      </div>
    </div>
  );
}

export default ButtonAuth;
