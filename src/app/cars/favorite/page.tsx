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
    <div className="xl:w-[1440px] lg:w-[1024px] flex md:w-[640px] text-secondary py-8 sm:max-sm:w-[390px]">
      <div className="sm:gap-8 p-8 w-full sm:flex sm:flex-col md:grid-flow-row md:gap-8 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 xl:grid-cols-3 auto-cols-max rounded-lg ">
        {session ? (
          data.map((item: any) => (
            <CarCart key={item.id} car={item} session={session} />
          ))
        ) : (
          <h1 className="text-secondary">
            Please
            <Link className="text-blue-400 underline" href="/auth/login">
             <span> Sign in </span>
            </Link>
            to show bookmarked cars
          </h1>
        )}
      </div>
    </div>
  );
}

export default page;
