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
        {q && <AddCars carData={carData} data={data} setCarData={setCarData} />}

        <h1 className="text-4xl text-secondary">{data.name}</h1>
      </div>
    </div>
  );
}

export default Cars;
