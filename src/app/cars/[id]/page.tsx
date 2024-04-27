import AddReview from "@/app/_components/CardDetail/AddReview";
import CardDetail from "@/app/_components/CardDetail/CardDetail";
import CardInfo from "@/app/_components/CardDetail/CardInfo";
import Reviews from "@/app/_components/CardDetail/Reviews";
import { getOneCar } from "@/app/fetch";
import { CarItem } from "@/lib/interface";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Your dream car is right here",
  description: "Your dream car is right here",
};

type SearchPageType = {
  searchParams: { category: string };
};

async function CarDetailPage({ params }: { params: { id: string } }) {
  const { id } = params || "";
  let data = await getOneCar(id);
  return (
    <div className="w-[1440px] relative flex justify-between items-center">
      <CardDetail data={data as CarItem} />
      <div className="flex flex-col fixed w-[34%] top-[100px] right-[240px] h-[620px] justify-between">
        <CardInfo data={data as CarItem} />
        <AddReview />
      </div>
    </div>
  );
}

export default CarDetailPage;
