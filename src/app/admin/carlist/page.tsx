import React from "react";
import { fetchCategory, getCategory } from "@/app/fetch";
import Category from "./Category";
import Cars from "./Cars";
import ImageTest from "./Testdemo";

type SearchPageType = {
  searchParams: { category: string };
};

async function page({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const data = await getCategory(q);
  console.log(data);

  return (
    <div className="flex justify-between p-8 w-full flex-row-reverse">
      <Category />
      <Cars data={JSON.parse(JSON.stringify(data))} q={q} />
      {/* <ImageTest /> */}
    </div>
  );
}

export default page;
