import React from "react";
import { AllCategory } from "../components/Category/AllCategory";
// import Divider from "@mui/material/Divider";
import AllCars from "../components/Category/AllCars";
import { fetchCars } from "../fetch";
import { CarItem } from "@/lib/interface";

type SearchPageType = {
  searchParams: { category: string };
};

async function CarsPage({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const data = await fetchCars();

  return (
    <div className="w-[1440px] flex justify-between text-secondary py-8">
      <AllCategory />
      <AllCars data={data} />
    </div>
  );
}

export default CarsPage;
