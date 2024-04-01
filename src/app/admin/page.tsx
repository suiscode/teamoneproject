import React from "react";
import { fetchCategory, getCategory } from "@/app/fetch";
import AddCars from "./AddCars";
import Category from "./Category";
import Cars from "./Cars";

type SearchPageType = {
  searchParams: { category: string };
};

async function page({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const res = await getCategory(q);
  console.log(res);

  return (
    <div className="flex gap-4 p-8">
      <Cars res={res} />
      <Category />
    </div>
  );
}

export default page;
