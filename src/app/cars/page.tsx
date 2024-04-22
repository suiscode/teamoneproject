import React from "react";
import { AllCategory } from "../_components/Category/AllCategory";
import AllCars from "../_components/Category/AllCars";
import { fetchCars, fetchCategory, fetchSortedCars } from "../fetch";
import { auth } from "../../../auth";
import type { Metadata } from "next";
import { CarItem } from "@/lib/interface";
import { Session } from "next-auth";

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
    <div className="xl:w-[1440px] lg:w-[1024px] flex md:w-[640px] text-secondary py-8 sm:max-sm:w-[390px]">
      <AllCategory data={data} category={category} />
      <AllCars data={data as CarItem[]} session={session as Session} />
    </div>
  );
}

export default CarsPage;
