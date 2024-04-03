import Link from "next/link";
import React from "react";

function ErrorCard() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>something went wrong</h1>
      <Link href="/auth/login">Back to login</Link>
    </div>
  );
}

export default ErrorCard;
