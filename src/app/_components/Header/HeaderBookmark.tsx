"use client";
import { useGlobalContext } from "@/app/context/Context";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

function HeaderBookmark({ count }: any) {
  const session = useSession();

  const { bookmarkCount, test, setBookmarkCount } = useGlobalContext();
  useEffect(() => {
    setBookmarkCount(count);
  }, []);

  return (
    <>
      <Link href="/cars/favorite" className="relative">
        {session.status !== "unauthenticated" && bookmarkCount !== 0 && (
          <h1 className="text-[12px] z-50 absolute font-bold bg-white text-red-500 top-[-6px] right-[-8px] rounded-full w-4 h-4 flex items-center justify-center">
            {bookmarkCount}
          </h1>
        )}

        <FaRegHeart
          className="h-[24px] w-[24px] hover:animate-pulse"
          color={bookmarkCount !== 0 ? "red" : "inherit"}
        />
      </Link>
    </>
  );
}

export default HeaderBookmark;
