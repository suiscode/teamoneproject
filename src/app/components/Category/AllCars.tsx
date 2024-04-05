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
      img: "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/peugeot-308-5d-black-2021.png",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Hyundai Elantra N",
      type: "Sedan",
      img: "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/seat-arona-suv-white-2021.png",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Prius 60",
      type: "Sedan",
      img: "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/audi-a1-sportback-grau-2019.png",
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
            className="border bg-[#000] text-white rounded-xl w-80 h-96 p-4 flex flex-col justify-between bg-gradient-to-b from-gray-500"
          >
            <div>
              <p className="font-bold text-lg">{car.name}</p>
              <p className="text-white text-sm">{car.type}</p>
            </div>
            <Image src={car.img} width={400} height={200} alt="" />
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
              <button
                onClick={handlePush}
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
