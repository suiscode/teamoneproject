import Link from "next/link";
import * as React from "react";
import { auth } from "../../../../auth";
import UserButton from "../Button/UserButton";
import HeaderBookmark from "./HeaderBookmark";
import { getBookmarkCount } from "@/app/fetch";

const HeaderRight = async () => {
  const session = await auth();
  const count = await getBookmarkCount(session?.user.id);
  console.log(session);

  return (
    <div className="flex gap-4 items-center">
      <HeaderBookmark count={count} />
      {session ? <UserButton /> : <Link href="/auth/login">Log in</Link>}
    </div>
  );
};
export default HeaderRight;
