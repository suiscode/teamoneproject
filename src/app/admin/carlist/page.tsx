import React from "react";
import { fetchCategory, getCategory } from "@/app/fetch";
import Category from "./Category";
import Cars from "./Cars";

type SearchPageType = {
  searchParams: { category: string };
};

async function page({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const data = await getCategory(q);

  return (
    <div className="flex gap-4 p-8 w-full">
      <Cars data={JSON.parse(JSON.stringify(data))} q={q} />
      <Category />
    </div>
  );
}

export default page;
