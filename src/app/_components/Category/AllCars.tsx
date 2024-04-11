import Router, { useRouter } from "next/navigation";
import CarCart from "../CardDetail/CarCart";
import { CarItem, CategoryItem } from "@/lib/interface";
import { useState } from "react";

const AllCars = ({ data, session, categoryName }: any) => {
  return (

    <div className="sm:gap-8 sm:w-full sm:items-center sm:flex sm:flex-col md:grid-flow-row md:gap-8 md:ml-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid-cols-3 auto-cols-max p-8 rounded-lg border">
      {data
        // .filter((item: CarItem) => item.category?.name.includes(categoryName))
        .map((car: CarItem) => {
          return <CarCart key={car.id} car={car} session={session} />;
        })}

    </div>
  );
};

export default AllCars;
