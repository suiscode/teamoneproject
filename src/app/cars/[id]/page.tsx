import CardDetail from "@/app/components/CardDetail/CardDetail";
import { getOneCar } from "@/app/fetch";
import React from "react";

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
