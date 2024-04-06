"use client";
import React, { useEffect, useState } from "react";
import AddCars from "./AddCars";
import CarCart from "@/app/components/CardDetail/CarCart";

function Cars({ data, q }: any) {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    setCarData(data);
  }, []);

  return (
    <div className="w-[70%] pl-6">
      <div className="flex items-center justify-between">
        {q && <AddCars data={data} setCarData={setCarData} />}

        <h1 className="text-4xl text-secondary">{data.name}</h1>
      </div>
      <div>
        {data?.cars?.map((item: any) => (
          <CarCart carData={item} />
        ))}
      </div>
    </div>
  );
}

export default Cars;
