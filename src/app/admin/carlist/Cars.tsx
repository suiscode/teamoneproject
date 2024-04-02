import React from "react";
import AddCars from "./AddCars";

function Cars({ data, q }: any) {

  return (
    <div className="w-[70%]">
      <div className="flex items-center justify-between">
        {q && <AddCars data={data} />}

        <h1 className="text-4xl">{data.name}</h1>
      </div>
      <div>
        {data?.cars?.map((item: any) => (
          <div key={item._id}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
