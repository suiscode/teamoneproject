import Link from "next/link";
import * as React from "react";
import { FaRegHeart } from "react-icons/fa";
import { auth } from "../../../../auth";

const HeaderRight = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex gap-4 items-center">
      <Link href="/cars/favorite">
        <FaRegHeart className="h-[18px] w-[18px] hover:animate-pulse" />
      </Link>
      {session ? (
        <div className="rounded-full h-[38px] w-[38px] bg-white"></div>
      ) : (
        <Link href="/auth/login">Log in</Link>
      )}
    </div>
  );
};
export default HeaderRight;
