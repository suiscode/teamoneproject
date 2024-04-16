"use client";

import CarCart from "../CardDetail/CarCart";
import { CarItem } from "@/lib/interface";

const AllCars = ({ data, session, categoryName }: any) => {
  return (
    <div className="sm:gap-8 sm:w-full items-center sm:flex sm:flex-col md:grid-flow-row md:gap-8 md:ml-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid-cols-3 auto-cols-max p-8 rounded-lg ">
      {data?.map((car: CarItem) => {
        return <CarCart key={car.id} car={car} session={session} />;
      })}
    </div>
  );
};

export default AllCars;
