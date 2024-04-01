import React from "react";
import AllCategory from "../components/Category/AllCategory";
import Divider from "@mui/material/Divider";
import { AllCars } from "../components/Category/AllCars";

function CarsPage() {
  return (
    <div className="w-full h-[100%] flex justify-center mt-20 ">
      <AllCategory />
      <Divider orientation={"vertical"} flexItem />
      <AllCars />
    </div>
  );
}

export default CarsPage;
