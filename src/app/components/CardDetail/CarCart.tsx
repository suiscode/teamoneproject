import Image from "next/image";
import React from "react";
import { PiGasCanFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

function CarCart({ car, index, session }: any) {
  console.log(car.img, "form here hahahah");

  return (
    <li
      key={index}
      className="border-0 bg-[#000] text-white rounded-xl w-80 h-96 p-4 flex flex-col justify-between bg-gradient-to-b from-white/10"
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
            src={car.img[0]}
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
      <div className="flex justify-between ">
        <div className="text-sm">
          <p>{car.price}</p>
          <p>{car.salePrice}</p>
        </div>
        <Link href={`/cars/${car.id}`} className="w-24 h-10  text-white ">
          Rent now
        </Link>
      </div>
    </li>
  );
}

export default CarCart;
