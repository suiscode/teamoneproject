import React, { useState } from "react";
import { AllCategory } from "../_components/Category/AllCategory";
// import Divider from "@mui/material/Divider";
import AllCars from "../_components/Category/AllCars";
import { fetchCars } from "../fetch";
import { auth } from "../../../auth";

type SearchPageType = {
  searchParams: { search: string };
};

async function CarsPage({ searchParams }: SearchPageType) {
  // const [categoryName, setCategoryName] = useState("");
  const session = await auth();
  const q = searchParams?.search || "";
  const data = await fetchCars(q);

  return (
    <div className="w-[1440px] flex justify-between text-secondary py-8 sm:max-sm:w-[390px]">
      <AllCategory />
      <AllCars data={data} session={session} />
    </div>
  );
}

export default CarsPage;
