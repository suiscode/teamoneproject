import React from "react";
import { AllCategory } from "../components/Category/AllCategory";
// import Divider from "@mui/material/Divider";
import { AllCars } from "../components/Category/AllCars";

function CarsPage() {
  return (
    <div className="w-[1440px] flex justify-between bg-black text-secondary py-8">
      <AllCategory />
      {/* <Divider orientation={"vertical"} flexItem /> */}
      <AllCars />
    </div>
  );
}

export default CarsPage;
