import React, { useState } from "react";
import { AllCategory } from "../_components/Category/AllCategory";
// import Divider from "@mui/material/Divider";
import AllCars from "../_components/Category/AllCars";
import { fetchCars, fetchCategory, fetchSortedCars } from "../fetch";
import { auth } from "../../../auth";

type SearchPageType = {
  searchParams: { search: string; type: string; capacity: string };
};

async function CarsPage({ searchParams }: SearchPageType) {
  const session = await auth();
  const q = searchParams?.search || "";
  const type = searchParams?.type || "";
  const capacity = searchParams?.capacity || "";
  let data;
  const category = await fetchCategory();
  console.log(category);

  if (q || !type) {
    data = await fetchCars(q);
  } else if (type || capacity) {
    data = await fetchSortedCars(type, capacity);
  }

  return (
    <div className="w-[1440px] flex justify-between text-secondary py-8 sm:max-sm:w-[390px]">
      <AllCategory category={category} />
      <AllCars data={data} session={session} />
    </div>
  );
}

export default CarsPage;
