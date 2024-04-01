import React from "react";
import AddCars from "./AddCars";
import CarsDisplay from "./CarsDisplay";

function Cars({ res }: any) {
  return (
    <div className="w-[70%]">
      <AddCars />
      <CarsDisplay />
    </div>
  );
}

export default Cars;
