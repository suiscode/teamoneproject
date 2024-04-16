import React from "react";
import { AllCategory } from "../_components/Category/AllCategory";
import AllCars from "../_components/Category/AllCars";
import { fetchCars, fetchCategory, fetchSortedCars } from "../fetch";
import { auth } from "../../../auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Cars Rental",
  description: "You find your dream car from here",
};

type SearchPageType = {
  searchParams: { search: string; typeItems: string };
};

async function CarsPage({ searchParams }: SearchPageType) {
  const session = await auth();
  const q = searchParams?.search || "";
  const type = searchParams?.typeItems || "";
  let data;
  const category = await fetchCategory();

  if (q || !type) {
    data = await fetchCars(q);
  } else if (type) {
    data = await fetchSortedCars(type);
  }

  return (
    <div className="w-[1440px] flex text-secondary py-8 sm:max-sm:w-[390px] border-2">
      <AllCategory data={data} category={category} />
      <AllCars data={data} session={session} />
      <div className="bg-red-500 w-full"></div>
    </div>
  );
}

export default CarsPage;
