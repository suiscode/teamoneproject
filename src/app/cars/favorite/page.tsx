import CarCart from "@/app/_components/CardDetail/CarCart";
import { getAllFavoritedItem } from "@/app/fetch";
import { CarItem } from "@/lib/interface";
import React from "react";
import { auth } from "../../../../auth";

async function page() {
  const session = await auth();

  const data = await getAllFavoritedItem(session?.user.id);
  console.log(data);

  return (
    <div className="border-2 w-[1440px] p-8 overflow-y-scroll flex gap-24 justify-center">
      {data.map((item: any) => (
        <CarCart key={item.id} car={item} session={session} />
      ))}
    </div>
  );
}

export default page;
