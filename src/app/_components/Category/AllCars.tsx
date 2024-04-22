"use client";

import CarCart from "../CardDetail/CarCart";
import { CarItem, SessionInterface } from "@/lib/interface";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const AllCars: React.FC<{ data: CarItem[]; session: Session }> = ({
  data,
  session,
}: any) => {
  const [amount, setAmount] = useState(false);

  const filteredData = amount ? data : data.slice(0, 6);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="sm:gap-8 w-full  sm:flex sm:flex-col md:grid-flow-row md:gap-8 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 xl:grid-cols-3 auto-cols-max rounded-lg ">
        {filteredData?.map((car: CarItem) => {
          return <CarCart key={car.id} car={car} session={session} />;
        })}
      </div>
      {data.length > 2 && (
        <button
          onClick={() => setAmount(!amount)}
          className="backdrop-blur-xl border hover:bg-white/20 transition-all duration-200 flex items-center gap-3 w-[150px] px-5 rounded-xl justify-center py-2 left-[22%]"
        >
          {amount ? (
            <h1 className="flex items-center justify-evenly w-full">
              See less <AiOutlineArrowUp />
            </h1>
          ) : (
            <h1 className="flex items-center justify-evenly w-full">
              See more <AiOutlineArrowDown />
            </h1>
          )}
        </button>
      )}
    </div>
  );
};

export default AllCars;
