import Image from "next/image";
import React from "react";
import { PiGasCanFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

function CarCart({ car, index, session }: any) {
  return (
    <li
      key={index}
      className=" bg-[#000] text-white sm:w-full rounded-xl w-80 p-4 flex flex-col gap-4 bg-gradient-to-b from-white/20"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">{car.name}</p>
          <p className="text-white text-sm">{car.type}</p>
        </div>
        <HeartFavorite id={car.id} session={session} />
      </div>
      <Link href={`cars/${car.id}`}>
        <div className="w-full relative h-[160px]">
          <Image
            src={car.img?.[0]}
            fill
            alt="hehe"
            className="cursor-pointer absolute object-cover object-start"
          />
        </div>
      </Link>
      <div className="flex justify-between gap-4 text-white">
        <div className="flex items-center gap-2 ">
          <PiGasCanFill />
          <p>{car.gasoline}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <PiSteeringWheelFill />
          <p>{car.steering}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <MdPeopleAlt />
          <p>{car.capacity}</p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="text-sm text-gray-400">
          <p>
            <span className="text-xl text-white">
              ${car.salePrice ? car.salePrice : car.price}/
            </span>
            days
          </p>
          <p className="line-through">{car.salePrice && car.price}</p>
        </div>
        <Link
          href={`/cars/${car.id}`}
          className="w-24 h-10 border-2 hover:bg-white/10 transition-all rounded-md flex items-center justify-center text-white "
        >
          Rent now
        </Link>
      </div>
    </li>
  );
}

export default CarCart;
