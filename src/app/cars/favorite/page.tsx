import CarCart from "@/app/_components/CardDetail/CarCart";
import { getAllFavoritedItem } from "@/app/fetch";
import { CarItem } from "@/lib/interface";
import React from "react";
import { auth } from "../../../../auth";
import Link from "next/link";

async function page() {
  const session = await auth();

  const data = await getAllFavoritedItem(session?.user.id);
  return (
    <div className="border-2 w-[1440px] grid-flow-row  grid grid-cols-3 p-8 overflow-y-scroll  gap-24 justify-center">
      {session ? (
        data.map((item: any) => (
          <CarCart key={item.id} car={item} session={session} />
        ))
      ) : (
        <h1 className="text-secondary self-center">
          Please
          <Link className="text-blue-400 underline" href="/auth/login">
            Sign in
          </Link>
          to show bookmarked cars
        </h1>
      )}
    </div>
  );
}

export default page;
