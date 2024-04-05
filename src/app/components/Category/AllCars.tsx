"use client";
import Image from "next/image";
import React from "react";
import { FaGasPump } from "react-icons/fa6";
import { TbSteeringWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";

export const AllCars = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/cartdetail");
  };

  const carData = [
    {
      name: "Toyota Camry",
      type: "Sedan",
      img: "https://media.zigcdn.com/media/model/2024/Feb/toyota-camry_600x400.jpg",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Hyundai Elantra N",
      type: "Sedan",
      img: "https://www.thedrive.com/uploads/2023/04/14/ElantraN-42-scaled.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Prius 60",
      type: "Sedan",
      img: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/11/16093041/20221116_01_03.jpg",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
  ];
  return (
    <div className="flex gap-8 flex-wrap ml-10 ">
      {carData.map((car, index) => {
        return (
          <div
            key={index}
            className="border bg-white rounded-xl w-80 h-96 p-4 flex flex-col justify-between"
          >
            <div>
              <p className="font-bold text-lg">{car.name}</p>
              <p className="text-[#595959] text-sm">{car.type}</p>
            </div>
            <Image src={car.img} width={400} height={200} alt="" />
            <div className="flex justify-between gap-4 text-[#595959]">
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
              <button
                onClick={() => handlePush()}
                className="w-24 h-10 bg-black text-white "
              >
                Rent now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
