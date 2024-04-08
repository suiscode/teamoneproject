import React from "react";
import { AllCategory } from "../components/Category/AllCategory";
// import Divider from "@mui/material/Divider";
import AllCars from "../components/Category/AllCars";
import { fetchCars } from "../fetch";

type SearchPageType = {
  searchParams: { category: string };
};

async function CarsPage({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  const data = await fetchCars();
  console.log(data);

  return (
    <div className="w-[1440px] flex justify-between text-secondary py-8">
      <AllCategory />
      <AllCars data={data} />
    </div>
  );
}

export default CarsPage;
