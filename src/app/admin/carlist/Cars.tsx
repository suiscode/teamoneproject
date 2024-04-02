import React from "react";
import AddCars from "./AddCars";

function Cars({ data }: any) {
  console.log(data);

  return (
    <div className="w-[70%]">
      <div className="flex items-center justify-between">
        <AddCars data={data} />

        {/* <h1 className="text-4xl">{data.name}</h1> */}
      </div>
    </div>
  );
}

export default Cars;
