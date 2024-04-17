"use client";
import Image from "next/image";
import React from "react";
import { FaGasPump } from "react-icons/fa6";
import { TbSteeringWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { CategoryItem } from "@/lib/interface";

function CarCardAdmin({ car, index, setCarData }: any) {
  const handleDelete = async (id: string) => {
    setCarData((prev: any) => ({
      ...prev,
      cars: prev?.cars.filter((carItem: any) => carItem.id !== id),
    }));
    const res = await axios.patch("/api/car/", { id });
    console.log(res);
  };
  return (
    <li
      key={index}
      className="border-0 bg-[#000] text-white rounded-xl w-80 h-96 p-4 flex flex-col justify-between bg-gradient-to-b from-white/10"
    >
      <div>
        <p className="font-bold text-lg">{car.name}</p>
        <p className="text-white text-sm">{car.type}</p>
      </div>
      <Link href={`cars/${car._id}`}>
        {/* <Image
          src={car.img}
          width={400}
          height={200}
          alt=""
          className="cursor-pointer"
        /> */}
      </Link>
      <div className="flex justify-between gap-4 text-white">
        <div className="flex items-center gap-2 ">
          <FaGasPump />
          <p>{car.gasoline}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <TbSteeringWheel />
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
        <div className="space-x-4">
          <Button className="w-24 h-10 border border-white text-white ">
            Edit item
          </Button>
          <Button
            onClick={() => handleDelete(car.id)}
            className="w-24 h-10 border border-white text-white "
          >
            Delete item
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CarCardAdmin;
