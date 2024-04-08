"use client";
import React, { useEffect, useState } from "react";
import AddCars from "./AddCars";
import { CategoryItem } from "@/lib/interface";
import CarCardAdmin from "./CarCardAdmin";

function Cars({ data, q }: any) {
  const [carData, setCarData] = useState<CategoryItem | null>(null);
  useEffect(() => {
    setCarData(data);
  }, [q]);

  return (
    <div className="w-[70%] pl-6">
      <div className="flex items-center justify-between">
        {q && <AddCars data={data} setCarData={setCarData} />}

        <h1 className="text-4xl text-secondary">{data.name}</h1>
      </div>
      <ul className="flex w-full flex-wrap gap-12 py-4">
        {carData?.cars?.map((item: any, index: number) => (
          <CarCardAdmin key={index} car={item} setCarData={setCarData} />
        ))}
      </ul>
    </div>
  );
}

export default Cars;
