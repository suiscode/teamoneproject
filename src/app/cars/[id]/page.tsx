import CardDetail from "@/app/_components/CardDetail/CardDetail";
import { getOneCar } from "@/app/fetch";
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
  const data = await getOneCar(id);
  return (
    <div className="w-full flex justify-center items-center">
      <CardDetail data={data} />
    </div>
  );
}

export default CarDetailPage;
