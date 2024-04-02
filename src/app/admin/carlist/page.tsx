import React from "react";
import { fetchCategory, getCategory } from "@/app/fetch";
import Category from "./Category";
import Cars from "./Cars";

type SearchPageType = {
  searchParams: { category: string };
};

async function page({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const res = await getCategory(q);


  return (
    <div className="flex gap-4 p-8 border-2 w-full">
      <Cars data={JSON.parse(JSON.stringify(res?.[0]))} />
      <Category />
    </div>
  );
}

export default page;
